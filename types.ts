// Fix: Added React import to resolve the "Cannot find namespace 'React'" error for React.ReactNode
import React from 'react';

export interface ParticleProps {
  count?: number;
}

export interface ArmJointProps {
  rotation?: [number, number, number];
  position?: [number, number, number];
  children?: React.ReactNode;
}