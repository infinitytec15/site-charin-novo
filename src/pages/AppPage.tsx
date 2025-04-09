import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  MapPin,
  CreditCard,
  Clock,
  Gift,
  Bell,
  Award,
  Zap,
  Users,
  Building,
  Home,
  Leaf,
  Calendar,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Trophy,
  Star,
  Target,
  Flame,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LevelCard } from "@/components/ui/level-card";
import { AchievementBadge } from "@/components/ui/achievement-badge";
import { ProgressBadge } from "@/components/ui/progress-badge";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AppPage = () => {
  // Gamification levels
  const gamificationLevels = [
    {
      name: "Bronze",
      icon: <Award className="h-8 w-8 text-amber-600" />,
      description: "Recarregue 5 vezes no mês e ganhe pontos bônus!",
      progress: 40,
      points: 120,
      pointsToNextLevel: 300,
      level: 1,
      maxLevel: 3,
      benefits: [
        "5% de desconto em recargas rápidas",
        "Acumule 2x mais pontos aos domingos",
        "Notificações de promoções exclusivas",
      ],
    },
    {
      name: "Prata",
      icon: <Award className="h-8 w-8 text-gray-400" />,
      description: "Suba de nível: Bronze → Prata → Ouro",
      progress: 20,
      points: 60,
      pointsToNextLevel: 300,
      level: 1,
      maxLevel: 5,
      benefits: [
        "10% de desconto em recargas rápidas",
        "Reserva prioritária de estações",
        "Acumule 3x mais pontos aos domingos",
      ],
    },
    {
      name: "Ouro",
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      description: "Troque pontos por créditos ou brindes em parceiros!",
      progress: 5,
      points: 15,
      pointsToNextLevel: 300,
      level: 0,
      maxLevel: 5,
      benefits: [
        "15% de desconto em todas as recargas",
        "Acesso a estações exclusivas",
        "Suporte prioritário 24/7",
        "Bônus mensal de 50 pontos",
      ],
    },
    {
      name: "Premium",
      icon: <Award className="h-8 w-8 text-[#00A651]" />,
      description: "Acesso antecipado a estações premium",
      progress: 0,
      points: 0,
      pointsToNextLevel: 500,
      level: 0,
      maxLevel: 3,
      benefits: [
        "20% de desconto em todas as recargas",
        "Acesso a estações premium exclusivas",
        "Suporte VIP com atendimento dedicado",
        "Bônus mensal de 100 pontos",
        "Convites para eventos exclusivos",
      ],
    },
  ];

  // App plans
  const appPlans = [
    {
      icon: <Zap className="h-8 w-8 text-[#00A651]" />,
      title: "Plano Básico",
      description: "Pagamento por uso, sem mensalidade.",
      features: [
        "Acesso a todas as estações",
        "Pagamento por uso",
        "Sistema de pontos básico",
      ],
    },
    {
      icon: <Users className="h-8 w-8 text-[#00A651]" />,
      title: "Plano Assinatura",
      description: "Descontos fixos, cashback e bônus em recarga.",
      features: [
        "Descontos em todas as recargas",
        "Cashback de 5%",
        "Pontos em dobro",
      ],
    },
    {
      icon: <Building className="h-8 w-8 text-[#00A651]" />,
      title: "Plano Corporativo",
      description: "Gestão de frota, relatórios e prioridade no suporte.",
      features: [
        "Gestão de múltiplos veículos",
        "Relatórios detalhados",
        "Suporte prioritário",
      ],
    },
    {
      icon: <Home className="h-8 w-8 text-[#00A651]" />,
      title: "Plano Residencial",
      description:
        "Instalação de recarga em casa com financiamento ou aluguel.",
      features: [
        "Instalação residencial",
        "Manutenção incluída",
        "Tarifas especiais",
      ],
    },
  ];

  // App features
  const appFeatures = [
    {
      icon: <MapPin className="h-8 w-8 text-[#00A651]" />,
      title: "Localização em tempo real",
      description: "Encontre pontos de recarga disponíveis próximos a você.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-[#00A651]" />,
      title: "Reserva de horário",
      description: "Agende seu horário de recarga com apenas um toque.",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-[#00A651]" />,
      title: "Pagamento direto no app",
      description: "Utilize Pix, cartão de crédito ou saldo pré-carregado.",
    },
    {
      icon: <Bell className="h-8 w-8 text-[#00A651]" />,
      title: "Notificações inteligentes",
      description: "Receba alertas sobre promoções e status da recarga.",
    },
    {
      icon: <Clock className="h-8 w-8 text-[#00A651]" />,
      title: "Monitoramento ao vivo",
      description: "Acompanhe o status da sua recarga em tempo real.",
    },
  ];

  // Sustainability features
  const sustainabilityFeatures = [
    {
      icon: <Leaf className="h-8 w-8 text-[#00A651]" />,
      title: "100% energia renovável",
      description:
        "Todas as nossas estações utilizam energia de fontes renováveis.",
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-[#00A651]" />,
      title: "Redução de CO₂",
      description:
        "Acompanhe sua contribuição para a redução de emissões de carbono.",
    },
    {
      icon: <Gift className="h-8 w-8 text-[#00A651]" />,
      title: "Educação e conscientização",
      description: "Conteúdo exclusivo sobre mobilidade sustentável no app.",
    },
  ];

  // FAQ items
  const faqItems = [
    {
      question: "O app é gratuito?",
      answer:
        "Sim, o aplicativo é 100% gratuito para baixar e usar. Você só paga pelo serviço de recarga quando utilizar uma de nossas estações.",
    },
    {
      question: "Como acumulo pontos?",
      answer:
        "A cada recarga realizada, você ganha pontos automaticamente. Quanto mais você recarrega, mais pontos acumula. Existem também desafios e promoções especiais que multiplicam seus pontos.",
    },
    {
      question: "Posso usar em mais de um veículo?",
      answer:
        "Sim, você pode cadastrar múltiplos veículos na sua conta e selecionar qual está utilizando no momento da recarga.",
    },
    {
      question: "Como funciona o pagamento?",
      answer:
        "O app oferece diversas formas de pagamento: cartão de crédito/débito, PIX, ou saldo pré-carregado na carteira digital do aplicativo.",
    },
    {
      question: "O que fazer se a estação estiver com problema?",
      answer:
        "Dentro do app, você pode reportar problemas diretamente na página da estação. Nossa equipe de suporte receberá o alerta e tomará as providências necessárias.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Aplicativo - Chargin</title>
        <meta
          name="description"
          content="Baixe o aplicativo da Chargin e tenha controle total sobre suas recargas, histórico, pagamentos e pontos de fidelidade."
        />
      </Helmet>

      {/* Header/Navigation */}
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
          <Button
            className="bg-[#00A651] text-white hover:bg-[#00A651]/80"
            onClick={() => (window.location.href = "/app")}
          >
            Baixe o App
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0C1F38] to-[#0C1F38]/90 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Mobilidade elétrica na palma da mão
              </h1>
              <p className="text-xl text-gray-300">
                Descubra como o app da Chargin transforma sua experiência de
                recarga com tecnologia, vantagens e recompensas exclusivas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    // Analytics tracking could be added here
                    console.log("Google Play button clicked");
                  }}
                >
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png"
                    alt="Disponível no Google Play"
                    className="h-16"
                  />
                </a>
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    // Analytics tracking could be added here
                    console.log("App Store button clicked");
                  }}
                >
                  <img
                    src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                    alt="Baixar na App Store"
                    className="h-16"
                  />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mx-auto max-w-[300px]"
            >
              <div className="relative z-10 overflow-hidden rounded-[36px] border-[8px] border-gray-800 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?w=800&q=80"
                  alt="App da Chargin em um smartphone"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 h-72 w-72 rounded-full bg-[#00A651]/20 blur-3xl"></div>
              <div className="absolute -top-4 -right-4 h-72 w-72 rounded-full bg-[#00A651]/20 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gamification Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
              ⚡ Seus Desafios, Suas Recompensas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Acumule pontos, suba de nível e desbloqueie vantagens exclusivas a
              cada recarga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gamificationLevels.map((level, index) => (
              <LevelCard
                key={index}
                title={level.name}
                level={level.level}
                maxLevel={level.maxLevel}
                points={level.points}
                pointsToNextLevel={level.pointsToNextLevel}
                icon={Award}
                description={level.description}
                benefits={level.benefits}
              />
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-[#0C1F38] mb-6 text-center">
              Suas Conquistas
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              <AchievementBadge
                icon={Zap}
                label="Primeira Recarga"
                description="Complete sua primeira recarga em uma estação Chargin"
                unlocked={true}
                level={3}
                maxLevel={3}
              />
              <AchievementBadge
                icon={Flame}
                label="Recarga Rápida"
                description="Complete 5 recargas rápidas em menos de 30 minutos"
                unlocked={true}
                level={2}
                maxLevel={3}
              />
              <AchievementBadge
                icon={MapPin}
                label="Explorador"
                description="Utilize 10 estações diferentes"
                unlocked={true}
                level={1}
                maxLevel={3}
              />
              <AchievementBadge
                icon={Star}
                label="Avaliador"
                description="Avalie 5 estações diferentes"
                unlocked={true}
                level={3}
                maxLevel={3}
              />
              <AchievementBadge
                icon={Trophy}
                label="Maratonista"
                description="Recarregue 3 dias consecutivos"
                unlocked={false}
                level={0}
                maxLevel={3}
              />
              <AchievementBadge
                icon={Sparkles}
                label="Eco Warrior"
                description="Economize 100kg de CO₂ usando estações Chargin"
                unlocked={false}
                level={0}
                maxLevel={3}
              />
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-[#0C1F38] mb-6 text-center">
              Seu Progresso
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card className="border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-[#00A651]/20 p-4 rounded-full mb-4">
                    <Zap className="h-8 w-8 text-[#00A651]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0C1F38] mb-2">
                    Recargas Totais
                  </h4>
                  <div className="text-3xl font-bold text-[#00A651] mb-2">
                    27
                  </div>
                  <ProgressBadge
                    label="Próximo nível"
                    value={27}
                    max={50}
                    variant="success"
                    className="w-full mt-2"
                  />
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-[#00A651]/20 p-4 rounded-full mb-4">
                    <Trophy className="h-8 w-8 text-[#00A651]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0C1F38] mb-2">
                    Pontos Acumulados
                  </h4>
                  <div className="text-3xl font-bold text-[#00A651] mb-2">
                    1,250
                  </div>
                  <Badge variant="outline" className="bg-gray-100">
                    Nível Bronze
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-[#00A651]/20 p-4 rounded-full mb-4">
                    <Leaf className="h-8 w-8 text-[#00A651]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0C1F38] mb-2">
                    CO₂ Economizado
                  </h4>
                  <div className="text-3xl font-bold text-[#00A651] mb-2">
                    78kg
                  </div>
                  <ProgressBadge
                    label="Meta mensal"
                    value={78}
                    max={100}
                    variant="success"
                    className="w-full mt-2"
                  />
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-[#00A651]/20 p-4 rounded-full mb-4">
                    <Target className="h-8 w-8 text-[#00A651]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0C1F38] mb-2">
                    Desafios Completos
                  </h4>
                  <div className="text-3xl font-bold text-[#00A651] mb-2">
                    4/12
                  </div>
                  <ProgressBadge
                    label="Progresso"
                    value={4}
                    max={12}
                    variant="success"
                    className="w-full mt-2"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
              Planos Inteligentes – Pensados para Cada Estilo
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Escolha o plano que melhor se adapta às suas necessidades de
              recarga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appPlans.map((plan, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all h-full"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="bg-[#00A651]/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#0C1F38]">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <ul className="mt-auto space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="text-[#00A651]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-[#00A651] font-medium">
              ✨ Todos os planos incluem pontuação e acesso a promoções
              especiais.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
              Tecnologia que Gira com Você
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recursos avançados para tornar sua experiência de recarga mais
              simples e eficiente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="bg-[#00A651]/20 p-4 rounded-full mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-[#0C1F38]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-[#F0FFF4]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
              Sustentabilidade como Princípio
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contribua para um futuro mais verde a cada recarga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sustainabilityFeatures.map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-[#00A651]/20 p-4 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#0C1F38]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre o aplicativo da Chargin.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-[#0C1F38] hover:text-[#00A651] font-medium">
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

      {/* Download CTA Section */}
      <section className="py-20 bg-[#0C1F38] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Seu próximo carregamento começa com um toque
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Baixe agora e transforme sua experiência com mobilidade elétrica.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                // Analytics tracking could be added here
                console.log("Google Play button clicked");
              }}
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png"
                alt="Disponível no Google Play"
                className="h-16"
              />
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                // Analytics tracking could be added here
                console.log("App Store button clicked");
              }}
            >
              <img
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                alt="Baixar na App Store"
                className="h-16"
              />
            </a>
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
                  <a
                    href="/contato"
                    className="text-gray-600 hover:text-[#00A651]"
                  >
                    Contato
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
                <li className="text-gray-600">Sorocaba, SP - Brasil</li>
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

export default AppPage;
