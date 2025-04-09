import { Helmet } from "react-helmet";
import { Zap } from "lucide-react";

export default function TermosDeUso() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Termos de Uso | EletriCharge</title>
        <meta
          name="description"
          content="Termos de uso da plataforma EletriCharge para carregamento de veículos elétricos."
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

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0C1F38] mb-8">
          Termos de Uso
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#0C1F38] mb-4">
            1. Aceitação dos Termos
          </h2>
          <p className="mb-4 text-gray-700">
            Ao acessar e utilizar a plataforma EletriCharge, você concorda em
            cumprir e estar vinculado a estes Termos de Uso. Se você não
            concordar com qualquer parte destes termos, não poderá acessar ou
            utilizar nossos serviços.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#0C1F38] mb-4">
            2. Descrição dos Serviços
          </h2>
          <p className="mb-4 text-gray-700">
            A EletriCharge oferece uma plataforma para localização, reserva e
            utilização de pontos de recarga para veículos elétricos. Nossos
            serviços incluem, mas não se limitam a:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">
              Localização de estações de recarga através de mapa interativo
            </li>
            <li className="mb-2">
              Reserva de pontos de recarga em horários específicos
            </li>
            <li className="mb-2">
              Simulação de tempo e custo de recarga para diferentes modelos de
              veículos
            </li>
            <li className="mb-2">
              Processamento de pagamentos para utilização dos serviços de
              recarga
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#0C1F38] mb-4">
            3. Cadastro e Conta de Usuário
          </h2>
          <p className="mb-4 text-gray-700">
            Para utilizar completamente nossos serviços, você precisará criar
            uma conta. Ao se cadastrar, você concorda em fornecer informações
            precisas, completas e atualizadas. Você é responsável por manter a
            confidencialidade de sua senha e por todas as atividades que ocorrem
            em sua conta.
          </p>
          <p className="mb-4 text-gray-700">
            A EletriCharge reserva-se o direito de suspender ou encerrar sua
            conta se qualquer informação fornecida durante o processo de
            registro ou posteriormente for considerada falsa, imprecisa,
            desatualizada ou incompleta.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#0C1F38] mb-4">
            4. Uso Aceitável
          </h2>
          <p className="mb-4 text-gray-700">
            Ao utilizar nossos serviços, você concorda em não:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">
              Violar qualquer lei ou regulamento aplicável
            </li>
            <li className="mb-2">
              Infringir os direitos de propriedade intelectual da EletriCharge
              ou de terceiros
            </li>
            <li className="mb-2">
              Interferir ou interromper a integridade ou o desempenho de nossos
              serviços
            </li>
            <li className="mb-2">
              Tentar obter acesso não autorizado aos nossos sistemas ou redes
            </li>
            <li className="mb-2">
              Utilizar nossos serviços para fins fraudulentos ou ilegais
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#0C1F38] mb-4">
            5. Pagamentos e Faturamento
          </h2>
          <p className="mb-4 text-gray-700">
            Os preços dos serviços de recarga são estabelecidos pelos
            proprietários das estações e podem variar. Ao utilizar um ponto de
            recarga, você concorda em pagar todas as taxas aplicáveis conforme
            especificado no momento da reserva ou utilização.
          </p>
          <p className="mb-4 text-gray-700">
            A EletriCharge utiliza processadores de pagamento terceirizados para
            facilitar as transações. Ao fornecer suas informações de pagamento,
            você declara e garante que está autorizado a utilizar o método de
            pagamento especificado.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#0C1F38] mb-4">
            6. Propriedade Intelectual
          </h2>
          <p className="mb-4 text-gray-700">
            Todo o conteúdo, recursos e funcionalidades disponíveis em nossa
            plataforma, incluindo, mas não se limitando a, textos, gráficos,
            logotipos, ícones, imagens, clipes de áudio, downloads digitais e
            compilações de dados, são propriedade da EletriCharge ou de seus
            licenciadores e são protegidos por leis de direitos autorais, marcas
            registradas e outras leis de propriedade intelectual.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#0C1F38] mb-4">
            7. Limitação de Responsabilidade
          </h2>
          <p className="mb-4 text-gray-700">
            A EletriCharge não será responsável por quaisquer danos indiretos,
            incidentais, especiais, consequenciais ou punitivos, incluindo perda
            de lucros, dados, uso ou outra perda intangível, resultantes de:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">
              Seu uso ou incapacidade de usar nossos serviços
            </li>
            <li className="mb-2">
              Qualquer alteração, suspensão ou descontinuidade de nossos
              serviços
            </li>
            <li className="mb-2">
              Acesso não autorizado ou alteração de suas transmissões ou dados
            </li>
            <li className="mb-2">
              Declarações ou conduta de terceiros em relação a nossos serviços
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#0C1F38] mb-4">
            8. Modificações dos Termos
          </h2>
          <p className="mb-4 text-gray-700">
            A EletriCharge reserva-se o direito de modificar estes Termos de Uso
            a qualquer momento. As alterações entrarão em vigor imediatamente
            após a publicação dos termos atualizados em nossa plataforma.
            Recomendamos que você revise periodicamente estes termos para estar
            ciente de quaisquer alterações.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#0C1F38] mb-4">
            9. Lei Aplicável
          </h2>
          <p className="mb-4 text-gray-700">
            Estes Termos de Uso serão regidos e interpretados de acordo com as
            leis do Brasil, independentemente de seus princípios de conflito de
            leis.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#0C1F38] mb-4">
            10. Contato
          </h2>
          <p className="mb-4 text-gray-700">
            Se você tiver alguma dúvida sobre estes Termos de Uso, entre em
            contato conosco através do e-mail:{" "}
            <a
              href="mailto:termos@eletricharge.com.br"
              className="text-[#00FF99] hover:underline"
            >
              termos@eletricharge.com.br
            </a>
          </p>
        </div>

        <div className="text-center text-gray-600 mt-12">
          <p>Última atualização: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto">
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
}
