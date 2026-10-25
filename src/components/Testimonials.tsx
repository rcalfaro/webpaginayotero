import { useState } from 'react';

const testimonials = [
  {
    name: 'María González',
    role: 'Compradora',
    text: 'Yader Yotero hizo que el proceso de compra de nuestra primera casa fuera increíblemente sencillo. Su equipo fue profesional, atento y siempre estuvo disponible para resolver nuestras dudas.',
    rating: 5,
    avatar: 'MG',
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Inversionista',
    text: 'Como inversionista, valoro la asesoría experta que recibí. Me ayudaron a encontrar propiedades con excelente potencial de rentabilidad. Totalmente recomendados.',
    rating: 5,
    avatar: 'CR',
  },
  {
    name: 'Ana Martínez',
    role: 'Vendedora',
    text: 'Vendimos nuestra propiedad en tiempo récord y a un precio mejor del esperado. La estrategia de marketing que utilizaron fue excepcional. ¡Gracias Yader Yotero!',
    rating: 5,
    avatar: 'AM',
  },
  {
    name: 'Roberto Sánchez',
    role: 'Comprador',
    text: 'Excelente servicio de principio a fin. Nos guiaron en cada paso del proceso y siempre estuvieron atentos a nuestras necesidades. Sin duda los mejores en el mercado.',
    rating: 5,
    avatar: 'RS',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            La satisfacción de nuestros clientes es nuestra mayor recompensa y motivación.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                active === index
                  ? 'bg-amber-600 text-white shadow-xl shadow-amber-600/25 scale-105'
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
              onClick={() => setActive(index)}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${active === index ? 'text-amber-300' : 'text-amber-400'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className={`text-sm leading-relaxed mb-6 ${active === index ? 'text-white/90' : 'text-gray-600'}`}>
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                  active === index ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-600'
                }`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className={`font-semibold text-sm ${active === index ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-xs ${active === index ? 'text-white/70' : 'text-gray-500'}`}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="flex items-center gap-2 text-gray-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm font-medium">Certificados</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-sm font-medium">+500 Familias</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span className="text-sm font-medium">4.9/5 Estrellas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
