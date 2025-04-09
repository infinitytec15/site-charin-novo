import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, MapPin, DollarSign, Zap, Shield } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-[#00FF99]" />,
      title: "ROI rápido e modelo validado",
      description:
        "Retorno do investimento em até 24 meses com modelo de negócio já testado e aprovado.",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#00FF99]" />,
      title: "Suporte técnico e comercial 24/7",
      description:
        "Assistência completa para sua operação, com equipe especializada disponível a qualquer momento.",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#00FF99]" />,
      title: "Equipamentos modernos e homologados",
      description:
        "Tecnologia de ponta com certificação e homologação para todos os modelos de veículos elétricos.",
    },
    {
      icon: <MapPin className="h-8 w-8 text-[#00FF99]" />,
      title: "Exposição no app e no site",
      description:
        "Seu ponto de recarga aparece como estação oficial em nosso aplicativo e site, gerando fluxo constante.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-[#00FF99]" />,
      title: "Treinamento completo e gestão simplificada",
      description:
        "Capacitação total da sua equipe e sistema de gestão intuitivo para controle do seu negócio.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
            Benefícios do Franqueado
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra as vantagens de fazer parte da maior rede de recarga de
            veículos elétricos do Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-[#00A651]/10 to-[#00FF99]/20 p-5 rounded-full mb-5 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,255,153,0.3)] relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00FF99]/10 to-transparent blur-md"></div>
                <div className="relative">{benefit.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0C1F38]">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
