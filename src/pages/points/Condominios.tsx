import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building, Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const Condominios = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <Header />

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
              Transforme seu Condomínio em um Hub de Mobilidade Elétrica
            </h1>
            <p className="text-lg text-gray-300">
              Ofereça um diferencial competitivo para seus moradores e valorize
              seu empreendimento com soluções de recarga para veículos
              elétricos.
            </p>
            <Button
              className="bg-[#00FF99] text-[#0C1F38] hover:bg-[#00FF99]/80 mt-4"
              size="lg"
            >
              Solicite uma proposta
            </Button>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0C1F38] opacity-80"></div>
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80"
            alt="Condomínio com estações de recarga"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-[#0C1F38] mb-12">
            Benefícios para Condomínios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#00FF99]/20 p-4 rounded-full inline-block mb-4">
                <Building className="h-8 w-8 text-[#0C1F38]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0C1F38]">
                Valorização Imobiliária
              </h3>
              <p className="text-gray-600">
                Aumente o valor de mercado das unidades e do condomínio como um
                todo ao oferecer infraestrutura para veículos elétricos.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#00FF99]/20 p-4 rounded-full inline-block mb-4">
                <Check className="h-8 w-8 text-[#0C1F38]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0C1F38]">
                Diferencial Competitivo
              </h3>
              <p className="text-gray-600">
                Destaque seu condomínio da concorrência, atraindo moradores com
                maior poder aquisitivo e preocupação ambiental.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#00FF99]/20 p-4 rounded-full inline-block mb-4">
                <Zap className="h-8 w-8 text-[#0C1F38]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0C1F38]">
                Receita Adicional
              </h3>
              <p className="text-gray-600">
                Gere uma nova fonte de receita para o condomínio através da
                cobrança pelo uso das estações de recarga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80"
                alt="Caso de sucesso em condomínio"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
                Caso de Sucesso: Condomínio Green Park
              </h2>
              <p className="text-gray-600">
                O condomínio Green Park em São Paulo implementou 8 pontos de
                recarga EletriCharge e viu um aumento de 12% no valor de mercado
                de seus apartamentos em apenas 6 meses.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#00FF99] rounded-full p-1 mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-[#0C1F38]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C1F38]">
                      Retorno sobre investimento
                    </h3>
                    <p className="text-gray-600">
                      ROI completo em 18 meses através da taxa de utilização.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#00FF99] rounded-full p-1 mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-[#0C1F38]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C1F38]">
                      Satisfação dos moradores
                    </h3>
                    <p className="text-gray-600">
                      Aumento de 95% na satisfação dos moradores com veículos
                      elétricos.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#00FF99] rounded-full p-1 mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-[#0C1F38]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C1F38]">
                      Atração de novos moradores
                    </h3>
                    <p className="text-gray-600">
                      30% dos novos compradores citaram a infraestrutura de
                      recarga como fator decisivo na compra.
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

      {/* CTA Section */}
      <section className="py-20 bg-[#0C1F38]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Transforme seu condomínio hoje mesmo
            </h2>
            <p className="text-lg text-gray-300">
              Nossa equipe de especialistas está pronta para desenvolver uma
              solução personalizada para seu condomínio.
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

export default Condominios;
