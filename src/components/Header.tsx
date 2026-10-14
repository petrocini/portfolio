import { useState } from 'react';
const navItems = [
  ['Projetos', '#projetos'],
  ['Stack', '#stack'],
  ['Experiência', '#experiencia'],
  ['Sobre', '#sobre'],
  ['Contato', '#contato'],
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          &lt;Petrocini <span>/&gt;</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">{isOpen ? 'Fechar' : 'Abrir'} menu</span>
          <span aria-hidden="true">{isOpen ? '×' : '☰'}</span>
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
        </nav>
      </div>
    </header>
  );
}
