import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  ArrowRight,
  Plane,
  Check,
  Clock,
  DollarSign,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// 3D Icon Animation
const Icon3D = ({ children, color = "#00FF99", size = 10 }) => {
  return (
    <motion.div
      className={`relative flex items-center justify-center w-${size} h-${size}`}
      initial={{ y: 0 }}
      animate={{
        y: [0, -5, 0],
        rotateY: [0, 5, 0],
        rotateX: [0, 5, 0],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-md transform scale-110" />
      <div className={`relative z-10 text-${color}`}>{children}</div>
      <div className="absolute bottom-0 w-2/3 h-[2px] bg-black/10 rounded-full blur-sm transform scale-x-110" />
    </motion.div>
  );
};

const Aeroportos = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: [0, 15, -15, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Zap className="h-8 w-8 text-[#00FF99]" />
            </motion.div>
            <span className="text-xl font-bold text-[#0C1F38]">
              EletriCharge
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
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
            <a
              href="/white-label"
              className="text-sm font-medium hover:text-[#00FF99] transition-colors"
            >
              White Label
            </a>
            <a
              href="/points"
              className="text-sm font-medium text-[#00FF99] transition-colors"
            >
              Pontos de Recarga
            </a>
            <a
              href="/#about"
              className="text-sm font-medium hover:text-[#00FF99] transition-colors"
            >
              Sobre Nós
            </a>
          </nav>
          <Button className="bg-[#00FF99] text-[#0C1F38] hover:bg-[#00FF99]/80 rounded-full">
            Baixe o App
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-[#0C1F38]">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <Badge className="bg-[#00FF99]/20 text-[#00FF99] border-none px-4 py-1 text-sm mb-4 inline-block">
              Soluções para Aeroportos
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Soluções de Recarga para Aeroportos
            </h1>
            <p className="text-lg text-gray-300">
              Transforme seu aeroporto em um hub de mobilidade sustentável e
              ofereça uma experiência premium aos seus passageiros.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-[#00FF99] text-[#0C1F38] hover:bg-[#00FF99]/80 mt-4 rounded-full px-8"
                size="lg"
              >
                Solicite uma proposta
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0C1F38] opacity-80"></div>
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80"
            alt="Aeroporto com estações de recarga"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="bg-[#00FF99]/20 text-[#00FF99] border-none px-4 py-1 text-sm mb-4 inline-block">
              Vantagens Exclusivas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1F38] mb-4">
              Benefícios para Aeroportos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra como nossas soluções de recarga podem transformar a
              experiência dos seus passageiros e gerar novas fontes de receita.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 h-full bg-white overflow-hidden rounded-xl">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="bg-[#0C1F38]/5 p-6 rounded-full mb-6 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                    <Icon3D>
                      <Plane className="h-10 w-10 text-[#00FF99]" />
                    </Icon3D>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0C1F38]">
                    Experiência Premium
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Ofereça um serviço diferenciado para passageiros que
                    utilizam veículos elétricos, aumentando a satisfação do
                    cliente e destacando seu aeroporto da concorrência.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 h-full bg-white overflow-hidden rounded-xl">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="bg-[#0C1F38]/5 p-6 rounded-full mb-6 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                    <Icon3D>
                      <DollarSign className="h-10 w-10 text-[#00FF99]" />
                    </Icon3D>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0C1F38]">
                    Receita Adicional
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Gere uma nova fonte de receita através da cobrança pelo uso
                    das estações de recarga durante o período de estacionamento,
                    com retorno rápido sobre o investimento.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 h-full bg-white overflow-hidden rounded-xl">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="bg-[#0C1F38]/5 p-6 rounded-full mb-6 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                    <Icon3D>
                      <Award className="h-10 w-10 text-[#00FF99]" />
                    </Icon3D>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0C1F38]">
                    Sustentabilidade
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Fortaleça o compromisso do aeroporto com práticas
                    sustentáveis, reduza a pegada de carbono da operação e
                    melhore a imagem da sua marca perante o público e
                    investidores.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80"
                alt="Caso de sucesso em aeroporto"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Badge className="bg-[#00FF99]/20 text-[#00FF99] border-none px-4 py-1 text-sm mb-4 inline-block">
                Caso de Sucesso
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0C1F38] mb-4">
                Aeroporto Internacional de Brasília
              </h2>
              <p className="text-lg text-gray-600">
                O Aeroporto Internacional de Brasília implementou 12 pontos de
                recarga EletriCharge e viu um aumento de 30% na satisfação dos
                passageiros que utilizam o estacionamento de longa duração.
              </p>
              <ul className="space-y-6 mt-8">
                <motion.li
                  className="flex items-start bg-white p-4 rounded-xl shadow-md"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-[#00FF99] rounded-full p-3 mr-4">
                    <Icon3D size={6}>
                      <DollarSign className="h-6 w-6 text-[#0C1F38]" />
                    </Icon3D>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C1F38] text-lg">
                      Aumento de receita
                    </h3>
                    <p className="text-gray-600">
                      Incremento de 15% na receita do estacionamento após a
                      implementação das estações.
                    </p>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start bg-white p-4 rounded-xl shadow-md"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-[#00FF99] rounded-full p-3 mr-4">
                    <Icon3D size={6}>
                      <Award className="h-6 w-6 text-[#0C1F38]" />
                    </Icon3D>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C1F38] text-lg">
                      Reconhecimento
                    </h3>
                    <p className="text-gray-600">
                      Premiado como "Aeroporto Mais Sustentável" pelo segundo
                      ano consecutivo.
                    </p>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start bg-white p-4 rounded-xl shadow-md"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-[#00FF99] rounded-full p-3 mr-4">
                    <Icon3D size={6}>
                      <ArrowRight className="h-6 w-6 text-[#0C1F38]" />
                    </Icon3D>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C1F38] text-lg">
                      Ocupação do estacionamento
                    </h3>
                    <p className="text-gray-600">
                      Aumento de 25% na taxa de ocupação do estacionamento de
                      longa duração.
                    </p>
                  </div>
                </motion.li>
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8"
              >
                <Button className="bg-[#0C1F38] hover:bg-[#0C1F38]/90 text-white rounded-full px-8">
                  Ver mais casos de sucesso
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0C1F38]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-[#00FF99]/20 text-[#00FF99] border-none px-4 py-1 text-sm mb-4 inline-block">
                Comece Agora
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pronto para transformar seu aeroporto?
              </h2>
              <p className="text-lg text-gray-300">
                Nossa equipe de especialistas está pronta para desenvolver uma
                solução personalizada para seu aeroporto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="bg-[#00FF99] text-[#0C1F38] hover:bg-[#00FF99]/80 rounded-full px-8"
                    size="lg"
                  >
                    Solicitar orçamento
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 rounded-full px-8"
                    size="lg"
                  >
                    <Clock className="mr-2 h-5 w-5" />
                    Agendar demonstração
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Zap className="h-6 w-6 text-[#00FF99]" />
                </motion.div>
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
                    href="/points"
                    className="text-gray-600 hover:text-[#00FF99]"
                  >
                    Pontos de Recarga
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

export default Aeroportos;
