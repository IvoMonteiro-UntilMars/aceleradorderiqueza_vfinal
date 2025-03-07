import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Standardized testimonial quotes to match the testimonials page
const testimonials = [
  {
    id: "fatima",
    text: "Tive 2 aumentos salariais em 4 meses (70% do salário líquido anual).",
    author: "Fátima Soares",
    image: "https://gbr.pt/wp-content/uploads/2024/11/Fatima_Soares.jpg"
  },
  {
    id: "gustavo",
    text: "Crescimento de 400% no volume de faturação em apenas um ano.",
    author: "Gustavo Rocha",
    role: "CEO SOU Real Estate",
    image: "https://lh6.googleusercontent.com/Ojn3fQkmFoHYTg7E-Un8DKqxRvJg0onyW4nTNgetZ6cxOQpCZDgQQg-uhjcOs6ce0rJXdTLqxZ3R5nJhmuUn7JJTjToZ8nO7UIVcgmKdg6-mfMIVcbMpxYGqBlRosHKSng=w1280"
  },
  {
    id: "telmo",
    text: "Com o Ivo demos os primeiros passos em como trazer vendas para a nossa empresa.",
    author: "Telmo Taipa",
    role: "Founder ADECI Group",
    image: "https://lh3.googleusercontent.com/ixRDAgqyUImoAkKoatx0GOJnD_YBBKgSiLc6gPsKF9ef1od0nxw9jUk2qcydpya032ezuK8QdZk5hDNqhMfffyrYeUpq1FkUbbovVuasH-L3_k0hCHdQnXTyq9rCxa8GFQ=w1280"
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-full mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-[#021015] rounded-lg transition-all duration-500 hover:scale-[1.02] cursor-pointer h-full flex flex-col"
          >
            <div className="relative h-64">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-full h-full object-cover object-center object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d11] via-transparent to-transparent"></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-[#FC2406] text-xl font-bold mb-2">{testimonial.author}</h3>
              {testimonial.role && (
                <p className="text-gray-400 mb-2">{testimonial.role}</p>
              )}
              <p className="text-gray-300 font-medium text-lg mb-4 flex-grow">{testimonial.text}</p>
              <Link
                to={`/testemunhos/${testimonial.id}`}
                className="inline-block text-[#ff4d00] hover:text-[#E6E6E6] transition-colors"
              >
                Ver testemunho completo →
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          to="/testemunhos"
          className="inline-block bg-[#FC2406] px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105"
        >
          Mais Testemunhos
        </Link>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
