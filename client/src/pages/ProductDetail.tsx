import { useParams } from 'wouter';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Button } from '@/components/ui/button';
import Contact from '@/components/home/Contact';
import { Product } from '@/types';

// Mock product data - in a real application this would come from an API
const products: Record<string, Product> = {
  'tmt-bars': {
    id: 'tmt-bars',
    name: 'TMT Bars',
    fullName: 'Thermo-Mechanically Treated Steel Bars',
    description: 'High-strength thermo-mechanically treated steel reinforcement bars with excellent ductility and weldability.',
    longDescription: 'Our premium thermo-mechanically treated (TMT) steel reinforcement bars are designed for superior performance in construction applications. With high tensile strength, excellent bendability, and optimum ductility, these bars provide enhanced safety and durability for structural concrete. Our TMT bars offer improved earthquake resistance and corrosion protection, making them ideal for modern construction projects. Available in various diameters and grades, these bars meet all national and international quality standards including IS:1786.',
    image: 'https://pixabay.com/get/gdb6e70464eb0392a0df19a6ccc90ba67a492de9414710e63d3fd355c0d32bd5ab568aba6bb499511da01f0e8bf690baf5db4379d229616661dd6221a26b2f642_1280.jpg',
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
    image: 'https://pixabay.com/get/gf2a22db6888de29cd0ad06a64bf83c256528b1a7a5f2a3b32034ff8038df3872468c6f94a039ce0eebc537b11ea8e538eb8cb5e7bfd7722fe4ab7ca4863b9e85_1280.jpg',
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
    image: 'https://pixabay.com/get/gc017e79272b11cd681dc585ba2135a0597abdc422bf6348f0bf391eda176df3b50694eb4526d4ae0dc344dff86e1a82320f05635fcb441fcd401f0c17b9ea6a2_1280.jpg',
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
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch product details
    setLoading(true);
    
    // In a real application, this would be an API call
    setTimeout(() => {
      if (id && products[id]) {
        setProduct(products[id]);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (!product) {
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
        <div className="mb-16">
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
        </div>
      </div>
      
      {/* Contact Section */}
      <Contact />
    </>
  );
};

export default ProductDetail;
