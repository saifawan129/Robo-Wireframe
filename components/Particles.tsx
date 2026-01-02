
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { ParticleProps } from '../types';

const Particles: React.FC<ParticleProps> = ({ count = 2000 }) => {
  const points = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      temp.set([x, y, z], i * 3);
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    const time = state.clock.getElapsedTime();
    points.current.rotation.y = time * 0.05;
    points.current.rotation.z = time * 0.02;
    
    // Subtle breathing effect
    const scale = 1 + Math.sin(time) * 0.05;
    points.current.scale.set(scale, scale, scale);
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#000000"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
};

export default Particles;
