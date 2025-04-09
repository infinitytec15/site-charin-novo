import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  FileText,
  Users,
  CheckCircle,
  MapPin,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AcquisitionProcess = () => {
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Contato Inicial",
      description:
        "Entre em contato conosco para expressar seu interesse e receber informações detalhadas sobre nossa franquia.",
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Análise de Documentos",
      description:
        "Envie os documentos necessários para que possamos avaliar sua elegibilidade como franqueado.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Entrevista",
      description:
        "Participe de uma entrevista com nossa equipe para discutirmos suas expectativas e objetivos.",
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Análise de Localização",
      description:
        "Realizamos um estudo detalhado da localização proposta para garantir viabilidade comercial.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Aprovação e Contrato",
      description:
        "Após aprovação, assinamos o contrato e iniciamos o processo de implementação da sua franquia.",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Processo de Aquisição
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Conheça as etapas para se tornar um franqueado e fazer parte da
            nossa rede de carregamento de veículos elétricos.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 p-2 bg-primary/10 rounded-full">
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-base text-gray-500">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
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
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Todo o processo de aquisição de franquia é acompanhado por nossa
              equipe especializada, garantindo suporte em cada etapa e
              preparando você para o sucesso no mercado de carregamento de
              veículos elétricos.
            </p>
            <div className="mt-8">
              <a
                href="#contato"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Quero ser um franqueado
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AcquisitionProcess;
