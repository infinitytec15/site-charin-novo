import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import mock data from the correct location
import { mockArticles } from "@/data/mockArticles";

interface Article {
  id: number;
  slug: string;
  title: string;
  summary: string;
  content?: string;
  category: string;
  author: string;
  date: string;
  thumbnail: string;
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const foundArticle = mockArticles.find((a) => a.slug === slug);

    if (foundArticle) {
      // Add mock content since our mockArticles don't have content
      const articleWithContent = {
        ...foundArticle,
        content: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.</p>
          
          <h2>Principais benefícios dos veículos elétricos</h2>
          
          <p>Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.</p>
          
          <p>Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.</p>
          
          <h2>Como funciona a tecnologia</h2>
          
          <p>Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.</p>
          
          <p>Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.</p>
        `,
      };
      setArticle(articleWithContent);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-xl font-medium text-[#0C1F38]">
          Carregando artigo...
        </p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-[#0C1F38] mb-6">
            Artigo não encontrado
          </h1>
          <p className="text-gray-600 mb-8">
            O artigo que você está procurando não existe ou foi removido.
          </p>
          <Link to="/blog">
            <Button className="bg-[#0C1F38] hover:bg-[#0C1F38]/90 text-white">
              <ArrowLeft className="mr-2 h-5 w-5" /> Voltar para o Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{article.title} | Chargin</title>
        <meta name="description" content={article.summary} />
        <meta property="og:title" content={`${article.title} | Chargin`} />
        <meta property="og:description" content={article.summary} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={article.thumbnail} />
        <meta name="author" content={article.author} />
      </Helmet>

      {/* Article Header */}
      <header className="bg-[#0C1F38] text-white py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-[#00FF99] hover:text-[#00FF99]/80 mb-6"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Voltar para o Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center text-sm md:text-base text-gray-300 gap-4">
            <span>{article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span className="bg-[#00FF99] text-[#0C1F38] px-3 py-1 rounded-full text-xs font-semibold">
              {article.category}
            </span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-auto rounded-xl mb-8 shadow-md"
              />
              <div
                className="prose prose-lg max-w-none prose-headings:text-[#0C1F38] prose-a:text-[#00FF99] prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: article.content || "" }}
              />
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#0C1F38] mb-4">
                  Sobre o autor
                </h3>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#00FF99]/20 flex items-center justify-center mr-4">
                    <span className="text-[#0C1F38] font-bold">
                      {article.author
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-[#0C1F38]">
                      {article.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      Especialista em Mobilidade Elétrica
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  Profissional com mais de 10 anos de experiência no setor de
                  mobilidade elétrica, com foco em infraestrutura de recarga e
                  novas tecnologias.
                </p>
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="text-xl font-bold text-[#0C1F38] mb-4">
                    Compartilhe
                  </h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-[#00FF99]">
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-[#00FF99]">
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-[#00FF99]">
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

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
}
