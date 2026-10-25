import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Propiedades', href: '#propiedades' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${scrolled ? 'bg-amber-600' : 'bg-amber-500'}`}>
              <span className="text-white font-bold text-lg">YY</span>
            </div>
            <div>
              <span className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                Yader Yotero
              </span>
              <span className={`block text-xs ${scrolled ? 'text-amber-600' : 'text-amber-300'} -mt-1`}>
                Bienes Raíces
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg"
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-xl border-t">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-amber-600 text-white px-4 py-3 rounded-lg font-semibold mt-4"
            >
              Contáctanos
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
