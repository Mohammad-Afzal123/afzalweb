import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";

/* ================= CHARACTER ================= */

const Character = ({ animationName }) => {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/character.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions || !animationName) return;

    Object.values(actions).forEach((action) => action.stop());
    actions[animationName]?.reset().fadeIn(0.4).play();
  }, [animationName, actions]);

  return <primitive ref={group} object={scene} scale={1.4} />;
};

/* ================= MAIN SCENE ================= */

export default function ThreeScene() {
  const [animation, setAnimation] = useState("Idle");

  return (
    <div className="three-wrapper">
      {/* LEFT: CANVAS */}
      <div className="three-canvas">
        <Canvas camera={{ position: [0, 2.2, 7], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 6, 5]} intensity={1} />
          <Character animationName={animation} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* RIGHT: BUTTON (SAME SIZE AS CANVAS) */}
      <div className="hover-panel">
        <div
          className="hover-card"
          onMouseEnter={() =>
            setAnimation("Armature|mixamo.com|Layer0")
          }
          onMouseLeave={() => setAnimation("Idle")}
        >
          <h2>Run Animation</h2>
          <p>Hover to make the character run</p>
        </div>
      </div>
    </div>
  );
}
