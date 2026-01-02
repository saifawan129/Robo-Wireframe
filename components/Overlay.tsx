
import React from 'react';
import { motion } from 'framer-motion';

const Overlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex flex-col justify-between p-8 md:p-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex justify-between items-start"
      >
        <div className="bg-white/40 backdrop-blur-sm p-4 border-l-2 border-black">
          <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-black uppercase leading-none">Mechanical Unit_01</h1>
          <p className="text-[10px] text-black font-bold tracking-[0.3em] mt-1">SERIAL: AX-990-WIRE</p>
        </div>
        <div className="text-right hidden md:block bg-white/40 backdrop-blur-sm p-4 border-r-2 border-black">
          <p className="text-[10px] text-black font-bold uppercase tracking-widest">STATUS: CALIBRATING</p>
          <p className="text-[10px] text-black/40 font-bold uppercase tracking-widest">LATENCY: 1.2ms</p>
        </div>
      </motion.div>

      <div className="flex flex-col items-center justify-center space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-black mb-3">Operate System</span>
            <div className="w-px h-16 bg-black" />
          </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="flex flex-wrap justify-between items-end border-t border-black/10 pt-8"
      >
        <div className="max-w-xs bg-white/60 backdrop-blur-md p-4">
          <h3 className="text-[10px] font-black uppercase mb-3 tracking-[0.3em]">System Specs</h3>
          <p className="text-[11px] leading-relaxed text-gray-700 font-medium italic">
            Advanced multi-axial articulation system featuring a monochromatic 
            wireframe rendering engine.
          </p>
        </div>
        <div className="hidden lg:block bg-black text-white p-4">
           <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[10px] font-bold uppercase tracking-widest">
             <div><span className="text-gray-500 mr-2">Joint A:</span> 12.4&deg;</div>
             <div><span className="text-gray-500 mr-2">Joint B:</span> -45.1&deg;</div>
             <div><span className="text-gray-500 mr-2">Joint C:</span> 89.0&deg;</div>
             <div><span className="text-gray-500 mr-2">Torque:</span> 450Nm</div>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Overlay;
