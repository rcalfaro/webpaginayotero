export default function CTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative z-10 px-8 sm:px-16 py-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ¿Listo para encontrar tu hogar ideal?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              No importa si buscas comprar, vender o invertir. Nuestro equipo de expertos 
              está listo para guiarte en cada paso del camino.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contacto"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-amber-500/25 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Llámanos ahora
              </a>
              <a
                href="#propiedades"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Ver propiedades
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
