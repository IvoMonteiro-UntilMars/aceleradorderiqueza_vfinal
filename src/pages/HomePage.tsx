import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Play, XCircle } from 'lucide-react';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { useDeviceType } from '../hooks/useDeviceType';

function HomePage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'mobile';

  return (
    <div className="min-h-screen bg-[#FC2406] text-white flex flex-col">
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section id="inicio" className="min-h-screen flex items-center relative bg-[#00090F]">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 backdrop-blur-sm"
            style={{
              backgroundImage: `url('https://imgur.com/wd553Rj.jpg')`,
              backgroundPosition: 'center 20%'
            }}
          ></div>
          <div className={`container mx-auto px-4 ${isMobile ? 'py-12' : 'py-20'} relative`}>
            <div className={`${isMobile ? '' : 'grid md:grid-cols-2 gap-12'} items-center`}>
              <div className={`${isMobile ? 'text-center mb-8' : ''}`}>
                <h2 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-bold leading-tight mb-6`}>
                  Domina as bases para aumentar e investir o teu rendimento.
                </h2>
                <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-gray-300 mb-3`}>
                  E conquista + liberdade ao
                </p>
                <div className={`flex ${isMobile ? 'flex-col items-center' : 'flex-col'} gap-2 mb-8`}>
                  <div className="flex items-center gap-2">
                    <CheckCircle stroke="#FC2406" className="flex-shrink-0" />
                    <p>Investires + dinheiro</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle stroke="#FC2406" className="flex-shrink-0" />
                    <p>Ganhares + dinheiro</p>
                  </div>
                </div>
                <a 
                  href="https://externo.eupago.pt/lp/acelerador_riqueza/formulario.php"
                  className={`inline-block bg-[#FC2406] hover:bg-red-700 ${isMobile ? 'w-full text-center px-6 py-3 text-base' : 'px-8 py-4 text-lg'} rounded-full font-semibold transition-all transform hover:scale-105`}
                >
                  {isMobile ? 'Garantir Consultoria por 49,99€' : 'Garantir a Minha Consultoria Exclusiva Agora por 49,99€'}
                </a>
              </div>
              <div className={`relative ${isMobile ? 'mt-8' : ''}`}>
                <img 
                  src="https://imgur.com/lP4jRmf.jpg" 
                  alt="Ivo Monteiro" 
                  className="rounded-lg shadow-2xl w-full h-auto object-cover"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="relative bg-[#00090F]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-5 backdrop-blur-sm"></div>
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#00090F] to-transparent z-10"></div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#00090F] to-transparent z-10"></div>
          <div className={`container mx-auto px-4 ${isMobile ? 'py-12' : 'py-20'} relative z-20`}>
            <div className={`${isMobile ? '' : 'grid md:grid-cols-2 gap-12'} items-start max-w-5xl mx-auto`}>
              <div>
                <h2 className={`${isMobile ? 'text-3xl text-center' : 'text-5xl'} font-bold mb-8`} style={{ color: "#FC2406" }}>Sobre Mim</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="text-[#FC2406] mt-1 flex-shrink-0" />
                    <p>Licenciatura na Faculdade de Economia do Porto (FEP)</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="text-[#FC2406] mt-1 flex-shrink-0" />
                    <p>Experiência na KPMG e Sonae antes de iniciar negócios próprios</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="text-[#FC2406] mt-1 flex-shrink-0" />
                    <p>Criei um negócio, com meses de ganhos superiores a 12.000€</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="text-[#FC2406] mt-2 flex-shrink-0" />
                    <div>
                      <p>Ao iniciar no mundo dos negócios tinha muitas dúvidas:</p>
                      <div className="ml-8 space-y-2 mt-4">
                        <p>- Com quem devo falar?</p>
                        <p>- Custa dinheiro?</p>
                        <p>- É preciso saber vender?</p>
                        <p>- É preciso ser extrovertido?</p>
                        <p>- É preciso saber TUDO sobre uma empresa?</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
{/* Vídeo / Capa */}
<div className={`relative group ${isMobile ? 'mt-8 w-full' : 'w-[80%] ml-auto mr-[-5%]'}`}>
  {!isVideoPlaying ? (
    <div 
      className="relative cursor-pointer w-full transition-all duration-500 ease-in-out"
      onClick={() => setIsVideoPlaying(true)}
    >
      <div
        className={`rounded-lg shadow-2xl overflow-hidden ${
          isMobile
            ? 'w-full max-w-[300px] aspect-[9/16] mx-auto'
            : 'w-full aspect-[9/16]'
        }`}
      >
        <img 
          src="https://imgur.com/6DrpkrE.jpg" 
          alt="Ivo Monteiro Professional" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg transition-opacity duration-300 group-hover:bg-opacity-50 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-[#FC2406] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <Play size={40} className="text-white ml-1" />
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`relative transition-all duration-500 ease-in-out ${
        isMobile
          ? 'w-full max-w-[300px] aspect-[9/16] mx-auto'
          : 'w-full aspect-[9/16]'
      }`}
    >
      <iframe
        src="https://www.youtube.com/embed/2yRCc-C7HZw?autoplay=1"
        title="Ivo Monteiro Video"
        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )}
