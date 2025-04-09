import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FinalCTAComponentProps {
  onScrollToForm: () => void;
}

const FinalCTAComponent = ({ onScrollToForm }: FinalCTAComponentProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0C1F38] to-[#0C1F38]/90">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-6">
            Sua cidade está pronta para o futuro. E você?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Junte-se à rede que está transformando a mobilidade no Brasil e faça
            parte da revolução elétrica com um negócio lucrativo e sustentável.
          </p>
          <Button
            onClick={onScrollToForm}
            className="bg-[#00A651] text-white hover:bg-[#00A651]/90 text-lg px-8 py-6 rounded-xl"
            size="lg"
          >
            ENTRAR PARA A REDE DE FRANQUEADOS
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#00A651] mb-2">500+</div>
              <div className="text-gray-200">Estações em operação</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00A651] mb-2">24/7</div>
              <div className="text-gray-200">Suporte técnico</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00A651] mb-2">100%</div>
              <div className="text-gray-200">Energia limpa</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTAComponent;
