import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDeviceType } from '../hooks/useDeviceType';

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
    image: "https://imgur.com/tZeNsMs.jpg"
  },
  {
    id: "telmo",
    text: "Com o Ivo demos os primeiros passos em como trazer vendas para a nossa empresa.",
    author: "Telmo Taipa",
    role: "Founder ADECI Group",
    image: "https://imgur.com/HqufLie.jpg"
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';

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
      <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'md:grid-cols-2 lg:grid-cols-3 gap-6'}`}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`relative overflow-hidden bg-[#021015] rounded-lg transition-all duration-500 hover:scale-[1.02] cursor-pointer h-full flex flex-col ${isMobile ? 'mx-4' : ''}`}
          >
            <div className={`relative ${isMobile ? 'h-48' : 'h-64'}`}>
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-full h-full object-cover object-center object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d11] via-transparent to-transparent"></div>
            </div>
            <div className={`p-6 flex flex-col flex-grow ${isMobile ? 'text-center' : ''}`}>
              <h3 className="text-[#FC2406] text-xl font-bold mb-2">{testimonial.author}</h3>
              {testimonial.role && (
                <p className="text-gray-400 mb-2">{testimonial.role}</p>
              )}
              <p className={`text-gray-300 font-medium ${isMobile ? 'text-base' : 'text-lg'} mb-4 flex-grow`}>{testimonial.text}</p>
              <Link
                to={`/testemunhos/${testimonial.id}`}
                className={`inline-block text-[#ff4d00] hover:text-[#E6E6E6] transition-colors ${isMobile ? 'text-center' : ''}`}
              >
                Ver testemunho completo →
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={`mt-12 text-center ${isMobile ? 'px-4' : ''}`}>
        <Link
          to="/testemunhos"
          className={`inline-block bg-[#FC2406] ${isMobile ? 'w-full px-6 py-3 text-base' : 'px-8 py-4 text-lg'} rounded-full font-bold transition-all transform hover:scale-105`}
        >
          Mais Testemunhos
        </Link>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
