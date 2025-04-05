import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useDeviceType } from '../hooks/useDeviceType';

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
    image: "https://imgur.com/tZeNsMs.jpg",
    quote: "Crescimento de 400% no volume de faturação em apenas um ano.",
    role: "CEO SOU Real Estate",
  },
  {
    id: "telmo",
    name: "Telmo Taipa",
    image: "https://imgur.com/HqufLie.jpg",
    quote: "Com o Ivo demos os primeiros passos em como trazer vendas para a nossa empresa.",
    role: "Founder ADECI Group",
  }
];

function TestimonialsPage() {
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';

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

          <div className={`container mx-auto px-4 ${isMobile ? 'py-12' : 'py-20'} relative`}>
            <h1 className={`${isMobile ? 'text-5xl' : 'text-8xl'} font-bold text-center mb-2`}>SOMOS</h1>
            <h2 className={`${isMobile ? 'text-5xl' : 'text-8xl'} font-bold text-center text-[#FC2406] ${isMobile ? 'mb-12' : 'mb-20'}`}>VENCEDORES</h2>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className={`container mx-auto px-4 ${isMobile ? 'pb-12' : 'pb-20'}`}>
          <div className={`grid grid-cols-1 ${isMobile ? 'gap-6' : 'md:grid-cols-2 lg:grid-cols-2 gap-8'}`}>
            {testimonials.map((testimonial) => (
              <Link 
                key={testimonial.id}
                to={`/testemunhos/${testimonial.id}`}
                className={`group relative overflow-hidden rounded-lg transition-all duration-500 hover:scale-[1.02] cursor-pointer ${isMobile ? 'h-[400px]' : 'h-[500px]'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d11] via-[#0a0d11]/50 to-transparent z-10"></div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover object-center object-top"
                />
                <div className={`absolute bottom-0 left-0 right-0 ${isMobile ? 'p-6' : 'p-8'} z-20 bg-[#0f1318]/95 ${testimonial.role ? (isMobile ? 'h-[180px]' : 'h-[200px]') : (isMobile ? 'h-[140px]' : 'h-[180px]')} flex flex-col justify-center`}>
                  <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold mb-2 text-[#FC2406] group-hover:text-[#ff6b33] transition-colors`}>
                    {testimonial.name}
                  </h3>
                  {testimonial.role && (
                    <p className={`text-gray-400 mb-2 ${isMobile ? 'text-sm' : ''}`}>{testimonial.role}</p>
                  )}
                  <p className={`text-gray-300 ${isMobile ? 'text-base' : 'text-lg'} font-medium`}>{testimonial.quote}</p>
                  <div className={`mt-4 inline-block text-[#ff4d00] hover:text-[#E6E6E6] transition-colors ${isMobile ? 'text-sm' : ''}`}>
                    Ver história completa →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className={`${isMobile ? 'mt-12' : 'mt-20'} text-center`}>
            <h2 className={`${isMobile ? 'text-2xl mb-6' : 'text-4xl mb-8'} font-bold`}>Junta-te a Estas Histórias de Sucesso</h2>
            <a 
              href="https://externo.eupago.pt/lp/acelerador_riqueza/formulario.php"
              className={`inline-block bg-[#FC2406] ${isMobile ? 'w-full px-6 py-3 text-base' : 'px-8 py-4 text-lg'} rounded-full font-semibold transition-all transform hover:scale-105`}
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
