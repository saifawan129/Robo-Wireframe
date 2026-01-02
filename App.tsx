
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
    <div className="relative w-full h-screen bg-[#f8f9fa] overflow-hidden selection:bg-black selection:text-white">
      {/* Navigation - Highest Z */}
      <Navbar />
      
      {/* HUD Layer - Middle Z */}
      <Overlay />
      
      {/* 3D Scene Layer - Ground Z */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 0, 10], fov: 35 }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance",
            preserveDrawingBuffer: true
          }}
        >
          <color attach="background" args={['#f8f9fa']} />
          
          <Suspense fallback={null}>
            <ScrollControls pages={5} damping={0.2} infinite={false}>
              <Particles count={2500} />
              
              <ambientLight intensity={0.5} />
              <spotLight 
                position={[10, 10, 10]} 
                angle={0.15} 
                penumbra={1} 
                intensity={2} 
                castShadow 
              />
              <pointLight position={[-10, -10, -10]} intensity={1} />
              
              <RoboticArm />

              <ContactShadows 
                position={[0, -2, 0]} 
                opacity={0.4} 
                scale={10} 
                blur={2.5} 
                far={4} 
              />
              <Environment preset="city" />

              {/* Scrollable UI Content */}
              <Scroll html>
                <div className="w-screen pointer-events-none">
                  
                  {/* Hero section with significant padding to clear Navbar */}
                  <section className="h-screen w-full flex flex-col items-center justify-center px-8 md:px-24 pt-44 relative">
                    <div className="absolute left-10 top-[28%] pointer-events-none opacity-[0.03] hidden md:block">
                      <h2 className="text-[15vw] font-black text-black leading-none select-none tracking-tighter uppercase italic">Proto</h2>
                    </div>
                    
                    <div className="z-10 self-start pointer-events-auto">
                      <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                      >
                        <p className="text-[10px] uppercase tracking-[0.5em] font-bold mb-4 border-l-4 border-black pl-4">System Operational</p>
                        <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-none mb-6">
                          Monochrome <br/>
                          <span className="font-black italic text-black">Dynamics.</span>
                        </h1>
                        <p className="max-w-md text-xs md:text-sm text-gray-500 leading-relaxed font-bold uppercase tracking-wider">
                          The AX-990 unit represents a paradigm shift in autonomous 
                          articulation. Engineered for absolute precision.
                        </p>
                      </motion.div>
                    </div>
                  </section>

                  {/* Latency Section */}
                  <section className="h-screen w-full flex items-center justify-end px-8 md:px-24 relative">
                    <div className="z-10 max-w-md text-right pointer-events-auto">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                      >
                        <p className="text-[10px] uppercase tracking-[0.5em] font-bold mb-4 border-r-4 border-black pr-4">Performance</p>
                        <h3 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter italic">Low Latency</h3>
                        <p className="text-xs md:text-sm text-gray-500 font-bold tracking-tight">
                          Integrated real-time kinematics providing sub-millisecond 
                          response times for precision-critical maneuvers.
                        </p>
                      </motion.div>
                    </div>
                  </section>

                  {/* Aesthetics Section */}
                  <section className="h-screen w-full flex items-center justify-start px-8 md:px-24 relative">
                    <div className="z-10 max-w-md pointer-events-auto">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                      >
                        <p className="text-[10px] uppercase tracking-[0.5em] font-bold mb-4 border-l-4 border-black pl-4">Architecture</p>
                        <h3 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter italic">Wireframe</h3>
                        <p className="text-xs md:text-sm text-gray-500 font-bold tracking-tight">
                          Monochromatic visualization protocols optimized for high-speed 
                          telemetry and minimal cognitive overhead.
                        </p>
                      </motion.div>
                    </div>
                  </section>

                  {/* Terminal CTA */}
                  <section className="h-screen w-full flex flex-col items-center justify-center p-12">
                    <div className="z-10 text-center pointer-events-auto">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                      >
                        <p className="text-[10px] uppercase tracking-[0.8em] font-bold mb-8 opacity-40">Connection Secure</p>
                        <button className="px-14 py-6 bg-black text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500 border-2 border-black active:scale-95">
                          Initialize Interface
                        </button>
                      </motion.div>
                    </div>
                  </section>
                </div>
              </Scroll>
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>

      {/* Static Grid Backdrop */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
           style={{ backgroundImage: 'radial-gradient(circle, #000 1.2px, transparent 1.2px)', backgroundSize: '40px 40px' }} />
    </div>
  );
};

export default App;
