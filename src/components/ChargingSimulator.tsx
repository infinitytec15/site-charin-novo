import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProgressBadge } from "@/components/ui/progress-badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import {
  BatteryMedium,
  Clock,
  DollarSign,
  Save,
  RotateCcw,
  Car,
  Zap,
} from "lucide-react";
import {
  carBrands,
  carModels,
  getModelsByBrand,
  getCarById,
  CarModel,
} from "@/data/carModels";

interface ChargingSimulatorProps {
  onSaveSimulation?: (data: SimulationResult) => void;
}

interface SimulationResult {
  vehicleModel: string;
  currentBattery: number;
  targetBattery: number;
  estimatedTime: number;
  estimatedCost: number;
  chargerType?: string;
  chargerPower?: number;
}

// Definição dos tipos de carregadores disponíveis
interface ChargerType {
  id: string;
  name: string;
  power: number; // kW
  type: "AC" | "DC";
  description: string;
}

const chargerTypes: ChargerType[] = [
  {
    id: "slow-ac",
    name: "Carregador Lento (AC)",
    power: 7.4,
    type: "AC",
    description: "Carregador residencial ou público de baixa potência",
  },
  {
    id: "medium-ac",
    name: "Carregador Médio (AC)",
    power: 22,
    type: "AC",
    description: "Carregador público de média potência",
  },
  {
    id: "fast-dc",
    name: "Carregador Rápido (DC)",
    power: 50,
    type: "DC",
    description: "Carregador rápido de corrente contínua",
  },
  {
    id: "ultrafast-dc",
    name: "Carregador Ultrarrápido (DC)",
    power: 150,
    type: "DC",
    description: "Carregador ultrarrápido de alta potência",
  },
  {
    id: "superfast-dc",
    name: "Carregador Superrápido (DC)",
    power: 250,
    type: "DC",
    description: "Carregador superrápido para veículos compatíveis",
  },
];

