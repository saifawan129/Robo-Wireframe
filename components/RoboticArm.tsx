import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

const RoboticArm: React.FC = () => {
  const scroll = useScroll();
  const groupRef = useRef<THREE.Group>(null);
  const shoulderRef = useRef<THREE.Group>(null);
  const elbowRef = useRef<THREE.Group>(null);
  const wristRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!scroll) return;
    const r1 = scroll.range(0, 1/3);
    const r2 = scroll.range(1/3, 1/3);
    const r3 = scroll.range(2/3, 1/3);

    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2 + (scroll.offset * Math.PI * 2);
    }

    if (shoulderRef.current) {
      shoulderRef.current.rotation.z = r1 * 1.5;
    }
    if (elbowRef.current) {
      elbowRef.current.rotation.z = -r2 * 2;
    }
    if (wristRef.current) {
      wristRef.current.rotation.x = r3 * Math.PI;
    }
  });

  return (
    <group ref={groupRef} position={[0, -2, 0]}>
      {/* Base */}
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[1, 1.2, 0.5, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[1, 1.2, 0.5, 32]} />
        <meshStandardMaterial color="#000000" wireframe transparent opacity={0.8} />
      </mesh>

      {/* Shoulder Joint */}
      <group ref={shoulderRef} position={[0, 0.5, 0]}>
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial color="#000000" wireframe transparent opacity={0.8} />
        </mesh>

        {/* Lower Arm */}
        <group position={[0, 0.5, 0]}>
          <mesh position={[0, 1.5, 0]}>
            <boxGeometry args={[0.3, 3, 0.3]} />
            <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, 1.5, 0]}>
            <boxGeometry args={[0.3, 3, 0.3]} />
            <meshStandardMaterial color="#000000" wireframe transparent opacity={0.8} />
          </mesh>

          {/* Elbow Joint */}
          <group ref={elbowRef} position={[0, 3, 0]}>
             <mesh>
              <sphereGeometry args={[0.35, 16, 16]} />
              <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh>
              <sphereGeometry args={[0.35, 16, 16]} />
              <meshStandardMaterial color="#000000" wireframe transparent opacity={0.8} />
            </mesh>

            {/* Upper Arm */}
            <group>
              <mesh position={[0, 1.25, 0]}>
                <boxGeometry args={[0.25, 2.5, 0.25]} />
                <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
              </mesh>
              <mesh position={[0, 1.25, 0]}>
                <boxGeometry args={[0.25, 2.5, 0.25]} />
                <meshStandardMaterial color="#000000" wireframe transparent opacity={0.8} />
              </mesh>

              {/* Wrist/Hand */}
              <group ref={wristRef} position={[0, 2.5, 0]}>
                <mesh>
                  <boxGeometry args={[0.5, 0.2, 0.5]} />
                  <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
                </mesh>
                <mesh>
                  <boxGeometry args={[0.5, 0.2, 0.5]} />
                  <meshStandardMaterial color="#000000" wireframe transparent opacity={0.8} />
                </mesh>
                
                {/* Gripper Fingers */}
                <mesh position={[0.2, 0.3, 0]}>
                  <boxGeometry args={[0.05, 0.4, 0.1]} />
                  <meshStandardMaterial color="#000000" wireframe transparent opacity={0.8} />
                </mesh>
                <mesh position={[-0.2, 0.3, 0]}>
                  <boxGeometry args={[0.05, 0.4, 0.1]} />
                  <meshStandardMaterial color="#000000" wireframe transparent opacity={0.8} />
                </mesh>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default RoboticArm;