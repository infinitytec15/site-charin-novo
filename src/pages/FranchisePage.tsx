import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BenefitsSection from "@/components/franchise/BenefitsSection";
import AcquisitionProcess from "@/components/franchise/AcquisitionProcess";
import FAQComponent from "@/components/franchise/FAQComponent";
import FinalCTAComponent from "@/components/franchise/FinalCTAComponent";
import { useToast } from "@/components/ui/use-toast";
// Mock data para estados e cidades do Brasil
const mockStates = [
  { code: "SP", name: "São Paulo" },
  { code: "RJ", name: "Rio de Janeiro" },
  { code: "MG", name: "Minas Gerais" },
  { code: "RS", name: "Rio Grande do Sul" },
  { code: "PR", name: "Paraná" },
  { code: "BA", name: "Bahia" },
  { code: "SC", name: "Santa Catarina" },
  { code: "PE", name: "Pernambuco" },
  { code: "CE", name: "Ceará" },
  { code: "PA", name: "Pará" },
  { code: "DF", name: "Distrito Federal" },
  { code: "ES", name: "Espírito Santo" },
  { code: "GO", name: "Goiás" },
  { code: "AM", name: "Amazonas" },
  { code: "PB", name: "Paraíba" },
  { code: "RN", name: "Rio Grande do Norte" },
  { code: "MT", name: "Mato Grosso" },
  { code: "MS", name: "Mato Grosso do Sul" },
  { code: "AL", name: "Alagoas" },
  { code: "PI", name: "Piauí" },
  { code: "SE", name: "Sergipe" },
  { code: "RO", name: "Rondônia" },
  { code: "TO", name: "Tocantins" },
  { code: "AC", name: "Acre" },
  { code: "AP", name: "Amapá" },
  { code: "RR", name: "Roraima" },
];

const mockCities = {
  SP: [
    { code: "SP-1", name: "São Paulo" },
    { code: "SP-2", name: "Campinas" },
    { code: "SP-3", name: "Santos" },
    { code: "SP-4", name: "Ribeirão Preto" },
    { code: "SP-5", name: "São José dos Campos" },
  ],
  RJ: [
    { code: "RJ-1", name: "Rio de Janeiro" },
    { code: "RJ-2", name: "Niterói" },
    { code: "RJ-3", name: "Petrópolis" },
    { code: "RJ-4", name: "Volta Redonda" },
    { code: "RJ-5", name: "Campos dos Goytacazes" },
  ],
  MG: [
    { code: "MG-1", name: "Belo Horizonte" },
    { code: "MG-2", name: "Uberlândia" },
    { code: "MG-3", name: "Contagem" },
    { code: "MG-4", name: "Juiz de Fora" },
    { code: "MG-5", name: "Betim" },
  ],
  RS: [
    { code: "RS-1", name: "Porto Alegre" },
    { code: "RS-2", name: "Caxias do Sul" },
    { code: "RS-3", name: "Pelotas" },
    { code: "RS-4", name: "Canoas" },
    { code: "RS-5", name: "Santa Maria" },
  ],
  PR: [
    { code: "PR-1", name: "Curitiba" },
    { code: "PR-2", name: "Londrina" },
    { code: "PR-3", name: "Maringá" },
    { code: "PR-4", name: "Ponta Grossa" },
    { code: "PR-5", name: "Cascavel" },
  ],
};

// Função para obter todos os estados
const getStates = () => mockStates;

// Função para obter cidades por estado
const getCitiesByState = (stateCode) => {
  return mockCities[stateCode] || mockCities["SP"].slice(0, 3);
};

