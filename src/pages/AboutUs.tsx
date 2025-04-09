import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Leaf,
  Users,
  Award,
  ArrowRight,
  Code,
  Rocket,
  Globe,
  Lightbulb,
} from "lucide-react";
import Timeline from "@/components/timeline/Timeline";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation - Same as other pages */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-sm bg-[#00A651]/30 -z-10"></div>
              <Zap className="h-8 w-8 text-[#00A651] drop-shadow-md" />
            </div>
            <span className="text-xl font-bold text-[#0C1F38]">Chargin</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
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
              href="/white-label"
              className="text-sm font-medium hover:text-[#00A651] transition-colors"
            >
              White Label
            </a>
            <a
              href="/points"
              className="text-sm font-medium hover:text-[#00A651] transition-colors"
            >
              Pontos de Recarga
            </a>
            <a
              href="/sobre"
              className="text-sm font-medium text-[#00A651] transition-colors"
            >
              Sobre Nós
            </a>
          </nav>
          <Button className="bg-[#00A651] text-white hover:bg-[#00A651]/80">
            Baixe o App
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0C1F38] to-[#0C1F38]/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593941707882-a56bbc8df44c?w=1200&q=80')] bg-cover bg-center" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Conectando o futuro da mobilidade elétrica
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Somos mais que uma rede de recarga. Somos agentes da transformação
              energética que o mundo precisa.
            </p>
            <div className="inline-block bg-[#00A651] text-white px-6 py-2 rounded-full font-bold shadow-lg">
              Desde 2021 impulsionando a mobilidade elétrica no Brasil
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=800&q=80"
                alt="Equipe Chargin"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
                Quem Somos
              </h2>
              <p className="text-gray-600 text-lg">
                A Chargin nasceu com o propósito de impulsionar a mobilidade
                elétrica no Brasil, tornando-a acessível, prática e eficiente.
                Somos uma empresa de tecnologia e energia que acredita na
                sustentabilidade como caminho para um futuro melhor.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-[#00A651]/20 to-[#00A651]/40 p-3 rounded-full shadow-md relative overflow-hidden transform hover:scale-105 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20"></div>
                    <Zap className="h-6 w-6 text-[#00A651] drop-shadow-md relative z-10" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0C1F38]">+100 mil</p>
                    <p className="text-sm text-gray-500">recargas realizadas</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-[#00A651]/20 to-[#00A651]/40 p-3 rounded-full shadow-md relative overflow-hidden transform hover:scale-105 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20"></div>
                    <Users className="h-6 w-6 text-[#00A651] drop-shadow-md relative z-10" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0C1F38]">+20 estados</p>
                    <p className="text-sm text-gray-500">com nossa presença</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-[#00A651]/20 to-[#00A651]/40 p-3 rounded-full shadow-md relative overflow-hidden transform hover:scale-105 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20"></div>
                    <Award className="h-6 w-6 text-[#00A651] drop-shadow-md relative z-10" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0C1F38]">Equipamentos</p>
                    <p className="text-sm text-gray-500">homologados</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-[#00A651]/20 to-[#00A651]/40 p-3 rounded-full shadow-md relative overflow-hidden transform hover:scale-105 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20"></div>
                    <Leaf className="h-6 w-6 text-[#00A651] drop-shadow-md relative z-10" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0C1F38]">Compromisso</p>
                    <p className="text-sm text-gray-500">ESG</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
              Missão, Visão e Valores
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nossos princípios fundamentais que guiam cada decisão e ação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="bg-gradient-to-br from-[#00A651]/20 to-[#00A651]/40 p-4 rounded-full mb-6 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20"></div>
                  <div className="absolute inset-0 rounded-full blur-sm bg-[#00A651]/20 -z-10"></div>
                  <Zap className="h-8 w-8 text-[#00A651] drop-shadow-md relative z-10" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0C1F38]">
                  Missão
                </h3>
                <p className="text-gray-600">
                  Democratizar o acesso à recarga de veículos elétricos com
                  tecnologia, simplicidade e confiabilidade.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="bg-gradient-to-br from-[#00A651]/20 to-[#00A651]/40 p-4 rounded-full mb-6 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20"></div>
                  <div className="absolute inset-0 rounded-full blur-sm bg-[#00A651]/20 -z-10"></div>
                  <Users className="h-8 w-8 text-[#00A651] drop-shadow-md relative z-10" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0C1F38]">Visão</h3>
                <p className="text-gray-600">
                  Ser a maior e mais confiável rede de recarga do Brasil até
                  2030, liderando a transição para a mobilidade sustentável.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="bg-gradient-to-br from-[#00A651]/20 to-[#00A651]/40 p-4 rounded-full mb-6 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20"></div>
                  <div className="absolute inset-0 rounded-full blur-sm bg-[#00A651]/20 -z-10"></div>
                  <Award className="h-8 w-8 text-[#00A651] drop-shadow-md relative z-10" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0C1F38]">
                  Valores
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Inovação contínua</li>
                  <li>• Transparência</li>
                  <li>• Sustentabilidade</li>
                  <li>• Inclusão</li>
                  <li>• Eficiência energética</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossa História / Timeline */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container">
          <Timeline />
        </div>
      </section>

      {/* Compromisso com a Sustentabilidade */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
                Compromisso com a Sustentabilidade
              </h2>
              <p className="text-gray-600">
                Acreditamos que mobilidade limpa é parte essencial de um futuro
                melhor. Todas as nossas operações seguem práticas sustentáveis e
                estamos comprometidos com metas ambientais claras.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="bg-gradient-to-br from-[#00A651]/20 to-[#00A651]/40 rounded-full p-1 mr-3 shadow-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20"></div>
                    <ArrowRight className="h-4 w-4 text-[#00A651] drop-shadow-sm relative z-10" />
                  </div>
                  <span className="text-gray-700">
                    Recarga 100% limpa com origem renovável
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="bg-gradient-to-br from-[#00A651]/20 to-[#00A651]/40 rounded-full p-1 mr-3 shadow-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20"></div>
                    <ArrowRight className="h-4 w-4 text-[#00A651] drop-shadow-sm relative z-10" />
                  </div>
                  <span className="text-gray-700">
                    Redução de emissões com base em dados reais
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="bg-gradient-to-br from-[#00A651]/20 to-[#00A651]/40 rounded-full p-1 mr-3 shadow-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20"></div>
                    <ArrowRight className="h-4 w-4 text-[#00A651] drop-shadow-sm relative z-10" />
                  </div>
                  <span className="text-gray-700">
                    Parcerias com empresas do setor de energia limpa
                  </span>
                </li>
              </ul>
              <Button className="bg-[#0C1F38] hover:bg-[#0C1F38]/90 text-white mt-4 shadow-md">
                Conheça nossas iniciativas
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80"
                alt="Sustentabilidade Chargin"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#0C1F38]">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Junte-se a nós nessa jornada elétrica
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Conecte sua empresa ou seu dia a dia com energia limpa e faça parte
            da revolução da mobilidade sustentável.
          </p>
          <Button
            onClick={() => (window.location.href = "/points")}
            className="bg-[#00A651] text-white hover:bg-[#00A651]/80 px-6 py-6 shadow-lg transform hover:scale-105 transition-all duration-300"
            size="lg"
          >
            Conheça nossos pontos de recarga
            <div className="relative ml-2">
              <div className="absolute inset-0 rounded-full blur-sm bg-white/30 -z-10"></div>
              <ArrowRight className="h-5 w-5 relative z-10" />
            </div>
          </Button>
        </div>
      </section>

      {/* Footer - Same as other pages */}
      <footer className="bg-gray-100 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full blur-sm bg-[#00A651]/30 -z-10"></div>
                  <Zap className="h-6 w-6 text-[#00A651] drop-shadow-md" />
                </div>
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

export default AboutUs;
