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
import AppCarousel from "@/components/AppCarousel";
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
import Header from "@/components/Header";

const AppPage = () => {
  // Gamification levels
  const gamificationLevels = [
    {
      name: "Bronze",
      icon: Trophy,
      description: "Intervalo de Pontos: 0 a 299 pontos",
      progress: 40,
      points: 120,
      pointsToNextLevel: 300,
      level: 1,
      maxLevel: 3,
      benefits: [
        "Badge Bronze exibido no perfil do usuário",
        "Acesso a promoções e desafios exclusivos para acumular pontos adicionais",
        "Notificações de promoções exclusivas",
      ],
      variant: "bronze",
    },
    {
      name: "Prata",
      icon: Award,
      description: "Intervalo de Pontos: 300 a 599 pontos",
      progress: 20,
      points: 350,
      pointsToNextLevel: 600,
      level: 1,
      maxLevel: 5,
      benefits: [
        "Badge Prata no perfil",
        "5% de desconto por kWh em estações parceiras",
        "Prioridade no acesso a promoções regionais",
      ],
      variant: "silver",
    },
    {
      name: "Ouro",
      icon: Star,
      description: "Intervalo de Pontos: 600 a 999 pontos",
      progress: 5,
      points: 650,
      pointsToNextLevel: 1000,
      level: 1,
      maxLevel: 5,
      benefits: [
        "Badge Ouro no perfil",
        "10% de desconto em serviços de parceiros (oficinas, elétricas)",
        "1 recarga gratuita por mês (limitada a R$ 20)",
        "Suporte prioritário 24/7",
      ],
      variant: "gold",
    },
    {
      name: "Premium",
      icon: Sparkles,
      description: "Intervalo de Pontos: 1.000 pontos ou mais",
      progress: 0,
      points: 1050,
      pointsToNextLevel: 1500,
      level: 1,
      maxLevel: 3,
      benefits: [
        "Badge Premium no perfil",
        "Acesso antecipado a estações premium (ex.: ultra-rápidas)",
        "Entrada VIP em eventos e campanhas da Chargin",
        "Suporte prioritário",
        "Bônus mensal de 10% sobre os pontos acumulados",
      ],
      variant: "premium",
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

      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0C1F38] to-[#0C1F38]/90 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#00A651]/30 blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-96 h-96 rounded-full bg-[#00A651]/30 blur-3xl"></div>
          <div className="absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-[#00A651]/20 text-[#00FF99] font-medium text-sm mb-4 border border-[#00A651]/30">
                  Novo App Chargin 2.0
                </span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Mobilidade elétrica na palma da mão
                </h1>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                Descubra como o app da Chargin transforma sua experiência de
                recarga com tecnologia, vantagens e recompensas exclusivas.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-105 transition-transform duration-300"
                  onClick={() => {
                    // Analytics tracking could be added here
                    console.log("Google Play button clicked");
                  }}
                >
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png"
                    alt="Disponível no Google Play"
                    className="h-16 drop-shadow-lg"
                  />
                </a>
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-105 transition-transform duration-300"
                  onClick={() => {
                    // Analytics tracking could be added here
                    console.log("App Store button clicked");
                  }}
                >
                  <img
                    src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                    alt="Baixar na App Store"
                    className="h-16 drop-shadow-lg"
                  />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* App Carousel */}
              <AppCarousel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gamification Section */}
      <section className="py-20 bg-white relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute top-0 left-0 w-full h-64 text-gray-50"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#00A651]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#00A651]/20 to-[#00A651]/40 text-[#00A651] mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </span>
            </div>
            <h2 className="text-4xl font-bold text-[#0C1F38] mb-4 bg-gradient-to-r from-[#0C1F38] to-[#0C1F38]/70 bg-clip-text text-transparent">
              Seus Desafios, Suas Recompensas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Acumule pontos, suba de nível e desbloqueie vantagens exclusivas a
              cada recarga. Transforme sua experiência de mobilidade elétrica em
              uma jornada de conquistas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {gamificationLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="transform hover:-translate-y-2 transition-all duration-300"
              >
                <LevelCard
                  title={level.name}
                  level={level.level}
                  maxLevel={level.maxLevel}
                  points={level.points}
                  pointsToNextLevel={level.pointsToNextLevel}
                  icon={level.icon}
                  description={level.description}
                  benefits={level.benefits}
                  variant={level.variant}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 relative z-10">
            <div className="flex flex-col items-center mb-8">
              <div className="inline-block mb-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/40 text-amber-500 mb-4 mx-auto">
                  <Trophy className="h-6 w-6" />
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#0C1F38] mb-2 bg-gradient-to-r from-[#0C1F38] to-[#0C1F38]/70 bg-clip-text text-transparent">
                Suas Conquistas
              </h3>
              <p className="text-gray-600 max-w-2xl text-center mb-6">
                Desbloqueie conquistas exclusivas e mostre seu progresso na
                comunidade Chargin
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
                className="transform hover:scale-110 transition-all duration-300"
              >
                <AchievementBadge
                  icon={Zap}
                  label="Primeira Recarga"
                  description="Complete sua primeira recarga em uma estação Chargin"
                  unlocked={true}
                  level={3}
                  maxLevel={3}
                  variant="zap"
                  size="lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="transform hover:scale-110 transition-all duration-300"
              >
                <AchievementBadge
                  icon={Flame}
                  label="Recarga Rápida"
                  description="Complete 5 recargas rápidas em menos de 30 minutos"
                  unlocked={true}
                  level={2}
                  maxLevel={3}
                  variant="flame"
                  size="lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
                className="transform hover:scale-110 transition-all duration-300"
              >
                <AchievementBadge
                  icon={MapPin}
                  label="Explorador"
                  description="Utilize 10 estações diferentes"
                  unlocked={true}
                  level={1}
                  maxLevel={3}
                  variant="map"
                  size="lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
                className="transform hover:scale-110 transition-all duration-300"
              >
                <AchievementBadge
                  icon={Star}
                  label="Avaliador"
                  description="Avalie 5 estações diferentes"
                  unlocked={true}
                  level={3}
                  maxLevel={3}
                  variant="star"
                  size="lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                viewport={{ once: true }}
                className="transform hover:scale-110 transition-all duration-300"
              >
                <AchievementBadge
                  icon={Trophy}
                  label="Maratonista"
                  description="Recarregue 3 dias consecutivos"
                  unlocked={false}
                  level={0}
                  maxLevel={3}
                  variant="trophy"
                  size="lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                viewport={{ once: true }}
                className="transform hover:scale-110 transition-all duration-300"
              >
                <AchievementBadge
                  icon={Sparkles}
                  label="Eco Warrior"
                  description="Economize 100kg de CO₂ usando estações Chargin"
                  unlocked={false}
                  level={0}
                  maxLevel={3}
                  variant="sparkles"
                  size="lg"
                />
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-16 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center mb-8">
              <div className="inline-block mb-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-400/20 to-purple-600/40 text-purple-500 mb-4 mx-auto shadow-lg border border-purple-100/30 transform hover:scale-110 transition-all duration-300">
                  <Target className="h-6 w-6" />
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#0C1F38] mb-2 bg-gradient-to-r from-[#0C1F38] to-[#0C1F38]/70 bg-clip-text text-transparent">
                Seu Progresso
              </h3>
              <p className="text-gray-600 max-w-2xl text-center mb-6">
                Acompanhe suas métricas e conquistas na plataforma Chargin
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
              {/* Decorative background elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white/95 backdrop-blur-sm transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden relative">
                <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-blue-500/10 blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-blue-500/10 blur-xl"></div>
                <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-full mb-4 shadow-lg transform hover:scale-110 transition-all duration-300 border border-white/20 relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full blur-sm bg-gradient-to-br from-blue-400 to-blue-600 -z-10 opacity-60"></div>
                    <Zap className="h-8 w-8 text-white drop-shadow-md" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0C1F38] mb-2">
                    Recargas Totais
                  </h4>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-2 drop-shadow-sm">
                    27
                  </div>
                  <div className="w-full bg-blue-100/50 p-2 rounded-lg border border-blue-200/50 mb-2">
                    <div className="text-xs text-blue-700 font-medium">
                      +3 recargas na última semana
                    </div>
                  </div>
                  <ProgressBadge
                    label="Próximo nível"
                    value={27}
                    max={50}
                    variant="energy"
                    className="w-full mt-2"
                    animated={true}
                  />
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white/95 backdrop-blur-sm transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden relative">
                <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-amber-500/10 blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-amber-500/10 blur-xl"></div>
                <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                  <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-4 rounded-full mb-4 shadow-lg transform hover:scale-110 transition-all duration-300 border border-white/20 relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full blur-sm bg-gradient-to-br from-amber-400 to-amber-600 -z-10 opacity-60"></div>
                    <Trophy className="h-8 w-8 text-white drop-shadow-md" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0C1F38] mb-2">
                    Pontos Acumulados
                  </h4>
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent mb-2 drop-shadow-sm">
                    350
                  </div>
                  <div className="w-full bg-amber-100/50 p-2 rounded-lg border border-amber-200/50 mb-2">
                    <div className="text-xs text-amber-700 font-medium">
                      +50 pontos esta semana
                    </div>
                  </div>
                  <ProgressBadge
                    label="Progresso para Ouro"
                    value={350}
                    max={600}
                    variant="points"
                    className="w-full mb-3"
                    animated={true}
                  />
                  <Badge
                    variant="outline"
                    className="bg-gradient-to-r from-amber-400 to-amber-600 text-white font-semibold shadow-md px-3 py-1 transform hover:scale-105 transition-all duration-300"
                  >
                    Nível Bronze
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white/95 backdrop-blur-sm transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden relative">
                <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-emerald-500/10 blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-emerald-500/10 blur-xl"></div>
                <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                  <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-4 rounded-full mb-4 shadow-lg transform hover:scale-110 transition-all duration-300 border border-white/20 relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full blur-sm bg-gradient-to-br from-green-400 to-emerald-600 -z-10 opacity-60"></div>
                    <Leaf className="h-8 w-8 text-white drop-shadow-md" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0C1F38] mb-2">
                    CO₂ Economizado
                  </h4>
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent mb-2 drop-shadow-sm">
                    78kg
                  </div>
                  <div className="w-full bg-emerald-100/50 p-2 rounded-lg border border-emerald-200/50 mb-2">
                    <div className="text-xs text-emerald-700 font-medium">
                      Equivalente a 5 árvores plantadas
                    </div>
                  </div>
                  <ProgressBadge
                    label="Meta mensal"
                    value={78}
                    max={100}
                    variant="eco"
                    className="w-full mt-2"
                    animated={true}
                  />
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white/95 backdrop-blur-sm transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden relative">
                <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-pink-500/10 blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-pink-500/10 blur-xl"></div>
                <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                  <div className="bg-gradient-to-br from-rose-400 to-pink-600 p-4 rounded-full mb-4 shadow-lg transform hover:scale-110 transition-all duration-300 border border-white/20 relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full blur-sm bg-gradient-to-br from-rose-400 to-pink-600 -z-10 opacity-60"></div>
                    <Target className="h-8 w-8 text-white drop-shadow-md" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0C1F38] mb-2">
                    Desafios Completos
                  </h4>
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent mb-2 drop-shadow-sm">
                    4/12
                  </div>
                  <div className="w-full bg-pink-100/50 p-2 rounded-lg border border-pink-200/50 mb-2">
                    <div className="text-xs text-pink-700 font-medium">
                      Próximo desafio em 2 dias
                    </div>
                  </div>
                  <ProgressBadge
                    label="Progresso"
                    value={4}
                    max={12}
                    variant="challenge"
                    className="w-full mt-2"
                    animated={true}
                  />
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-[#00A651]/5 rounded-full blur-3xl animate-pulse opacity-70"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse opacity-70"
            style={{ animationDuration: "10s", animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/3 left-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse opacity-50"
            style={{ animationDuration: "12s", animationDelay: "2s" }}
          ></div>
          <svg
            className="absolute bottom-0 left-0 w-full h-32 text-white"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/40 text-blue-500 mb-4 mx-auto shadow-lg border border-blue-100/30 transform hover:scale-110 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
                  <path d="M7 7h.01"></path>
                </svg>
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0C1F38] via-[#1a3c5e] to-[#0C1F38]/70 bg-clip-text text-transparent drop-shadow-sm">
              Planos Inteligentes para Cada Estilo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Escolha o plano que melhor se adapta às suas necessidades de
              recarga. Soluções personalizadas para motoristas individuais,
              empresas e residências.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all h-full bg-white/95 backdrop-blur-sm transform hover:-translate-y-2 hover:scale-[1.03] overflow-hidden relative group">
                  <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-emerald-500/10 blur-xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>
                  <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-emerald-500/10 blur-xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>
                  <CardContent className="p-6 flex flex-col h-full relative z-10">
                    <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-5 shadow-lg transform group-hover:scale-110 transition-all duration-300 border border-white/20 relative">
                      <div className="absolute inset-0 rounded-full blur-sm bg-gradient-to-br from-green-400 to-emerald-600 -z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                      {React.cloneElement(plan.icon, {
                        className: "h-8 w-8 text-white drop-shadow-md",
                      })}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#0C1F38] group-hover:text-[#00A651] transition-colors duration-300">
                      {plan.title}
                    </h3>
                    <p className="text-gray-600 mb-5">{plan.description}</p>
                    <ul className="mt-auto space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300 ease-in-out"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <div className="text-[#00A651] flex-shrink-0">
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
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#00A651]/10 to-[#00A651]/5 rounded-full shadow-sm border border-[#00A651]/10">
              <p className="text-[#00A651] font-medium flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4" />
                Todos os planos incluem pontuação e acesso a promoções especiais
              </p>
            </div>
          </motion.div>
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
                <Card className="border-none shadow-lg hover:shadow-xl transition-all h-full bg-white/95 backdrop-blur-sm transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden relative">
                  <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-blue-500/10 blur-xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-blue-500/10 blur-xl"></div>
                  <CardContent className="p-6 flex flex-col items-center text-center h-full relative z-10">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-full mb-4 shadow-lg transform hover:scale-110 transition-all duration-300 border border-white/20 relative">
                      <div className="absolute inset-0 rounded-full blur-sm bg-gradient-to-br from-blue-400 to-blue-600 -z-10 opacity-60"></div>
                      {React.cloneElement(feature.icon, {
                        className: "h-8 w-8 text-white drop-shadow-md",
                      })}
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
                className="border-none shadow-lg hover:shadow-xl transition-all bg-white/80 backdrop-blur-sm transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden relative"
              >
                <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-green-500/10 blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-green-500/10 blur-xl"></div>
                <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                  <div className="bg-gradient-to-br from-green-500 to-teal-600 p-4 rounded-full mb-4 shadow-lg transform hover:scale-110 transition-all duration-300 border border-white/20 relative">
                    <div className="absolute inset-0 rounded-full blur-sm bg-gradient-to-br from-green-500 to-teal-600 -z-10 opacity-60"></div>
                    {React.cloneElement(feature.icon, {
                      className: "h-8 w-8 text-white drop-shadow-md",
                    })}
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
