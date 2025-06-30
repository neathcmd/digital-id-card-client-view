import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 px-6 py-12 border-t border-white/20 w-full bg-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              DigitalID
            </span>
          </div>
          <div className="flex space-x-8 text-gray-300">
            <a href="#" className="hover:text-purple-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Support
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-8">
          © 2025 DigitalID. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
