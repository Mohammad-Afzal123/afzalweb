import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const mountRef = useRef(null);
  const hasInitializedRef = useRef(false); // 🛑 Prevent double run

  useEffect(() => {
    if (hasInitializedRef.current) return; // ✅ Block second run in dev
    hasInitializedRef.current = true;

    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x007bff, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: '400px', border: '1px solid #ccc' }}
    ></div>
  );
};

export default ThreeScene;
