import { FC } from "react";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  id: number;
  slug: string;
  title: string;
  summary: string;
  category: string;
  author: string;
  date: string;
  thumbnail: string;
}

const ArticleCard: FC<ArticleCardProps> = ({
  slug,
  title,
  summary,
  category,
  author,
  date,
  thumbnail,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="text-xs font-semibold bg-[#00FF99] bg-opacity-20 text-[#0C1F38] px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-[#0C1F38] line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{summary}</p>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <span>{author}</span>
            <span className="mx-2">•</span>
            <span>{date}</span>
          </div>
          <Link
            to={`/blog/${slug}`}
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
