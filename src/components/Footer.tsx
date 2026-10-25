export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">YY</span>
              </div>
              <div>
                <span className="text-white text-xl font-bold">Yader Yotero</span>
                <span className="block text-xs text-amber-500 -mt-1">Bienes Raíces</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Tu socio de confianza en bienes raíces. Más de 15 años ayudando a familias 
              a encontrar su hogar ideal con profesionalismo y dedicación.
            </p>
            <div className="flex gap-3">
              {['F', 'I', 'T', 'L'].map((letter, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-gray-800 hover:bg-amber-600 rounded-lg flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white transition-all"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {['Inicio', 'Propiedades', 'Servicios', 'Nosotros', 'Testimonios', 'Contacto'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm hover:text-amber-400 transition-colors flex items-center gap-2">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {['Compra de Propiedades', 'Venta de Inmuebles', 'Asesoría Financiera', 'Avalúos', 'Administración', 'Asesoría Legal'].map((service) => (
                <li key={service}>
                  <a href="#servicios" className="text-sm hover:text-amber-400 transition-colors flex items-center gap-2">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">
              Suscríbete para recibir las últimas propiedades y ofertas exclusivas.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl text-sm font-semibold transition-all">
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © 2026 Yader Yotero Bienes Raíces. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm hover:text-amber-400 transition-colors">Política de Privacidad</a>
            <a href="#" className="text-sm hover:text-amber-400 transition-colors">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
