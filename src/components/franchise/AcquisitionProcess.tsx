import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  FileText,
  Users,
  CheckCircle,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AcquisitionProcess = () => {
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-[#00FF99]" />,
      title: "Contato Inicial",
      description:
        "Entre em contato conosco para expressar seu interesse e receber informações detalhadas sobre nossa franquia.",
    },
    {
      icon: <FileText className="h-8 w-8 text-[#00FF99]" />,
      title: "Análise de Documentos",
      description:
        "Envie os documentos necessários para que possamos avaliar sua elegibilidade como franqueado.",
    },
    {
      icon: <Users className="h-8 w-8 text-[#00FF99]" />,
      title: "Entrevista",
      description:
        "Participe de uma entrevista com nossa equipe para discutirmos suas expectativas e objetivos.",
    },
    {
      icon: <MapPin className="h-8 w-8 text-[#00FF99]" />,
      title: "Análise de Localização",
      description:
        "Realizamos um estudo detalhado da localização proposta para garantir viabilidade comercial.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-[#00FF99]" />,
      title: "Aprovação e Contrato",
      description:
        "Após aprovação, assinamos o contrato e iniciamos o processo de implementação da sua franquia.",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#0C1F38] sm:text-4xl">
            Processo de Aquisição
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça as etapas para se tornar um franqueado e fazer parte da
            nossa rede de carregamento de veículos elétricos.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#00A651]/20 via-[#00FF99]/40 to-[#00A651]/20 transform -translate-y-1/2 hidden lg:block"></div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-visible">
                  <CardContent className="pt-10 pb-6 px-6 relative">
                    <div className="flex flex-col items-center text-center">
                      <div className="absolute -top-8 bg-gradient-to-br from-[#00A651]/20 to-[#00FF99]/30 p-4 rounded-full shadow-[0_0_20px_rgba(0,255,153,0.4)] flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00FF99]/20 to-transparent blur-md"></div>
                        <div className="relative">{step.icon}</div>
                      </div>
                      <h3 className="text-lg font-bold text-[#0C1F38] mt-6 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-base text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                    <ArrowRight className="h-6 w-6 text-[#00FF99]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Todo o processo de aquisição de franquia é acompanhado por nossa
              equipe especializada, garantindo suporte em cada etapa e
              preparando você para o sucesso no mercado de carregamento de
              veículos elétricos.
            </p>
            <div className="mt-8">
              <a
                href="#franchise-form"
                className="inline-flex items-center px-8 py-4 text-base font-medium rounded-xl shadow-lg text-white bg-gradient-to-r from-[#00A651] to-[#00A651]/90 hover:from-[#00A651]/90 hover:to-[#00A651] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A651]"
              >
                Quero ser um franqueado
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AcquisitionProcess;
