import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, MapPin, Building, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";

const CentrosUrbanos = () => {
  return (
    <div className="min-h-screen bg-white">
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
              Soluções de Recarga para Centros Urbanos
            </h1>
            <p className="text-lg text-gray-300">
              Transforme áreas urbanas em hubs de mobilidade sustentável com
              nossa infraestrutura de recarga.
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
            src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1600&q=80"
            alt="Centro urbano com estações de recarga"
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
                src="https://images.unsplash.com/photo-1573979429769-8b224f4a0e2a?w=800&q=80"
                alt="Estação de recarga em centro urbano"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
                Benefícios para Centros Urbanos
              </h2>
              <p className="text-gray-600">
                Implementar pontos de recarga em centros urbanos traz vantagens
                significativas para a cidade e seus habitantes:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#00FF99] rounded-full p-1 mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-[#0C1F38]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C1F38]">
                      Redução da poluição urbana
                    </h3>
                    <p className="text-gray-600">
                      Incentive a adoção de veículos elétricos e contribua para
                      a melhoria da qualidade do ar e redução da poluição sonora
                      nas áreas urbanas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#00FF99] rounded-full p-1 mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-[#0C1F38]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C1F38]">
                      Valorização imobiliária
                    </h3>
                    <p className="text-gray-600">
                      Áreas com infraestrutura de mobilidade sustentável tendem
                      a valorizar, atraindo novos investimentos e melhorando a
                      qualidade de vida local.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#00FF99] rounded-full p-1 mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-[#0C1F38]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C1F38]">
                      Atração de turismo sustentável
                    </h3>
                    <p className="text-gray-600">
                      Posicione sua cidade como um destino amigável para
                      turistas com veículos elétricos, atraindo visitantes
                      conscientes e de alto poder aquisitivo.
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
                  <MapPin className="h-8 w-8 text-[#00FF99]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0C1F38]">
                  Centro de São Paulo
                </h3>
                <p className="text-gray-600 mb-4">
                  Redução de 18% na emissão de CO2 e aumento de 25% no fluxo de
                  turistas após a implementação de 30 pontos de recarga em áreas
                  estratégicas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-[#0C1F38]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Building className="h-8 w-8 text-[#00FF99]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0C1F38]">
                  Zona Sul do Rio de Janeiro
                </h3>
                <p className="text-gray-600 mb-4">
                  Valorização imobiliária de 12% nas áreas próximas aos pontos
                  de recarga e aumento de 30% na ocupação de estabelecimentos
                  comerciais locais.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-[#0C1F38]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <CreditCard className="h-8 w-8 text-[#00FF99]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0C1F38]">
                  Centro Histórico de Curitiba
                </h3>
                <p className="text-gray-600 mb-4">
                  Aumento de 40% no fluxo de turistas e crescimento de 22% na
                  receita do comércio local após a instalação de corredores de
                  recarga elétrica.
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
              Transforme sua cidade em referência de mobilidade sustentável
            </h2>
            <p className="text-lg text-gray-300">
              Nossa equipe de especialistas está pronta para desenvolver uma
              solução personalizada para seu centro urbano.
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

      {/* Footer - Standardized */}
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

export default CentrosUrbanos;
