
import { Canvas ,useFrame} from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three'; // Import THREE types
const Model = () => {
  const { scene } = useGLTF('/3dImage/source/laptop.glb');
  scene.position.set(-0.5, -4, 0);
  const modelRef = useRef<THREE.Group>(null); 

  // Rotate the model on every frame
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y -= 0.01; // Adjust the rotation speed as needed
    }
  });
  return <primitive ref={modelRef} object={scene} />;
};

const ThreeDModel = () => {
  return (
    <Canvas  style={{ height: '90vh', }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model />
      <OrbitControls 
        enableZoom={false} // Disable zooming
        minDistance={0}    // Minimum distance from the model
        maxDistance={5}   // Maximum distance from the model
      />
    </Canvas>
  );
};

export default ThreeDModel;
