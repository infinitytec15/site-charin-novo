import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Clock,
  CheckCircle,
  Upload,
  CreditCard,
  Smartphone,
  Server,
  Shield,
  ArrowRight,
  X,
} from "lucide-react";

const MaintenanceModule = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
            🔧 Módulo de Manutenção Técnica
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            App exclusivo para White Label que garante o funcionamento pleno e
            contínuo da sua rede de recarga
          </p>
        </div>

        {/* Main description */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-4 md:p-8 mb-8 md:mb-12">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Nossa solução White Label conta com um{" "}
              <strong>aplicativo técnico exclusivo</strong> que garante o
              funcionamento pleno e contínuo da sua rede de recarga.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Com ele, técnicos recebem chamados em tempo real, executam
              manutenções no local e enviam relatórios com fotos e vídeos. Tudo
              integrado ao seu painel.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Cada manutenção finalizada gera um crédito automático na carteira
              do técnico, trazendo eficiência, agilidade e incentivo ao bom
              atendimento.
            </p>
            <p className="text-lg text-gray-700">
              Uma tecnologia robusta, conectada e feita para escalar a operação
              com qualidade.
            </p>
          </div>
        </div>

        {/* App mockup */}
        <div className="relative max-w-5xl mx-auto mb-8 md:mb-16">
          <div className="bg-gradient-to-r from-[#0C1F38] to-[#0C1F38]/80 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Como Funciona o App de Manutenção
                </h3>
                <p className="mb-6">
                  O aplicativo exclusivo para manutenção funciona com base em um{" "}
                  <strong>fluxo claro de chamados e execução técnica</strong>,
                  garantindo controle total da operação.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="relative mr-3 mt-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                      <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                        <Clock className="h-4 w-4 text-white drop-shadow-md" />
                      </div>
                    </div>
                    <span>Usuário ou operador detecta problema técnico</span>
                  </li>
                  <li className="flex items-start">
                    <div className="relative mr-3 mt-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                      <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                        <Clock className="h-4 w-4 text-white drop-shadow-md" />
                      </div>
                    </div>
                    <span>Abre chamado no painel administrativo</span>
                  </li>
                  <li className="flex items-start">
                    <div className="relative mr-3 mt-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                      <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                        <Clock className="h-4 w-4 text-white drop-shadow-md" />
                      </div>
                    </div>
                    <span>
                      Chamado vai para feed visível por todos os técnicos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="relative mr-3 mt-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                      <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                        <Clock className="h-4 w-4 text-white drop-shadow-md" />
                      </div>
                    </div>
                    <span>Um técnico disponível "aceita" o chamado</span>
                  </li>
                  <li className="flex items-start">
                    <div className="relative mr-3 mt-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                      <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                        <Clock className="h-4 w-4 text-white drop-shadow-md" />
                      </div>
                    </div>
                    <span>Técnico executa a manutenção no local</span>
                  </li>
                  <li className="flex items-start">
                    <div className="relative mr-3 mt-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                      <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                        <Clock className="h-4 w-4 text-white drop-shadow-md" />
                      </div>
                    </div>
                    <span>Envia fotos/vídeos da solução pelo app</span>
                  </li>
                  <li className="flex items-start">
                    <div className="relative mr-3 mt-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                      <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                        <Clock className="h-4 w-4 text-white drop-shadow-md" />
                      </div>
                    </div>
                    <span>Chamado é finalizado e validado</span>
                  </li>
                  <li className="flex items-start">
                    <div className="relative mr-3 mt-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                      <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                        <Clock className="h-4 w-4 text-white drop-shadow-md" />
                      </div>
                    </div>
                    <span>Valor é creditado na carteira do técnico</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 justify-center mt-6 md:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=800&q=80"
                  alt="App de Manutenção"
                  className="rounded-xl shadow-lg max-w-full h-auto transform rotate-3 border-4 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1611746869696-d09bce200020?w=800&q=80"
                  alt="Técnico realizando manutenção"
                  className="rounded-xl shadow-lg max-w-full h-auto transform -rotate-2 border-4 border-white mt-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
          >
            <div className="bg-gradient-to-br from-[#00FF99]/20 to-[#00A651]/20 p-4 rounded-full mb-4 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full blur-sm bg-gradient-to-br from-[#00FF99]/40 to-[#00A651]/40 -z-10 opacity-60"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20 z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-full bg-black/10 z-10"></div>
              <Smartphone className="h-8 w-8 text-[#0C1F38] drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] relative z-20" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0C1F38]">
              Funcionalidades do App Técnico
            </h3>
            <ul className="text-gray-600 text-left space-y-2">
              <li className="flex items-center">
                <div className="relative mr-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                  <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                    <CheckCircle className="h-3 w-3 text-white drop-shadow-md" />
                  </div>
                </div>
                <span>Feed de chamados em tempo real</span>
              </li>
              <li className="flex items-center">
                <div className="relative mr-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                  <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                    <CheckCircle className="h-3 w-3 text-white drop-shadow-md" />
                  </div>
                </div>
                <span>Aceite de ordens de serviço</span>
              </li>
              <li className="flex items-center">
                <div className="relative mr-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                  <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                    <CheckCircle className="h-3 w-3 text-white drop-shadow-md" />
                  </div>
                </div>
                <span>Upload de fotos e vídeos</span>
              </li>
              <li className="flex items-center">
                <div className="relative mr-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                  <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                    <CheckCircle className="h-3 w-3 text-white drop-shadow-md" />
                  </div>
                </div>
                <span>Detalhes técnicos da estação</span>
              </li>
              <li className="flex items-center">
                <div className="relative mr-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                  <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                    <CheckCircle className="h-3 w-3 text-white drop-shadow-md" />
                  </div>
                </div>
                <span>Finalização e envio de relatório</span>
              </li>
              <li className="flex items-center">
                <div className="relative mr-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                  <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                    <CheckCircle className="h-3 w-3 text-white drop-shadow-md" />
                  </div>
                </div>
                <span>Visualização da carteira digital</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
          >
            <div className="bg-gradient-to-br from-[#00FF99]/20 to-[#00A651]/20 p-4 rounded-full mb-4 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full blur-sm bg-gradient-to-br from-[#00FF99]/40 to-[#00A651]/40 -z-10 opacity-60"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20 z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-full bg-black/10 z-10"></div>
              <Server className="h-8 w-8 text-[#0C1F38] drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] relative z-20" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0C1F38]">
              Painel Administrativo
            </h3>
            <ul className="text-gray-600 text-left space-y-2">
              <li className="flex items-center">
                <div className="relative mr-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                  <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                    <CheckCircle className="h-3 w-3 text-white drop-shadow-md" />
                  </div>
                </div>
                <span>Abertura e gestão de chamados</span>
              </li>
              <li className="flex items-center">
                <div className="relative mr-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                  <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                    <CheckCircle className="h-3 w-3 text-white drop-shadow-md" />
                  </div>
                </div>
                <span>Acompanhamento de status</span>
              </li>
              <li className="flex items-center">
                <div className="relative mr-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                  <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                    <CheckCircle className="h-3 w-3 text-white drop-shadow-md" />
                  </div>
                </div>
                <span>Atribuição de técnicos</span>
              </li>
              <li className="flex items-center">
                <div className="relative mr-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                  <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                    <CheckCircle className="h-3 w-3 text-white drop-shadow-md" />
                  </div>
                </div>
                <span>Aprovação da execução</span>
              </li>
              <li className="flex items-center">
                <div className="relative mr-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                  <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                    <CheckCircle className="h-3 w-3 text-white drop-shadow-md" />
                  </div>
                </div>
                <span>Controle financeiro</span>
              </li>
              <li className="flex items-center">
                <div className="relative mr-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                  <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                    <CheckCircle className="h-3 w-3 text-white drop-shadow-md" />
                  </div>
                </div>
                <span>Relatórios técnicos</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
          >
            <div className="bg-gradient-to-br from-[#00FF99]/20 to-[#00A651]/20 p-4 rounded-full mb-4 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full blur-sm bg-gradient-to-br from-[#00FF99]/40 to-[#00A651]/40 -z-10 opacity-60"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20 z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-full bg-black/10 z-10"></div>
              <CreditCard className="h-8 w-8 text-[#0C1F38] drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] relative z-20" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0C1F38]">
              Carteira Técnica Integrada
            </h3>
            <ul className="text-gray-600 text-left space-y-2">
              <li className="flex items-center">
                <div className="relative mr-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                  <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                    <CheckCircle className="h-3 w-3 text-white drop-shadow-md" />
                  </div>
                </div>
                <span>Valores por serviço finalizado</span>
              </li>
              <li className="flex items-center">
                <div className="relative mr-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                  <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                    <CheckCircle className="h-3 w-3 text-white drop-shadow-md" />
                  </div>
                </div>
                <span>Visualização do extrato</span>
              </li>
              <li className="flex items-center">
                <div className="relative mr-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                  <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                    <CheckCircle className="h-3 w-3 text-white drop-shadow-md" />
                  </div>
                </div>
                <span>Solicitação de saque via Pix</span>
              </li>
              <li className="flex items-center">
                <div className="relative mr-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                  <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                    <CheckCircle className="h-3 w-3 text-white drop-shadow-md" />
                  </div>
                </div>
                <span>Controle transparente</span>
              </li>
              <li className="flex items-center">
                <div className="relative mr-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/60 to-[#00A651]/60 rounded-full blur-sm"></div>
                  <div className="bg-gradient-to-br from-[#00FF99] to-[#00A651] p-1 rounded-full relative">
                    <CheckCircle className="h-3 w-3 text-white drop-shadow-md" />
                  </div>
                </div>
                <span>Valores por tipo de chamado</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Image Gallery */}
        <div className="max-w-5xl mx-auto mb-8 md:mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-[#0C1F38]">
            Galeria de Imagens
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="relative">
              <div className="relative mx-auto w-64 h-[500px] bg-black rounded-[36px] shadow-xl overflow-hidden border-[14px] border-black">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-[30px] bg-black rounded-b-[16px] z-10">
                  <div className="absolute top-[10px] left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-800 rounded-full"></div>
                </div>
                <div className="absolute top-0 right-[10px] w-2 h-[60px] bg-gray-800 rounded-b-lg"></div>
                <div className="absolute top-[100px] left-[-14px] w-2 h-[60px] bg-gray-800 rounded-r-lg"></div>
                <div className="absolute top-[180px] left-[-14px] w-2 h-[60px] bg-gray-800 rounded-r-lg"></div>
                <div className="h-full w-full rounded-[22px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1593941707882-a5bfcf2dd8b4?w=800&q=80"
                    alt="Manutenção preventiva em estação"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-800 rounded-full"></div>
              </div>
              <p className="text-center mt-4 text-gray-700 font-medium">
                Manutenção preventiva em estação
              </p>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-64 h-[500px] bg-black rounded-[36px] shadow-xl overflow-hidden border-[14px] border-black">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-[30px] bg-black rounded-b-[16px] z-10">
                  <div className="absolute top-[10px] left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-800 rounded-full"></div>
                </div>
                <div className="absolute top-0 right-[10px] w-2 h-[60px] bg-gray-800 rounded-b-lg"></div>
                <div className="absolute top-[100px] left-[-14px] w-2 h-[60px] bg-gray-800 rounded-r-lg"></div>
                <div className="absolute top-[180px] left-[-14px] w-2 h-[60px] bg-gray-800 rounded-r-lg"></div>
                <div className="h-full w-full rounded-[22px] overflow-hidden bg-[#0C1F38]">
                  <img
                    src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80"
                    alt="Interface do app de manutenção"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-800 rounded-full"></div>
              </div>
              <p className="text-center mt-4 text-gray-700 font-medium">
                Interface do app de manutenção
              </p>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-64 h-[500px] bg-black rounded-[36px] shadow-xl overflow-hidden border-[14px] border-black">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-[30px] bg-black rounded-b-[16px] z-10">
                  <div className="absolute top-[10px] left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-800 rounded-full"></div>
                </div>
                <div className="absolute top-0 right-[10px] w-2 h-[60px] bg-gray-800 rounded-b-lg"></div>
                <div className="absolute top-[100px] left-[-14px] w-2 h-[60px] bg-gray-800 rounded-r-lg"></div>
                <div className="absolute top-[180px] left-[-14px] w-2 h-[60px] bg-gray-800 rounded-r-lg"></div>
                <div className="h-full w-full rounded-[22px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"
                    alt="Dashboard de gestão de chamados"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-800 rounded-full"></div>
              </div>
              <p className="text-center mt-4 text-gray-700 font-medium">
                Dashboard de gestão de chamados
              </p>
            </div>
          </div>
        </div>

        {/* Technology section */}
        <div className="max-w-4xl mx-auto bg-[#0C1F38] rounded-2xl shadow-lg p-4 md:p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">
            🛠️ Tecnologias e Robustez do Sistema
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div>
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-br from-[#00FF99]/40 to-[#00A651] p-3 rounded-full mr-3 mt-1 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-full bg-black/10"></div>
                  <Smartphone className="h-6 w-6 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] relative z-10" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Aplicativo técnico</h4>
                  <p className="text-gray-300">
                    Desenvolvido com tecnologia moderna e escalável (Flutter ou
                    React Native) com notificações push em tempo real.
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-br from-[#00FF99]/40 to-[#00A651] p-3 rounded-full mr-3 mt-1 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-full bg-black/10"></div>
                  <Server className="h-6 w-6 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] relative z-10" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Backend robusto</h4>
                  <p className="text-gray-300">
                    API REST segura com autenticação JWT, registro completo das
                    ações e webhooks para integrações futuras.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-br from-[#00FF99]/40 to-[#00A651] p-3 rounded-full mr-3 mt-1 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-full bg-black/10"></div>
                  <Wrench className="h-6 w-6 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] relative z-10" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Painel administrativo</h4>
                  <p className="text-gray-300">
                    Desenvolvido em React.js ou Vue.js, totalmente
                    personalizável por marca, visual intuitivo e responsivo.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gradient-to-br from-[#00FF99]/40 to-[#00A651] p-3 rounded-full mr-3 mt-1 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-full bg-black/10"></div>
                  <Shield className="h-6 w-6 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] relative z-10" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">
                    Banco de dados e armazenamento
                  </h4>
                  <p className="text-gray-300">
                    Banco otimizado (PostgreSQL/MongoDB) e upload de arquivos
                    com compressão e CDN.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center px-6 py-3 bg-[#00FF99] text-[#0C1F38] font-bold rounded-full hover:bg-[#00FF99]/80 transition-colors shadow-md hover:shadow-lg"
          >
            Solicitar Demonstração <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>

            <h3 className="text-2xl font-bold text-[#0C1F38] mb-4">
              Solicitar Demonstração
            </h3>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF99]"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF99]"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF99]"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF99]"
                  placeholder="Conte-nos sobre seu interesse no módulo de manutenção"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#0C1F38] text-white font-bold rounded-md hover:bg-[#0C1F38]/90 transition-colors"
              >
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default MaintenanceModule;
