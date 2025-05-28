import { Link } from 'wouter';
import tmt from "../../assets/TMT Bar 1.jpg";
import c45 from "../../assets/alloy-steel-plates.jpg";
import bq from "../../assets/Boiler-Quality-Plate-SA516-Gr70n-Nace-Hic-Pressure-Vessel-Steel-Plates-Carbon-Steel-Sheet.jpg"

const featuredProducts = [
  {
    id: 'tmt-bars',
    name: 'TMT Bars',
    description: 'High-strength thermo-mechanically treated steel bars ideal for construction applications requiring superior seismic resistance.',
    image: tmt,
    alt: 'High-quality TMT reinforcement steel bars for construction'
  },
  {
    id: 'boiler-quality-plates',
    name: 'Boiler Quality Plates',
    description: 'Specialized high-temperature resistant steel plates for pressure vessels, boilers, and heat exchangers in industrial applications.',
    image: bq,
    alt: 'High-temperature resistant boiler quality steel plates for pressure vessels'
  },
  {
    id: 'c45-plates',
    name: 'C45 Steel Plates',
    description: 'Medium carbon steel plates offering excellent machinability, heat treatability, and wear resistance for industrial applications.',
    image: c45,
    alt: 'C45 Carbon Steel Plates for industrial machinery and components'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-condensed font-bold text-neutral-800 mb-4">Featured Steel Products</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">Discover our premium range of steel products designed to meet diverse industrial requirements with uncompromising quality.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card bg-neutral-50 rounded-lg shadow-md overflow-hidden border border-neutral-200 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
              <img 
                src={product.image} 
                alt={product.alt} 
                className="w-full h-48 object-cover" 
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-condensed font-bold text-primary mb-2">{product.name}</h3>
                <p className="text-neutral-600 mb-4">{product.description}</p>
                <Link href={`/products/${product.id}`} className="inline-flex items-center text-primary hover:text-primary-light font-medium">
                  Learn More
                  <span className="material-icons text-sm ml-1">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#products" className="inline-flex items-center justify-center bg-primary hover:bg-primary-light text-white font-medium px-8 py-3 rounded-md transition duration-300 shadow">
            <span>View All Products</span>
            <span className="material-icons text-sm ml-2">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
