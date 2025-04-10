import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  ShoppingBag,
  Droplet,
  Building,
  Plane,
  Hotel,
  ShoppingCart,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

// 3D Icon Animation
const Icon3D = ({ children, color = "#00FF99", size = 10 }) => {
  return (
    <motion.div
      className={`relative flex items-center justify-center w-${size} h-${size}`}
      initial={{ y: 0 }}
      animate={{
        y: [0, -5, 0],
        rotateY: [0, 5, 0],
        rotateX: [0, 5, 0],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-md transform scale-110" />
      <div className={`relative z-10 text-${color}`}>{children}</div>
      <div className="absolute bottom-0 w-2/3 h-[2px] bg-black/10 rounded-full blur-sm transform scale-x-110" />
    </motion.div>
  );
};

const pointCategories = [
  {
    id: "shopping",
    title: "Shopping Centers",
    icon: <ShoppingBag className="h-10 w-10" />,
    path: "/points/ShoppingCenters",
    description:
      "Atraia clientes de alto valor e aumente o tempo de permanência",
  },
  {
    id: "posto",
    title: "Postos de Combustível",
    icon: <Droplet className="h-10 w-10" />,
    path: "/points/PostosDeCombustivel",
    description:
      "Diversifique sua receita e prepare-se para o futuro da mobilidade",
  },
  {
    id: "condominios",
    title: "Condomínios",
    icon: <Building className="h-10 w-10" />,
    path: "/points/Condominios",
    description:
      "Valorize seu empreendimento e ofereça um diferencial competitivo",
  },
  {
    id: "aeroportos",
    title: "Aeroportos",
    icon: <Plane className="h-10 w-10" />,
    path: "/points/Aeroportos",
    description: "Transforme seu aeroporto em um hub de mobilidade sustentável",
  },
  {
    id: "hoteis",
    title: "Hotéis",
    icon: <Hotel className="h-10 w-10" />,
    path: "/points/Hoteis",
    description: "Ofereça um serviço premium que atrai hóspedes de alto valor",
  },
  {
    id: "supermercados",
    title: "Supermercados",
    icon: <ShoppingCart className="h-10 w-10" />,
    path: "/points/Supermercados",
    description: "Aumente o tempo de permanência e o ticket médio de compras",
  },
  {
    id: "centrosurbanos",
    title: "Centros Urbanos",
    icon: <MapPin className="h-10 w-10" />,
    path: "/points/CentrosUrbanos",
    description: "Transforme áreas urbanas em hubs de mobilidade sustentável",
  },
];

const PointsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-[#0C1F38]">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <Badge className="bg-[#00FF99]/20 text-[#00FF99] border-none px-4 py-1 text-sm mb-4 inline-block">
              Soluções Personalizadas
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Soluções de Recarga para Todos os Espaços
            </h1>
            <p className="text-lg text-gray-300">
              Descubra como transformar seu espaço em um ponto estratégico de
              mobilidade elétrica e gere novas fontes de receita.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-[#00FF99] text-[#0C1F38] hover:bg-[#00FF99]/80 mt-4 rounded-full px-8"
                size="lg"
              >
                Fale com um consultor
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0C1F38] opacity-80"></div>
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1593941707882-a56bbc8df44c?w=1600&q=80"
            alt="Mapa de pontos de recarga"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="bg-[#00FF99]/20 text-[#00FF99] border-none px-4 py-1 text-sm mb-4 inline-block">
              Opções Flexíveis
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1F38] mb-4">
              Escolha o tipo de local para sua solução
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções personalizadas para diferentes tipos de
              estabelecimentos, adaptadas às necessidades específicas de cada
              negócio.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {pointCategories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white rounded-xl h-full">
                  <CardContent className="p-8 flex flex-col items-center text-center h-full">
                    <div className="bg-[#0C1F38]/5 p-6 rounded-full mb-6 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF99]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                      <Icon3D>{category.icon}</Icon3D>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#0C1F38]">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {category.description}
                    </p>
                    <Button
                      className="bg-[#0C1F38] text-white hover:bg-[#0C1F38]/90 rounded-full px-6 w-full"
                      onClick={() => (window.location.href = category.path)}
                    >
                      Saiba mais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1558389186-438424b00a68?w=800&q=80"
                alt="Benefícios de pontos de recarga"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Badge className="bg-[#00FF99]/20 text-[#00FF99] border-none px-4 py-1 text-sm mb-4 inline-block">
                Vantagens Competitivas
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0C1F38] mb-4">
                Por que instalar pontos de recarga?
              </h2>
              <p className="text-lg text-gray-600">
                Transforme seu espaço em um hub de mobilidade sustentável e
                colha os benefícios de estar na vanguarda da revolução elétrica.
              </p>
              <ul className="space-y-6 mt-8">
                <motion.li
                  className="flex items-start bg-white p-4 rounded-xl shadow-md"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-[#00FF99] rounded-full p-3 mr-4">
                    <Icon3D size={6}>
                      <ArrowRight className="h-6 w-6 text-[#0C1F38]" />
                    </Icon3D>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C1F38] text-lg">
                      Atraia clientes de alto valor
                    </h3>
                    <p className="text-gray-600">
                      Proprietários de veículos elétricos possuem maior poder
                      aquisitivo e valorizam locais com infraestrutura adequada.
                    </p>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start bg-white p-4 rounded-xl shadow-md"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-[#00FF99] rounded-full p-3 mr-4">
                    <Icon3D size={6}>
                      <ArrowRight className="h-6 w-6 text-[#0C1F38]" />
                    </Icon3D>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C1F38] text-lg">
                      Gere receita adicional
                    </h3>
                    <p className="text-gray-600">
                      Monetize suas vagas de estacionamento com um serviço
                      premium e de alta demanda.
                    </p>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start bg-white p-4 rounded-xl shadow-md"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="bg-[#00FF99] rounded-full p-3 mr-4">
                    <Icon3D size={6}>
                      <ArrowRight className="h-6 w-6 text-[#0C1F38]" />
                    </Icon3D>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C1F38] text-lg">
                      Fortaleça sua marca
                    </h3>
                    <p className="text-gray-600">
                      Associe sua empresa à sustentabilidade e inovação, valores
                      cada vez mais importantes para os consumidores.
                    </p>
                  </div>
                </motion.li>
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8"
              >
                <Button className="bg-[#0C1F38] hover:bg-[#0C1F38]/90 text-white rounded-full px-8">
                  Solicite uma proposta
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-[#00A651]"
                >
                  <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19" />
                  <line x1="23" y1="13" x2="23" y2="11" />
                  <line x1="11" y1="6" x2="7" y2="18" />
                  <line x1="16" y1="6" x2="20" y2="18" />
                </svg>
                <span className="text-lg font-bold text-[#0C1F38]">
                  Chargin
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
                    className="text-gray-600 hover:text-[#00A651]"
                  >
                    Mapa de Estações
                  </a>
                </li>
                <li>
                  <a
                    href="/#simulator"
                    className="text-gray-600 hover:text-[#00A651]"
                  >
                    Simulador de Recarga
                  </a>
                </li>
                <li>
                  <a
                    href="/franchise"
                    className="text-gray-600 hover:text-[#00A651]"
                  >
                    Seja um Franqueado
                  </a>
                </li>
                <li>
                  <a href="/app" className="text-gray-600 hover:text-[#00A651]">
                    Aplicativo
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
                    className="text-gray-600 hover:text-[#00A651]"
                  >
                    Código de Conduta
                  </a>
                </li>
                <li>
                  <a
                    href="/politicaprivacidade"
                    className="text-gray-600 hover:text-[#00A651]"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="/termosdeuso"
                    className="text-gray-600 hover:text-[#00A651]"
                  >
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#0C1F38] mb-4">Contato</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-600">suporte@chargin.io</li>
                <li className="text-gray-600">(15) 3343-0000</li>
                <li className="text-gray-600">
                  Av. dos Caramuru, 1293-A - Buritizal, Macapá - AP, 68902-863
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Chargin. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PointsPage;
