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
import Header from "@/components/Header";
// Removido o código de estados e cidades estáticos, pois agora usamos campos de input

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

  const [isSubmitting, setIsSubmitting] = useState(false);

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
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 md:py-36 bg-gradient-to-br from-[#0C1F38] to-[#0C1F38]/90 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 transform scale-105"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1562077981-4d7eafd44932?w=1200&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              mixBlendMode: "overlay",
            }}
          ></div>

          {/* 3D Decorative elements */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#00FF99]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#00A651]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-[#00FF99]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-block px-4 py-1 bg-[#00FF99]/20 backdrop-blur-sm rounded-full text-[#00FF99] font-medium"
            >
              Oportunidade de Negócio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#00FF99]/90">
                Seja dono da mobilidade elétrica
              </span>{" "}
              na sua região!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-200 mb-10"
            >
              Junte-se à rede de recarga que está transformando o Brasil. Alta
              rentabilidade, operação simples e suporte total.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                onClick={scrollToForm}
                className="bg-gradient-to-r from-[#00A651] to-[#00FF99] text-white hover:from-[#00A651]/90 hover:to-[#00FF99]/90 text-lg px-8 py-6 rounded-xl shadow-lg shadow-[#00FF99]/20 transition-all duration-300 w-full sm:w-auto"
                size="lg"
              >
                QUERO SER UM FRANQUEADO
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <a
                href="#faq"
                className="text-white hover:text-[#00FF99] transition-colors duration-300 flex items-center gap-2 font-medium w-full sm:w-auto justify-center"
              >
                Ver perguntas frequentes
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl font-bold text-[#00FF99] mb-2">
                  500+
                </div>
                <div className="text-gray-200">Estações em operação</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl font-bold text-[#00FF99] mb-2">
                  24/7
                </div>
                <div className="text-gray-200">Suporte técnico</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl font-bold text-[#00FF99] mb-2">
                  100%
                </div>
                <div className="text-gray-200">Energia limpa</div>
              </div>
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
      <section
        id="franchise-form"
        className="py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-[#00A651]/10 rounded-full text-[#00A651] font-medium mb-4">
              Faça Parte
            </div>
            <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
              Formulário de Interesse
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato
              para apresentar as oportunidades de franquia
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00FF99]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#00A651]/10 rounded-full blur-2xl"></div>

            <form className="space-y-6 relative" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#0C1F38] font-medium">
                    Nome completo
                  </Label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="border-gray-300 focus:border-[#00FF99] focus:ring focus:ring-[#00FF99]/20 transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#0C1F38] font-medium">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="border-gray-300 focus:border-[#00FF99] focus:ring focus:ring-[#00FF99]/20 transition-all duration-200"
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
                    className="border-gray-300 focus:border-[#00FF99] focus:ring focus:ring-[#00FF99]/20 transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">Estado</Label>
                  <Input
                    id="state"
                    placeholder="Digite seu estado"
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    required
                    className="border-gray-300 focus:border-[#00FF99] focus:ring focus:ring-[#00FF99]/20 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">Cidade</Label>
                <Input
                  id="city"
                  placeholder="Digite sua cidade"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  required
                  className="border-gray-300 focus:border-[#00FF99] focus:ring focus:ring-[#00FF99]/20 transition-all duration-200"
                />
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
                className="w-full bg-gradient-to-r from-[#0C1F38] to-[#0C1F38]/90 hover:from-[#0C1F38]/90 hover:to-[#0C1F38] text-white py-6 rounded-xl shadow-lg transition-all duration-300 relative overflow-hidden group"
                size="lg"
                disabled={isSubmitting}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00A651]/20 to-[#00FF99]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse mr-2">Enviando</span>
                      <span className="flex space-x-1">
                        <span className="animate-bounce delay-75">.</span>
                        <span className="animate-bounce delay-150">.</span>
                        <span className="animate-bounce delay-300">.</span>
                      </span>
                    </>
                  ) : (
                    <>
                      Enviar Formulário
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </span>
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
              src="https://images.unsplash.com/photo-1562077981-4d7eafd44932?w=1200&q=80"
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

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-[#00A651]"
                >
                  <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19" />
                  <line x1="23" y1="13" x2="23" y2="11" />
                  <line x1="11" y1="6" x2="7" y2="18" />
                  <line x1="16" y1="6" x2="20" y2="18" />
                </svg>
                <span className="text-lg font-bold text-[#0C1F38]">
                  Chargin
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
                    className="text-gray-600 hover:text-[#00A651]"
                  >
                    Mapa de Estações
                  </a>
                </li>
                <li>
                  <a
                    href="/#simulator"
                    className="text-gray-600 hover:text-[#00A651]"
                  >
                    Simulador de Recarga
                  </a>
                </li>
                <li>
                  <a
                    href="/franchise"
                    className="text-gray-600 hover:text-[#00A651]"
                  >
                    Seja um Franqueado
                  </a>
                </li>
                <li>
                  <a href="/app" className="text-gray-600 hover:text-[#00A651]">
                    Aplicativo
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
                    className="text-gray-600 hover:text-[#00A651]"
                  >
                    Código de Conduta
                  </a>
                </li>
                <li>
                  <a
                    href="/politicaprivacidade"
                    className="text-gray-600 hover:text-[#00A651]"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="/termosdeuso"
                    className="text-gray-600 hover:text-[#00A651]"
                  >
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#0C1F38] mb-4">Contato</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-600">suporte@chargin.io</li>
                <li className="text-gray-600">(15) 3343-0000</li>
                <li className="text-gray-600">
                  Av. dos Caramuru, 1293-A - Buritizal, Macapá - AP, 68902-863
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Chargin. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FranchisePage;
