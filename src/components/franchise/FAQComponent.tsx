import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQComponent = () => {
  const faqItems = [
    {
      question: "Qual o investimento mínimo?",
      answer:
        "O investimento mínimo para se tornar um franqueado EletriCharge é de R$ 250.000,00, incluindo taxa de franquia, equipamentos, instalação e capital de giro inicial. O retorno do investimento é estimado entre 18 e 24 meses, dependendo da localização e do fluxo de veículos.",
    },
    {
      question: "Preciso ter local próprio?",
      answer:
        "Não é obrigatório ter um local próprio. Muitos de nossos franqueados operam em parcerias com estabelecimentos como shoppings, supermercados, restaurantes e hotéis. Nossa equipe pode auxiliar na prospecção e negociação de locais estratégicos na sua região.",
    },
    {
      question: "Como funciona a manutenção?",
      answer:
        "A EletriCharge oferece suporte técnico completo para manutenção dos equipamentos. Temos uma equipe especializada disponível 24/7 para resolver qualquer problema técnico. Além disso, realizamos manutenções preventivas periódicas para garantir o funcionamento ideal dos carregadores.",
    },
    {
      question: "Recebo ajuda para captar clientes?",
      answer:
        "Sim! Todos os nossos franqueados são incluídos no aplicativo EletriCharge e no site oficial, o que garante visibilidade para os motoristas de veículos elétricos. Além disso, oferecemos suporte de marketing com materiais promocionais, estratégias de divulgação local e campanhas nacionais que beneficiam toda a rede.",
    },
    {
      question: "Qual a exclusividade territorial?",
      answer:
        "Garantimos exclusividade territorial para nossos franqueados, com base no potencial de mercado de cada região. A área de exclusividade é definida durante o processo de negociação e formalizada em contrato, protegendo seu investimento de concorrência direta da própria rede.",
    },
    {
      question: "Quais são os tipos de carregadores disponíveis?",
      answer:
        "Oferecemos diferentes modelos de carregadores, desde os semi-rápidos (22kW) até os ultrarrápidos (150kW+). A definição do modelo ideal depende da análise de localização, público-alvo e investimento disponível. Todos os equipamentos são homologados e compatíveis com os principais modelos de veículos elétricos do mercado.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0C1F38] mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre nossa
            franquia
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-[#0C1F38] hover:text-[#00FF99]">
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
    </section>
  );
};

export default FAQComponent;
