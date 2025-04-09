import React from "react";
import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";
import {
  LucideIcon,
  Zap,
  Code,
  Rocket,
  Award,
  Users,
  Globe,
  Lightbulb,
} from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "Janeiro 2023",
    title: "Fundação da Chargin",
    description:
      "Nascemos com a visão revolucionária de transformar a mobilidade elétrica no Brasil. Nossa equipe de especialistas em tecnologia e sustentabilidade uniu forças para criar uma solução que tornasse a recarga de veículos elétricos acessível, intuitiva e disponível em todo o território nacional.",
    icon: Lightbulb,
  },
  {
    year: "Julho 2023",
    title: "Primeiros Protótipos",
    description:
      "Após meses de pesquisa intensiva e desenvolvimento, lançamos nossos primeiros protótipos de estações de carregamento. Realizamos testes rigorosos em laboratório e em condições reais, coletando dados valiosos que nos permitiram aprimorar a tecnologia e a experiência do usuário.",
    icon: Zap,
  },
  {
    year: "Novembro 2023",
    title: "Desenvolvimento do Sistema",
    description:
      "Criação da nossa plataforma integrada de gerenciamento e do aplicativo móvel Chargin. Implementamos tecnologias de ponta em cloud computing, segurança de dados e processamento de pagamentos, garantindo uma experiência fluida e segura para nossos usuários em cada interação com nosso ecossistema.",
    icon: Code,
  },
  {
    year: "Fevereiro 2024",
    title: "Primeiras Parcerias",
    description:
      "Estabelecimento de parcerias estratégicas com as principais redes de postos de combustível, shopping centers e estacionamentos do país. Nosso modelo de negócio inovador atraiu investidores e parceiros que compartilham nossa visão de um futuro mais sustentável para a mobilidade urbana brasileira.",
    icon: Users,
  },
  {
    year: "Agosto 2024",
    title: "Expansão Nacional",
    description:
      "Início da expansão acelerada para as principais capitais brasileiras, com foco inicial em São Paulo, Rio de Janeiro e Brasília. Nossa rede cresceu exponencialmente, levando pontos de recarga confiáveis e de alta performance para regiões estratégicas, conectando o país através da mobilidade elétrica.",
    icon: Globe,
  },
  {
    year: "Março 2025",
    title: "Lançamento Oficial",
    description:
      "Lançamento oficial da rede Chargin com mais de 100 pontos de recarga ativos em todo o Brasil. Evento transmitido ao vivo para todo o país, marcando o início de uma nova era na mobilidade elétrica nacional, com cobertura completa da mídia especializada e grande repercussão no setor automotivo e de energia.",
    icon: Rocket,
  },
];

const Timeline = () => {
  return (
    <div className="relative py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold text-[#0C1F38] dark:text-white mb-4">
          Nossa Jornada
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Conheça os marcos importantes da nossa história e acompanhe nossa
          evolução revolucionária no mercado de mobilidade elétrica sustentável
          no Brasil.
        </p>
      </motion.div>

      {/* Timeline container */}
      <div className="relative">
        {/* Main timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#00A651]/10 via-[#00A651]/50 to-[#00A651]/10 dark:from-[#00D651]/20 dark:via-[#00D651]/60 dark:to-[#00D651]/20 rounded-full" />

        {/* Timeline items */}
        <div className="space-y-16">
          {timelineEvents.map((event, index) => (
            <TimelineItem
              key={index}
              year={event.year}
              title={event.title}
              description={event.description}
              icon={event.icon}
              isLeft={index % 2 === 1}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
