import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

/**
 * A component to display a single GLTF model without animations.
 */
const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} />;
};

/**
 * Renders a stationary 3D model within its own scene.
 * @param {string} modelPath - The path to the .glb file in the /public folder.
 */
export default function StaticModel({ modelPath }) {
  return (
    <section className="three-canvas" style={{ height: '50vh' }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model modelPath={modelPath} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </section>
  );
}