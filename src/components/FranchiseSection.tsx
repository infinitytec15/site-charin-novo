import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Calculator,
  ChevronRight,
  DollarSign,
  MapPin,
  TrendingUp,
} from "lucide-react";
import MapSection from "./MapSection";

interface ROICalculatorProps {
  investmentAmount?: number;
  locationType?: string;
  estimatedReturns?: number;
}

interface FranchiseFormProps {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  investment?: string;
  message?: string;
}

const FranchiseSection = () => {
  const [roiData, setRoiData] = useState<ROICalculatorProps>({
    investmentAmount: 250000,
    locationType: "shopping",
    estimatedReturns: 0,
  });

  const [formData, setFormData] = useState<FranchiseFormProps>({
    name: "",
    email: "",
    phone: "",
    city: "",
    investment: "R$250.000 - R$500.000",
    message: "",
  });

  const calculateROI = () => {
    // Simplified ROI calculation based on location type and investment amount
    let multiplier = 0;

    switch (roiData.locationType) {
      case "shopping":
        multiplier = 0.25; // 25% annual return
        break;
      case "street":
        multiplier = 0.2; // 20% annual return
        break;
      case "highway":
        multiplier = 0.3; // 30% annual return
        break;
      case "residential":
        multiplier = 0.15; // 15% annual return
        break;
      default:
        multiplier = 0.2;
    }

    const estimatedReturns = (roiData.investmentAmount || 0) * multiplier;
    setRoiData({ ...roiData, estimatedReturns });
  };

  const handleRoiChange = (field: keyof ROICalculatorProps, value: any) => {
    setRoiData({ ...roiData, [field]: value });
  };

  const handleFormChange = (field: keyof FranchiseFormProps, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert("Formulário enviado com sucesso! Entraremos em contato em breve.");
  };

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
            Seja um Franqueado
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transforme energia em oportunidade. Torne-se um franqueado e lidere
            a mobilidade elétrica em sua região.
          </p>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#0C1F38] mb-6 text-center">
            Localizações Disponíveis para Franquias
          </h3>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
            Explore o mapa para encontrar oportunidades de franquia em sua
            região. Use a barra de pesquisa para buscar por cidade ou estado e
            descubra pontos estratégicos para seu investimento.
          </p>
          <div className="max-w-2xl mx-auto mb-8 bg-[#00FF99]/10 p-4 rounded-lg border border-[#00FF99]/30">
            <p className="text-center text-[#0C1F38] font-medium">
              <span className="font-bold">Dica:</span> Experimente buscar por
              "Franquia" ou por cidades como "Florianópolis", "Salvador",
              "Recife", "Fortaleza", "Porto Alegre" ou "Brasília" para ver as
              oportunidades disponíveis.
            </p>
          </div>
          <div
            className="w-full border border-gray-200 rounded-xl shadow-md overflow-hidden bg-white"
            style={{
              height: "600px",
              position: "relative",
              zIndex: 1,
              display: "block",
            }}
          >
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <MapSection />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Benefits */}
          <div>
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-[#0C1F38] text-white rounded-t-xl">
                <CardTitle className="text-2xl">
                  Por que se tornar um franqueado?
                </CardTitle>
                <CardDescription className="text-gray-200">
                  Descubra as vantagens de fazer parte da nossa rede
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#00FF99] p-3 rounded-full">
                      <TrendingUp className="h-6 w-6 text-[#0C1F38]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">
                        Retorno Rápido do Investimento
                      </h3>
                      <p className="text-gray-600">
                        Modelo de negócio com receita recorrente e alta margem
                        de lucro.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#00FF99] p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-[#0C1F38]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">
                        Exclusividade Territorial
                      </h3>
                      <p className="text-gray-600">
                        Garantia de operação exclusiva em sua região, protegendo
                        seu investimento.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#00FF99] p-3 rounded-full">
                      <DollarSign className="h-6 w-6 text-[#0C1F38]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">
                        Mercado em Expansão
                      </h3>
                      <p className="text-gray-600">
                        Setor de mobilidade elétrica com crescimento exponencial
                        nos próximos anos.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Depoimentos de Franqueados
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg italic text-gray-700">
                    "Investir nesta franquia foi a melhor decisão que tomei. Em
                    apenas 18 meses recuperei todo o investimento inicial e hoje
                    tenho uma operação lucrativa e sustentável."
                    <div className="mt-2 font-semibold not-italic">
                      — Carlos Mendes, São Paulo
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - ROI Calculator and Form */}
          <div>
            <Tabs defaultValue="calculator" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="calculator" className="flex items-center">
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculadora de ROI
                </TabsTrigger>
                <TabsTrigger value="form">
                  <ChevronRight className="mr-2 h-4 w-4" />
                  Formulário de Interesse
                </TabsTrigger>
              </TabsList>

              <TabsContent value="calculator" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Calcule seu Retorno</CardTitle>
                    <CardDescription>
                      Estime o retorno do seu investimento com base no tipo de
                      localização.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="investment">
                          Valor do Investimento (R$)
                        </Label>
                        <Input
                          id="investment"
                          type="number"
                          placeholder="Ex: 250000"
                          value={roiData.investmentAmount}
                          onChange={(e) =>
                            handleRoiChange(
                              "investmentAmount",
                              Number(e.target.value),
                            )
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">Tipo de Localização</Label>
                        <Select
                          value={roiData.locationType}
                          onValueChange={(value) =>
                            handleRoiChange("locationType", value)
                          }
                        >
                          <SelectTrigger id="location">
                            <SelectValue placeholder="Selecione o tipo de localização" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="shopping">
                              Shopping Center
                            </SelectItem>
                            <SelectItem value="street">Via Pública</SelectItem>
                            <SelectItem value="highway">Rodovia</SelectItem>
                            <SelectItem value="residential">
                              Condomínio Residencial
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button
                      className="w-full mt-6 bg-[#00FF99] text-[#0C1F38] hover:bg-[#00CC7A]"
                      onClick={calculateROI}
                    >
                      Calcular Retorno
                    </Button>

                    {roiData.estimatedReturns > 0 && (
                      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-lg">
                          Resultado Estimado:
                        </h4>
                        <div className="mt-2">
                          <div className="flex justify-between">
                            <span>Investimento Inicial:</span>
                            <span className="font-medium">
                              R${" "}
                              {roiData.investmentAmount?.toLocaleString(
                                "pt-BR",
                              )}
                            </span>
                          </div>
                          <Separator className="my-2" />
                          <div className="flex justify-between">
                            <span>Retorno Anual Estimado:</span>
                            <span className="font-bold text-[#00CC7A]">
                              R${" "}
                              {roiData.estimatedReturns.toLocaleString("pt-BR")}
                            </span>
                          </div>
                          <div className="flex justify-between mt-1">
                            <span>Percentual de Retorno:</span>
                            <span className="font-bold text-[#00CC7A]">
                              {(
                                (roiData.estimatedReturns /
                                  (roiData.investmentAmount || 1)) *
                                100
                              ).toFixed(1)}
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="form" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Formulário de Interesse</CardTitle>
                    <CardDescription>
                      Preencha o formulário abaixo e nossa equipe entrará em
                      contato.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome Completo</Label>
                          <Input
                            id="name"
                            placeholder="Seu nome completo"
                            value={formData.name}
                            onChange={(e) =>
                              handleFormChange("name", e.target.value)
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">E-mail</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            value={formData.email}
                            onChange={(e) =>
                              handleFormChange("email", e.target.value)
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone</Label>
                          <Input
                            id="phone"
                            placeholder="(00) 00000-0000"
                            value={formData.phone}
                            onChange={(e) =>
                              handleFormChange("phone", e.target.value)
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">Cidade/Estado</Label>
                          <Input
                            id="city"
                            placeholder="Sua cidade e estado"
                            value={formData.city}
                            onChange={(e) =>
                              handleFormChange("city", e.target.value)
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="investment-range">
                          Faixa de Investimento
                        </Label>
                        <Select
                          value={formData.investment}
                          onValueChange={(value) =>
                            handleFormChange("investment", value)
                          }
                        >
                          <SelectTrigger id="investment-range">
                            <SelectValue placeholder="Selecione a faixa de investimento" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Até R$250.000">
                              Até R$250.000
                            </SelectItem>
                            <SelectItem value="R$250.000 - R$500.000">
                              R$250.000 - R$500.000
                            </SelectItem>
                            <SelectItem value="R$500.000 - R$1.000.000">
                              R$500.000 - R$1.000.000
                            </SelectItem>
                            <SelectItem value="Acima de R$1.000.000">
                              Acima de R$1.000.000
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mensagem (opcional)</Label>
                        <textarea
                          id="message"
                          className="w-full min-h-[100px] p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF99]"
                          placeholder="Conte-nos mais sobre seu interesse e experiência"
                          value={formData.message}
                          onChange={(e) =>
                            handleFormChange("message", e.target.value)
                          }
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#0C1F38] hover:bg-[#0C1F38]/90"
                      >
                        Enviar Formulário
                      </Button>
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-center text-sm text-gray-500">
                    Seus dados estão seguros e não serão compartilhados com
                    terceiros.
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranchiseSection;
