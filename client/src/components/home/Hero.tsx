import { Link } from 'wouter';
// import heroImage from "../../assets/factory-1140760_640.jpg"


const Hero = () => {
  return (
    <section id="home" className="relative bg-primary">
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <div className="relative h-[600px] md:h-[650px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center hero-bg-image" 
          aria-label="Modern steel manufacturing facility with hot rolled steel production"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-20"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-30">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-condensed font-bold text-white leading-tight mb-4 text-shadow">
              Premium Steel Solutions <br />for Every Industry
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              R J Enterprise is a trusted ISO 9001:2008 certified steel stockholder and supplier, offering high-quality TMT bars, steel plates, hot rolled coils and more for construction, manufacturing and industrial applications.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#products" 
                className="bg-white hover:bg-neutral-100 text-primary font-medium px-8 py-3 rounded-md transition duration-300 text-center shadow-lg"
              >
                <span>Explore Products</span>
              </a>
              <a 
                href="#contact" 
                className="bg-white hover:bg-neutral-100 text-primary font-medium px-8 py-3 rounded-md transition duration-300 text-center shadow-lg"
              >
                <span>Contact Us</span>
              </a>
            </div>
            <div className="flex items-center mt-8 space-x-6">
              <div className="flex items-center">
                <span className="material-icons text-secondary mr-2">verified</span>
                <span className="text-white">ISO 9001:2008 Certified</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons text-secondary mr-2">support_agent</span>
                <span className="text-white">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

/* Add to the bottom of the file or in a global CSS file:
.hero-bg-image {
  background-image: url('../../assets/factory-1140760_640.jpg');
}
*/
