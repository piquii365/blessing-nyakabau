import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#192A51] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-white/80">Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span className="text-white/80">by Blessing Nyakabau</span>
          </div>
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Blessing Nyakabau. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mt-2">
            Full Stack Developer • Always ready to adapt to customer needs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
