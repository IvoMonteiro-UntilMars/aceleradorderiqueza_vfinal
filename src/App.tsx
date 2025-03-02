import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import TestimonialCarousel from './components/TestimonialCarousel';
import TestimonialsPage from './pages/TestimonialsPage';
import TestimonialDetailPage from './pages/TestimonialDetailPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';

function App() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/testemunhos" element={<TestimonialsPage />} />
        <Route path="/testemunhos/:id" element={<TestimonialDetailPage />} />
      </Routes>
      <Footer 
        showTermsAndPrivacy={true}
        onOpenTerms={() => setIsTermsOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Modals */}
      <Modal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title="Termos de Uso"
      >
        <div className="space-y-4 text-gray-300">
          <h4 className="text-lg font-semibold text-white">1. Aceitação dos Termos</h4>
          <p>
            Ao acessar e utilizar este website, você aceita e concorda em cumprir estes termos e condições de uso.
          </p>

          <h4 className="text-lg font-semibold text-white">2. Serviços</h4>
          <p>
            Os serviços de consultoria são fornecidos mediante agendamento prévio e pagamento conforme estabelecido no site.
          </p>

          <h4 className="text-lg font-semibold text-white">3. Responsabilidades</h4>
          <p>
            O cliente é responsável por fornecer informações precisas e verdadeiras durante o processo de consultoria.
          </p>

          <h4 className="text-lg font-semibold text-white">4. Cancelamento</h4>
          <p>
            Cancelamentos devem ser realizados com antecedência mínima de 72 horas da sessão agendada. Após as 72 horas o reembolso pode não ser realizado.
          </p>

          <h4 className="text-lg font-semibold text-white">5. Propriedade Intelectual</h4>
          <p>
            Todo o conteúdo apresentado durante as sessões de consultoria é de propriedade intelectual do consultor.
          </p>
        </div>
      </Modal>

      <Modal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title="Política de Privacidade"
      >
        <div className="space-y-4 text-gray-300">
          <h4 className="text-lg font-semibold text-white">1. Coleta de Dados</h4>
          <p>
            Coletamos apenas as informações necessárias para a prestação dos nossos serviços de consultoria.
          </p>

          <h4 className="text-lg font-semibold text-white">2. Uso das Informações</h4>
          <p>
            As informações coletadas são utilizadas exclusivamente para melhorar nossos serviços e comunicação com os clientes.
          </p>

          <h4 className="text-lg font-semibold text-white">3. Proteção de Dados</h4>
          <p>
            Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado.
          </p>

          <h4 className="text-lg font-semibold text-white">4. Compartilhamento</h4>
          <p>
            Não compartilhamos suas informações pessoais com terceiros sem seu consentimento expresso.
          </p>

          <h4 className="text-lg font-semibold text-white">5. Seus Direitos</h4>
          <p>
            Você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados pessoais a qualquer momento.
          </p>
        </div>
      </Modal>
    </>
  );
}

export default App;