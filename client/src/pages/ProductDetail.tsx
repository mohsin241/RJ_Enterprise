import { useParams } from 'wouter';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/button'; 
import Contact from '@/components/home/Contact';
import { Product } from '@/types';
import tmt from "../../src/assets/TMT Bar 1.jpg"
import coil from "../../src/assets/Stainless-Steel-Cold-Rolling-Coil-304.jpg"
import beam from "../../src/assets/wmremove-transformed.jpg"
import chequered from "../../src/assets/ms-chequered-plates.jpg"
import round from "../../src/assets/mild-steel-round-bars-1530870379-4069527.jpg"
import plate from "../../src/assets/ms-plates-1000x1000.jpg"
import c45 from "../../src/assets/alloy-steel-plates.jpg"
import square from "../../src/assets/tool-steel-alloy-steel-square-bars.jpg"
import channel from "../../src/assets/stainless-steel-channels-1595395255.jpg"
import bq from "../../src/assets/Boiler-Quality-Plate-SA516-Gr70n-Nace-Hic-Pressure-Vessel-Steel-Plates-Carbon-Steel-Sheet.jpg"
import angle from "../../src/assets/mild-steel-angles-1024812.jpg"

const products: Record<string, Product> = {
   'tmt-bars': {
    id: 'tmt-bars',
    name: 'TMT Bars',
    fullName: 'Thermo-Mechanically Treated Steel Bars',
    description: 'High-strength thermo-mechanically treated steel reinforcement bars with excellent ductility and weldability.',
    longDescription: 'Our premium thermo-mechanically treated (TMT) steel reinforcement bars are designed for superior performance in construction applications. With high tensile strength, excellent bendability, and optimum ductility, these bars provide enhanced safety and durability for structural concrete. Our TMT bars offer improved earthquake resistance and corrosion protection, making them ideal for modern construction projects. Available in various diameters and grades, these bars meet all national and international quality standards including IS:1786.',
    image: tmt,
    alt: 'Premium TMT steel reinforcement bars for construction projects',
    category: 'construction',
    tags: ['Fe 500', 'Fe 550', 'Ribbed', 'Corrosion-Resistant'],
    specs: [
      { name: 'Standard', value: 'IS 1786:2008' },
      { name: 'Grade', value: 'Fe 500/550/600' },
      { name: 'Diameter', value: '8mm to 40mm' },
      { name: 'Length', value: '9m to 12m' },
      { name: 'Type', value: 'Ribbed' },
      { name: 'Bendability', value: 'Excellent' }
    ],
    applications: [
      'Residential Buildings',
      'Commercial Complexes',
      'Bridges & Flyovers',
      'Dams & Power Plants',
      'Industrial Structures'
    ],
    relatedProducts: ['steel-beams', 'mild-steel-plates']
  },
  'mild-steel-plates': {
    id: 'mild-steel-plates',
    name: 'Mild Steel Plates',
    fullName: 'IS 2062 Mild Steel Plates & Sheets',
    description: 'Premium-quality mild steel plates with excellent formability, weldability and machinability for various applications.',
    longDescription: 'Our mild steel plates offer exceptional versatility and reliability for a wide range of industrial applications. Manufactured to precise specifications, these plates provide excellent formability, weldability, and machinability. The uniform chemical composition and mechanical properties ensure consistent performance across various fabrication processes. Available in multiple thickness ranges and dimensions, our MS plates can be customized to meet specific project requirements while conforming to IS:2062 standards for structural steel applications.',
    image: plate,
    alt: 'High-quality mild steel plates for industrial applications',
    category: 'industrial',
    tags: ['MS IS 2062', '5-150mm', 'Custom Sizes', 'E250 Grade'],
    specs: [
      { name: 'Standard', value: 'IS 2062:2011' },
      { name: 'Grade', value: 'E250/E350/E410' },
      { name: 'Thickness', value: '5mm to 150mm' },
      { name: 'Width', value: '1000mm to 3000mm' },
      { name: 'Length', value: '2500mm to 12500mm' },
      { name: 'Surface', value: 'Plain/Checkered' }
    ],
    applications: [
      'Industrial Machinery',
      'Structural Components',
      'Storage Tanks',
      'Pressure Vessels',
      'Construction Equipment'
    ],
    relatedProducts: ['hot-rolled-coils', 'chequered-plates']
  },
  'hot-rolled-coils': {
    id: 'hot-rolled-coils',
    name: 'Hot Rolled Coils',
    fullName: 'HR Steel Coils & Sheets',
    description: 'Versatile hot rolled steel coils with uniform mechanical properties ideal for automotive, manufacturing and construction.',
    longDescription: 'Our hot rolled steel coils combine excellent strength with optimal workability for manufacturing applications. Produced through a high-temperature rolling process, these coils feature superior formability, weldability, and consistent mechanical properties. The manufacturing process ensures a smooth surface finish with tight thickness tolerances. Our HR coils are available in various steel grades, widths, and thicknesses to meet diverse industrial requirements. All products comply with IS:10748 standards and can be supplied in sheet or slit form according to customer specifications.',
    image: coil,
    alt: 'Hot rolled steel coils for manufacturing applications',
    category: 'manufacturing',
    tags: ['HRPO', '1.2-25mm', 'IS 10748', 'Customizable'],
    specs: [
      { name: 'Standard', value: 'IS 10748' },
      { name: 'Width', value: '600mm to 1850mm' },
      { name: 'Thickness', value: '1.2mm to 25mm' },
      { name: 'ID/OD', value: '508mm/1500mm max' },
      { name: 'Coil Weight', value: 'Up to 30 MT' },
      { name: 'Surface', value: 'HRPO/2B/BA/No.4' }
    ],
    applications: [
      'Automotive Components',
      'Pipe Manufacturing',
      'Electrical Equipment',
      'Construction Materials',
      'Home Appliances'
    ],
    relatedProducts: ['steel-beams', 'round-bars']
  },
  'steel-beams': {
    id: 'steel-beams',
    name: 'Steel Beams',
    fullName: 'Structural Steel I-Beams and H-Beams',
    description: 'High-strength structural steel beams designed for optimal load-bearing capacity in construction projects.',
    longDescription: 'Our structural steel beams, including I-Beams and H-Beams, are engineered for maximum load-bearing performance in construction and infrastructure projects. Manufactured to ISMB and ISLB standards, these beams offer excellent dimensional accuracy, tensile strength, and weldability. Available in multiple sizes and custom lengths, our beams are ideal for framing, supports, and columns in various structural applications.',
    image: beam,
    alt: 'Structural steel beams for construction projects',
    category: 'construction',
    tags: ['I-Beams', 'H-Beams', 'ISMB', 'ISLB'],
    specs: [
      { name: 'Standard', value: 'IS 2062 / IS 808' },
      { name: 'Type', value: 'ISMB/ISLB/I/H Beams' },
      { name: 'Size Range', value: '100mm to 600mm' },
      { name: 'Length', value: '6m to 12m' },
      { name: 'Surface', value: 'Mill Finish / Painted' }
    ],
    applications: [
      'Bridges & Flyovers',
      'Multi-story Buildings',
      'Industrial Sheds',
      'Warehouse Structures',
      'Railway & Metro Projects'
    ],
    relatedProducts: ['tmt-bars', 'steel-channels']
  },'chequered-plates': {
    id: 'chequered-plates',
    name: 'Chequered Plates',
    fullName: 'IS 3502 Anti-slip Chequered Steel Plates',
    description: 'Anti-slip checkered steel plates ideal for flooring, stair treads, and industrial platforms requiring enhanced safety.',
    longDescription: 'Chequered steel plates are ideal for anti-slip flooring, walkways, and industrial platforms. Manufactured according to IS 3502 standards, our plates offer durability, corrosion resistance, and excellent grip. These plates are commonly used in high-traffic areas and environments where safety is paramount.',
    image: chequered,
    alt: 'Industrial checkered steel plates with anti-slip surface',
    category: 'industrial',
    tags: ['2.5-12mm', 'IS 3502', 'Five-bar Pattern', 'Custom Cut'],
    specs: [
      { name: 'Standard', value: 'IS 3502' },
      { name: 'Pattern', value: 'Five-bar/tear-drop' },
      { name: 'Thickness', value: '2.5mm to 12mm' },
      { name: 'Width', value: '1000mm to 2500mm' },
      { name: 'Length', value: 'As per requirement' }
    ],
    applications: [
      'Factory Flooring',
      'Walkways & Ramps',
      'Truck & Bus Floors',
      'Rail Coaches',
      'Industrial Staircases'
    ],
    relatedProducts: ['mild-steel-plates', 'steel-channels']
  },

  'round-bars': {
    id: 'round-bars',
    name: 'Round Bars',
    fullName: 'Bright and Black Round Steel Bars',
    description: 'High-quality steel round bars with precise dimensions for engineering, automotive, and manufacturing applications.',
    longDescription: 'Our steel round bars are manufactured using both hot-rolled (black) and cold-drawn (bright) processes to meet the exacting standards of engineering, manufacturing, and automotive industries. With excellent surface finish and tight dimensional tolerance, these bars offer great machinability, strength, and durability.',
    image: round,
    alt: 'Premium steel round bars for manufacturing applications',
    category: 'manufacturing',
    tags: ['Bright', 'Black', '16-300mm', 'EN 8/C45'],
    specs: [
      { name: 'Material', value: 'EN 8, C45, Mild Steel' },
      { name: 'Diameter', value: '16mm to 300mm' },
      { name: 'Type', value: 'Bright / Black' },
      { name: 'Length', value: '5m to 6m' },
      { name: 'Finish', value: 'Polished / Rough' }
    ],
    applications: [
      'Automotive Shafts',
      'Machine Components',
      'Construction Tools',
      'General Engineering',
      'Fabrication Work'
    ],
    relatedProducts: ['square-bars', 'c45-plates']
  },

  'c45-plates': {
    id: 'c45-plates',
    name: 'C45 Steel Plates',
    fullName: 'EN 8 Medium Carbon Steel Plates',
    description: 'Medium carbon steel plates offering excellent machinability, heat treatability, and wear resistance for industrial applications.',
    longDescription: 'C45 steel plates, also known as EN 8 plates, are widely used in manufacturing components that require high tensile strength and wear resistance. These medium-carbon steel plates offer good machinability and are heat-treatable, making them ideal for gears, shafts, and heavy-duty tools.',
    image: c45,
    alt: 'C45 Carbon Steel Plates for industrial machinery and components',
    category: 'industrial',
    tags: ['Medium Carbon', 'Heat-Treatable', '1.0503', 'EN 8'],
    specs: [
      { name: 'Standard', value: 'EN 10083-2 / DIN 17200' },
      { name: 'Grade', value: 'C45 / 1.0503' },
      { name: 'Thickness', value: '10mm to 150mm' },
      { name: 'Width', value: '1000mm to 2500mm' },
      { name: 'Hardness', value: '170-210 HB' }
    ],
    applications: [
      'Machine Tools',
      'Automobile Parts',
      'Hydraulic Presses',
      'Gear Wheels',
      'Heavy Engineering'
    ],
    relatedProducts: ['round-bars', 'mild-steel-plates']
  },

  'square-bars': {
    id: 'square-bars',
    name: 'Square Bars',
    fullName: 'Precision Cold Drawn Steel Square Bars',
    description: 'Precision-manufactured square steel bars for construction, engineering, and manufacturing applications requiring consistent dimensions.',
    longDescription: 'Square bars are versatile components in structural and engineering applications. Our square bars are available in a range of sizes and are manufactured using high-grade EN8/EN9 steel. These cold drawn bars offer excellent strength, machinability, and straightness, making them ideal for tools, frames, and support structures.',
    image: square,
    alt: 'High-quality square steel bars for industrial applications',
    category: 'manufacturing',
    tags: ['10-100mm', 'EN8/EN9', 'Precision Cut', 'Cold Drawn'],
    specs: [
      { name: 'Material', value: 'EN8 / EN9' },
      { name: 'Size', value: '10mm to 100mm' },
      { name: 'Length', value: '5m to 6m' },
      { name: 'Surface', value: 'Cold Drawn / Peeled' }
    ],
    applications: [
      'Structural Frames',
      'Machined Components',
      'Forgings',
      'Shafts & Pins',
      'Fabricated Supports'
    ],
    relatedProducts: ['round-bars', 'steel-beams']
  },

  'steel-channels': {
    id: 'steel-channels',
    name: 'Steel Channels',
    fullName: 'ISMC Structural Steel Channels',
    description: 'Versatile U-shaped structural steel channels with excellent load-bearing capacity for construction and industrial applications.',
    longDescription: 'Steel channels, also known as ISMC, are commonly used in structural and civil engineering applications. These U-shaped steel sections are designed for strength and durability, suitable for frames, support systems, and reinforcements in construction and manufacturing projects.',
    image: channel,
    alt: 'Structural steel channels for construction frameworks',
    category: 'construction',
    tags: ['ISMC', 'Junior Channels', 'Standard Sizes', 'Galvanized'],
    specs: [
      { name: 'Standard', value: 'IS 808' },
      { name: 'Size Range', value: '75mm to 400mm' },
      { name: 'Length', value: '6m to 12m' },
      { name: 'Type', value: 'U Channel / C Channel' }
    ],
    applications: [
      'Support Structures',
      'Bridges',
      'Frames',
      'Fabricated Machinery',
      'Roof Trusses'
    ],
    relatedProducts: ['steel-beams', 'angles']
  },

  'boiler-quality-plates': {
    id: 'boiler-quality-plates',
    name: 'Boiler Quality Plates',
    fullName: 'ASTM A516 Boiler Quality Steel Plates',
    description: 'Specialized high-temperature resistant steel plates for pressure vessels, boilers, and heat exchangers in industrial applications.',
    longDescription: 'Boiler Quality Plates are specially designed to withstand high temperature and pressure conditions. Manufactured to ASTM A516 standards, these plates are suitable for boilers, heat exchangers, and pressure vessels. Their chemical composition offers excellent notch toughness and weldability, making them a reliable choice in thermal and petrochemical environments.',
    image: bq,
    alt: 'High-temperature resistant boiler quality steel plates for pressure vessels',
    category: 'industrial',
    tags: ['ASTM A516', 'High-Temperature', 'Pressure Resistant', 'Grade 70'],
    specs: [
      { name: 'Standard', value: 'ASTM A516' },
      { name: 'Grade', value: '60 / 65 / 70' },
      { name: 'Thickness', value: '6mm to 150mm' },
      { name: 'Width', value: '1000mm to 3000mm' },
      { name: 'Length', value: 'As per requirement' }
    ],
    applications: [
      'Boilers & Heaters',
      'Pressure Vessels',
      'Heat Exchangers',
      'Reactors',
      'Power Plants'
    ],
    relatedProducts: ['mild-steel-plates', 'c45-plates']
  },

  'angles': {
    id: 'angles',
    name: 'Steel Angles',
    fullName: 'Structural L-Shaped Steel Angles',
    description: 'L-shaped structural steel angles for framing, bracing, and supports in construction and industrial applications.',
    longDescription: 'Steel angles are essential for structural framing, reinforcements, and support applications. Available in both equal and unequal configurations, these L-shaped profiles conform to IS 808 standards and provide high strength and load distribution capabilities in structural frameworks.',
    image: angle,
    alt: 'Structural steel angles for construction and industrial applications',
    category: 'construction',
    tags: ['Equal Angles', 'Unequal Angles', 'IS 808', 'Galvanized'],
    specs: [
      { name: 'Standard', value: 'IS 808' },
      { name: 'Type', value: 'Equal / Unequal' },
      { name: 'Size Range', value: '25x25mm to 200x200mm' },
      { name: 'Length', value: '6m to 12m' },
      { name: 'Surface', value: 'Mill Finish / Painted / Galvanized' }
    ],
    applications: [
      'Structural Framing',
      'Transmission Towers',
      'Bracing Systems',
      'Fabrication Projects',
      'Rail Infrastructure'
    ],
    relatedProducts: ['steel-channels', 'steel-beams']
  }
};

