import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  ShoppingBag,
  Building,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ShoppingCenters = () => {
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
          <Button className="bg-[#00FF99] text-[#0C1F38] hover:bg-[#00FF99]/80">
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
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Soluções de Recarga para Shopping Centers
            </h1>
            <p className="text-lg text-gray-300">
              Transforme seu shopping em um hub de mobilidade elétrica e atraia
              clientes de alto valor aquisitivo.
            </p>
            <Button
              className="bg-[#00FF99] text-[#0C1F38] hover:bg-[#00FF99]/80 mt-4"
              size="lg"
            >
              Fale com um consultor
            </Button>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0C1F38] opacity-80"></div>
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?w=1600&q=80"
            alt="Shopping center com estações de recarga"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1593941707882-a56bbc8df44c?w=800&q=80"
                alt="Estação de recarga em shopping center"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
                Benefícios para Shopping Centers
              </h2>
              <p className="text-gray-600">
                Oferecer pontos de recarga para veículos elétricos em seu
                shopping center é uma estratégia que traz múltiplos benefícios:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#00FF99] rounded-full p-1 mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-[#0C1F38]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C1F38]">
                      Aumento do tempo de permanência
                    </h3>
                    <p className="text-gray-600">
                      Clientes com veículos elétricos permanecem mais tempo no
                      shopping enquanto seus carros carregam, aumentando as
                      chances de consumo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#00FF99] rounded-full p-1 mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-[#0C1F38]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C1F38]">
                      Atração de público premium
                    </h3>
                    <p className="text-gray-600">
                      Proprietários de veículos elétricos geralmente possuem
                      maior poder aquisitivo e valorizam estabelecimentos com
                      infraestrutura sustentável.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#00FF99] rounded-full p-1 mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-[#0C1F38]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C1F38]">
                      Diferenciação competitiva
                    </h3>
                    <p className="text-gray-600">
                      Destaque seu shopping da concorrência ao oferecer uma
                      infraestrutura moderna e alinhada às tendências de
                      sustentabilidade.
                    </p>
                  </div>
                </li>
              </ul>
              <Button className="bg-[#0C1F38] hover:bg-[#0C1F38]/90 text-white mt-4">
                Solicite uma proposta
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-[#0C1F38] mb-12">
            Casos de Sucesso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-[#0C1F38]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <ShoppingBag className="h-8 w-8 text-[#00FF99]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0C1F38]">
                  Shopping Cidade Jardim
                </h3>
                <p className="text-gray-600 mb-4">
                  Aumento de 23% no tempo médio de permanência dos clientes e
                  crescimento de 15% nas vendas após a instalação de 12 pontos
                  de recarga.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-[#0C1F38]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Building className="h-8 w-8 text-[#00FF99]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0C1F38]">
                  Shopping Morumbi
                </h3>
                <p className="text-gray-600 mb-4">
                  Redução de 30% na rotatividade de vagas e aumento de 40% na
                  receita do estacionamento com a implementação de estações de
                  recarga premium.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-[#0C1F38]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <CreditCard className="h-8 w-8 text-[#00FF99]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0C1F38]">
                  Shopping Iguatemi
                </h3>
                <p className="text-gray-600 mb-4">
                  Aumento de 18% no ticket médio dos clientes que utilizam os
                  pontos de recarga, com retorno do investimento em apenas 8
                  meses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0C1F38]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Transforme seu shopping em um hub de mobilidade elétrica
            </h2>
            <p className="text-lg text-gray-300">
              Nossa equipe de especialistas está pronta para desenvolver uma
              solução personalizada para seu shopping center.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                className="bg-[#00FF99] text-[#0C1F38] hover:bg-[#00FF99]/80"
                size="lg"
              >
                Solicitar orçamento
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                size="lg"
              >
                Agendar demonstração
              </Button>
            </div>
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

export default ShoppingCenters;
