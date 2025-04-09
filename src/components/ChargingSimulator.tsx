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
  Trophy,
  Star,
  Award,
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
  showGameElements?: boolean;
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
  showGameElements = true,
}) => {
  const { toast } = useToast();
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModelId, setSelectedModelId] = useState<string>("");
  const [availableModels, setAvailableModels] = useState<CarModel[]>([]);
  const [currentBattery, setCurrentBattery] = useState<number>(20);
  const [targetBattery, setTargetBattery] = useState<number>(80);
  const [simulationResult, setSimulationResult] =
    useState<SimulationResult | null>(null);
  const [selectedCar, setSelectedCar] = useState<CarModel | null>(null);
  const [simulationCount, setSimulationCount] = useState<number>(0);
  const [pointsEarned, setPointsEarned] = useState<number>(0);
  const [showReward, setShowReward] = useState<boolean>(false);

  // Initialize with Tesla as default brand
  useEffect(() => {
    if (carBrands.length > 0) {
      setSelectedBrand("Tesla");
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

    const batteryDifference = targetBattery - currentBattery;
    const kWhToCharge = (batteryDifference / 100) * selectedCar.batteryCapacity;

    // Time in hours = kWh to charge / charging rate in kW
    const timeInHours = kWhToCharge / selectedCar.chargingSpeed;
    const timeInMinutes = timeInHours * 60;

    // Assuming average cost of R$1.20 per kWh
    const costPerKwh = 1.2;
    const estimatedCost = kWhToCharge * costPerKwh;

    const result: SimulationResult = {
      vehicleModel: `${selectedCar.brand} ${selectedCar.model}`,
      currentBattery,
      targetBattery,
      estimatedTime: timeInMinutes,
      estimatedCost,
    };

    setSimulationResult(result);

    // Increment simulation count and add points for gamification
    if (showGameElements) {
      setSimulationCount((prev) => prev + 1);

      // Calculate points based on battery difference and car type
      const basePoints = Math.round(batteryDifference / 2);
      const carTypeBonus = selectedCar.type === "electric" ? 10 : 5;
      const newPoints = basePoints + carTypeBonus;

      setPointsEarned(newPoints);
      setShowReward(true);

      // Hide reward after 5 seconds
      setTimeout(() => {
        setShowReward(false);
      }, 5000);
    }

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
      <Zap className="h-4 w-4 text-[#00FF99]" />
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
        {showGameElements && (
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-[#00A651]" />
              <span className="text-sm font-medium">
                Simulações: {simulationCount}
              </span>
            </div>
            <Badge variant="outline" className="bg-[#00A651]/10 text-[#00A651]">
              <Star className="h-3 w-3 mr-1" /> Nível Explorador
            </Badge>
          </div>
        )}
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

              {showGameElements && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Trophy className="h-5 w-5 text-[#00A651] mr-2" />
                      <span className="text-sm">Pontos ganhos:</span>
                    </div>
                    <span className="font-bold text-[#00A651]">
                      +{pointsEarned} pts
                    </span>
                  </div>

                  <ProgressBadge
                    label="Próxima conquista"
                    value={simulationCount}
                    max={10}
                    variant="success"
                    className="w-full mt-3"
                  />
                </div>
              )}
            </div>

            {showGameElements && showReward && (
              <div className="absolute -top-4 -right-4 bg-[#00A651] text-white px-3 py-2 rounded-lg shadow-lg animate-bounce">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  <span className="font-bold">+{pointsEarned} pontos!</span>
                </div>
              </div>
            )}
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
