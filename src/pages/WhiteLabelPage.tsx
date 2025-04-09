import React from "react";
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
} from "lucide-react";
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

const WhiteLabelPage = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("demo-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { toast } = useToast();

  const [formData, setFormData] = React.useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    location: "",
    segment: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formErrors, setFormErrors] = React.useState<Record<string, string>>(
    {},
  );

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
    },
    {
      icon: <Server className="h-8 w-8 text-[#0C1F38]" />,
      title: "Infraestrutura de recarga",
      description: "Equipamentos homologados e suporte técnico completo.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-[#0C1F38]" />,
      title: "Dashboard completo",
      description: "Gestão de recargas, relatórios, usuários e faturamento.",
    },
    {
      icon: <Headset className="h-8 w-8 text-[#0C1F38]" />,
      title: "Atendimento técnico e comercial",
      description: "Atendimento especializado no seu nome ou em parceria.",
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
      description: "Valor agregado e inovação para o público.",
      image:
        "https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?w=800&q=80",
    },
    {
      icon: <Car className="h-8 w-8 text-[#0C1F38]" />,
      title: "Postos e estacionamentos",
      description: "Geração de receita adicional com mobilidade elétrica.",
      image:
        "https://images.unsplash.com/photo-1621953468794-aa9c92a4007e?w=800&q=80",
    },
    {
      icon: <Globe className="h-8 w-8 text-[#0C1F38]" />,
      title: "Integradores e parceiros de energia",
      description: "Escale sua operação com marca própria.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    },
  ];

  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-[#00FF99]" />,
      title: "Marca própria 100%",
      description: "Toda a experiência do usuário com a sua identidade visual.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-[#00FF99]" />,
      title: "App e site personalizados",
      description: "Aplicativo e portal web com suas cores e logo.",
    },
    {
      icon: <Settings2 className="h-8 w-8 text-[#00FF99]" />,
      title: "Integração com seu sistema atual",
      description: "APIs robustas para conectar com seus sistemas existentes.",
    },
    {
      icon: <LineChart className="h-8 w-8 text-[#00FF99]" />,
      title: "Relatórios completos em tempo real",
      description: "Dados de uso, faturamento e performance em tempo real.",
    },
    {
      icon: <Users className="h-8 w-8 text-[#00FF99]" />,
      title: "Suporte técnico e comercial contínuo",
      description: "Equipe especializada para garantir o sucesso da operação.",
    },
  ];

  const faqItems = [
    {
      question: "O sistema é homologado pela ANEEL?",
      answer:
        "Sim, todos os nossos equipamentos e sistemas são homologados pela ANEEL e atendem às normas técnicas brasileiras para infraestrutura de recarga de veículos elétricos.",
    },
    {
      question: "Qual o tempo de entrega da solução?",
      answer:
        "O tempo médio de implementação é de 45 a 60 dias, incluindo a personalização da marca, configuração do sistema, instalação dos equipamentos e treinamento da equipe.",
    },
    {
      question: "Posso usar equipamentos próprios?",
      answer:
        "Sim, é possível integrar equipamentos próprios, desde que sejam compatíveis com nosso sistema de gerenciamento. Nossa equipe técnica fará uma avaliação prévia para garantir a compatibilidade.",
    },
    {
      question: "Como funcionam os relatórios e o suporte?",
      answer:
        "Os relatórios são gerados em tempo real através do dashboard administrativo, com dados de uso, faturamento e performance. O suporte técnico está disponível 24/7 através de chat, e-mail e telefone, com SLA definido em contrato.",
    },
    {
      question:
        "A cobrança para os usuários finais pode ser feita no meu nome?",
      answer:
        "Sim, todo o sistema de cobrança pode ser configurado com sua marca e dados bancários, permitindo que você defina suas próprias tarifas e políticas de preço para os usuários finais.",
    },
  ];

  const mockupImages = [
    "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
  ];

  const [currentMockup, setCurrentMockup] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMockup((prev) => (prev + 1) % mockupImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
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
              href="/franchise"
              className="text-sm font-medium hover:text-[#00FF99] transition-colors"
            >
              Seja um Franqueado
            </a>
          </nav>
          <Button className="bg-[#00FF99] text-[#0C1F38] hover:bg-[#00FF99]/80">
            Baixe o App
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0C1F38] to-[#0C1F38]/90">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[#00FF99]/20 animate-pulse"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?w=1200&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              mixBlendMode: "overlay",
            }}
          ></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              Sua marca. Nossa tecnologia.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-200 mb-8"
            >
              Implemente eletropostos com a sua identidade visual e conte com
              toda nossa infraestrutura, sistema e suporte de ponta-a-ponta.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={scrollToForm}
                className="bg-[#00FF99] text-[#0C1F38] hover:bg-[#00FF99]/90 text-lg px-8 py-6 rounded-xl"
                size="lg"
              >
                SOLICITAR DEMONSTRAÇÃO
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white text-lg px-8 py-6 rounded-xl"
                size="lg"
              >
                VER FUNCIONALIDADES
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
              Como Funciona a Solução White Label
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Uma plataforma completa e personalizada para sua marca oferecer
              serviços de recarga
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#00FF99]/20 p-4 rounded-full mb-4 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0C1F38]">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
              Para Quem é Essa Solução?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ideal para empresas que desejam oferecer serviços de recarga com
              sua própria marca
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetAudience.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={audience.image}
                    alt={audience.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <div className="bg-[#00FF99]/20 p-4 rounded-full mb-4 flex items-center justify-center">
                    {audience.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0C1F38]">
                    {audience.title}
                  </h3>
                  <p className="text-gray-600">{audience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
              Benefícios da Solução
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vantagens exclusivas para sua empresa ao adotar nossa solução
              White Label
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0C1F38] rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#00FF99]/20 p-4 rounded-full mb-4 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
              Demonstração Visual
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Veja como sua marca pode aparecer em nossa plataforma
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {mockupImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: currentMockup === index ? 1 : 0,
                    scale: currentMockup === index ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={image}
                    alt={`Mockup ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-2">
                        {index === 0
                          ? "App com logo customizada"
                          : index === 1
                            ? "Dashboard com dados fictícios"
                            : "Estação de recarga personalizada"}
                      </h3>
                      <p className="text-gray-200">
                        {index === 0
                          ? "Interface do aplicativo com suas cores e identidade visual"
                          : index === 1
                            ? "Painel administrativo completo com sua marca"
                            : "Equipamentos físicos com adesivos personalizados"}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {mockupImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${currentMockup === index ? "bg-[#00FF99]" : "bg-white/50"}`}
                    onClick={() => setCurrentMockup(index)}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="demo-form" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
              Solicite uma Demonstração
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato
              para apresentar a solução White Label
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="bg-[#00FF99]/20 p-4 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-[#00FF99]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0C1F38]">
                  Obrigado por seu interesse!
                </h3>
                <p className="text-gray-600 mb-6">
                  Em breve nosso time comercial entrará em contato para
                  apresentar a solução White Label personalizada para sua
                  empresa.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Nome da empresa</Label>
                    <Input
                      id="companyName"
                      placeholder="Sua empresa"
                      value={formData.companyName}
                      onChange={(e) =>
                        handleFormChange("companyName", e.target.value)
                      }
                      className={formErrors.companyName ? "border-red-500" : ""}
                      required
                    />
                    {formErrors.companyName && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.companyName}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Nome do responsável</Label>
                    <Input
                      id="contactName"
                      placeholder="Seu nome completo"
                      value={formData.contactName}
                      onChange={(e) =>
                        handleFormChange("contactName", e.target.value)
                      }
                      className={formErrors.contactName ? "border-red-500" : ""}
                      required
                    />
                    {formErrors.contactName && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.contactName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail corporativo</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@empresa.com.br"
                      value={formData.email}
                      onChange={(e) =>
                        handleFormChange("email", e.target.value)
                      }
                      className={formErrors.email ? "border-red-500" : ""}
                      required
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        handleFormChange("phone", e.target.value)
                      }
                      className={formErrors.phone ? "border-red-500" : ""}
                      required
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="location">Cidade / Estado</Label>
                    <Input
                      id="location"
                      placeholder="Sua cidade e estado"
                      value={formData.location}
                      onChange={(e) =>
                        handleFormChange("location", e.target.value)
                      }
                      className={formErrors.location ? "border-red-500" : ""}
                      required
                    />
                    {formErrors.location && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.location}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="segment">Segmento de atuação</Label>
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
                        <SelectItem value="shopping">Shopping</SelectItem>
                        <SelectItem value="estacionamento">
                          Estacionamento
                        </SelectItem>
                        <SelectItem value="empresa">Empresa</SelectItem>
                        <SelectItem value="integradora">Integradora</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                    {formErrors.segment && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.segment}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem (opcional)</Label>
                  <textarea
                    id="message"
                    className="w-full min-h-[100px] p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF99]"
                    placeholder="Conte-nos mais sobre sua necessidade"
                    value={formData.message}
                    onChange={(e) =>
                      handleFormChange("message", e.target.value)
                    }
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#0C1F38] hover:bg-[#0C1F38]/90 text-white py-6"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre nossa solução
              White Label
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-[#0C1F38] hover:text-[#00FF99]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0C1F38] to-[#0C1F38]/90">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Lidere a mobilidade elétrica com a sua marca.
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Tecnologia robusta, personalização total e suporte completo para
              sua operação de recarga.
            </p>
            <Button
              onClick={scrollToForm}
              className="bg-[#00FF99] text-[#0C1F38] hover:bg-[#00FF99]/90 text-lg px-8 py-6 rounded-xl"
              size="lg"
            >
              QUERO CONHECER AGORA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
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
                <li>
                  <a
                    href="/white-label"
                    className="text-gray-600 hover:text-[#00FF99]"
                  >
                    Solução White Label
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

export default WhiteLabelPage;
