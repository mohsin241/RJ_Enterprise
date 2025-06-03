import serviceImg from "../../assets/christopher-burns-Wiu3w-99tNg-unsplash (1).jpg"
const services = [
  {
    icon: 'content_cut',
    title: 'Profile Cutting',
    description: 'Precision cutting services for steel plates, sheets, and profiles using advanced CNC technology to meet exact specifications.'
  },
  // {
  //   icon: 'inventory_2',
  //   title: 'Steel Stockholding',
  //   description: 'Extensive inventory of steel products readily available for immediate delivery, reducing your procurement lead times.'
  // },
  {
    icon: 'local_shipping',
    title: 'Logistics & Delivery',
    description: 'Efficient transportation solutions with nationwide delivery and logistics management for timely product supply.'
  },
  {
    icon: 'engineering',
    title: 'Light Fabrication',
    description: 'Custom fabrication services including bending, drilling, and welding for ready-to-use steel components.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-condensed font-bold text-neutral-800 mb-4">Our Services</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Beyond supplying premium steel products, we offer specialized services to ensure your specific requirements are met with precision and efficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-lg overflow-hidden h-64 md:h-[450px]">
            <img 
              src={serviceImg}
              alt="Steel profile cutting services at R J Enterprise facility" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-condensed font-bold text-white mb-2">Custom Solutions</h3>
              <p className="text-white/90 max-w-md">
                We provide tailored steel solutions to meet your specific project requirements, with comprehensive consulting and technical support.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex bg-neutral-50 p-6 rounded-lg shadow-md border border-neutral-200 hover:shadow-lg transition duration-300">
                <span className="material-icons text-primary text-3xl mr-4 mt-1">{service.icon}</span>
                <div>
                  <h3 className="text-xl font-condensed font-bold text-neutral-800 mb-2">{service.title}</h3>
                  <p className="text-neutral-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
