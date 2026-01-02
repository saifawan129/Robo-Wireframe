
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const navLinks = ['Systems', 'Robotics', 'Simulations', 'Research'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/60 backdrop-blur-xl border-b border-black/5 pointer-events-auto h-20 md:h-24"
    >
      {/* Brand / Logo Section */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-black flex items-center justify-center font-bold text-sm md:text-base">
          R
        </div>
        <span className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase hidden sm:block">
          Robo_Arch
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-12">
        {navLinks.map((link) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="relative text-[10px] uppercase tracking-[0.3em] text-black/60 font-black hover:text-black transition-colors duration-300 group"
            whileHover={{ y: -1 }}
          >
            {link}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
          </motion.a>
        ))}
      </div>

      {/* Action Button */}
      <div className="flex items-center">
        <motion.button
          whileHover={{ 
            backgroundColor: "#ffffff", 
            color: "#000000",
            scale: 1.05
          }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 md:px-8 md:py-3 bg-black text-white text-[10px] font-bold uppercase tracking-widest border-2 border-black transition-all duration-300 ease-in-out shadow-lg"
        >
          Initialize
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
