import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Character = ({ animationName }) => {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/character.glb'); // Place file in public/models/
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && animationName) {
      Object.values(actions).forEach((action) => action.stop());
      actions[animationName]?.reset().fadeIn(0.5).play();
    }
  }, [animationName, actions]);

  return <primitive ref={group} object={scene} scale={1.5} />;
};

export default function ThreeScene() {
  const [animation, setAnimation] = React.useState('Idle'); // Replace with actual animation name if needed

  return (
    <div className="three-wrapper">
      {/* 🔘 Button Section */}
      <section className="three-controls">
        <button onClick={() => setAnimation('Armature|mixamo.com|Layer0')}>RUN</button>
      </section>

      {/* 🧊 Canvas Section */}
      <section className="three-canvas">
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 5]} />
          <Character animationName={animation} />
          <OrbitControls />
        </Canvas>
      </section>
    </div>
  );
}
