import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Clock, MapPin, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MapSection from "./MapSection";
import ChargingSimulator from "./ChargingSimulator";
import FranchiseSection from "./FranchiseSection";
import TestimonialsCarousel from "./TestimonialsCarousel";

const Home = () => {
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
              href="#map"
              className="text-sm font-medium hover:text-[#00FF99] transition-colors"
            >
              Mapa de Estações
            </a>
            <a
              href="#simulator"
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
            <a
              href="/white-label"
              className="text-sm font-medium hover:text-[#00FF99] transition-colors"
            >
              White Label
            </a>
            <a
              href="/points"
              className="text-sm font-medium hover:text-[#00FF99] transition-colors"
            >
              Pontos de Recarga
            </a>
            <a
              href="#about"
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
      <section className="container py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#0C1F38] leading-tight">
              A revolução da mobilidade elétrica começa aqui
            </h1>
            <p className="text-lg text-gray-600">
              Energize seu caminho com a melhor rede de carregamento do Brasil.
              Recargas rápidas, seguras e disponíveis 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-[#0C1F38] hover:bg-[#0C1F38]/90 text-white px-6 py-6"
                size="lg"
              >
                <MapPin className="mr-2 h-5 w-5" /> Encontre um ponto de recarga
              </Button>
              <Button
                variant="outline"
                className="border-[#0C1F38] text-[#0C1F38] hover:bg-[#0C1F38]/10 px-6 py-6"
                size="lg"
              >
                <Calculator className="mr-2 h-5 w-5" /> Simule sua recarga
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1593941707882-a56bbc8df44c?w=800&q=80"
              alt="Carro elétrico carregando"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-5 -right-5 bg-[#00FF99] p-4 rounded-lg shadow-lg">
              <p className="text-[#0C1F38] font-bold">+500 estações</p>
              <p className="text-[#0C1F38] text-sm">em todo o Brasil</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-[#0C1F38] mb-12">
            Por que escolher nossa rede?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-[#00FF99]/20 p-4 rounded-full mb-4">
                  <Zap className="h-8 w-8 text-[#00FF99]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0C1F38]">
                  Recargas Ultrarrápidas
                </h3>
                <p className="text-gray-600">
                  Nossos carregadores de alta potência garantem recargas até 80%
                  em menos de 30 minutos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-[#00FF99]/20 p-4 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-[#00FF99]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0C1F38]">
                  Disponível 24h
                </h3>
                <p className="text-gray-600">
                  Nossas estações funcionam 24 horas por dia, 7 dias por semana,
                  para sua conveniência.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-[#00FF99]/20 p-4 rounded-full mb-4">
                  <MapPin className="h-8 w-8 text-[#00FF99]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0C1F38]">
                  Ampla Cobertura
                </h3>
                <p className="text-gray-600">
                  Com mais de 500 estações espalhadas pelo Brasil, você nunca
                  ficará sem energia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
              Encontre uma Estação
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Localize o ponto de recarga mais próximo de você. Filtre por tipo
              de conector, disponibilidade em tempo real e preço por kWh.
            </p>
          </div>
          <div
            className="w-full border border-gray-200 rounded-xl shadow-md overflow-hidden bg-white"
            style={{
              height: "800px",
              position: "relative",
              zIndex: 1,
              display: "block",
            }}
            id="home-map-container"
          >
            <iframe
              src="/map-standalone"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                display: "block",
                backgroundColor: "white",
              }}
              title="Mapa de Estações"
            />
          </div>
        </div>
      </section>

      {/* Simulator Section */}
      <section id="simulator" className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
                Simule sua Recarga
              </h2>
              <p className="text-gray-600">
                Planeje com precisão. Simule sua recarga e chegue ao seu destino
                com energia de sobra. Nosso simulador calcula o tempo e custo
                com base no seu modelo de veículo.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="bg-[#00FF99] rounded-full p-1 mr-3">
                    <ArrowRight className="h-4 w-4 text-[#0C1F38]" />
                  </div>
                  <span className="text-gray-700">
                    Selecione seu modelo de veículo
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="bg-[#00FF99] rounded-full p-1 mr-3">
                    <ArrowRight className="h-4 w-4 text-[#0C1F38]" />
                  </div>
                  <span className="text-gray-700">
                    Informe o nível atual da bateria
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="bg-[#00FF99] rounded-full p-1 mr-3">
                    <ArrowRight className="h-4 w-4 text-[#0C1F38]" />
                  </div>
                  <span className="text-gray-700">
                    Escolha o nível desejado de carga
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="bg-[#00FF99] rounded-full p-1 mr-3">
                    <ArrowRight className="h-4 w-4 text-[#0C1F38]" />
                  </div>
                  <span className="text-gray-700">
                    Veja o tempo e custo estimados
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <ChargingSimulator />
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Section - Link to dedicated page */}
      <section id="franchise" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
              Seja um Franqueado
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Transforme energia em oportunidade. Torne-se um franqueado e
              lidere a mobilidade elétrica em sua região.
            </p>
            <Button
              onClick={() => (window.location.href = "/franchise")}
              className="bg-[#0C1F38] hover:bg-[#0C1F38]/90 text-white px-6 py-6"
              size="lg"
            >
              Saiba mais sobre nossas franquias
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=800&q=80"
                alt="Equipe EletriCharge"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
                Sobre Nós
              </h2>
              <p className="text-gray-600">
                Somos movidos pela inovação e pelo compromisso com um futuro
                mais limpo. Nossa missão é acelerar a transição para a
                mobilidade elétrica, oferecendo soluções de recarga confiáveis,
                acessíveis e sustentáveis.
              </p>
              <p className="text-gray-600">
                Com uma equipe apaixonada por tecnologia e meio ambiente,
                trabalhamos diariamente para expandir nossa rede e melhorar a
                experiência dos usuários de veículos elétricos em todo o Brasil.
              </p>
              <Button className="bg-[#0C1F38] hover:bg-[#0C1F38]/90 text-white">
                Conheça nossa história
              </Button>
            </div>
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
              Descubra como a EletriCharge está transformando a experiência de
              recarga para motoristas e empresas em todo o Brasil.
            </p>
          </div>
          <TestimonialsCarousel />
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
              className="bg-[#00FF99] text-[#0C1F38] hover:bg-[#00FF99]/80"
              size="lg"
            >
              <Zap className="mr-2 h-5 w-5" /> Baixar para Android
            </Button>
            <Button
              className="bg-white text-[#0C1F38] hover:bg-white/90"
              size="lg"
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
                  <a href="#map" className="text-gray-600 hover:text-[#00FF99]">
                    Mapa de Estações
                  </a>
                </li>
                <li>
                  <a
                    href="#simulator"
                    className="text-gray-600 hover:text-[#00FF99]"
                  >
                    Simulador de Recarga
                  </a>
                </li>
                <li>
                  <a
                    href="#franchise"
                    className="text-gray-600 hover:text-[#00FF99]"
                  >
                    Seja um Franqueado
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-600 hover:text-[#00FF99]"
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

export default Home;
