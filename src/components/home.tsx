import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Clock,
  MapPin,
  Calculator,
  HelpCircle,
  BookOpen,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MapSection from "./MapSection";
import ChargingSimulator from "./ChargingSimulator";
import FranchiseSection from "./FranchiseSection";
import TestimonialsCarousel from "./TestimonialsCarousel";
import FAQ from "./FAQ";
import Header from "./Header";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation - Modern 3D Style */}
      <Header />

      {/* Hero Section - Modern 3D Style */}
      <section className="container py-24 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00A651]/10 text-[#00A651] font-medium text-sm mb-4">
              <div className="mr-2 bg-[#00A651] rounded-full w-2 h-2 animate-pulse"></div>
              Mobilidade Sustentável
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#0C1F38] leading-tight tracking-tight">
              <span className="relative inline-block">
                <span className="relative z-10">A revolução</span>
                <div className="absolute bottom-2 left-0 w-full h-3 bg-[#00A651]/20 rounded-full -z-10"></div>
              </span>{" "}
              da mobilidade elétrica começa aqui
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Energize seu caminho com a melhor rede de carregamento do Brasil.
              Recargas rápidas, seguras e disponíveis 24h.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button
                className="bg-[#0C1F38] hover:bg-[#0C1F38]/90 text-white px-8 py-7 rounded-xl shadow-3d transition-all duration-300 transform hover:translate-y-[-2px]"
                size="lg"
                onClick={() => (window.location.href = "/#map")}
              >
                <div className="mr-3 bg-white/20 p-2 rounded-lg">
                  <MapPin className="h-5 w-5" />
                </div>
                Encontre um ponto de recarga
              </Button>

              <Button
                variant="outline"
                className="border-2 border-[#0C1F38] text-[#0C1F38] hover:bg-[#0C1F38]/10 px-8 py-7 rounded-xl shadow-md transition-all duration-300 transform hover:translate-y-[-2px]"
                size="lg"
                onClick={() => (window.location.href = "/#simulator")}
              >
                <div className="mr-3 bg-[#0C1F38]/10 p-2 rounded-lg">
                  <Calculator className="h-5 w-5" />
                </div>
                Simule sua recarga
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-[#00A651]/20 flex items-center justify-center text-[#00A651] font-bold">
                  +
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=1"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=2"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=3"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Mais de{" "}
                <span className="font-bold text-[#0C1F38]">
                  10.000 usuários
                </span>{" "}
                satisfeitos
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00A651] to-[#0C1F38] rounded-2xl blur opacity-30 animate-pulse"></div>
            <div className="relative bg-white rounded-2xl p-2 shadow-3d">
              <img
                src="https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?w=800&q=80"
                alt="Carro elétrico carregando"
                className="rounded-xl w-full h-auto"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#00A651] to-[#00A651]/80 p-5 rounded-xl shadow-lg transform rotate-3 animate-float">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-xl">+500 estações</p>
                  <p className="text-white/80 text-sm">em todo o Brasil</p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg rotate-[-6deg] animate-float">
              <div className="flex items-center gap-3">
                <div className="bg-[#00A651]/10 p-2 rounded-lg">
                  <Zap className="h-5 w-5 text-[#00A651]" />
                </div>
                <p className="font-bold text-[#0C1F38]">Recarga Rápida</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A651]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0C1F38]/5 rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#00A651]/10 text-[#00A651] font-medium text-sm mb-4"
            >
              <div className="mr-2 bg-[#00A651] rounded-full w-2 h-2 animate-pulse"></div>
              Vantagens Exclusivas
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#0C1F38] mb-4 relative inline-block"
            >
              <span className="relative z-10">
                Por que escolher nossa rede?
              </span>
              <div className="absolute bottom-2 left-0 w-full h-3 bg-[#00A651]/20 rounded-full -z-10"></div>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              Descubra como nossa infraestrutura de recarga está transformando a
              mobilidade elétrica no Brasil.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <Card className="border-none shadow-3d bg-white rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-lg h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00A651]/30 to-[#0C1F38]/30 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                <CardContent className="p-8 flex flex-col items-center text-center relative h-full">
                  <div className="bg-gradient-to-br from-[#00A651] to-[#008C45] p-5 rounded-full shadow-lg relative overflow-hidden mb-8 group-hover:shadow-neon transition-all duration-300">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-full bg-black/10"></div>
                    <Zap className="h-8 w-8 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] relative z-10 animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#0C1F38] group-hover:text-[#00A651] transition-colors duration-300">
                    Recargas Ultrarrápidas
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Nossos carregadores de alta potência garantem recargas até
                    80% em menos de 30 minutos, otimizando seu tempo.
                  </p>
                  <div className="mt-6 w-12 h-1 bg-[#00A651]/30 rounded-full group-hover:w-24 transition-all duration-300"></div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <Card className="border-none shadow-3d bg-white rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-lg h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00A651]/30 to-[#0C1F38]/30 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                <CardContent className="p-8 flex flex-col items-center text-center relative h-full">
                  <div className="bg-gradient-to-br from-[#00A651] to-[#008C45] p-5 rounded-full shadow-lg relative overflow-hidden mb-8 group-hover:shadow-neon transition-all duration-300">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-full bg-black/10"></div>
                    <Clock className="h-8 w-8 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] relative z-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#0C1F38] group-hover:text-[#00A651] transition-colors duration-300">
                    Disponível 24h
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Nossas estações funcionam 24 horas por dia, 7 dias por
                    semana, garantindo energia quando você precisar.
                  </p>
                  <div className="mt-6 w-12 h-1 bg-[#00A651]/30 rounded-full group-hover:w-24 transition-all duration-300"></div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <Card className="border-none shadow-3d bg-white rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-lg h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00A651]/30 to-[#0C1F38]/30 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                <CardContent className="p-8 flex flex-col items-center text-center relative h-full">
                  <div className="bg-gradient-to-br from-[#00A651] to-[#008C45] p-5 rounded-full shadow-lg relative overflow-hidden mb-8 group-hover:shadow-neon transition-all duration-300">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-full bg-black/10"></div>
                    <MapPin className="h-8 w-8 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] relative z-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#0C1F38] group-hover:text-[#00A651] transition-colors duration-300">
                    Ampla Cobertura
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Com mais de 500 estações estrategicamente posicionadas pelo
                    Brasil, você nunca ficará sem energia em suas viagens.
                  </p>
                  <div className="mt-6 w-12 h-1 bg-[#00A651]/30 rounded-full group-hover:w-24 transition-all duration-300"></div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#00A651]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#0C1F38]/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#00A651]/10 text-[#00A651] font-medium text-sm mb-4"
            >
              <div className="mr-2 bg-[#00A651] rounded-full w-2 h-2 animate-pulse"></div>
              Mapa Interativo
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#0C1F38] mb-4 relative inline-block"
            >
              <span className="relative z-10">Encontre uma Estação</span>
              <div className="absolute bottom-2 left-0 w-full h-3 bg-[#00A651]/20 rounded-full -z-10"></div>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              Localize o ponto de recarga mais próximo de você. Filtre por tipo
              de conector, disponibilidade em tempo real e preço por kWh.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00A651] to-[#0C1F38] rounded-3xl blur opacity-30 animate-pulse"></div>
            <div
              className="w-full border border-gray-200 rounded-3xl shadow-3d overflow-hidden bg-white relative group transition-all duration-500"
              style={{
                height: "800px",
                position: "relative",
                zIndex: 1,
                display: "block",
              }}
              id="home-map-container"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A651]/5 to-[#0C1F38]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-gray-100 flex items-center gap-2 text-sm font-medium text-[#0C1F38]">
                <MapPin className="h-4 w-4 text-[#00A651]" />
                <span>Mapa de Estações Chargin</span>
              </div>
              <MapSection
                containerHeight="800px"
                containerClassName="border-none shadow-none rounded-none"
              />
            </div>
          </motion.div>

          <div className="flex justify-center mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-md border border-gray-100 flex items-center gap-6 text-sm text-gray-700 font-medium"
            >
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
                <span>Disponível</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                <span>Ocupado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gray-500"></div>
                <span>Offline</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Simulator Section */}
      <section
        id="simulator"
        className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#00A651]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-[#0C1F38]/5 rounded-full blur-3xl animate-[pulse_15s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#0C1F38]/10 rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite]"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-[#00A651]/20 rounded-full animate-[float_5s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-40 right-20 w-8 h-8 bg-[#00A651]/30 rounded-full animate-[float_7s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#0C1F38]/20 rounded-full animate-[float_4s_ease-in-out_infinite]"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00A651]/10 to-[#00A651]/20 text-[#00A651] font-medium text-sm mb-4 shadow-sm">
                <div className="mr-2 bg-[#00A651] rounded-full w-2.5 h-2.5 animate-[pulse_2s_ease-in-out_infinite]"></div>
                <span className="relative overflow-hidden inline-block">
                  Calculadora Inteligente
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00A651]/40 transform -translate-x-full animate-[shimmer_2.5s_infinite]"></span>
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#0C1F38] mb-4 leading-tight">
                <span className="relative inline-block">
                  <span className="relative z-10">Simule sua Recarga</span>
                  <div className="absolute bottom-2 left-0 w-full h-3 bg-[#00A651]/20 rounded-full -z-10 transform transition-all duration-300 group-hover:h-5"></div>
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                Planeje com precisão. Simule sua recarga e chegue ao seu destino
                com energia de sobra. Nosso simulador calcula o tempo e custo
                com base no seu modelo de veículo.
              </p>

              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-100/50 shadow-lg mt-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <ul className="space-y-6">
                  <li className="flex items-center group">
                    <div className="bg-gradient-to-br from-[#00A651] to-[#008C45] rounded-full p-3 mr-5 shadow-lg relative overflow-hidden group-hover:shadow-neon transition-all duration-300">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-full bg-black/10"></div>
                      <ArrowRight className="h-5 w-5 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] relative z-10 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg group-hover:text-[#00A651] transition-colors duration-300">
                      Selecione seu modelo de veículo
                    </span>
                  </li>
                  <li className="flex items-center group">
                    <div className="bg-gradient-to-br from-[#00A651] to-[#008C45] rounded-full p-3 mr-5 shadow-lg relative overflow-hidden group-hover:shadow-neon transition-all duration-300">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-full bg-black/10"></div>
                      <ArrowRight className="h-5 w-5 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] relative z-10 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg group-hover:text-[#00A651] transition-colors duration-300">
                      Informe o nível atual da bateria
                    </span>
                  </li>
                  <li className="flex items-center group">
                    <div className="bg-gradient-to-br from-[#00A651] to-[#008C45] rounded-full p-3 mr-5 shadow-lg relative overflow-hidden group-hover:shadow-neon transition-all duration-300">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-full bg-black/10"></div>
                      <ArrowRight className="h-5 w-5 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] relative z-10 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg group-hover:text-[#00A651] transition-colors duration-300">
                      Escolha o nível desejado de carga
                    </span>
                  </li>
                  <li className="flex items-center group">
                    <div className="bg-gradient-to-br from-[#00A651] to-[#008C45] rounded-full p-3 mr-5 shadow-lg relative overflow-hidden group-hover:shadow-neon transition-all duration-300">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-full bg-black/10"></div>
                      <ArrowRight className="h-5 w-5 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] relative z-10 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg group-hover:text-[#00A651] transition-colors duration-300">
                      Veja o tempo e custo estimados
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
              }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00A651] to-[#0C1F38] rounded-3xl blur opacity-30 group-hover:opacity-70 transition-all duration-500 animate-pulse"></div>
              <div className="bg-white p-8 rounded-2xl shadow-3d relative transform transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <ChargingSimulator />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#00A651] to-[#00A651]/80 p-4 rounded-xl shadow-lg transform rotate-3 animate-float hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Calculator className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold">Simulador</p>
                    <p className="text-white/80 text-xs">Cálculo preciso</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Franchise Section - Link to dedicated page */}
      <section
        id="franchise"
        className="py-24 bg-white relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="absolute -top-20 right-0 w-96 h-96 bg-[#00A651]/5 rounded-full blur-3xl animate-[pulse_12s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0C1F38]/5 rounded-full blur-3xl animate-[pulse_15s_ease-in-out_infinite]"></div>

        {/* Decorative elements */}
        <div className="absolute top-40 left-20 w-6 h-6 bg-[#00A651]/20 rounded-full animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-40 w-8 h-8 bg-[#00A651]/30 rounded-full animate-[float_8s_ease-in-out_infinite]"></div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00A651]/10 to-[#00A651]/20 text-[#00A651] font-medium text-sm mb-6 shadow-sm">
              <div className="mr-2 bg-[#00A651] rounded-full w-2.5 h-2.5 animate-[pulse_2s_ease-in-out_infinite]"></div>
              <span className="relative overflow-hidden inline-block">
                Oportunidade de Negócio
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00A651]/40 transform -translate-x-full animate-[shimmer_2.5s_infinite]"></span>
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0C1F38] mb-6 leading-tight">
              <span className="relative inline-block">
                <span className="relative z-10">Seja um Franqueado</span>
                <div className="absolute bottom-2 left-0 w-full h-3 bg-[#00A651]/20 rounded-full -z-10"></div>
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Transforme energia em oportunidade. Torne-se um franqueado e
              lidere a mobilidade elétrica em sua região com um modelo de
              negócio inovador e sustentável.
            </p>

            <div className="relative group inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00A651] to-[#0C1F38] rounded-xl blur opacity-30 group-hover:opacity-100 transition-all duration-500"></div>
              <Button
                onClick={() => (window.location.href = "/franchise")}
                className="relative bg-gradient-to-r from-[#0C1F38] to-[#0C1F38]/90 hover:from-[#0C1F38]/90 hover:to-[#0C1F38] text-white px-8 py-7 rounded-xl shadow-3d transition-all duration-300 transform group-hover:translate-y-[-2px] text-lg font-semibold"
                size="lg"
              >
                <div className="mr-3 bg-white/10 p-2 rounded-lg">
                  <Zap className="h-5 w-5" />
                </div>
                Saiba mais sobre nossas franquias
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-gray-100/50 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                <div className="bg-gradient-to-br from-[#00A651] to-[#008C45] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative overflow-hidden group-hover:shadow-neon transition-all duration-300">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-full bg-black/10"></div>
                  <MapPin className="h-6 w-6 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] relative z-10" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2 text-[#0C1F38] group-hover:text-[#00A651] transition-colors duration-300">
                  +50
                </h3>
                <p className="text-gray-600 text-center">Cidades disponíveis</p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-gray-100/50 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                <div className="bg-gradient-to-br from-[#00A651] to-[#008C45] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative overflow-hidden group-hover:shadow-neon transition-all duration-300">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-full bg-black/10"></div>
                  <TrendingUp className="h-6 w-6 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] relative z-10" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2 text-[#0C1F38] group-hover:text-[#00A651] transition-colors duration-300">
                  25%
                </h3>
                <p className="text-gray-600 text-center">Retorno anual médio</p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-gray-100/50 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                <div className="bg-gradient-to-br from-[#00A651] to-[#008C45] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative overflow-hidden group-hover:shadow-neon transition-all duration-300">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-full bg-black/10"></div>
                  <DollarSign className="h-6 w-6 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] relative z-10" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2 text-[#0C1F38] group-hover:text-[#00A651] transition-colors duration-300">
                  18
                </h3>
                <p className="text-gray-600 text-center">Meses para ROI</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#00A651]/10 rounded-full blur-3xl animate-[pulse_12s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0C1F38]/5 rounded-full blur-3xl animate-[pulse_15s_ease-in-out_infinite]"></div>

        {/* Decorative elements */}
        <div className="absolute top-40 right-20 w-6 h-6 bg-[#00A651]/20 rounded-full animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 left-40 w-8 h-8 bg-[#00A651]/30 rounded-full animate-[float_8s_ease-in-out_infinite]"></div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#00A651]/10 text-[#00A651] font-medium text-sm mb-4"
            >
              <div className="mr-2 bg-[#00A651] rounded-full w-2 h-2 animate-pulse"></div>
              Nossa História
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#0C1F38] mb-4 relative inline-block"
            >
              <span className="relative z-10">Sobre Nós</span>
              <div className="absolute bottom-2 left-0 w-full h-3 bg-[#00A651]/20 rounded-full -z-10"></div>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              Conheça a equipe que está transformando a mobilidade elétrica no
              Brasil
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00A651] to-[#0C1F38] rounded-3xl blur opacity-30 group-hover:opacity-70 transition-all duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-3d">
                <img
                  src="https://images.unsplash.com/photo-1558425281-b2e5c050e962?w=800&q=80"
                  alt="Equipe Chargin"
                  className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1F38]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-6 text-white">
                    <p className="font-bold text-xl">Equipe Chargin</p>
                    <p className="text-white/80">Inovação e sustentabilidade</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="space-y-8"
            >
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-100/50 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Somos movidos pela inovação e pelo compromisso com um futuro
                  mais limpo. Nossa missão é acelerar a transição para a
                  mobilidade elétrica, oferecendo soluções de recarga
                  confiáveis, acessíveis e sustentáveis.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-100/50 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Com uma equipe apaixonada por tecnologia e meio ambiente,
                  trabalhamos diariamente para expandir nossa rede e melhorar a
                  experiência dos usuários de veículos elétricos em todo o
                  Brasil.
                </p>
              </div>

              <div className="relative group inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00A651] to-[#0C1F38] rounded-xl blur opacity-30 group-hover:opacity-100 transition-all duration-500"></div>
                <Button
                  onClick={() => (window.location.href = "/sobre")}
                  className="relative bg-gradient-to-r from-[#0C1F38] to-[#0C1F38]/90 hover:from-[#0C1F38]/90 hover:to-[#0C1F38] text-white px-8 py-6 rounded-xl shadow-3d transition-all duration-300 transform group-hover:translate-y-[-2px] text-lg font-semibold"
                  size="lg"
                >
                  <div className="mr-3 bg-white/10 p-2 rounded-lg">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  Conheça nossa história
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubra como a Chargin está transformando a experiência de
              recarga para motoristas e empresas em todo o Brasil.
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre carregamento
              de veículos elétricos e nossos serviços.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0C1F38]">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Pronto para fazer parte da revolução elétrica?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Baixe nosso aplicativo e tenha acesso a todas as estações de recarga
            na palma da sua mão.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-[#00A651] text-white hover:bg-[#00A651]/80"
              size="lg"
              onClick={() => (window.location.href = "/app")}
            >
              <Zap className="mr-2 h-5 w-5" /> Baixar para Android
            </Button>
            <Button
              className="bg-white text-[#0C1F38] hover:bg-white/90"
              size="lg"
              onClick={() => (window.location.href = "/app")}
            >
              <Zap className="mr-2 h-5 w-5" /> Baixar para iOS
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container">
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
                <li>
                  <a
                    href="/politicaseguranca"
                    className="text-gray-600 hover:text-[#00A651]"
                  >
                    Política de Segurança
                  </a>
                </li>
                <li>
                  <a
                    href="/cancelamento"
                    className="text-gray-600 hover:text-[#00A651]"
                  >
                    Cancelamento e Reembolso
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

            <div>
              <h3 className="font-bold text-[#0C1F38] mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-[#00A651]">
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
                <a href="#" className="text-gray-600 hover:text-[#00A651]">
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
                <a href="#" className="text-gray-600 hover:text-[#00A651]">
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
              &copy; {new Date().getFullYear()} Chargin. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
