import { useState } from "react";
import { Helmet } from "react-helmet";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for blog articles
export const mockArticles = [
  {
    id: 1,
    slug: "diferenca-entre-recarga-ac-e-dc",
    title:
      "Entenda a diferença entre recarga AC e DC para seu veículo elétrico",
    summary:
      "Saiba qual tipo de recarga é mais adequado para suas necessidades e como cada um afeta a bateria do seu carro.",
    category: "Dicas",
    author: "Maria Silva",
    date: "12 Jun 2023",
    thumbnail:
      "https://images.unsplash.com/photo-1593941707882-a56bbc8427f4?w=800&q=80",
  },
  {
    id: 2,
    slug: "5-mitos-sobre-carros-eletricos",
    title: "5 mitos sobre carros elétricos que você precisa parar de acreditar",
    summary:
      "Descubra a verdade por trás das crenças mais comuns sobre veículos elétricos e sua utilização no dia a dia.",
    category: "Tendências",
    author: "Carlos Mendes",
    date: "05 Jun 2023",
    thumbnail:
      "https://images.unsplash.com/photo-1593941707882-a56bbc8427f4?w=800&q=80",
  },
  {
    id: 3,
    slug: "futuro-da-mobilidade-eletrica",
    title: "O futuro da mobilidade elétrica no Brasil: perspectivas para 2024",
    summary:
      "Análise das tendências e desafios para a expansão da infraestrutura de recarga no território nacional.",
    category: "Tendências",
    author: "Ana Costa",
    date: "28 Mai 2023",
    thumbnail:
      "https://images.unsplash.com/photo-1593941707882-a56bbc8427f4?w=800&q=80",
  },
  {
    id: 4,
    slug: "comparativo-carregadores-rapidos",
    title:
      "Comparativo: os melhores carregadores rápidos disponíveis no mercado",
    summary:
      "Avaliamos os principais modelos de carregadores rápidos e suas vantagens para diferentes perfis de usuários.",
    category: "Comparativos",
    author: "Roberto Alves",
    date: "20 Mai 2023",
    thumbnail:
      "https://images.unsplash.com/photo-1593941707882-a56bbc8427f4?w=800&q=80",
  },
  {
    id: 5,
    slug: "impacto-ambiental-mobilidade-eletrica",
    title:
      "O impacto ambiental positivo da mobilidade elétrica nas grandes cidades",
    summary:
      "Estudo revela como a adoção de veículos elétricos pode reduzir significativamente a poluição urbana.",
    category: "Sustentabilidade",
    author: "Juliana Martins",
    date: "15 Mai 2023",
    thumbnail:
      "https://images.unsplash.com/photo-1593941707882-a56bbc8427f4?w=800&q=80",
  },
  {
    id: 6,
    slug: "nova-tecnologia-baterias",
    title: "Nova tecnologia de baterias promete revolucionar o mercado de EVs",
    summary:
      "Conheça a inovação que pode aumentar a autonomia dos veículos elétricos em até 40% nos próximos anos.",
    category: "Tecnologia",
    author: "Pedro Santos",
    date: "10 Mai 2023",
    thumbnail:
      "https://images.unsplash.com/photo-1593941707882-a56bbc8427f4?w=800&q=80",
  },
];

// Available categories for filtering
const categories = [
  "Todos",
  "Dicas",
  "Tendências",
  "Notícias",
  "Comparativos",
  "Sustentabilidade",
  "Tecnologia",
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Filter articles based on search query and active category
  const filteredArticles = mockArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      activeCategory === "Todos" || article.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          Blog | Fique por dentro da mobilidade elétrica | EletriCharge
        </title>
        <meta
          name="description"
          content="Dicas, notícias, análises e tendências sobre carros elétricos, tecnologia e sustentabilidade."
        />
        <meta
          property="og:title"
          content="Blog | Fique por dentro da mobilidade elétrica | EletriCharge"
        />
        <meta
          property="og:description"
          content="Dicas, notícias, análises e tendências sobre carros elétricos, tecnologia e sustentabilidade."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-[#0C1F38] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fique por dentro da mobilidade elétrica
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Dicas, notícias, análises e tendências sobre carros elétricos,
            tecnologia e sustentabilidade.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-1/3">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="text"
                placeholder="Buscar por título, conteúdo ou autor..."
                className="pl-10 pr-4 py-2 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="w-full md:w-auto">
              <Tabs defaultValue="Todos" className="w-full">
                <TabsList className="grid grid-cols-3 md:grid-cols-7 gap-1">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      onClick={() => setActiveCategory(category)}
                      className="px-3 py-1.5 text-sm"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Nenhum artigo encontrado para sua busca.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("Todos");
                }}
              >
                Limpar filtros
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-xs font-semibold bg-[#00FF99] bg-opacity-20 text-[#0C1F38] px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-[#0C1F38] line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {article.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <span>{article.author}</span>
                        <span className="mx-2">•</span>
                        <span>{article.date}</span>
                      </div>
                      <a
                        href={`/blog/${article.slug}`}
                        className="text-[#0C1F38] font-medium hover:text-[#00FF99] transition-colors duration-300 flex items-center"
                      >
                        Leia mais
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
