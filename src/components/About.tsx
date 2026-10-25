export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://image.qwenlm.ai/generated-images/28a1bfb3-b62b-48eb-b1a8-4063ad784663/_result.png"
                alt="Yader Yotero Bienes Raíces"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-[250px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-500">Años de experiencia</div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Más de una década ayudando a familias a encontrar su hogar ideal.
              </p>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-500/20 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Tu socio de confianza en bienes raíces
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              En <strong className="text-gray-900">Yader Yotero</strong>, somos más que una inmobiliaria. 
              Somos tu aliado estratégico en la búsqueda del hogar perfecto o la inversión ideal. 
              Con más de 15 años en el mercado, hemos construido nuestra reputación sobre la base 
              de la confianza, la transparencia y resultados excepcionales.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Nuestro equipo de profesionales altamente capacitados trabaja incansablemente para 
              superar tus expectativas, brindando un servicio personalizado que se adapta a tus 
              necesidades específicas.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'Atención personalizada',
                'Asesoría experta',
                'Transparencia total',
                'Resultados comprobados',
                'Red de contactos amplia',
                'Proceso simplificado',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-amber-600/25"
            >
              Conoce más sobre nosotros
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
