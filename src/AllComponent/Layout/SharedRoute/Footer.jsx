import React from 'react';
import { FaTwitter, FaInstagram, FaFacebookF, FaPinterestP, FaVimeoV } from "react-icons/fa";

const Footer = () => {
  // Follow me gallery images
  const footerImages = [
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200&auto=format&fit=crop",
  ];

  return (
    <footer className="bg-[#1c1c1c] text-neutral-400 font-sans pt-16 pb-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left items-start">
        
        {/* ===== Column 1: Twitter Feed ===== */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white text-xs font-semibold uppercase tracking-[0.25em] mb-6">
            Twitter Feed
          </h3>
          <p className="text-xs font-light leading-relaxed max-w-xs">
            For all the latest news and updates, follow us on Twitter:{" "}
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white hover:underline">
              @QodeInteractive.com
            </a>
          </p>
        </div>

        {/* ===== Column 2: Logo, Info & Social Icons ===== */}
        <div className="flex flex-col items-center text-center">
          {/* Logo / Signature Placeholder */}
          <div className="mb-4">
            <span className="text-white font-serif text-2xl italic tracking-wider font-bold border-b border-neutral-600 pb-1 px-4">
              Bistro Boss
            </span>
          </div>

          <p className="text-xs font-light leading-relaxed max-w-sm mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
          </p>

          <p className="text-xs text-white font-medium mb-1">+387648592568</p>
          <p className="text-xs text-white font-medium mb-1">savory@qodeinteractive.com</p>
          <p className="text-xs text-neutral-400 mb-6">Eighth Avenue 487, New York</p>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-neutral-400">
            <a href="#vimeo" className="hover:text-white transition-colors text-sm">
              <FaVimeoV />
            </a>
            <a href="#instagram" className="hover:text-white transition-colors text-sm">
              <FaInstagram />
            </a>
            <a href="#twitter" className="hover:text-white transition-colors text-sm">
              <FaTwitter />
            </a>
            <a href="#pinterest" className="hover:text-white transition-colors text-sm">
              <FaPinterestP />
            </a>
            <a href="#facebook" className="hover:text-white transition-colors text-sm">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* ===== Column 3: Follow Me (Image Grid) ===== */}
        <div className="flex flex-col items-center md:items-end">
          <div className="w-full max-w-xs">
            <h3 className="text-white text-xs font-semibold uppercase tracking-[0.25em] mb-6 text-center md:text-left">
              Follow Me
            </h3>
            {/* 3x2 Image Grid */}
            <div className="grid grid-cols-3 gap-2">
              {footerImages.map((img, index) => (
                <div key={index} className="overflow-hidden rounded group">
                  <img
                    src={img}
                    alt={`Food gallery ${index + 1}`}
                    className="w-full h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ===== Bottom Copyright ===== */}
      <div className="max-w-7xl mx-auto border-t border-neutral-800 mt-16 pt-6 text-center">
        <p className="text-[11px] font-light text-neutral-500 tracking-wider">
          © 2026 Qode Interactive, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;