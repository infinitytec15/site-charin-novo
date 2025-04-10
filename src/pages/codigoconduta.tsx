import React from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";

const CodigoConduta = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Código de Conduta | EletriCharge</title>
        <meta
          name="description"
          content="Código de Conduta da EletriCharge. Conheça nossos princípios éticos, regras de convivência e compromisso com o respeito mútuo."
        />
      </Helmet>

      <Header />

      {/* Main Content */}
      <main className="container py-12">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0C1F38] mb-6">
            Código de Conduta
          </h1>
          <p className="text-gray-600 mb-8">
            Última atualização: abril de 2025
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Leia abaixo nosso compromisso com a transparência e a confiança na
            relação com você. Este código estabelece os princípios e valores que
            norteiam nossa comunidade de usuários.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0C1F38] mb-4">
              Princípios Gerais
            </h2>
            <p className="text-gray-700 mb-4">
              A EletriCharge se compromete com os mais altos padrões éticos e de
              respeito em todas as interações. Nossos princípios fundamentais
              incluem:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Respeito mútuo entre todos os usuários e colaboradores</li>
              <li>
                Compromisso com a sustentabilidade e uso consciente dos recursos
              </li>
              <li>Transparência em todas as operações e comunicações</li>
              <li>
                Responsabilidade compartilhada pelo bom funcionamento da rede
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0C1F38] mb-4">
              Conduta na Plataforma e Estações
            </h2>
            <p className="text-gray-700 mb-4">
              Ao utilizar nossos serviços, seja através do aplicativo ou nas
              estações físicas, esperamos que todos os usuários:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Respeitem os horários de recarga agendados</li>
              <li>
                Utilizem os equipamentos conforme as instruções fornecidas
              </li>
              <li>Reportem quaisquer problemas ou danos nos equipamentos</li>
              <li>Mantenham as estações limpas e organizadas após o uso</li>
              <li>
                Respeitem a vez de outros usuários e o tempo máximo de recarga
                em horários de pico
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0C1F38] mb-4">
              Regras de Convivência e Respeito
            </h2>
            <p className="text-gray-700 mb-4">
              Para garantir uma experiência positiva para todos, estabelecemos
              as seguintes regras de convivência:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                Trate todos os usuários, funcionários e parceiros com cortesia e
                respeito
              </li>
              <li>Evite linguagem ofensiva ou comportamento intimidador</li>
              <li>
                Respeite a diversidade de opiniões, culturas e perspectivas
              </li>
              <li>
                Colabore para resolver conflitos de forma pacífica e construtiva
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0C1F38] mb-4">
              Proibições
            </h2>
            <p className="text-gray-700 mb-4">
              As seguintes condutas são expressamente proibidas e podem resultar
              em penalidades:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Fraudes ou tentativas de burlar o sistema de pagamento</li>
              <li>Vandalismo ou dano intencional aos equipamentos</li>
              <li>Assédio a outros usuários ou funcionários</li>
              <li>
                Uso indevido das estações para fins não relacionados à recarga
                de veículos elétricos
              </li>
              <li>Compartilhamento não autorizado de credenciais de acesso</li>
              <li>
                Disseminação de informações falsas sobre a empresa ou serviços
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0C1F38] mb-4">
              Penalidades
            </h2>
            <p className="text-gray-700 mb-4">
              O descumprimento deste Código de Conduta pode resultar nas
              seguintes penalidades, aplicadas a critério da EletriCharge:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Advertência formal</li>
              <li>Suspensão temporária do acesso aos serviços</li>
              <li>Bloqueio permanente da conta</li>
              <li>Responsabilização por danos causados</li>
              <li>
                Quando aplicável, encaminhamento às autoridades competentes
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0C1F38] mb-4">
              Canal de Denúncia
            </h2>
            <p className="text-gray-700 mb-4">
              Caso presencie ou seja vítima de qualquer violação deste Código de
              Conduta, entre em contato conosco através dos seguintes canais:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>E-mail: suporte@eletricharge.com.br</li>
              <li>WhatsApp: (15) 99152-0383</li>
              <li>Através do aplicativo, na seção "Suporte"</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Todas as denúncias serão tratadas com confidencialidade e
              investigadas prontamente.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container">
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
                  className="h-6 w-6 text-[#00FF99]"
                >
                  <path d="m13 2-2 2.5h3L12 7" />
                  <path d="M10 14v-3" />
                  <path d="M14 14v-3" />
                  <path d="M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3h-2z" />
                </svg>
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

export default CodigoConduta;
