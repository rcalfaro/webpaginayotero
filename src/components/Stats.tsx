export default function Stats() {
  const stats = [
    { number: '500+', label: 'Propiedades Vendidas', icon: '🏠' },
    { number: '15+', label: 'Años de Experiencia', icon: '📅' },
    { number: '98%', label: 'Clientes Satisfechos', icon: '⭐' },
    { number: '50+', label: 'Agentes Profesionales', icon: '👥' },
  ];

  return (
    <section className="py-16 bg-amber-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-amber-100 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
