import React from "react";
import { Helmet } from "react-helmet";
import { Zap, Shield, Lock, Eye, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const PoliticaSeguranca = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Política de Segurança | EletriCharge</title>
        <meta
          name="description"
          content="Política de Segurança da EletriCharge. Saiba como protegemos seus dados e garantimos a segurança das transações em nossa rede de carregamento para veículos elétricos."
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
            Política de Segurança
          </h1>
          <p className="text-gray-600 mb-8">
            Última atualização: abril de 2025
          </p>
          <p className="text-lg text-gray-700 mb-8">
            A EletriCharge está comprometida em garantir a segurança de nossos
            usuários, tanto no ambiente digital quanto nas estações físicas de
            recarga. Esta política descreve as medidas que implementamos para
            proteger você e seus dados.
          </p>

          <section className="mb-10">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-[#00FF99] mr-3" />
              <h2 className="text-2xl font-bold text-[#0C1F38]">
                Segurança Digital
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              Implementamos as seguintes medidas para proteger seus dados e
              transações online:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                <span className="font-semibold">Criptografia SSL/TLS:</span>{" "}
                Todas as comunicações entre seu dispositivo e nossos servidores
                são criptografadas usando protocolos SSL/TLS de última geração.
              </li>
              <li>
                <span className="font-semibold">
                  Autenticação de dois fatores (2FA):
                </span>{" "}
                Oferecemos e incentivamos o uso de 2FA para adicionar uma camada
                extra de segurança à sua conta.
              </li>
              <li>
                <span className="font-semibold">
                  Tokenização de pagamentos:
                </span>{" "}
                Seus dados de pagamento nunca são armazenados diretamente em
                nossos servidores. Utilizamos tokenização para processar
                pagamentos de forma segura.
              </li>
              <li>
                <span className="font-semibold">Monitoramento contínuo:</span>{" "}
                Nossos sistemas são monitorados 24/7 para detectar e responder a
                atividades suspeitas.
              </li>
              <li>
                <span className="font-semibold">Testes de penetração:</span>{" "}
                Realizamos testes regulares de penetração com empresas
                especializadas para identificar e corrigir vulnerabilidades.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-[#00FF99] mr-3" />
              <h2 className="text-2xl font-bold text-[#0C1F38]">
                Segurança nas Estações de Recarga
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              Nossas estações físicas de recarga são projetadas com os mais
              altos padrões de segurança:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                <span className="font-semibold">
                  Certificação de segurança:
                </span>{" "}
                Todos os equipamentos são certificados por órgãos reguladores e
                atendem às normas internacionais de segurança elétrica.
              </li>
              <li>
                <span className="font-semibold">Proteção contra surtos:</span>{" "}
                Sistemas avançados de proteção contra surtos elétricos e
                curto-circuitos para proteger seu veículo.
              </li>
              <li>
                <span className="font-semibold">Monitoramento remoto:</span>{" "}
                Nossas estações são monitoradas remotamente para detectar falhas
                técnicas e garantir o funcionamento adequado.
              </li>
              <li>
                <span className="font-semibold">Iluminação adequada:</span>{" "}
                Todas as estações são bem iluminadas para garantir a segurança
                dos usuários durante recargas noturnas.
              </li>
              <li>
                <span className="font-semibold">Botão de emergência:</span>{" "}
                Todas as estações possuem botão de emergência para interrupção
                imediata da recarga em caso de necessidade.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <div className="flex items-center mb-4">
              <Eye className="h-6 w-6 text-[#00FF99] mr-3" />
              <h2 className="text-2xl font-bold text-[#0C1F38]">
                Privacidade e Proteção de Dados
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              Além das medidas de segurança técnica, implementamos práticas
              rigorosas de proteção de dados:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                <span className="font-semibold">Minimização de dados:</span>{" "}
                Coletamos apenas os dados necessários para fornecer nossos
                serviços.
              </li>
              <li>
                <span className="font-semibold">Controle de acesso:</span>{" "}
                Implementamos controles rigorosos de acesso para garantir que
                apenas pessoal autorizado possa acessar dados sensíveis.
              </li>
              <li>
                <span className="font-semibold">Retenção limitada:</span>{" "}
                Mantemos seus dados apenas pelo tempo necessário para fornecer
                nossos serviços ou conforme exigido por lei.
              </li>
              <li>
                <span className="font-semibold">Anonimização:</span> Quando
                possível, anonimizamos dados para análises e melhorias de
                serviço.
              </li>
              <li>
                <span className="font-semibold">Conformidade com LGPD:</span>{" "}
                Todas as nossas práticas estão em conformidade com a Lei Geral
                de Proteção de Dados e outras regulamentações aplicáveis.
              </li>
            </ul>
            <p className="text-gray-700">
              Para mais detalhes sobre como tratamos seus dados pessoais,
              consulte nossa{" "}
              <a
                href="/politicaprivacidade"
                className="text-[#00FF99] hover:underline"
              >
                Política de Privacidade
              </a>
              .
            </p>
          </section>

          <section className="mb-10">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-[#00FF99] mr-3" />
              <h2 className="text-2xl font-bold text-[#0C1F38]">
                Reportando Problemas de Segurança
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              Se você identificar qualquer problema de segurança em nossos
              serviços ou tiver preocupações relacionadas à segurança, entre em
              contato imediatamente através dos seguintes canais:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>
                E-mail:{" "}
                <a
                  href="mailto:seguranca@eletricharge.com.br"
                  className="text-[#00FF99] hover:underline"
                >
                  seguranca@eletricharge.com.br
                </a>
              </li>
              <li>Telefone: (11) 9999-9999 (disponível 24/7)</li>
              <li>
                Através do aplicativo, na seção "Suporte" &gt; "Reportar
                Problema de Segurança"
              </li>
            </ul>
            <p className="text-gray-700">
              Valorizamos sua contribuição para manter nossa plataforma segura e
              tratamos todos os relatórios com seriedade e confidencialidade.
            </p>
          </section>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-10">
            <p className="text-gray-700">
              Esta Política de Segurança pode ser atualizada periodicamente.
              Recomendamos que você a revise regularmente para estar ciente de
              quaisquer alterações. A data da última atualização está indicada
              no início deste documento.
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

export default PoliticaSeguranca;
