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
      number: 1,
      icon: <MessageSquare className="h-8 w-8 text-[#0C1F38]" />,
      title: "Envie seu interesse",
      description:
        "Preencha o formulário com seus dados e informações de contato.",
    },
    {
      number: 2,
      icon: <FileText className="h-8 w-8 text-[#0C1F38]" />,
      title: "Receba nosso material",
      description:
        "Você receberá o material completo com todas as informações sobre a franquia.",
    },
    {
      number: 3,
      icon: <Users className="h-8 w-8 text-[#0C1F38]" />,
      title: "Reunião com nosso time",
      description:
        "Agende uma reunião para tirar todas as suas dúvidas sobre o modelo de negócio.",
    },
    {
      number: 4,
      icon: <CheckCircle className="h-8 w-8 text-[#0C1F38]" />,
      title: "Assinatura e implantação",
      description:
        "Assinatura do contrato e início do processo de implantação da sua estação.",
    },
    {
      number: 5,
      icon: <MapPin className="h-8 w-8 text-[#0C1F38]" />,
      title: "Você no nosso mapa! 🚀",
      description:
        "Sua franquia passa a fazer parte da nossa rede oficial de pontos de recarga.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
            Como Funciona a Aquisição
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça o passo a passo para se tornar um franqueado EletriCharge
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#00FF99]/30 -translate-x-1/2 hidden md:block"></div>

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
                >
                  <div className="md:w-1/2 flex justify-center">
                    <Card className="w-full max-w-md border-none shadow-lg relative">
                      <div className="absolute -top-4 -left-4 bg-[#00FF99] text-[#0C1F38] font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                        {step.number}
                      </div>
                      <CardContent className="p-6 pt-8">
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-[#00FF99]/20 p-4 rounded-full mb-4">
                            {step.icon}
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-[#0C1F38]">
                            {step.title}
                          </h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="md:w-1/2 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcquisitionProcess;
