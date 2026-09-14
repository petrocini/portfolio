import { useState } from 'react';
import { ContactButton } from './ContactButton';

const navItems = [
  ['Projetos', '#projetos'],
  ['Serviços', '#servicos'],
  ['Experiência', '#experiencia'],
  ['Sobre', '#sobre'],
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          lucas<span>/</span>petrocini
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">{isOpen ? 'Fechar' : 'Abrir'} menu</span>
          <span aria-hidden="true">{isOpen ? '×' : '≡'}</span>
        </button>
        <nav
          className={isOpen ? 'main-nav open' : 'main-nav'}
          id="main-navigation"
          aria-label="Principal"
        >
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <ContactButton phoneNumber={import.meta.env.VITE_WHATSAPP_NUMBER} />
        </nav>
      </div>
    </header>
  );
}
