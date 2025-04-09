import React, { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import {
  Zap,
  ArrowRight,
  Palette,
  Server,
  BarChart3,
  Headset,
  Building2,
  ShoppingCart,
  Car,
  Globe,
  Shield,
  Smartphone,
  Settings2,
  LineChart,
  Users,
  ChevronDown,
  ChevronUp,
  Trophy,
  Star,
  Award,
  Target,
  Sparkles,
  HelpCircle,
  DollarSign,
  Clock,
  Link,
} from "lucide-react";
import MaintenanceModule from "@/components/MaintenanceModule";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const WhiteLabelPage = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("demo-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { toast } = useToast();

  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    location: "",
    segment: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleFormChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Clear error for this field when user starts typing
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\([0-9]{2}\)\s[0-9]{5}-[0-9]{4}$/;

    if (!formData.companyName.trim()) {
      errors.companyName = "Nome da empresa é obrigatório";
    }

    if (!formData.contactName.trim()) {
      errors.contactName = "Nome do responsável é obrigatório";
    }

    if (!formData.email.trim()) {
      errors.email = "E-mail é obrigatório";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Formato de e-mail inválido";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Telefone é obrigatório";
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Formato de telefone inválido (00) 00000-0000";
    }

    if (!formData.location.trim()) {
      errors.location = "Localização é obrigatória";
    }

    if (!formData.segment) {
      errors.segment = "Segmento é obrigatório";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Erro no formulário",
        description:
          "Por favor, corrija os erros no formulário antes de enviar.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Here you would typically send the form data to your backend
      setFormSubmitted(true);
      toast({
        title: "Solicitação enviada!",
        description: "Em breve nossa equipe entrará em contato.",
        variant: "default",
      });

      // Reset form after submission
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          companyName: "",
          contactName: "",
          email: "",
          phone: "",
          location: "",
          segment: "",
          message: "",
        });
      }, 5000);
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description:
          "Ocorreu um erro ao enviar sua solicitação. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: <Palette className="h-8 w-8 text-[#0C1F38]" />,
      title: "Customização de marca",
      description: "Logo, cores, app e sistema com sua identidade visual.",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: <Server className="h-8 w-8 text-[#0C1F38]" />,
      title: "Infraestrutura de recarga",
      description: "Equipamentos homologados e suporte técnico completo.",
      gradient: "from-purple-400 to-indigo-600",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-[#0C1F38]" />,
      title: "Dashboard completo",
      description: "Gestão de recargas, relatórios, usuários e faturamento.",
      gradient: "from-emerald-400 to-[#00A651]",
    },
    {
      icon: <Headset className="h-8 w-8 text-[#0C1F38]" />,
      title: "Atendimento técnico e comercial",
      description: "Atendimento especializado no seu nome ou em parceria.",
      gradient: "from-amber-400 to-amber-600",
    },
  ];

  const targetAudience = [
    {
      icon: <Building2 className="h-8 w-8 text-[#0C1F38]" />,
      title: "Empresas",
      description: "Para oferecer recarga aos colaboradores e clientes.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-[#0C1F38]" />,
      title: "Shopping centers",
      description: "Para oferecer recarga aos visitantes e clientes.",
      image:
        "https://images.unsplash.com/photo-1519567770579-c2fc5e9ca471?w=800&q=80",
    },
    {
      icon: <Car className="h-8 w-8 text-[#0C1F38]" />,
      title: "Postos de combustível",
      description: "Para diversificar serviços e atrair novos clientes.",
      image:
        "https://images.unsplash.com/photo-1565665681743-6ff01c5181f3?w=800&q=80",
    },
    {
      icon: <Globe className="h-8 w-8 text-[#0C1F38]" />,
      title: "Redes de varejo",
      description: "Para oferecer um diferencial competitivo aos clientes.",
      image:
        "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800&q=80",
    },
  ];

  // FAQ items
  const faqItems = [
    {
      question: "Como funciona o modelo white label?",
      answer:
        "O modelo white label permite que sua empresa ofereça serviços de recarga de veículos elétricos com sua própria marca, sem precisar desenvolver a tecnologia do zero. Nós fornecemos toda a infraestrutura, software e suporte, enquanto você mantém o relacionamento com seus clientes.",
      icon: <HelpCircle className="h-5 w-5 text-white" />,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      question: "Quais são os custos envolvidos?",
      answer:
        "Os custos variam de acordo com o modelo de negócio escolhido e a escala de implementação. Oferecemos opções de licenciamento do software, revenue share ou modelo de franquia. Entre em contato para uma proposta personalizada.",
      icon: <DollarSign className="h-5 w-5 text-white" />,
      gradient: "from-green-400 to-emerald-600",
    },
    {
      question: "Quanto tempo leva para implementar?",
      answer:
        "O tempo de implementação varia de 30 a 90 dias, dependendo da complexidade do projeto e das personalizações necessárias. Isso inclui a customização do software, instalação dos equipamentos e treinamento da equipe.",
      icon: <Clock className="h-5 w-5 text-white" />,
      gradient: "from-purple-400 to-indigo-600",
    },
    {
      question: "É possível integrar com sistemas existentes?",
      answer:
        "Sim, nossa plataforma foi desenvolvida com APIs abertas que permitem integração com diversos sistemas, como ERP, CRM, sistemas de pagamento e programas de fidelidade existentes.",
      icon: <Link className="h-5 w-5 text-white" />,
      gradient: "from-amber-400 to-amber-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation - Reusing from Home */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-[#00A651]"
            >
              <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19" />
              <line x1="23" y1="13" x2="23" y2="11" />
              <line x1="11" y1="6" x2="7" y2="18" />
              <line x1="16" y1="6" x2="20" y2="18" />
            </svg>
            <span className="text-xl font-bold text-[#0C1F38]">Chargin</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="/"
              className="text-sm font-medium hover:text-[#00A651] transition-colors"
            >
              Início
            </a>
            <a
              href="/#map"
              className="text-sm font-medium hover:text-[#00A651] transition-colors"
            >
              Mapa de Estações
            </a>
            <a
              href="/#simulator"
              className="text-sm font-medium hover:text-[#00A651] transition-colors"
            >
              Simulador
            </a>
            <a
              href="/franchise"
              className="text-sm font-medium hover:text-[#00A651] transition-colors"
            >
              Seja um Franqueado
            </a>
            <a
              href="/app"
              className="text-sm font-medium hover:text-[#00A651] transition-colors"
            >
              Aplicativo
            </a>
            <a
              href="/contato"
              className="text-sm font-medium hover:text-[#00A651] transition-colors"
            >
              Contato
            </a>
          </nav>
          <Button className="bg-[#00A651] text-white hover:bg-[#00A651]/80">
            Baixe o App
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#0C1F38] to-[#0C1F38]/90 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sua marca, nossa tecnologia
              </h1>
              <p className="text-lg text-gray-200 mb-6">
                Ofereça soluções de recarga para veículos elétricos com sua
                própria marca, sem precisar desenvolver a tecnologia do zero.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToForm}
                  className="bg-gradient-to-r from-[#00A651] to-[#008C45] hover:from-[#00A651]/90 hover:to-[#008C45]/90 text-white py-6 shadow-md transform hover:scale-[1.02] transition-all duration-300"
                  size="lg"
                >
                  Solicitar demonstração
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 py-6"
                  size="lg"
                >
                  Saiba mais
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative">
              <img
                src="https://images.unsplash.com/photo-1593941707882-a5bfcf637e24?w=800&q=80"
                alt="Estação de recarga com marca personalizada"
                className="rounded-xl shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#00A651] text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3">
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  <p className="font-bold">Sua marca aqui!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
              Tudo o que você precisa para começar
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nossa solução white label oferece todos os recursos necessários
              para você lançar seu próprio serviço de recarga de veículos
              elétricos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all overflow-hidden relative transform hover:-translate-y-1 hover:scale-[1.02]"
              >
                <div
                  className={`absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br ${feature.gradient} opacity-10 blur-xl`}
                ></div>
                <div
                  className={`absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-gradient-to-br ${feature.gradient} opacity-10 blur-xl`}
                ></div>

                <CardContent className="p-6 relative z-10">
                  <div
                    className={`bg-gradient-to-br ${feature.gradient} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg transform hover:scale-110 transition-all duration-300 border border-white/20`}
                  >
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 rounded-full blur-sm bg-gradient-to-br ${feature.gradient} -z-10 opacity-60`}
                    ></div>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#0C1F38]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
              Ideal para diversos segmentos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nossa solução white label se adapta a diferentes modelos de
              negócio e segmentos de mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetAudience.map((audience, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all overflow-hidden relative transform hover:-translate-y-1 hover:scale-[1.02]"
              >
                <div
                  className="h-48 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${audience.image})` }}
                ></div>
                <CardContent className="p-6 relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 border border-white/20 relative">
                      <div className="absolute inset-0 rounded-full blur-sm bg-gradient-to-br from-green-400 to-emerald-600 -z-10 opacity-60"></div>
                      {React.cloneElement(audience.icon, {
                        className: "h-8 w-8 text-white drop-shadow-md",
                      })}
                    </div>
                    <h3 className="text-xl font-bold text-[#0C1F38]">
                      {audience.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{audience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section id="demo-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
                Solicite uma demonstração
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Preencha o formulário abaixo e nossa equipe entrará em contato
                para agendar uma demonstração personalizada da nossa solução
                white label.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg relative">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="bg-gradient-to-br from-emerald-400 to-[#00A651] p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0C1F38] mb-2">
                    Solicitação enviada!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Obrigado pelo seu interesse. Nossa equipe entrará em contato
                    em breve para agendar sua demonstração personalizada.
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Nome da empresa*</Label>
                      <Input
                        id="companyName"
                        placeholder="Sua empresa"
                        value={formData.companyName}
                        onChange={(e) =>
                          handleFormChange("companyName", e.target.value)
                        }
                        className={
                          formErrors.companyName ? "border-red-500" : ""
                        }
                      />
                      {formErrors.companyName && (
                        <p className="text-red-500 text-sm">
                          {formErrors.companyName}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Nome do responsável*</Label>
                      <Input
                        id="contactName"
                        placeholder="Seu nome"
                        value={formData.contactName}
                        onChange={(e) =>
                          handleFormChange("contactName", e.target.value)
                        }
                        className={
                          formErrors.contactName ? "border-red-500" : ""
                        }
                      />
                      {formErrors.contactName && (
                        <p className="text-red-500 text-sm">
                          {formErrors.contactName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail*</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleFormChange("email", e.target.value)
                        }
                        className={formErrors.email ? "border-red-500" : ""}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone*</Label>
                      <Input
                        id="phone"
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          handleFormChange("phone", e.target.value)
                        }
                        className={formErrors.phone ? "border-red-500" : ""}
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-sm">
                          {formErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="location">Localização*</Label>
                      <Input
                        id="location"
                        placeholder="Cidade/Estado"
                        value={formData.location}
                        onChange={(e) =>
                          handleFormChange("location", e.target.value)
                        }
                        className={formErrors.location ? "border-red-500" : ""}
                      />
                      {formErrors.location && (
                        <p className="text-red-500 text-sm">
                          {formErrors.location}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="segment">Segmento*</Label>
                      <Select
                        value={formData.segment}
                        onValueChange={(value) =>
                          handleFormChange("segment", value)
                        }
                      >
                        <SelectTrigger
                          id="segment"
                          className={formErrors.segment ? "border-red-500" : ""}
                        >
                          <SelectValue placeholder="Selecione o segmento" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="empresa">Empresa</SelectItem>
                          <SelectItem value="shopping">
                            Shopping Center
                          </SelectItem>
                          <SelectItem value="posto">
                            Posto de Combustível
                          </SelectItem>
                          <SelectItem value="varejo">Rede de Varejo</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                      {formErrors.segment && (
                        <p className="text-red-500 text-sm">
                          {formErrors.segment}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem (opcional)</Label>
                    <textarea
                      id="message"
                      className="w-full min-h-[100px] p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A651]"
                      placeholder="Conte-nos mais sobre suas necessidades"
                      value={formData.message}
                      onChange={(e) =>
                        handleFormChange("message", e.target.value)
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#00A651] to-[#008C45] hover:from-[#00A651]/90 hover:to-[#008C45]/90 text-white py-6 shadow-md transform hover:scale-[1.02] transition-all duration-300"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      "Solicitar demonstração"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre nossa solução white label para recarga de
              veículos elétricos.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-[#0C1F38] hover:text-[#00A651] font-medium flex items-center gap-2">
                    <div
                      className={`bg-gradient-to-br ${item.gradient} p-2 rounded-full shadow-md transform hover:scale-110 transition-all duration-300 border border-white/20 relative hidden md:flex`}
                    >
                      <div
                        className={`absolute inset-0 rounded-full blur-sm bg-gradient-to-br ${item.gradient} -z-10 opacity-60`}
                      ></div>
                      {item.icon}
                    </div>
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <div className="flex flex-col space-y-4">
                      <p>{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0C1F38] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para oferecer soluções de recarga com sua marca?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Entre em contato hoje mesmo e descubra como nossa solução white
            label pode ajudar seu negócio a entrar no mercado de mobilidade
            elétrica.
          </p>
          <Button
            onClick={scrollToForm}
            className="bg-gradient-to-r from-[#00A651] to-[#008C45] hover:from-[#00A651]/90 hover:to-[#008C45]/90 text-white py-6 px-8 shadow-md transform hover:scale-[1.02] transition-all duration-300"
            size="lg"
          >
            Solicitar demonstração
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-6 w-6 text-[#00A651]" />
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
                  <a
                    href="/sobre"
                    className="text-gray-600 hover:text-[#00A651]"
                  >
                    Sobre Nós
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
                <li className="text-gray-600">+55 (11) 9999-9999</li>
                <li className="text-gray-600">São Paulo, SP - Brasil</li>
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

export default WhiteLabelPage;