const ProductDetail = () => {
   const { id } = useParams<{ id: string }>();

  if (!id || !products[id]) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <a href="/#products">Browse All Products</a>
          </Button>
        </div>
      </div>
    );
  }

  const product = products[id];

  return (
    <>
      <Helmet>
        <title>{`${product.fullName || product.name} | R J Enterprise`}</title>
        <meta 
          name="description" 
          content={`Premium quality ${product.name.toLowerCase()} for ${product.category} applications. ${product.description}`} 
        />
        <meta 
          name="keywords" 
          content={`${product.name.toLowerCase()}, ${product.category} steel, ${product.tags.join(', ')}, R J Enterprise, steel supplier`} 
        />
        <meta property="og:title" content={`${product.fullName || product.name} | R J Enterprise`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:type" content="product" />
        <link rel="canonical" href={`https://www.rjenterpriseinfo.com/products/${product.id}`} />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb 
          items={[
            { label: 'Products', href: '/#products' },
            { label: product.name }
          ]} 
        />

        <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img 
                src={product.image} 
                alt={product.alt} 
                className="w-full h-auto object-cover rounded-lg"
                loading="lazy" 
              />
              <div className="flex flex-wrap gap-2 mt-4">
                {product.tags.map((tag, index) => (
                  <span key={index} className="bg-neutral-100 text-neutral-700 text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h1 className="text-3xl font-condensed font-bold text-neutral-800 mb-2">{product.fullName || product.name}</h1>
              <div className="bg-secondary h-1 w-24 mb-4"></div>
              
              <div className="mb-6">
                <p className="text-neutral-700 text-lg leading-relaxed mb-4">{product.longDescription}</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-condensed font-bold text-neutral-800 mb-4">Technical Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="flex justify-between border-b pb-2">
                      <span className="font-medium text-neutral-800">{spec.name}</span>
                      <span className="text-neutral-600">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-condensed font-bold text-neutral-800 mb-4">Applications</h2>
                <ul className="list-disc list-inside space-y-1 text-neutral-700">
                  {product.applications.map((app, index) => (
                    <li key={index}>{app}</li>
                  ))}
                </ul>
              </div>
              
              <Button asChild className="bg-primary hover:bg-primary-light text-white font-medium px-8 py-6 rounded-md transition duration-300 shadow w-full">
                <a href="#contact">Request a Quote</a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {/* <div className="mb-16">
          <h2 className="text-2xl font-condensed font-bold text-neutral-800 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.relatedProducts.map((relId) => {
              const relatedProduct = products[relId];
              if (!relatedProduct) return null;
              
              return (
                <div key={relId} className="product-card bg-white rounded-lg shadow-md overflow-hidden border border-neutral-200">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.alt} 
                    className="w-full h-48 object-cover"
                    loading="lazy" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-condensed font-bold text-primary mb-2">{relatedProduct.name}</h3>
                    <p className="text-neutral-600 mb-4 text-sm">{relatedProduct.description}</p>
                    <a 
                      href={`/products/${relatedProduct.id}`} 
                      className="inline-flex items-center text-primary hover:text-primary-light font-medium"
                    >
                      Learn More
                      <span className="material-icons text-sm ml-1">arrow_forward</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
      
      {/* Contact Section */}
      <Contact />
    </>
  );
};

export default ProductDetail;
