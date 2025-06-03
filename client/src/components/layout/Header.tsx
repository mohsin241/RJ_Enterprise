import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useScroll } from '@/hooks/use-scroll';
import logo from "../../../public/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const scrolled = useScroll(50);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path ? "text-primary font-medium" : "text-neutral-700 font-medium hover:text-primary";
  };

  return (
    <header className={`bg-white sticky top-0 z-50 ${scrolled ? "shadow-md" : ""}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src={logo} alt="R J Enterprise Logo" className="h-10 w-auto" />
           
            <div className="text-primary font-condensed font-bold text-xl hidden sm:block">
              R J ENTERPRISE
            </div>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden text-neutral-700" 
            aria-label="Toggle navigation menu"
          >
            <span className="material-icons">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
          
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            <li><a href="/#home" className={isActive('/#home') + " transition duration-200"}>Home</a></li>
            <li><a href="/#about" className={isActive('/#about') + " transition duration-200"}>About Us</a></li>
            <li><a href="/#products" className={isActive('/#products') + " transition duration-200"}>Products</a></li>
            <li><a href="/#industries" className={isActive('/#industries') + " transition duration-200"}>Industries</a></li>
            <li><a href="/#services" className={isActive('/#services') + " transition duration-200"}>Services</a></li>
            <li><a href="/#contact" className={isActive('/#contact') + " transition duration-200"}>Contact Us</a></li>
          </ul>
          
          {/* Contact Info */}
          <div className="hidden lg:flex items-center">
            <a href="tel:+91 8828403987" className="flex items-center text-primary-dark hover:text-primary transition">
              <span className="material-icons mr-1 text-sm">phone</span>
              <span className="text-sm font-medium">+91 8828403987</span>
            </a>
          </div>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`bg-white border-t lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3">
          <ul className="space-y-3">
            <li><a href="/#home" onClick={closeMobileMenu} className="block text-primary font-medium py-2">Home</a></li>
            <li><a href="/#about" onClick={closeMobileMenu} className="block text-neutral-700 font-medium py-2">About Us</a></li>
            <li><a href="/#products" onClick={closeMobileMenu} className="block text-neutral-700 font-medium py-2">Products</a></li>
            <li><a href="/#industries" onClick={closeMobileMenu} className="block text-neutral-700 font-medium py-2">Industries</a></li>
            <li><a href="/#services" onClick={closeMobileMenu} className="block text-neutral-700 font-medium py-2">Services</a></li>
            <li><a href="/#contact" onClick={closeMobileMenu} className="block text-neutral-700 font-medium py-2">Contact Us</a></li>
            <li className="border-t pt-3">
              <a href="tel:+91 8828403987" className="flex items-center text-primary hover:text-primary-light transition py-2">
                <span className="material-icons mr-2">phone</span>
                <span className="font-medium">+91 8828403987</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