const ChargingSimulator: React.FC<ChargingSimulatorProps> = ({
  onSaveSimulation = () => {},
}) => {
  const { toast } = useToast();
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModelId, setSelectedModelId] = useState<string>("");
  const [availableModels, setAvailableModels] = useState<CarModel[]>([]);
  const [currentBattery, setCurrentBattery] = useState<number>(20);
  const [targetBattery, setTargetBattery] = useState<number>(80);
  const [selectedChargerType, setSelectedChargerType] =
    useState<string>("fast-dc");
  const [simulationResult, setSimulationResult] =
    useState<SimulationResult | null>(null);
  const [selectedCar, setSelectedCar] = useState<CarModel | null>(null);

  // Initialize with GWM as default brand
  useEffect(() => {
    if (carBrands.length > 0) {
      setSelectedBrand("GWM");
    }
  }, []);

  // Update available models when brand changes
  useEffect(() => {
    if (selectedBrand) {
      const models = getModelsByBrand(selectedBrand);
      setAvailableModels(models);

      // Reset selected model if current selection is not in the new brand
      if (models.length > 0) {
        setSelectedModelId(models[0].id);
      } else {
        setSelectedModelId("");
        setSelectedCar(null);
        toast({
          title: "Nenhum modelo disponível",
          description: `Não encontramos modelos para a marca ${selectedBrand}`,
          variant: "destructive",
        });
      }
    } else {
      setAvailableModels([]);
      setSelectedModelId("");
      setSelectedCar(null);
    }
  }, [selectedBrand, toast]);

  // Update selected car when model changes
  useEffect(() => {
    if (selectedModelId) {
      const car = getCarById(selectedModelId);
      if (car) {
        setSelectedCar(car);
        toast({
          title: "Modelo selecionado",
          description: `${car.brand} ${car.model} selecionado com sucesso`,
          variant: "default",
        });
      }
    } else {
      setSelectedCar(null);
    }
  }, [selectedModelId, toast]);

  const calculateSimulation = () => {
    if (!selectedCar) {
      toast({
        title: "Erro na simulação",
        description: "Selecione um veículo para calcular a recarga",
        variant: "destructive",
      });
      return;
    }

    if (currentBattery >= targetBattery) {
      toast({
        title: "Erro na simulação",
        description:
          "O nível desejado deve ser maior que o nível atual da bateria",
        variant: "destructive",
      });
      return;
    }

    // Encontrar o carregador selecionado
    const selectedCharger = chargerTypes.find(
      (charger) => charger.id === selectedChargerType,
    );
    if (!selectedCharger) {
      toast({
        title: "Erro na simulação",
        description: "Tipo de carregador não encontrado",
        variant: "destructive",
      });
      return;
    }

    const batteryDifference = targetBattery - currentBattery;
    const kWhToCharge = (batteryDifference / 100) * selectedCar.batteryCapacity;

    // Determinar a taxa de carregamento efetiva
    // Usamos o menor valor entre a capacidade do carregador e a capacidade máxima do veículo
    const effectiveChargingRate = Math.min(
      selectedCharger.power,
      selectedCar.chargingSpeed,
    );

    // Ajuste para carregadores DC vs AC
    // DC tende a ser mais rápido no início e desacelera no final
    // AC tende a ser mais constante
    let timeInHours;

    if (selectedCharger.type === "DC") {
      // Para DC, a velocidade diminui após 80% da carga
      if (targetBattery <= 80) {
        // Carregamento rápido até 80%
        timeInHours = kWhToCharge / effectiveChargingRate;
      } else {
        // Cálculo para carregamento até 80%
        const kWhTo80Percent =
          ((80 - currentBattery) / 100) * selectedCar.batteryCapacity;
        const timeTo80Percent = kWhTo80Percent / effectiveChargingRate;

        // Cálculo para carregamento de 80% até o alvo (mais lento)
        const kWhFrom80ToTarget =
          ((targetBattery - 80) / 100) * selectedCar.batteryCapacity;
        const timeFrom80ToTarget =
          kWhFrom80ToTarget / (effectiveChargingRate * 0.5); // 50% mais lento após 80%

        timeInHours = timeTo80Percent + timeFrom80ToTarget;
      }
    } else {
      // Para AC, a velocidade é mais constante
      timeInHours = kWhToCharge / effectiveChargingRate;
    }

    const timeInMinutes = timeInHours * 60;

    // Custo baseado no tipo de carregador
    // Carregadores mais rápidos tendem a ser mais caros
    let costPerKwh = 1.2; // Valor base

    if (selectedCharger.type === "DC") {
      if (selectedCharger.power >= 150) {
        costPerKwh = 1.8; // Ultrarrápido
      } else if (selectedCharger.power >= 50) {
        costPerKwh = 1.5; // Rápido
      }
    }

    const estimatedCost = kWhToCharge * costPerKwh;

    const result: SimulationResult = {
      vehicleModel: `${selectedCar.brand} ${selectedCar.model}`,
      currentBattery,
      targetBattery,
      estimatedTime: timeInMinutes,
      estimatedCost,
      chargerType: selectedCharger.name,
      chargerPower: selectedCharger.power,
    };

    setSimulationResult(result);

    toast({
      title: "Simulação concluída",
      description: `Tempo estimado: ${Math.floor(timeInMinutes / 60)}h ${Math.round(timeInMinutes % 60)}min | Custo: R$ ${estimatedCost.toFixed(2)}`,
      variant: "default",
    });
  };

  const resetSimulation = () => {
    setCurrentBattery(20);
    setTargetBattery(80);
    setSimulationResult(null);

    toast({
      title: "Simulação reiniciada",
      description: "Os valores foram redefinidos para uma nova simulação",
      variant: "default",
    });
  };

  const handleSaveSimulation = () => {
    if (simulationResult) {
      onSaveSimulation(simulationResult);

      toast({
        title: "Simulação salva",
        description: "Os resultados da simulação foram salvos com sucesso",
        variant: "success",
      });
    } else {
      toast({
        title: "Erro ao salvar",
        description:
          "Não há resultados para salvar. Faça uma simulação primeiro.",
        variant: "destructive",
      });
    }
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return `${hours}h ${mins}min`;
  };

  const getVehicleTypeIcon = (type: "electric" | "hybrid") => {
    return type === "electric" ? (
      <Zap className="h-4 w-4 text-[#00A651]" />
    ) : (
      <Car className="h-4 w-4 text-blue-400" />
    );
  };

  const getVehicleTypeLabel = (type: "electric" | "hybrid") => {
    return type === "electric" ? "100% Elétrico" : "Híbrido";
  };

  return (
    <Card
      className="w-full max-w-2xl mx-auto bg-white shadow-lg z-10"
      style={{ opacity: 1, visibility: "visible" }}
    >
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
          <label className="text-sm font-medium">Marca do Veículo</label>
          <Select value={selectedBrand} onValueChange={setSelectedBrand}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione a marca" />
            </SelectTrigger>
            <SelectContent>
              {carBrands.map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedBrand && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Modelo do Veículo</label>
            <Select
              value={selectedModelId}
              onValueChange={setSelectedModelId}
              disabled={availableModels.length === 0}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o modelo" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Elétricos</SelectLabel>
                  {availableModels
                    .filter((model) => model.type === "electric")
                    .map((model) => (
                      <SelectItem key={model.id} value={model.id}>
                        <div className="flex items-center gap-2">
                          {getVehicleTypeIcon("electric")}
                          <span>{model.model}</span>
                        </div>
                      </SelectItem>
                    ))}
                </SelectGroup>

                {availableModels.some((model) => model.type === "hybrid") && (
                  <SelectGroup>
                    <SelectLabel>Híbridos</SelectLabel>
                    {availableModels
                      .filter((model) => model.type === "hybrid")
                      .map((model) => (
                        <SelectItem key={model.id} value={model.id}>
                          <div className="flex items-center gap-2">
                            {getVehicleTypeIcon("hybrid")}
                            <span>{model.model}</span>
                          </div>
                        </SelectItem>
                      ))}
                  </SelectGroup>
                )}
              </SelectContent>
            </Select>
          </div>
        )}

        {selectedCar && (
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium">
                  {selectedCar.brand} {selectedCar.model}
                </span>
              </div>
              <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-full text-xs">
                {getVehicleTypeIcon(selectedCar.type)}
                <span>{getVehicleTypeLabel(selectedCar.type)}</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3 text-sm">
              <div>
                <span className="text-gray-500 block">Bateria</span>
                <span className="font-medium">
                  {selectedCar.batteryCapacity} kWh
                </span>
              </div>
              <div>
                <span className="text-gray-500 block">Autonomia</span>
                <span className="font-medium">{selectedCar.range} km</span>
              </div>
              <div>
                <span className="text-gray-500 block">Potência</span>
                <span className="font-medium">
                  {selectedCar.chargingSpeed} kW
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-2">
          <label className="text-sm font-medium">Tipo de Carregador</label>
          <Select
            value={selectedChargerType}
            onValueChange={setSelectedChargerType}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione o tipo de carregador" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Carregadores AC</SelectLabel>
                {chargerTypes
                  .filter((charger) => charger.type === "AC")
                  .map((charger) => (
                    <SelectItem key={charger.id} value={charger.id}>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-blue-500" />
                        <span>
                          {charger.name} ({charger.power} kW)
                        </span>
                      </div>
                    </SelectItem>
                  ))}
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Carregadores DC</SelectLabel>
                {chargerTypes
                  .filter((charger) => charger.type === "DC")
                  .map((charger) => (
                    <SelectItem key={charger.id} value={charger.id}>
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-[#00A651]" />
                        <span>
                          {charger.name} ({charger.power} kW)
                        </span>
                      </div>
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="text-xs text-gray-500 mt-1">
            {chargerTypes.find((c) => c.id === selectedChargerType)
              ?.description || "Selecione um tipo de carregador"}
          </p>
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
            className="w-full bg-[#00A651] hover:bg-[#00A651]/80 text-white font-bold"
            disabled={!selectedCar}
          >
            <BatteryMedium className="mr-2 h-4 w-4" />
            Calcular Recarga
          </Button>
        </div>

        {simulationResult && (
          <div className="mt-6 space-y-4 p-4 bg-gray-50 rounded-lg relative">
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

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-[#0C1F38] mr-2" />
                  <span className="text-sm">Carregador:</span>
                </div>
                <span className="font-bold">
                  {simulationResult.chargerType} (
                  {simulationResult.chargerPower} kW)
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
          <Button
            onClick={handleSaveSimulation}
            variant="secondary"
            className="bg-[#00A651]/10 hover:bg-[#00A651]/20 text-[#0C1F38]"
          >
            <Save className="mr-2 h-4 w-4" />
            Salvar Simulação
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ChargingSimulator;