</div>
            </div>
          </div>
        </section>

        {/* Consultoria Section */}
        <section id="consultoria" className="relative bg-[#00090F]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 backdrop-blur-sm"></div>
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#00090F] to-transparent z-10"></div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#00090F] to-transparent z-10"></div>
          <div className={`container mx-auto px-4 ${isMobile ? 'py-12' : 'py-20'} relative z-20`}>
            <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-center ${isMobile ? 'mb-8' : 'mb-16'}`}>As Três Fases da Consultoria</h2>
            <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'md:grid-cols-3 gap-8'}`}>
              {[
                {
                  phase: <span style={{ color: "#00090F" }}>Fase 1</span>,
                  title: "Diagnóstico",
                  description: "Análise completa da tua situação financeira atual"
                },
                {
                  phase: <span style={{ color: "#00090F" }}>Fase 2</span>,
                  title: "Estratégias",
                  description: "Métodos práticos para aumentar os teus rendimentos"
                },
                {
                  phase: <span style={{ color: "#00090F" }}>Fase 3</span>,
                  title: "Investimento",
                  description: "Técnicas comprovadas para multiplicar o teu dinheiro"
                }
              ].map((item, index) => (
                <div key={index} className="bg-[#FC2406] p-8 rounded-lg hover:transform hover:scale-105 transition-all">
                  <div className="text-black-500 font-bold mb-4">{item.phase}</div>
                  <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold mb-4`}>{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testemunhos" className="relative bg-[#00090F]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop')] bg-cover bg-center opacity-5 backdrop-blur-sm"></div>
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#00090F] to-transparent z-10"></div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#00090F] to-transparent z-10"></div>
          <div className={`container mx-auto px-4 ${isMobile ? 'py-12' : 'py-20'} relative z-20`}>
            <h2 className={`${isMobile ? 'text-4xl mb-12' : 'text-6xl mb-28'} font-bold text-center`}>Depoimentos Reais</h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* Para Quem Section */}
        <section className="relative bg-[#00090F]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 backdrop-blur-sm"></div>
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#00090F] to-transparent z-10"></div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#00090F] to-transparent z-10"></div>
          <div className={`container mx-auto px-4 ${isMobile ? 'py-12' : 'py-20'} relative z-20`}>
            <h2 className={`${isMobile ? 'text-2xl mb-8' : 'text-4xl mb-16'} font-bold text-center`}>A Consultoria é Para Quem?</h2>
            <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'md:grid-cols-2 gap-8'} max-w-4xl mx-auto`}>
              {[
                "Jovens que querem criar liberdade financeira",
                "Quem deseja começar um negócio, mas não sabe por onde começar",
                "Quem quer uma estratégia clara para aumentar rendimentos",
                "Interessados em trabalhar remotamente com flexibilidade"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-[#FC2406] p-6 rounded-lg">
                  <CheckCircle className="text-white-500 flex-shrink-0" />
                  <p className={`${isMobile ? 'text-base' : 'text-lg'}`}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Não é Para Quem Section */}
        <section className="relative bg-[#00090F]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-5 backdrop-blur-sm"></div>
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#00090F] to-transparent z-10"></div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#00090F] to-transparent z-10"></div>
          <div className={`container mx-auto px-4 ${isMobile ? 'py-12' : 'py-20'} relative z-20`}>
            <h2 className={`${isMobile ? 'text-2xl mb-8' : 'text-4xl mb-16'} font-bold text-center`}>A Consultoria Não é Para Quem?</h2>
            <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'md:grid-cols-2 gap-8'} max-w-4xl mx-auto`}>
              {[
                "Procura esquemas de enriquecimento rápido",
                "Não está disposto a aprender e implementar novas estratégias",
                "Espera resultados sem dedicação e compromisso",
                "Não quer investir no seu desenvolvimento pessoal"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-[#FC2406] p-6 rounded-lg">
                  <XCircle className="text-white-900 flex-shrink-0" />
                  <p className={`${isMobile ? 'text-base' : 'text-lg'}`}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-[#00090F]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-5 backdrop-blur-sm"></div>
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#00090F] to-transparent z-10"></div>
          <div className={`container mx-auto px-4 ${isMobile ? 'py-12' : 'py-20'} text-center relative z-20`}>
            <h2 className={`${isMobile ? 'text-2xl mb-4' : 'text-4xl mb-8'} font-bold`}>Garante a Tua Sessão Exclusiva</h2>
            <p className={`${isMobile ? 'text-xl mb-6' : 'text-2xl mb-8'}`}>por 49,99€ <span className="line-through text-gray-300">500€</span></p>
            <a 
              href="https://externo.eupago.pt/lp/acelerador_riqueza/formulario.php"
              className={`inline-flex items-center gap-2 bg-[#FC2406] hover:bg-red-700 ${isMobile ? 'w-full justify-center px-6 py-3 text-base' : 'px-8 py-4 text-lg'} rounded-full font-semibold transition-all transform hover:scale-105`}
            >
              Reservar Agora
              <ArrowRight />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
