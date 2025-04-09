import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "Quanto tempo leva para carregar meu veículo elétrico?",
      answer:
        "O tempo de carregamento varia de acordo com o modelo do veículo, capacidade da bateria e tipo de carregador. Em nossas estações de carregamento rápido, a maioria dos veículos pode atingir 80% da carga em 20-40 minutos. Carregadores convencionais podem levar de 4 a 8 horas para uma carga completa.",
    },
    {
      question: "Onde posso encontrar estações de carregamento EletriCharge?",
      answer:
        "Temos mais de 500 estações espalhadas pelo Brasil. Você pode localizar a mais próxima usando nosso mapa interativo no aplicativo ou no site. Nossas estações estão estrategicamente posicionadas em shoppings, supermercados, hotéis, aeroportos, postos de combustível e centros urbanos.",
    },
    {
      question: "Quanto custa carregar meu veículo na rede EletriCharge?",
      answer:
        "Os preços variam de acordo com a localização e o tipo de carregador. Em média, o custo por kWh varia entre R$1,20 e R$2,50. Você pode verificar o preço exato de cada estação em nosso aplicativo ou usar nosso simulador para calcular o custo total da recarga para seu veículo específico.",
    },
    {
      question: "Preciso ser cliente para usar as estações de carregamento?",
      answer:
        "Não, nossas estações são abertas a todos os usuários de veículos elétricos. No entanto, clientes cadastrados em nosso aplicativo têm acesso a preços especiais, promoções exclusivas e podem acompanhar seu histórico de carregamento.",
    },
    {
      question: "Como funciona o processo para me tornar um franqueado?",
      answer:
        "O processo de franquia inclui 5 etapas: preenchimento do formulário de interesse, análise de perfil e localização, apresentação do modelo de negócio, assinatura do contrato e implementação da estação. O investimento inicial varia de acordo com o modelo de franquia escolhido, e oferecemos suporte completo em todas as etapas.",
    },
    {
      question: "Quais tipos de conectores estão disponíveis nas estações?",
      answer:
        "Nossas estações oferecem os principais tipos de conectores do mercado: CCS Combo 1 e 2, CHAdeMO, Tipo 2 e J1772. Cada estação possui informações detalhadas sobre os conectores disponíveis, que podem ser consultadas em nosso aplicativo ou site.",
    },
    {
      question: "O que fazer se encontrar uma estação com problemas?",
      answer:
        "Caso encontre algum problema em nossas estações, você pode reportá-lo diretamente pelo aplicativo ou entrar em contato com nosso suporte 24 horas pelo telefone 0800-123-4567. Nossa equipe técnica será acionada imediatamente para resolver o problema.",
    },
  ];

  return (
    <div className="w-full bg-white">
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-[#0C1F38] hover:text-[#00FF99] font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
