import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

const PoliticaPrivacidade = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Política de Privacidade | EletriCharge</title>
        <meta
          name="description"
          content="Política de Privacidade da EletriCharge. Saiba como coletamos, usamos e protegemos seus dados pessoais em nossa rede de carregamento para veículos elétricos."
        />
        <meta
          name="keywords"
          content="política de privacidade, EletriCharge, veículos elétricos, dados pessoais, proteção de dados, LGPD"
        />
        <link
          rel="canonical"
          href="https://eletricharge.com.br/politicaprivacidade"
        />
        <meta
          property="og:title"
          content="Política de Privacidade | EletriCharge"
        />
        <meta
          property="og:description"
          content="Política de Privacidade da EletriCharge. Saiba como coletamos, usamos e protegemos seus dados pessoais."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://eletricharge.com.br/politicaprivacidade"
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1593941707882-a56bbc8df44c?w=1200&q=80"
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
            Política de Privacidade
          </h1>
          <p className="text-gray-600 mb-8">
            Última atualização: abril de 2025
          </p>
          <p className="text-lg text-gray-700 mb-8">
            A EletriCharge valoriza a sua privacidade e está comprometida em
            proteger seus dados pessoais. Esta política de privacidade descreve
            como coletamos, usamos e compartilhamos suas informações.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0C1F38] mb-4">
              Informações que Coletamos
            </h2>
            <p className="text-gray-700 mb-4">
              Podemos coletar os seguintes tipos de informações:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                Informações de identificação pessoal (nome, e-mail, telefone)
              </li>
              <li>
                Informações de pagamento (dados de cartão de crédito, histórico
                de transações)
              </li>
              <li>
                Informações do veículo (modelo, placa, capacidade da bateria)
              </li>
              <li>
                Dados de localização (quando você usa nosso aplicativo ou
                estações)
              </li>
              <li>
                Informações de uso (padrões de recarga, preferências, histórico)
              </li>
              <li>
                Dados técnicos (endereço IP, tipo de dispositivo, cookies)
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0C1F38] mb-4">
              Como Usamos Suas Informações
            </h2>
            <p className="text-gray-700 mb-4">
              Utilizamos suas informações para os seguintes fins:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Fornecer, manter e melhorar nossos serviços</li>
              <li>Processar pagamentos e gerenciar sua conta</li>
              <li>
                Enviar notificações sobre estações próximas ou disponíveis
              </li>
              <li>
                Personalizar sua experiência e oferecer promoções relevantes
              </li>
              <li>
                Analisar padrões de uso para melhorar nossa infraestrutura
              </li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0C1F38] mb-4">
              Compartilhamento de Informações
            </h2>
            <p className="text-gray-700 mb-4">
              Podemos compartilhar suas informações com:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Parceiros de negócios que nos ajudam a fornecer serviços</li>
              <li>Processadores de pagamento para completar transações</li>
              <li>Prestadores de serviços de análise e marketing</li>
              <li>Autoridades governamentais quando exigido por lei</li>
              <li>
                Franqueados da rede EletriCharge (apenas dados necessários)
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              Não vendemos suas informações pessoais a terceiros para fins de
              marketing.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0C1F38] mb-4">
              Seus Direitos de Privacidade
            </h2>
            <p className="text-gray-700 mb-4">
              Você tem os seguintes direitos relacionados aos seus dados
              pessoais:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Direito de acesso aos seus dados pessoais</li>
              <li>Direito de retificação de dados incorretos ou incompletos</li>
              <li>Direito de exclusão ("direito ao esquecimento")</li>
              <li>Direito de restringir o processamento de seus dados</li>
              <li>Direito à portabilidade de dados</li>
              <li>Direito de oposição ao processamento de seus dados</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Para exercer qualquer um desses direitos, entre em contato conosco
              através dos canais indicados no final desta política.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0C1F38] mb-4">
              Segurança de Dados
            </h2>
            <p className="text-gray-700 mb-4">
              Implementamos medidas técnicas e organizacionais apropriadas para
              proteger seus dados pessoais contra acesso não autorizado, perda
              acidental ou alteração. Algumas dessas medidas incluem:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Criptografia de dados sensíveis</li>
              <li>Firewalls e sistemas de detecção de intrusão</li>
              <li>Acesso restrito a informações pessoais</li>
              <li>
                Treinamento regular de funcionários sobre práticas de segurança
              </li>
              <li>
                Avaliações periódicas de segurança e testes de vulnerabilidade
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0C1F38] mb-4">Contato</h2>
            <p className="text-gray-700 mb-4">
              Se você tiver dúvidas ou preocupações sobre esta política de
              privacidade ou sobre como tratamos seus dados pessoais, entre em
              contato conosco:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>E-mail: privacidade@eletricharge.com.br</li>
              <li>Telefone: (11) 9999-9999</li>
              <li>
                Endereço: Av. Paulista, 1000, São Paulo - SP, CEP 01310-100
              </li>
            </ul>
          </section>
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

export default PoliticaPrivacidade;
