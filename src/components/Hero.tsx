export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://image.qwenlm.ai/generated-images/28a1bfb3-b62b-48eb-b1a8-4063ad784663/_result.png"
          alt="Propiedad de lujo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-gray-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-amber-300 text-sm font-medium">Tu hogar ideal te espera</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Encuentra tu
            <span className="text-amber-400 block">hogar perfecto</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            En Yader Yotero te ayudamos a encontrar la propiedad de tus sueños. 
            Con más de 15 años de experiencia, somos tu aliado en bienes raíces.
          </p>

          {/* Search Bar */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option value="" className="text-gray-900">Tipo de propiedad</option>
                  <option value="casa" className="text-gray-900">Casa</option>
                  <option value="apartamento" className="text-gray-900">Apartamento</option>
                  <option value="terreno" className="text-gray-900">Terreno</option>
                  <option value="comercial" className="text-gray-900">Comercial</option>
                </select>
              </div>
              <div className="flex-1">
                <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option value="" className="text-gray-900">Ubicación</option>
                  <option value="norte" className="text-gray-900">Zona Norte</option>
                  <option value="sur" className="text-gray-900">Zona Sur</option>
                  <option value="centro" className="text-gray-900">Centro</option>
                  <option value="este" className="text-gray-900">Zona Este</option>
                </select>
              </div>
              <div className="flex-1">
                <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option value="" className="text-gray-900">Rango de precio</option>
                  <option value="1" className="text-gray-900">$50,000 - $100,000</option>
                  <option value="2" className="text-gray-900">$100,000 - $250,000</option>
                  <option value="3" className="text-gray-900">$250,000 - $500,000</option>
                  <option value="4" className="text-gray-900">$500,000+</option>
                </select>
              </div>
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Buscar
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-gray-400 text-sm">Propiedades vendidas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-gray-400 text-sm">Años de experiencia</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-gray-400 text-sm">Clientes satisfechos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