const FranchisePage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    investmentRange: "",
    message: "",
  });

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Load Brazilian states when component mounts
    const brazilianStates = getStates();
    setStates(brazilianStates);
  }, []);

  useEffect(() => {
    // Load cities when state changes
    if (formData.state) {
      const citiesForState = getCitiesByState(formData.state);
      setCities(citiesForState);
      // Reset city when state changes
      setFormData((prev) => ({ ...prev, city: "" }));
    } else {
      setCities([]);
    }
  }, [formData.state]);

  const scrollToForm = () => {
    const formElement = document.getElementById("franchise-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.state ||
      !formData.city
    ) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um endereço de email válido.",
        variant: "destructive",
      });
      return;
    }

    // Phone validation (simple Brazilian format)
    const phoneRegex = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Telefone inválido",
        description:
          "Por favor, insira um telefone no formato (00) 00000-0000.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Send email using a service like EmailJS or a backend API
    // For now, we'll simulate the API call
    const emailData = {
      to_email: "gilberto@chargin.io",
      from_name: formData.name,
      from_email: formData.email,
      subject: "Novo interesse em franquia EletriCharge",
      message: `
        Nome: ${formData.name}
        Email: ${formData.email}
        Telefone: ${formData.phone}
        Estado: ${formData.state}
        Cidade: ${formData.city}
        Faixa de Investimento: ${formData.investmentRange}
        Mensagem: ${formData.message}
      `,
    };

    console.log("Sending email to gilberto@chargin.io with data:", emailData);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);

      // Success notification
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Em breve nossa equipe entrará em contato com você.",
        variant: "default",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        investmentRange: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation - Reusing from Home */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-[#00FF99]" />
            <span className="text-xl font-bold text-[#0C1F38]">
              EletriCharge
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="/"
              className="text-sm font-medium hover:text-[#00FF99] transition-colors"
            >
              Início
            </a>
            <a
              href="/#map"
              className="text-sm font-medium hover:text-[#00FF99] transition-colors"
            >
              Mapa de Estações
            </a>
            <a
              href="/#simulator"
              className="text-sm font-medium hover:text-[#00FF99] transition-colors"
            >
              Simulador
            </a>
            <a
              href="/#about"
              className="text-sm font-medium hover:text-[#00FF99] transition-colors"
            >
              Sobre Nós
            </a>
          </nav>
          <Button className="bg-[#00FF99] text-[#0C1F38] hover:bg-[#00FF99]/80">
            Baixe o App
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0C1F38] to-[#0C1F38]/90">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1562077981-4d7eafd44932?w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
          }}
        ></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              Seja dono da mobilidade elétrica na sua região!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-200 mb-8"
            >
              Junte-se à rede de recarga que está transformando o Brasil. Alta
              rentabilidade, operação simples e suporte total.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                onClick={scrollToForm}
                className="bg-[#00FF99] text-[#0C1F38] hover:bg-[#00FF99]/90 text-lg px-8 py-6 rounded-xl"
                size="lg"
              >
                QUERO SER UM FRANQUEADO
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Acquisition Process Section */}
      <AcquisitionProcess />

      {/* FAQ Section */}
      <FAQComponent />

      {/* Final CTA Section */}
      <FinalCTAComponent onScrollToForm={scrollToForm} />

      {/* Franchise Form Section */}
      <section id="franchise-form" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
              Formulário de Interesse
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato
              para apresentar as oportunidades de franquia
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
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
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">Estado</Label>
                  <Select
                    value={formData.state}
                    onValueChange={(value) => handleInputChange("state", value)}
                    required
                  >
                    <SelectTrigger id="state">
                      <SelectValue placeholder="Selecione o estado" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state.code} value={state.code}>
                          {state.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">Cidade</Label>
                <Select
                  value={formData.city}
                  onValueChange={(value) => handleInputChange("city", value)}
                  disabled={!formData.state}
                  required
                >
                  <SelectTrigger id="city">
                    <SelectValue
                      placeholder={
                        formData.state
                          ? "Selecione a cidade"
                          : "Selecione um estado primeiro"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.code} value={city.name}>
                        {city.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="investment-range">Faixa de Investimento</Label>
                <Select
                  value={formData.investmentRange}
                  onValueChange={(value) =>
                    handleInputChange("investmentRange", value)
                  }
                >
                  <SelectTrigger id="investment-range">
                    <SelectValue placeholder="Selecione a faixa de investimento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Até R$250.000">Até R$250.000</SelectItem>
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
                  onChange={(e) => handleInputChange("message", e.target.value)}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0C1F38] hover:bg-[#0C1F38]/90 text-white py-6"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Formulário"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
              Nossas Franquias pelo Brasil
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Veja onde já estamos presentes e identifique oportunidades na sua
              região
            </p>
          </div>

          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1200&q=80"
              alt="Mapa do Brasil com franquias"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2">Expansão contínua</h3>
                <p className="text-gray-200">
                  Estamos em constante crescimento, com novas franquias sendo
                  inauguradas mensalmente em todo o país.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Reusing from Home */}
      <footer className="bg-gray-100 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-6 w-6 text-[#00FF99]" />
                <span className="text-lg font-bold text-[#0C1F38]">
                  EletriCharge
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                A melhor rede de carregamento para veículos elétricos do Brasil.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#0C1F38] mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/#map"
                    className="text-gray-600 hover:text-[#00FF99]"
                  >
                    Mapa de Estações
                  </a>
                </li>
                <li>
                  <a
                    href="/#simulator"
                    className="text-gray-600 hover:text-[#00FF99]"
                  >
                    Simulador de Recarga
                  </a>
                </li>
                <li>
                  <a
                    href="/franchise"
                    className="text-gray-600 hover:text-[#00FF99]"
                  >
                    Seja um Franqueado
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#0C1F38] mb-4">Políticas</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/codigoconduta"
                    className="text-gray-600 hover:text-[#00FF99]"
                  >
                    Código de Conduta
                  </a>
                </li>
                <li>
                  <a
                    href="/politicaprivacidade"
                    className="text-gray-600 hover:text-[#00FF99]"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="/termosdeuso"
                    className="text-gray-600 hover:text-[#00FF99]"
                  >
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a
                    href="/politicaseguranca"
                    className="text-gray-600 hover:text-[#00FF99]"
                  >
                    Política de Segurança
                  </a>
                </li>
                <li>
                  <a
                    href="/cancelamento"
                    className="text-gray-600 hover:text-[#00FF99]"
                  >
                    Cancelamento e Reembolso
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#0C1F38] mb-4">Contato</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-600">contato@eletricharge.com.br</li>
                <li className="text-gray-600">+55 (11) 9999-9999</li>
                <li className="text-gray-600">São Paulo, SP - Brasil</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#0C1F38] mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-[#00FF99]">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#00FF99]">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#00FF99]">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} EletriCharge. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FranchisePage;
