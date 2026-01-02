
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Environment, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';
import RoboticArm from './components/RoboticArm';
import Particles from './components/Particles';
import Overlay from './components/Overlay';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#f8f9fa] selection:bg-black selection:text-white">
      {/* Highest layer: Navigation - Always on top */}
      <Navbar />
      
      {/* Fixed HUD Overlay - Background interface */}
      <Overlay />
      
      <Canvas
        shadows
        dpr={[1, 2]} // High-DPI support
        camera={{ position: [0, 0, 10], fov: 35 }}
        gl={{ 
          antialias: true, 
          alpha: true, 
          powerPreference: "high-performance" 
        }}
      >
        <color attach="background" args={['#f8f9fa']} />
        
        <Suspense fallback={null}>
          <ScrollControls pages={5} damping={0.15}>
            
            {/* Background noise and atmosphere */}
            <Particles count={3000} />
            
            {/* Lighting setup */}
            <ambientLight intensity={0.5} />
            <spotLight 
              position={[10, 10, 10]} 
              angle={0.15} 
              penumbra={1} 
              intensity={2} 
              castShadow 
            />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />
            
            {/* The Main 3D Model */}
            <RoboticArm />

            {/* Post-processing feel */}
            <ContactShadows 
              position={[0, -2, 0]} 
              opacity={0.4} 
              scale={10} 
              blur={2.5} 
              far={4} 
            />
            <Environment preset="city" />

            {/* Interactive Layer: Scroll Content */}
            {/* Ensure it clears the navbar with pt-40 and sits above Overlay but below Navbar */}
            <Scroll html>
              <div className="w-screen pointer-events-none z-20 relative">
                
                {/* HERO SECTION */}
                <section className="h-screen w-full flex flex-col items-center justify-center px-8 md:px-24 pt-40 relative overflow-hidden">
                  {/* Background Text Layer */}
                  <div className="absolute left-10 top-[25%] max-w-sm pointer-events-none">
                    <h2 className="text-[12vw] font-black text-black/[0.02] leading-none select-none tracking-tighter uppercase italic">Proto</h2>
                  </div>
                  
                  {/* Main UI Layer */}
                  <div className="z-30 self-start pointer-events-auto">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      <p className="text-xs uppercase tracking-[0.6em] font-bold mb-6 border-l-4 border-black pl-5">Mechanical Unit 01</p>
                      <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-none mb-8 text-black">
                        Autonomous <br/>
                        <span className="font-black italic">Articulation.</span>
                      </h1>
                      <p className="max-w-md text-sm md:text-base text-gray-500 leading-relaxed font-medium">
                        Pioneering the next generation of high-torque, low-latency robotic limbs for industrial and research environments. 
                        Engineered for absolute precision.
                      </p>
                    </motion.div>
                  </div>
                </section>

                {/* SYSTEMS SECTION */}
                <section className="h-screen w-full flex items-center justify-end px-8 md:px-24 relative">
                  <div className="absolute right-10 top-[25%] max-w-sm text-right pointer-events-none">
                    <h2 className="text-[12vw] font-black text-black/[0.02] leading-none select-none tracking-tighter uppercase italic">Systems</h2>
                  </div>
                  <div className="z-30 max-w-md text-right pointer-events-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                    >
                      <p className="text-xs uppercase tracking-[0.6em] font-bold mb-6 border-r-4 border-black pr-5">Neural Control</p>
                      <h3 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Sub-ms <br/>Latency</h3>
                      <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium">
                        Proprietary wireframe rendering logic minimizes telemetry overhead, allowing for instantaneous feedback loops in complex maneuvers.
                      </p>
                    </motion.div>
                  </div>
                </section>

                {/* ROBOTICS SECTION */}
                <section className="h-screen w-full flex items-center justify-start px-8 md:px-24 relative">
                  <div className="absolute left-10 top-[25%] max-w-sm pointer-events-none">
                    <h2 className="text-[12vw] font-black text-black/[0.02] leading-none select-none tracking-tighter uppercase italic">Motion</h2>
                  </div>
                  <div className="z-30 max-w-md pointer-events-auto">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                    >
                      <p className="text-xs uppercase tracking-[0.6em] font-bold mb-6 border-l-4 border-black pl-5">Dynamics</p>
                      <h3 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Precision <br/>Flow</h3>
                      <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium">
                        Fluid articulation through calibrated precision joints, designed to handle high-stress applications with monochromatic elegance.
                      </p>
                    </motion.div>
                  </div>
                </section>

                {/* SIMULATIONS SECTION */}
                <section className="h-screen w-full flex items-center justify-end px-8 md:px-24 relative">
                  <div className="absolute right-10 top-[25%] max-w-sm text-right pointer-events-none">
                    <h2 className="text-[12vw] font-black text-black/[0.02] leading-none select-none tracking-tighter uppercase italic">Virtual</h2>
                  </div>
                  <div className="z-30 max-w-md text-right pointer-events-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                    >
                      <p className="text-xs uppercase tracking-[0.6em] font-bold mb-6 border-r-4 border-black pr-5">Validation</p>
                      <h3 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Digital <br/>Twin</h3>
                      <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium">
                        Every movement is simulated in a high-fidelity physics environment before deployment, ensuring maximum operational uptime.
                      </p>
                    </motion.div>
                  </div>
                </section>

                {/* RESEARCH SECTION */}
                <section className="h-screen w-full flex flex-col items-center justify-center p-12 relative">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h2 className="text-[15vw] font-black text-black/[0.02] select-none tracking-[0.1em] uppercase italic">Archive</h2>
                  </div>
                  <div className="z-30 text-center pointer-events-auto">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <p className="text-xs uppercase tracking-[1em] font-bold mb-10 text-black/60">Evolution of Form</p>
                      <button className="px-16 py-6 bg-black text-white text-[12px] font-bold uppercase tracking-[0.6em] hover:bg-white hover:text-black transition-all duration-700 border-2 border-black group shadow-2xl active:scale-95">
                        Initialize Download <span className="ml-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0 inline-block">→</span>
                      </button>
                      <p className="mt-8 text-[10px] uppercase tracking-widest text-gray-400 font-bold">Secure Protocol Established</p>
                    </motion.div>
                  </div>
                </section>
              </div>
            </Scroll>

          </ScrollControls>
        </Suspense>
      </Canvas>

      {/* Grid Pattern Background overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]"
           style={{ backgroundImage: 'radial-gradient(circle, #000 1.2px, transparent 1.2px)', backgroundSize: '48px 48px' }} />
    </div>
  );
};

export default App;
