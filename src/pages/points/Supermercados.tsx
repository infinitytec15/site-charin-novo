import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  ShoppingCart,
  Truck,
  Users,
  TrendingUp,
  Clock,
  DollarSign,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

const Supermercados = () => {
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
              Soluções para Supermercados
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Soluções de Recarga para Supermercados
            </h1>
            <p className="text-lg text-gray-300">
              Atraia clientes de alto valor e aumente o tempo de permanência em
              sua loja com estações de recarga para veículos elétricos.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-[#00FF99] text-[#0C1F38] hover:bg-[#00FF99]/80 mt-4 rounded-full px-8"
                size="lg"
              >
                Fale com um consultor
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0C1F38] opacity-80"></div>
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=1600&q=80"
            alt="Supermercado com estações de recarga"
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
              Benefícios para Supermercados
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra como nossas soluções de recarga podem transformar a
              experiência dos seus clientes e gerar novas fontes de receita.
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
                      <ShoppingCart className="h-10 w-10 text-[#00FF99]" />
                    </Icon3D>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0C1F38]">
                    Aumento do Ticket Médio
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Clientes com veículos elétricos permanecem mais tempo no
                    supermercado enquanto seus carros carregam, aumentando o
                    ticket médio de compras.
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
                      <Users className="h-10 w-10 text-[#00FF99]" />
                    </Icon3D>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0C1F38]">
                    Atração de Público Premium
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Proprietários de veículos elétricos geralmente possuem maior
                    poder aquisitivo e valorizam estabelecimentos com
                    infraestrutura sustentável.
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
                      <TrendingUp className="h-10 w-10 text-[#00FF99]" />
                    </Icon3D>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0C1F38]">
                    Diferenciação Competitiva
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Destaque seu supermercado da concorrência ao oferecer uma
                    infraestrutura moderna e alinhada às tendências de
                    sustentabilidade.
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
                src="https://images.unsplash.com/photo-1593941707882-a56bbc8df44c?w=800&q=80"
                alt="Estação de recarga em supermercado"
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
                Rede Pão de Açúcar
              </h2>
              <p className="text-lg text-gray-600">
                A rede de supermercados Pão de Açúcar implementou pontos de
                recarga EletriCharge e viu um aumento de 25% no ticket médio dos
                clientes que utilizam os pontos de recarga, com retorno do
                investimento em apenas 10 meses.
              </p>
              <ul className="space-y-6 mt-8">
                <motion.li
                  className="flex items-start bg-white p-4 rounded-xl shadow-md"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-[#00FF99] rounded-full p-3 mr-4">
                    <Icon3D size={6}>
                      <Clock className="h-6 w-6 text-[#0C1F38]" />
                    </Icon3D>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C1F38] text-lg">
                      Tempo de permanência
                    </h3>
                    <p className="text-gray-600">
                      Aumento de 35% no tempo médio de permanência dos clientes
                      com veículos elétricos.
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
                      <Check className="h-6 w-6 text-[#0C1F38]" />
                    </Icon3D>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C1F38] text-lg">
                      Fidelização de clientes
                    </h3>
                    <p className="text-gray-600">
                      Crescimento de 40% na recorrência de visitas dos clientes
                      que utilizam os pontos de recarga.
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
                      <DollarSign className="h-6 w-6 text-[#0C1F38]" />
                    </Icon3D>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C1F38] text-lg">
                      Retorno sobre investimento
                    </h3>
                    <p className="text-gray-600">
                      ROI completo em apenas 10 meses, considerando a receita
                      direta e indireta gerada pelos pontos de recarga.
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
                  Solicite uma proposta
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
                Transforme seu supermercado em um hub de mobilidade elétrica
              </h2>
              <p className="text-lg text-gray-300">
                Nossa equipe de especialistas está pronta para desenvolver uma
                solução personalizada para seu supermercado.
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

export default Supermercados;
