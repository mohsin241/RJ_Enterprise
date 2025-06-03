import { Link } from 'wouter';
import logo from "../../../public/logo.png";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src={logo} alt="R J Enterprise Logo" className="h-10 w-auto" />
              <div className="font-condensed font-bold text-xl text-white">
                R J ENTERPRISE
              </div>
            </div>
            <p className="text-neutral-400 mb-6">
              ISO 9001:2008 certified steel stockholder and supplier providing high-quality steel products and services to various industries across India.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-neutral-400 hover:text-white transition">
                <span className="material-icons">facebook</span>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-neutral-400 hover:text-white transition">
                <span className="material-icons">linkedin</span>
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-neutral-400 hover:text-white transition">
                <span className="material-icons">twitter</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-condensed font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/#home" className="text-neutral-400 hover:text-white transition">Home</a></li>
              <li><a href="/#about" className="text-neutral-400 hover:text-white transition">About Us</a></li>
              <li><a href="/#products" className="text-neutral-400 hover:text-white transition">Products</a></li>
              <li><a href="/#industries" className="text-neutral-400 hover:text-white transition">Industries</a></li>
              <li><a href="/#services" className="text-neutral-400 hover:text-white transition">Services</a></li>
              <li><a href="/#contact" className="text-neutral-400 hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-condensed font-bold mb-6">Our Products</h3>
            <ul className="space-y-3">
              <li><Link href="/products/tmt-bars" className="text-neutral-400 hover:text-white transition">TMT Bars</Link></li>
              <li><Link href="/products/mild-steel-plates" className="text-neutral-400 hover:text-white transition">Mild Steel Plates</Link></li>
              <li><Link href="/products/hot-rolled-coils" className="text-neutral-400 hover:text-white transition">Hot Rolled Coils</Link></li>
              <li><Link href="/products/steel-beams" className="text-neutral-400 hover:text-white transition">Steel Beams</Link></li>
              <li><Link href="/products/steel-channels" className="text-neutral-400 hover:text-white transition">Steel Channels</Link></li>
              <li><Link href="/products/chequered-plates" className="text-neutral-400 hover:text-white transition">Chequered Plates</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-condensed font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <span className="material-icons text-secondary mr-3">location_on</span>
                <span className="text-neutral-400">
                  123 Industrial Area, Phase II<br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex">
                <span className="material-icons text-secondary mr-3">phone</span>
                <a href="tel:+919999999999" className="text-neutral-400 hover:text-white transition">+91 99999 99999</a>
              </li>
              <li className="flex">
                <span className="material-icons text-secondary mr-3">email</span>
                <a href="mailto:info@rjenterpriseinfo.com" className="text-neutral-400 hover:text-white transition">info@rjenterpriseinfo.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-700 text-center text-neutral-500">
          <p>&copy; {new Date().getFullYear()} R J Enterprise. All Rights Reserved.</p>
          <p className="mt-2 text-sm">
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link> | 
            <Link href="/terms-of-service" className="hover:text-white transition ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
