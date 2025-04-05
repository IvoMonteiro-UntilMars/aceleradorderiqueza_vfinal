import React from 'react';
import { CheckCircle, ArrowRight, Play, XCircle } from 'lucide-react';
import TestimonialCarousel from './TestimonialCarousel';

interface MobileOptimizedContentProps {
  isVideoPlaying: boolean;
  setIsVideoPlaying: (playing: boolean) => void;
}

function MobileOptimizedContent({ isVideoPlaying, setIsVideoPlaying }: MobileOptimizedContentProps) {
  return (
    <div className="min-h-screen bg-[#FC2406] text-white flex flex-col">
      <main className="flex-grow pt-16">
        {/* Mobile Hero Section */}
        <section id="inicio" className="min-h-[90vh] flex items-center relative bg-[#00090F]">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 backdrop-blur-sm"
            style={{
              backgroundImage: `url('https://i.imgur.com/wd553Rj.jpg')`,
              backgroundPosition: 'center 20%'
            }}
          ></div>
          <div className="container mx-auto px-4 py-12 relative">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold leading-tight mb-6">
                Domina as bases para aumentar e investir o teu rendimento.
              </h2>
              <p className="text-lg text-gray-300 mb-3">
                E conquista + liberdade ao
              </p>
              <div className="flex flex-col items-center gap-2 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle stroke="#FC2406" className="flex-shrink-0" />
                  <p>Investires + dinheiro</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle stroke="#FC2406" className="flex-shrink-0" />
                  <p>Ganhares + dinheiro</p>
                </div>
              </div>
            </div>
            <div className="relative mb-8">
              <img 
                src="https://i.imgur.com/lP4jRmf.jpg" 
                alt="Ivo Monteiro" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
                style={{ aspectRatio: '16/9' }}
              />
            </div>
            <div className="text-center">
              <a 
                href="https://externo.eupago.pt/lp/acelerador_riqueza/formulario.php"
                className="inline-block bg-[#FC2406] hover:bg-red-700 px-6 py-3 rounded-full text-base font-semibold transition-all transform hover:scale-105 w-full text-center"
              >
                Garantir Consultoria por 49,99€
              </a>
            </div>
          </div>
        </section>

        {/* Mobile Sobre Section */}
        <section id="sobre" className="relative bg-[#00090F] py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-[#FC2406]">Sobre Mim</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#FC2406] mt-1 flex-shrink-0 w-5 h-5" />
                <p className="text-sm">Licenciatura na Faculdade de Economia do Porto (FEP)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#FC2406] mt-1 flex-shrink-0 w-5 h-5" />
                <p className="text-sm">Experiência na KPMG e Sonae</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#FC2406] mt-1 flex-shrink-0 w-5 h-5" />
                <p className="text-sm">Ganhos superiores a 12.000€ mensais</p>
              </div>
            </div>

            {/* Mobile Video Section */}
            <div className="relative w-full">
              {!isVideoPlaying ? (
                <div 
                  className="relative cursor-pointer"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <img 
                    src="https://i.imgur.com/YBDUqzU.jpg" 
                    alt="Ivo Monteiro Professional" 
                    className="rounded-lg shadow-lg w-full"
                    style={{ aspectRatio: '16/9' }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#FC2406] flex items-center justify-center">
                      <Play size={32} className="text-white ml-1" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/2yRCc-C7HZw?autoplay=1"
                    title="Ivo Monteiro Video"
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Mobile Consultoria Section */}
        <section id="consultoria" className="relative bg-[#00090F] py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">As Três Fases da Consultoria</h2>
            <div className="space-y-4">
              {[
                {
                  phase: "Fase 1",
                  title: "Diagnóstico",
                  description: "Análise completa da tua situação financeira atual"
                },
                {
                  phase: "Fase 2",
                  title: "Estratégias",
                  description: "Métodos práticos para aumentar os teus rendimentos"
                },
                {
                  phase: "Fase 3",
                  title: "Investimento",
                  description: "Técnicas comprovadas para multiplicar o teu dinheiro"
                }
              ].map((item, index) => (
                <div key={index} className="bg-[#FC2406] p-6 rounded-lg">
                  <div className="text-sm font-bold mb-2">{item.phase}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Testimonials Section */}
        <section id="testemunhos" className="relative bg-[#00090F] py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Depoimentos Reais</h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* Mobile Para Quem Section */}
        <section className="relative bg-[#00090F] py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6">A Consultoria é Para Quem?</h2>
            <div className="space-y-3">
              {[
                "Jovens que querem criar liberdade financeira",
                "Quem deseja começar um negócio",
                "Quem quer aumentar rendimentos",
                "Interessados em trabalho remoto"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-[#FC2406] p-4 rounded-lg">
                  <CheckCircle className="text-white w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile CTA Section */}
        <section className="relative bg-[#00090F] py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Garante a Tua Sessão</h2>
            <p className="text-xl mb-6">por 49,99€ <span className="line-through text-gray-300">500€</span></p>
            <a 
              href="https://externo.eupago.pt/lp/acelerador_riqueza/formulario.php"
              className="inline-flex items-center justify-center gap-2 bg-[#FC2406] hover:bg-red-700 px-6 py-3 rounded-full text-base font-semibold w-full"
            >
              Reservar Agora
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MobileOptimizedContent;