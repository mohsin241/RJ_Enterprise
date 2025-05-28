import { useState } from 'react';
import { Link } from 'wouter';
import tmt from "../../assets/TMT Bar 1.jpg"
import coil from "../../assets/Stainless-Steel-Cold-Rolling-Coil-304.jpg"
import beam from "../../assets/wmremove-transformed.jpg"
import chequered from "../../assets/ms-chequered-plates.jpg"
import round from "../../assets/mild-steel-round-bars-1530870379-4069527.jpg"
import plate from "../../assets/ms-plates-1000x1000.jpg"
import c45 from "../../assets/alloy-steel-plates.jpg"
import square from "../../assets/tool-steel-alloy-steel-square-bars.jpg"
import channel from "../../assets/stainless-steel-channels-1595395255.jpg"
import bq from "../../assets/Boiler-Quality-Plate-SA516-Gr70n-Nace-Hic-Pressure-Vessel-Steel-Plates-Carbon-Steel-Sheet.jpg"
import angle from "../../assets/mild-steel-angles-1024812.jpg"

const products = [
  {
    id: 'tmt-bars',
    name: 'TMT Bars',
    description: 'High-strength thermo-mechanically treated steel reinforcement bars with excellent ductility and weldability.',
    image: tmt,
    alt: 'Premium TMT steel reinforcement bars for construction projects',
    category: 'construction',
    tags: ['Fe 500', 'Fe 550', 'Ribbed', 'Corrosion-Resistant']
  },
  {
    id: 'mild-steel-plates',
    name: 'Mild Steel Plates',
    description: 'Premium-quality mild steel plates with excellent formability, weldability and machinability for various applications.',
    image: plate,
    alt: 'High-quality mild steel plates for industrial applications',
    category: 'industrial',
    tags: ['MS IS 2062', '5-150mm', 'Custom Sizes', 'E250 Grade']
  },
  {
    id: 'hot-rolled-coils',
    name: 'Hot Rolled Coils',
    description: 'Versatile hot rolled steel coils with uniform mechanical properties ideal for automotive, manufacturing and construction.',
    image: coil,
    alt: 'Hot rolled steel coils for manufacturing applications',
    category: 'manufacturing',
    tags: ['HRPO', '1.2-25mm', 'IS 10748', 'Customizable']
  },
  {
    id: 'steel-beams',
    name: 'Steel Beams',
    description: 'High-strength structural steel beams designed for optimal load-bearing capacity in construction projects.',
    image: beam,
    alt: 'Structural steel beams for construction projects',
    category: 'construction',
    tags: ['I-Beams', 'H-Beams', 'ISMB', 'ISLB']
  },
  {
    id: 'chequered-plates',
    name: 'Chequered Plates',
    description: 'Anti-slip checkered steel plates ideal for flooring, stair treads, and industrial platforms requiring enhanced safety.',
    image: chequered,
    alt: 'Industrial checkered steel plates with anti-slip surface',
    category: 'industrial',
    tags: ['2.5-12mm', 'IS 3502', 'Five-bar Pattern', 'Custom Cut']
  },
  {
    id: 'round-bars',
    name: 'Round Bars',
    description: 'High-quality steel round bars with precise dimensions for engineering, automotive, and manufacturing applications.',
    image: round,
    alt: 'Premium steel round bars for manufacturing applications',
    category: 'manufacturing',
    tags: ['Bright', 'Black', '16-300mm', 'EN 8/C45']
  },
  {
    id: 'c45-plates',
    name: 'C45 Steel Plates',
    description: 'Medium carbon steel plates offering excellent machinability, heat treatability, and wear resistance for industrial applications.',
    image: c45,
    alt: 'C45 Carbon Steel Plates for industrial machinery and components',
    category: 'industrial',
    tags: ['Medium Carbon', 'Heat-Treatable', '1.0503', 'EN 8']
  },
  {
    id: 'square-bars',
    name: 'Square Bars',
    description: 'Precision-manufactured square steel bars for construction, engineering, and manufacturing applications requiring consistent dimensions.',
    image: square,
    alt: 'High-quality square steel bars for industrial applications',
    category: 'manufacturing',
    tags: ['10-100mm', 'EN8/EN9', 'Precision Cut', 'Cold Drawn']
  },
  {
    id: 'steel-channels',
    name: 'Steel Channels',
    description: 'Versatile U-shaped structural steel channels with excellent load-bearing capacity for construction and industrial applications.',
    image: channel,
    alt: 'Structural steel channels for construction frameworks',
    category: 'construction',
    tags: ['ISMC', 'Junior Channels', 'Standard Sizes', 'Galvanized']
  },
  {
    id: 'boiler-quality-plates',
    name: 'Boiler Quality Plates',
    description: 'Specialized high-temperature resistant steel plates for pressure vessels, boilers, and heat exchangers in industrial applications.',
    image: bq,
    alt: 'High-temperature resistant boiler quality steel plates for pressure vessels',
    category: 'industrial',
    tags: ['ASTM A516', 'High-Temperature', 'Pressure Resistant', 'Grade 70']
  },
  {
    id: 'angles',
    name: 'Steel Angles',
    description: 'L-shaped structural steel angles for framing, bracing, and supports in construction and industrial applications.',
    image: angle,
    alt: 'Structural steel angles for construction and industrial applications',
    category: 'construction',
    tags: ['Equal Angles', 'Unequal Angles', 'IS 808', 'Galvanized']
  }
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-condensed font-bold text-neutral-800 mb-4">Our Premium Steel Products</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Browse our comprehensive range of high-quality steel products engineered to meet the highest industry standards.
          </p>
        </div>
        
        {/* Product Categories Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center border-b border-neutral-200">
            <button 
              className={`font-medium px-4 py-3 md:px-8 text-sm md:text-base transition-colors ${activeCategory === 'all' ? 'text-primary border-b-2 border-primary' : 'text-neutral-600 hover:text-primary'}`}
              onClick={() => setActiveCategory('all')}
            >
              All Products
            </button>
            <button 
              className={`font-medium px-4 py-3 md:px-8 text-sm md:text-base transition-colors ${activeCategory === 'construction' ? 'text-primary border-b-2 border-primary' : 'text-neutral-600 hover:text-primary'}`}
              onClick={() => setActiveCategory('construction')}
            >
              Construction
            </button>
            <button 
              className={`font-medium px-4 py-3 md:px-8 text-sm md:text-base transition-colors ${activeCategory === 'manufacturing' ? 'text-primary border-b-2 border-primary' : 'text-neutral-600 hover:text-primary'}`}
              onClick={() => setActiveCategory('manufacturing')}
            >
              Manufacturing
            </button>
            <button 
              className={`font-medium px-4 py-3 md:px-8 text-sm md:text-base transition-colors ${activeCategory === 'industrial' ? 'text-primary border-b-2 border-primary' : 'text-neutral-600 hover:text-primary'}`}
              onClick={() => setActiveCategory('industrial')}
            >
              Industrial
            </button>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="product-card bg-white rounded-lg shadow-md overflow-hidden border border-neutral-200 transition-all duration-300 hover:shadow-lg"
              data-category={product.category}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.alt} 
                  className="w-full h-48 object-cover"
                  loading="lazy" 
                />
                <div className="absolute top-0 right-0 bg-secondary text-primary  text-xs font-bold px-3 py-1 m-2 rounded">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-condensed font-bold text-neutral-800 mb-2">{product.name}</h3>
                <p className="text-neutral-600 mb-4 text-sm">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag, index) => (
                    <span key={index} className="bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <Link 
                  href={`/products/${product.id}`}
                  className="inline-flex items-center justify-center w-full bg-primary hover:bg-primary-light text-white font-medium py-2 rounded transition duration-300"
                >
                  <span>Request Quote</span>
                  <span className="material-icons text-sm ml-1">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="inline-flex items-center justify-center bg-secondary hover:bg-secondary-dark text-primary font-medium px-8 py-3 rounded-md transition duration-300 shadow">
            <span>Request Custom Products</span>
            <span className="material-icons text-sm ml-2">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
