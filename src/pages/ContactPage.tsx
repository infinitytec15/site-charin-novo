import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Send,
  Award,
  Trophy,
  Star,
  Zap,
} from "lucide-react";
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
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { ProgressBadge } from "@/components/ui/progress-badge";
import { AchievementBadge } from "@/components/ui/achievement-badge";
import { Badge } from "@/components/ui/badge";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showReward, setShowReward] = useState(false);
  const [formProgress, setFormProgress] = useState(0);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => {
      const newData = { ...prev, [field]: value };
      // Calculate form progress
      const totalFields = Object.keys(formData).length;
      const filledFields = Object.values(newData).filter(
        (val) => val.trim() !== "",
      ).length;
      setFormProgress(Math.round((filledFields / totalFields) * 100));
      return newData;
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.message
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

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowReward(true);

      // Success notification
      toast({
        title: "Mensagem enviada com sucesso!",
        description:
          "Recebemos sua mensagem! Em breve, nossa equipe entrará em contato com você. 🚀",
        variant: "default",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Hide reward after 5 seconds
      setTimeout(() => {
        setShowReward(false);
      }, 5000);

      // Reset progress
      setFormProgress(0);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contato - Chargin</title>
        <meta
          name="description"
          content="Entre em contato com a Chargin para dúvidas, sugestões ou suporte. Estamos aqui para ajudar com suas necessidades de mobilidade elétrica."
        />
      </Helmet>

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
              href="/blog"
              className="text-sm font-medium hover:text-[#00A651] transition-colors"
            >
              Blog
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
                Fale com a gente, estamos aqui para você ⚡
              </h1>
              <p className="text-lg text-gray-200 mb-6">
                Tem dúvidas, sugestões ou quer se conectar com nosso time?
                Preencha o formulário ou use um dos nossos canais diretos.
              </p>

              {/* Gamification element */}
              <div className="flex gap-4 mb-4">
                <AchievementBadge
                  icon={MessageSquare}
                  label="Comunicador"
                  description="Entre em contato com nossa equipe"
                  unlocked={true}
                  level={1}
                  maxLevel={3}
                  variant="star"
                  size="md"
                />
                <AchievementBadge
                  icon={Zap}
                  label="Resposta Rápida"
                  description="Receba resposta em menos de 24h"
                  unlocked={false}
                  level={0}
                  maxLevel={3}
                  variant="zap"
                  size="md"
                />
                <AchievementBadge
                  icon={Trophy}
                  label="Engajamento"
                  description="Participe ativamente da comunidade"
                  unlocked={true}
                  level={2}
                  maxLevel={3}
                  variant="trophy"
                  size="md"
                />
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
                alt="Pessoa utilizando o app da Chargin ao lado de um carro elétrico"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Direct Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-lg relative">
                {/* Reward popup */}
                {showReward && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-3 rounded-lg shadow-lg animate-bounce z-20">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      <div>
                        <p className="font-bold">+75 pontos!</p>
                        <p className="text-xs">Conquista desbloqueada</p>
                      </div>
                    </div>
                  </div>
                )}

                <h2 className="text-2xl font-bold text-[#0C1F38] mb-4">
                  Envie sua mensagem
                </h2>

                {/* Gamification progress */}
                <div className="mb-6">
                  <ProgressBadge
                    label="Progresso do formulário"
                    value={formProgress}
                    max={100}
                    variant="success"
                    className="w-full"
                    animated={formProgress > 0}
                  />
                </div>

                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo*</Label>
                      <Input
                        id="name"
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail*</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone*</Label>
                      <Input
                        id="phone"
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto*</Label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) =>
                          handleInputChange("subject", value)
                        }
                        required
                      >
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Selecione o assunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Suporte">Suporte</SelectItem>
                          <SelectItem value="Dúvidas">Dúvidas</SelectItem>
                          <SelectItem value="Comercial">Comercial</SelectItem>
                          <SelectItem value="Parcerias">Parcerias</SelectItem>
                          <SelectItem value="Outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem*</Label>
                    <textarea
                      id="message"
                      className="w-full min-h-[150px] p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A651]"
                      placeholder="Digite sua mensagem aqui (máximo 500 caracteres)"
                      maxLength={500}
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      required
                    />
                    <div className="text-right text-sm text-gray-500">
                      {formData.message.length}/500 caracteres
                    </div>
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
                      <>
                        <Send className="mr-2 h-5 w-5" /> ENVIAR MENSAGEM
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Direct Contact */}
            <div>
              <h2 className="text-2xl font-bold text-[#0C1F38] mb-6">
                Contato Direto
              </h2>
              <div className="space-y-4">
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow cursor-pointer transform hover:-translate-y-1 hover:scale-[1.02] duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-full mr-4 shadow-lg transform hover:scale-110 transition-all duration-300 border border-white/20 relative">
                        <div className="absolute inset-0 rounded-full blur-sm bg-gradient-to-br from-blue-400 to-blue-600 -z-10 opacity-60"></div>
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
                          className="drop-shadow-md"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0C1F38]">
                          WhatsApp
                        </h3>
                        <p className="text-gray-600">(15) 99152-0383</p>
                        <p className="text-sm text-gray-500">
                          Atendimento rápido em horário comercial
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-shadow cursor-pointer transform hover:-translate-y-1 hover:scale-[1.02] duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-purple-400 to-indigo-600 p-3 rounded-full mr-4 shadow-lg transform hover:scale-110 transition-all duration-300 border border-white/20 relative">
                        <div className="absolute inset-0 rounded-full blur-sm bg-gradient-to-br from-purple-400 to-indigo-600 -z-10 opacity-60"></div>
                        <Mail className="h-6 w-6 text-white drop-shadow-md" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0C1F38]">E-mail</h3>
                        <p className="text-gray-600">suporte@chargin.io</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-shadow cursor-pointer transform hover:-translate-y-1 hover:scale-[1.02] duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-emerald-400 to-[#00A651] p-3 rounded-full mr-4 shadow-lg transform hover:scale-110 transition-all duration-300 border border-white/20 relative">
                        <div className="absolute inset-0 rounded-full blur-sm bg-gradient-to-br from-emerald-400 to-[#00A651] -z-10 opacity-60"></div>
                        <Phone className="h-6 w-6 text-white drop-shadow-md" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0C1F38]">
                          Telefone
                        </h3>
                        <p className="text-gray-600">(15) 3343-0000</p>
                        <p className="text-sm text-gray-500">
                          Atendimento comercial
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md transform hover:-translate-y-1 hover:scale-[1.02] duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-3 rounded-full mr-4 shadow-lg transform hover:scale-110 transition-all duration-300 border border-white/20 relative">
                        <div className="absolute inset-0 rounded-full blur-sm bg-gradient-to-br from-amber-400 to-amber-600 -z-10 opacity-60"></div>
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
                          className="drop-shadow-md"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0C1F38]">
                          Horário de atendimento
                        </h3>
                        <p className="text-gray-600">
                          Segunda a sexta, das 9h às 18h
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Gamification element */}
                <Card className="border-none shadow-md bg-white/95 backdrop-blur-sm p-4 border border-gray-100 relative overflow-hidden transform hover:-translate-y-1 hover:scale-[1.02] duration-300">
                  <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-blue-500/10 blur-xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-blue-500/10 blur-xl"></div>

                  <h3 className="text-lg font-semibold text-[#0C1F38] mb-3 flex items-center">
                    <Trophy className="h-5 w-5 text-amber-500 mr-2" />
                    Benefícios de Contato
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="bg-gradient-to-br from-green-400 to-emerald-600 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs shadow-sm">
                        ✓
                      </div>
                      <span>Ganhe 75 pontos ao enviar uma mensagem</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="bg-gradient-to-br from-green-400 to-emerald-600 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs shadow-sm">
                        ✓
                      </div>
                      <span>Desbloqueie a conquista "Comunicador"</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="bg-gradient-to-br from-green-400 to-emerald-600 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs shadow-sm">
                        ✓
                      </div>
                      <span>Avance para o próximo nível de gamificação</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="bg-gradient-to-br from-green-400 to-emerald-600 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs shadow-sm">
                        ✓
                      </div>
                      <span>Receba atendimento prioritário</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#0C1F38] mb-6 text-center">
            Nossa Localização
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] relative">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0254648900747!2d-47.45890702376788!3d-23.488654259180818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58abceb48f503%3A0xf7bbc365688a51d5!2sSorocaba%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1688489700950!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da localização da Chargin"
              ></iframe>
            </div>
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-[#00A651] mr-2" />
                <p className="font-medium text-[#0C1F38]">
                  Estamos aqui: Sorocaba/SP
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0C1F38] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Preferimos conversas que geram soluções.
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Nos envie uma mensagem e vamos ajudar no que for preciso.
          </p>
          <Button
            onClick={() => (window.location.href = "/")}
            className="bg-gradient-to-r from-[#00A651] to-[#008C45] hover:from-[#00A651]/90 hover:to-[#008C45]/90 text-white px-8 py-6 shadow-md transform hover:scale-105 transition-all duration-300"
            size="lg"
          >
            Voltar para Home
          </Button>
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

export default ContactPage;
