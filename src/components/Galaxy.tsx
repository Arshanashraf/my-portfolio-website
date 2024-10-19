import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const Planet = () => {
  const { scene } = useGLTF('/3dImage/source/planet.glb'); // Replace with your planet model path
  const planetRef = useRef<THREE.Group>(null);

  // Increase the size of the planet
  scene.scale.set(4, 4, 4); // Scale the planet up to make it larger

  // Rotate the planet
  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y -= 0.003; // Spin the planet
    }
  });

  // Position the planet
  return (
    <primitive ref={planetRef} object={scene} position={[0, 2, -5]} /> // Adjust the position as needed
  );
};

const Galaxy = () => {
  return (
    <Canvas  style={{ height: '100vh', width: '100vw' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <Planet />
    </Canvas>
  );
};

export default Galaxy;
