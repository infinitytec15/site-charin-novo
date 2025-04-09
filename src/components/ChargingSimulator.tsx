import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  BatteryMedium,
  Clock,
  DollarSign,
  Save,
  RotateCcw,
} from "lucide-react";

interface ChargingSimulatorProps {
  onSaveSimulation?: (data: SimulationResult) => void;
}

interface SimulationResult {
  vehicleModel: string;
  currentBattery: number;
  targetBattery: number;
  estimatedTime: number;
  estimatedCost: number;
}

const ChargingSimulator: React.FC<ChargingSimulatorProps> = ({
  onSaveSimulation = () => {},
}) => {
  const [vehicleModel, setVehicleModel] = useState<string>("Tesla Model 3");
  const [currentBattery, setCurrentBattery] = useState<number>(20);
  const [targetBattery, setTargetBattery] = useState<number>(80);
  const [simulationResult, setSimulationResult] =
    useState<SimulationResult | null>(null);

  const vehicleModels = [
    { name: "Tesla Model 3", capacity: 75, chargingRate: 250 },
    { name: "Nissan Leaf", capacity: 62, chargingRate: 100 },
    { name: "Volkswagen ID.4", capacity: 82, chargingRate: 135 },
    { name: "Hyundai Ioniq 5", capacity: 72.6, chargingRate: 220 },
    { name: "BMW i4", capacity: 83.9, chargingRate: 200 },
  ];

  const calculateSimulation = () => {
    const selectedVehicle = vehicleModels.find((v) => v.name === vehicleModel);

    if (!selectedVehicle) return;

    const batteryDifference = targetBattery - currentBattery;
    const kWhToCharge = (batteryDifference / 100) * selectedVehicle.capacity;

    // Time in hours = kWh to charge / charging rate in kW
    const timeInHours = kWhToCharge / selectedVehicle.chargingRate;
    const timeInMinutes = timeInHours * 60;

    // Assuming average cost of R$1.20 per kWh
    const costPerKwh = 1.2;
    const estimatedCost = kWhToCharge * costPerKwh;

    const result: SimulationResult = {
      vehicleModel,
      currentBattery,
      targetBattery,
      estimatedTime: timeInMinutes,
      estimatedCost,
    };

    setSimulationResult(result);
  };

  const resetSimulation = () => {
    setVehicleModel("Tesla Model 3");
    setCurrentBattery(20);
    setTargetBattery(80);
    setSimulationResult(null);
  };

  const handleSaveSimulation = () => {
    if (simulationResult) {
      onSaveSimulation(simulationResult);
    }
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return `${hours}h ${mins}min`;
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-lg">
      <CardHeader className="bg-[#0C1F38] text-white">
        <CardTitle className="text-2xl font-bold">
          Simulador de Recarga
        </CardTitle>
        <CardDescription className="text-gray-200">
          Calcule o tempo e custo estimado para recarregar seu veículo elétrico
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-6 space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Modelo do Veículo</label>
          <Select value={vehicleModel} onValueChange={setVehicleModel}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o modelo" />
            </SelectTrigger>
            <SelectContent>
              {vehicleModels.map((vehicle) => (
                <SelectItem key={vehicle.name} value={vehicle.name}>
                  {vehicle.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">
                Nível Atual da Bateria
              </label>
              <span className="text-sm font-bold">{currentBattery}%</span>
            </div>
            <Slider
              value={[currentBattery]}
              min={0}
              max={100}
              step={1}
              onValueChange={(value) => setCurrentBattery(value[0])}
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">
                Nível Desejado da Bateria
              </label>
              <span className="text-sm font-bold">{targetBattery}%</span>
            </div>
            <Slider
              value={[targetBattery]}
              min={0}
              max={100}
              step={1}
              onValueChange={(value) => setTargetBattery(value[0])}
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <Button
            onClick={calculateSimulation}
            className="w-full bg-[#00FF99] hover:bg-[#00CC77] text-[#0C1F38] font-bold"
          >
            <BatteryMedium className="mr-2 h-4 w-4" />
            Calcular Recarga
          </Button>
        </div>

        {simulationResult && (
          <div className="mt-6 space-y-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold text-[#0C1F38]">
              Resultado da Simulação
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-[#0C1F38] mr-2" />
                  <span className="text-sm">Tempo Estimado:</span>
                </div>
                <span className="font-bold">
                  {formatTime(simulationResult.estimatedTime)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-[#0C1F38] mr-2" />
                  <span className="text-sm">Custo Estimado:</span>
                </div>
                <span className="font-bold">
                  R$ {simulationResult.estimatedCost.toFixed(2)}
                </span>
              </div>

              <div className="pt-2">
                <Progress
                  value={targetBattery - currentBattery}
                  className="h-2"
                />
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>{currentBattery}%</span>
                  <span>{targetBattery}%</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between border-t p-4">
        <Button variant="outline" onClick={resetSimulation}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Nova Simulação
        </Button>

        {simulationResult && (
          <Button onClick={handleSaveSimulation} variant="secondary">
            <Save className="mr-2 h-4 w-4" />
            Salvar Simulação
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ChargingSimulator;
