import img from "../../assets/niloy-tanvirul-M0PnEFVfq-g-unsplash.jpg"
const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <img 
              src={img}
              alt="R J Enterprise steel manufacturing facility with modern equipment" 
              className="rounded-lg shadow-xl w-full"
              loading="lazy"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-condensed font-bold text-neutral-800 mb-6">About R J Enterprise</h2>
              <div className="bg-secondary h-1 w-24 mb-6"></div>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                R J Enterprise is a leading ISO 9001:2008 certified steel stockholder and supplier based in India. With over 15 years of industry experience, we have established ourselves as a trusted partner for businesses across construction, manufacturing, oil & gas, and infrastructure sectors.
              </p>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Our extensive inventory of high-quality steel products includes TMT bars, mild steel plates, hot rolled coils, steel beams, channels, and specialized grades that meet international quality standards. We take pride in our commitment to quality, reliability, and customer satisfaction.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <span className="material-icons text-secondary mr-3 mt-0.5">verified</span>
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-1">ISO 9001:2008</h3>
                    <p className="text-sm text-neutral-600">Certified quality management</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="material-icons text-secondary mr-3 mt-0.5">history</span>
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-1">15+ Years</h3>
                    <p className="text-sm text-neutral-600">Industry experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="material-icons text-secondary mr-3 mt-0.5">groups</span>
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-1">500+ Clients</h3>
                    <p className="text-sm text-neutral-600">Across major industries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="material-icons text-secondary mr-3 mt-0.5">language</span>
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-1">Pan-India</h3>
                    <p className="text-sm text-neutral-600">Supply network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
