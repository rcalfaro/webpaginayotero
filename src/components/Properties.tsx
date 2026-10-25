const properties = [
  {
    id: 1,
    title: 'Villa Moderna Tropical',
    location: 'Zona Norte, Ciudad',
    price: '$450,000',
    beds: 4,
    baths: 3,
    area: '320 m²',
    type: 'Venta',
    image: 'https://image.qwenlm.ai/generated-images/56a316aa-6f68-4c36-8d0e-d476bc041ad9/_result.png',
    featured: true,
  },
  {
    id: 2,
    title: 'Apartamento de Lujo',
    location: 'Centro, Ciudad',
    price: '$280,000',
    beds: 3,
    baths: 2,
    area: '180 m²',
    type: 'Venta',
    image: 'https://image.qwenlm.ai/generated-images/2dbf18a9-0bb0-46bc-aa36-c546acbaa139/_result.png',
    featured: false,
  },
  {
    id: 3,
    title: 'Casa Familiar Suburbana',
    location: 'Zona Este, Ciudad',
    price: '$195,000',
    beds: 3,
    baths: 2,
    area: '240 m²',
    type: 'Venta',
    image: 'https://image.qwenlm.ai/generated-images/b8040e18-01ab-4963-be69-b674fac2942b/_result.png',
    featured: false,
  },
  {
    id: 4,
    title: 'Penthouse Panorámico',
    location: 'Zona Sur, Ciudad',
    price: '$620,000',
    beds: 4,
    baths: 4,
    area: '400 m²',
    type: 'Venta',
    image: 'https://image.qwenlm.ai/generated-images/7c5379ce-e143-4bb0-b80b-14cfc52b4161/_result.png',
    featured: true,
  },
];

export default function Properties() {
  return (
    <section id="propiedades" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Nuestro Portafolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Propiedades Destacadas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Descubre nuestra selección exclusiva de propiedades cuidadosamente elegidas para ti.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['Todas', 'Casas', 'Apartamentos', 'Terrenos', 'Comercial'].map((tab, i) => (
            <button
              key={tab}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                i === 0
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/25'
                  : 'bg-white text-gray-600 hover:bg-amber-50 hover:text-amber-600 border border-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {property.type}
                  </span>
                </div>
                {property.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-gray-900/80 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Destacada
                    </span>
                  </div>
                )}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent h-20" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-white font-bold text-xl">{property.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-amber-600 transition-colors">
                  {property.title}
                </h3>
                <p className="text-gray-500 text-sm flex items-center gap-1 mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {property.location}
                </p>

                {/* Features */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>{property.beds} Hab.</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                    <span>{property.baths} Baños</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    <span>{property.area}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg">
            Ver todas las propiedades
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
