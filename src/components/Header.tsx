import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="fixed w-full bg-[#00090F] z-50 border-b border-[#ff4d00]/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between text-white">
          <Link to="/" className="text-2xl font-bold text-white">Ivo Monteiro</Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-white">
            {isHomePage ? (
              <>
                <a href="#inicio" className="text-white hover:text-[#FC2406] transition-colors">Início</a>
                <a href="#sobre" className="text-white hover:text-[#FC2406] transition-colors">Sobre Mim</a>
                <a href="#consultoria" className="text-white hover:text-[#FC2406] transition-colors">Consultoria</a>
              </>
            ) : (
              <Link to="/" className="text-white hover:text-[#FC2406] transition-colors">Início</Link>
            )}
            <Link to="/testemunhos" className="text-white hover:text-[#FC2406] transition-colors">Testemunhos</Link>
            <a href="#contactos" className="text-white hover:text-[#FC2406] transition-colors">Contactos</a>
            <a 
              href="https://externo.eupago.pt/lp/acelerador_riqueza/formulario.php" 
              className="bg-[#FC2406] hover:bg-red-700 px-6 py-2 rounded-full transition-colors text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Começa Agora
            </a>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 text-white">
            {isHomePage ? (
              <>
                <a href="#inicio" className="text-white hover:text-[#FC2406] transition-colors">Início</a>
                <a href="#sobre" className="text-white hover:text-[#FC2406] transition-colors">Sobre Mim</a>
                <a href="#consultoria" className="text-white hover:text-[#FC2406] transition-colors">Consultoria</a>
              </>
            ) : (
              <Link to="/" className="text-white hover:text-[#FC2406] transition-colors">Início</Link>
            )}
            <Link to="/testemunhos" className="text-white hover:text-[#FC2406] transition-colors">Testemunhos</Link>
            <a href="#contactos" className="text-white hover:text-[#FC2406] transition-colors">Contactos</a>
            <a 
              href="https://externo.eupago.pt/lp/acelerador_riqueza/formulario.php" 
              className="bg-[#FC2406] hover:bg-red-700 px-6 py-2 rounded-full transition-colors text-white inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Começa Agora
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
