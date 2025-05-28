const industries = [
  {
    name: 'Construction',
    icon: 'business',
    description: 'Providing high-quality TMT bars, structural steel, and plates that meet the rigorous demands of residential, commercial, and infrastructure construction projects.',
    tags: ['TMT Bars', 'Structural Steel', 'MS Plates']
  },
  {
    name: 'Oil & Gas',
    icon: 'oil_barrel',
    description: 'Supplying specialized steel materials that withstand extreme conditions for pipelines, refineries, and offshore installations in the oil and gas sector.',
    tags: ['Boiler Plates', 'API Grade', 'Alloy Steel']
  },
  {
    name: 'Manufacturing',
    icon: 'precision_manufacturing',
    description: 'Delivering consistent, high-performance steel products for automotive, machinery, and equipment manufacturing with precise specifications.',
    tags: ['HR Coils', 'Round Bars', 'EN Series']
  },
  {
    name: 'Power Plants',
    icon: 'bolt',
    description: 'Supplying specialized steel materials for power generation facilities that can withstand high temperatures and pressure conditions.',
    tags: ['Boiler Plates', 'Heat-Resistant', 'ASTM Grade']
  },
  {
    name: 'Petrochemical',
    icon: 'science',
    description: 'Providing corrosion-resistant and high-performance steel solutions for chemical processing plants and petrochemical facilities.',
    tags: ['SS Plates', 'Alloy Steel', 'BQ Plates']
  },
  {
    name: 'Automotive',
    icon: 'directions_car',
    description: 'Delivering high-strength, precision steel components for vehicle chassis, body parts, and engine components in the automotive industry.',
    tags: ['HR Coils', 'C45 Grade', 'EN8/EN9']
  }
];

const Industries = () => {
  return (
    <section id="industries" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-condensed font-bold text-neutral-800 mb-4">Industries We Serve</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            We provide specialized steel solutions for a diverse range of industries, meeting their unique requirements with precision and quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden p-6 border border-neutral-200 hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <span className="material-icons text-primary text-3xl mr-4">{industry.icon}</span>
                <h3 className="text-xl font-condensed font-bold text-neutral-800">{industry.name}</h3>
              </div>
              <p className="text-neutral-600 mb-4">
                {industry.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {industry.tags.map((tag, idx) => (
                  <span key={idx} className="bg-neutral-100 text-neutral-600 text-xs px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
