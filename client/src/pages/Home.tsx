import { Helmet } from 'react-helmet-async';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import AboutUs from '@/components/home/AboutUs';
import Products from '@/components/home/Products';
import Industries from '@/components/home/Industries';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';
import Contact from '@/components/home/Contact';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>R J Enterprise | Premium Steel Supplier & Distributor in India</title>
        <meta name="description" content="R J Enterprise offers high-quality TMT bars, steel plates, hot rolled coils & industrial steel products. ISO 9001:2008 certified steel supplier serving construction, oil & gas, manufacturing industries." />
        <meta name="keywords" content="steel supplier, TMT bars, mild steel plates, boiler quality plates, hot rolled coils, construction steel, industrial steel" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rjenterpriseinfo.com/" />
        <meta property="og:title" content="R J Enterprise | Premium Steel Supplier & Distributor in India" />
        <meta property="og:description" content="Leading supplier of industrial-grade steel products including TMT bars, plates & coils for construction, manufacturing & oil & gas sectors." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1616737676197-696fe94df40a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="R J Enterprise | Premium Steel Supplier & Distributor" />
        <meta name="twitter:description" content="Premium steel products for construction, manufacturing & industrial applications. ISO 9001:2008 certified." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.rjenterpriseinfo.com/" />
      </Helmet>
      
      <Hero />
      <FeaturedProducts />
      <AboutUs />
      <Products />
      <Industries />
      <Services />
      <Testimonials />
      <CallToAction />
      <Contact />
    </>
  );
};

export default Home;
