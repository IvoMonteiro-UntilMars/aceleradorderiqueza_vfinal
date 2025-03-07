import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Standardized testimonial quotes to ensure consistent length
const testimonials = [
  {
    id: "fatima",
    name: "Fátima Soares",
    image: "https://gbr.pt/wp-content/uploads/2024/11/Fatima_Soares.jpg",
    quote: "Tive 2 aumentos salariais em 4 meses (70% do salário líquido anual).",
  },
  {
    id: "catia",
    name: "Cátia Frias",
    image: "https://gbr.pt/wp-content/uploads/2024/11/Catia_Frias.jpg",
    quote: "Em 2 meses, aumentei o meu rendimento em 30%.",
  },
  {
    id: "gustavo",
    name: "Gustavo Rocha",
    image: "https://lh6.googleusercontent.com/Ojn3fQkmFoHYTg7E-Un8DKqxRvJg0onyW4nTNgetZ6cxOQpCZDgQQg-uhjcOs6ce0rJXdTLqxZ3R5nJhmuUn7JJTjToZ8nO7UIVcgmKdg6-mfMIVcbMpxYGqBlRosHKSng=w1280",
    quote: "Crescimento de 400% no volume de faturação em apenas um ano.",
    role: "CEO SOU Real Estate",
  },
  {
    id: "telmo",
    name: "Telmo Taipa",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHhO4h2slV2_g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723894291701?e=1744848000&v=beta&t=SW8AcOrsy8WJLRhRuQYnGd9FuWV8BGBCl3KSABu0BLE",
    quote: "Com o Ivo demos os primeiros passos em como trazer vendas para a nossa empresa.",
    role: "Founder ADECI Group",
  }
];

function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#0a0d11] text-white flex flex-col">
      <main className="flex-grow pt-16">
        {/* Hero Section with Geometric Background */}
        <div className="relative pt-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="h-full w-full">
              <svg className="absolute w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                {/* Main border */}
                <path
                  d="M0,0 L1000,0 L1000,1000 L0,1000 Z"
                  fill="none"
                  stroke="#ff4d00"
                  strokeWidth="0.5"
                  strokeOpacity="0.1"
                />
                {/* Diagonal lines */}
                <path
                  d="M0,0 L1000,1000 M1000,0 L0,1000"
                  stroke="#ff4d00"
                  strokeWidth="0.5"
                  strokeOpacity="0.1"
                />
                {/* Circles */}
                <circle
                  cx="500"
                  cy="500"
                  r="300"
                  fill="none"
                  stroke="#ff4d00"
                  strokeWidth="0.5"
                  strokeOpacity="0.1"
                />
                <circle
                  cx="500"
                  cy="500"
                  r="200"
                  fill="none"
                  stroke="#ff4d00"
                  strokeWidth="0.5"
                  strokeOpacity="0.1"
                />
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-4 py-20 relative">
            <h1 className="text-8xl font-bold text-center mb-4">SOMOS</h1>
            <h2 className="text-8xl font-bold text-center text-[#FC2406] mb-20">VENCEDORES</h2>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Link 
                key={testimonial.id}
                to={`/testemunhos/${testimonial.id}`}
                className="group relative overflow-hidden rounded-lg transition-all duration-500 hover:scale-[1.02] cursor-pointer h-[500px]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d11] via-[#0a0d11]/50 to-transparent z-10"></div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover object-center object-top"
                />
                <div className={`absolute bottom-0 left-0 right-0 p-8 z-20 bg-[#0f1318]/90 ${testimonial.role ? 'h-[200px]' : 'h-[180px]'} flex flex-col justify-center`}>
                  <h3 className="text-2xl font-bold mb-2 text-[#FC2406] group-hover:text-[#ff6b33] transition-colors">
                    {testimonial.name}
                  </h3>
                  {testimonial.role && (
                    <p className="text-gray-400 mb-2">{testimonial.role}</p>
                  )}
                  <p className="text-gray-300 text-lg font-medium">{testimonial.quote}</p>
                  <div className="mt-4 inline-block text-[#ff4d00] hover:text-[#E6E6E6] transition-colors">
                    Ver história completa →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-4xl font-bold mb-8">Junta-te a Estas Histórias de Sucesso</h2>
            <a 
              href="https://externo.eupago.pt/lp/acelerador_riqueza/formulario.php"
              className="inline-block bg-[#FC2406] px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
            >
              Começar A Minha Jornada Agora
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TestimonialsPage;
