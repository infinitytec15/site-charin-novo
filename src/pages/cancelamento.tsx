import React from "react";
import { Helmet } from "react-helmet";
import { Zap, RefreshCw, CreditCard, Clock, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const Cancelamento = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Política de Cancelamento e Reembolso | EletriCharge</title>
        <meta
          name="description"
          content="Política de Cancelamento e Reembolso da EletriCharge. Saiba como solicitar cancelamentos e reembolsos para serviços de recarga de veículos elétricos."
        />
      </Helmet>

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
              href="/"
              className="text-sm font-medium hover:text-[#00FF99] transition-colors"
            >
              Início
            </a>
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
              href="/points"
              className="text-sm font-medium hover:text-[#00FF99] transition-colors"
            >
              Pontos de Recarga
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <motion.div
          className="max-w-4xl mx-auto px-6 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#0C1F38] mb-6">
            Política de Cancelamento e Reembolso
          </h1>
          <p className="text-gray-600 mb-8">
            Última atualização: abril de 2025
          </p>
          <p className="text-lg text-gray-700 mb-8">
            A EletriCharge está comprometida em oferecer um serviço justo e
            transparente. Esta política descreve as condições e procedimentos
            para cancelamentos e reembolsos relacionados aos nossos serviços de
            recarga.
          </p>

          <section className="mb-10">
            <div className="flex items-center mb-4">
              <RefreshCw className="h-6 w-6 text-[#00FF99] mr-3" />
              <h2 className="text-2xl font-bold text-[#0C1F38]">
                Cancelamento de Reservas
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              Para reservas de horários em estações de recarga:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                <span className="font-semibold">
                  Cancelamento com mais de 2 horas de antecedência:
                </span>{" "}
                Reembolso integral do valor pago.
              </li>
              <li>
                <span className="font-semibold">
                  Cancelamento entre 2 horas e 30 minutos antes do horário
                  reservado:
                </span>{" "}
                Reembolso de 70% do valor pago.
              </li>
              <li>
                <span className="font-semibold">
                  Cancelamento com menos de 30 minutos de antecedência:
                </span>{" "}
                Sem reembolso.
              </li>
              <li>
                <span className="font-semibold">
                  Não comparecimento (No-show):
                </span>{" "}
                Sem reembolso e possível cobrança de taxa administrativa,
                conforme termos de uso.
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              O cancelamento pode ser realizado diretamente pelo aplicativo
              EletriCharge, na seção "Minhas Reservas".
            </p>
          </section>

          <section className="mb-10">
            <div className="flex items-center mb-4">
              <CreditCard className="h-6 w-6 text-[#00FF99] mr-3" />
              <h2 className="text-2xl font-bold text-[#0C1F38]">
                Reembolsos por Falhas no Serviço
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              Em caso de falhas técnicas ou indisponibilidade do serviço:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                <span className="font-semibold">
                  Falha técnica da estação de recarga:
                </span>{" "}
                Reembolso integral do valor pago, mais crédito de 20% para uso
                futuro como compensação pelo inconveniente.
              </li>
              <li>
                <span className="font-semibold">
                  Interrupção durante o processo de recarga:
                </span>{" "}
                Reembolso proporcional ao tempo não utilizado, mais crédito
                adicional de 10% sobre o valor total.
              </li>
              <li>
                <span className="font-semibold">
                  Estação ocupada apesar de reserva confirmada:
                </span>{" "}
                Reembolso integral mais crédito de 30% para uso futuro.
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              Para solicitar reembolso por falhas no serviço, utilize a opção
              "Reportar Problema" no aplicativo ou entre em contato com nosso
              suporte ao cliente em até 7 dias após a ocorrência.
            </p>
          </section>

          <section className="mb-10">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-[#00FF99] mr-3" />
              <h2 className="text-2xl font-bold text-[#0C1F38]">
                Prazos para Reembolso
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              Os reembolsos serão processados nos seguintes prazos:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                <span className="font-semibold">Cartão de crédito:</span> O
                valor será estornado em até 7 dias úteis, podendo variar de
                acordo com a operadora do cartão.
              </li>
              <li>
                <span className="font-semibold">Cartão de débito:</span> O
                reembolso será processado em até 10 dias úteis.
              </li>
              <li>
                <span className="font-semibold">Pix:</span> O reembolso será
                processado em até 3 dias úteis.
              </li>
              <li>
                <span className="font-semibold">Créditos na plataforma:</span>{" "}
                Disponibilização imediata na conta do usuário.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <div className="flex items-center mb-4">
              <HelpCircle className="h-6 w-6 text-[#00FF99] mr-3" />
              <h2 className="text-2xl font-bold text-[#0C1F38]">
                Como Solicitar um Reembolso
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              Para solicitar um reembolso, siga os passos abaixo:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                Acesse o aplicativo EletriCharge e vá para "Minha Conta" &gt;
                "Histórico de Transações".
              </li>
              <li>
                Selecione a transação para a qual deseja solicitar reembolso.
              </li>
              <li>Clique em "Solicitar Reembolso".</li>
              <li>
                Selecione o motivo do reembolso e forneça informações adicionais
                se necessário.
              </li>
              <li>
                Envie a solicitação e aguarde a análise de nossa equipe, que
                será realizada em até 48 horas.
              </li>
            </ol>
            <p className="text-gray-700 mb-4">
              Alternativamente, você pode entrar em contato com nosso suporte ao
              cliente pelos seguintes canais:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                E-mail:{" "}
                <a
                  href="mailto:reembolsos@eletricharge.com.br"
                  className="text-[#00FF99] hover:underline"
                >
                  reembolsos@eletricharge.com.br
                </a>
              </li>
              <li>Telefone: (11) 9999-9999</li>
              <li>Chat no aplicativo (disponível 24/7)</li>
            </ul>
          </section>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-10">
            <p className="text-gray-700">
              Esta Política de Cancelamento e Reembolso pode ser atualizada
              periodicamente. Recomendamos que você a revise regularmente para
              estar ciente de quaisquer alterações. A data da última atualização
              está indicada no início deste documento.
            </p>
          </div>
        </motion.div>
      </main>

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

export default Cancelamento;
