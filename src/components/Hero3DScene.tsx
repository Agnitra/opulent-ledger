import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingGlassCard = ({ position, rotation, scale }: { position: [number, number, number], rotation?: [number, number, number], scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.15) * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale || 1}>
        <boxGeometry args={[2, 2.8, 0.1]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          resolution={512}
          transmission={0.95}
          roughness={0.15}
          thickness={0.5}
          ior={1.5}
          chromaticAberration={0.06}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.4}
          temporalDistortion={0.1}
          clearcoat={1}
          attenuationDistance={0.5}
          attenuationColor="#d4af37"
          color="#ffffff"
        />
        {/* Metallic edge highlight */}
        <mesh position={[0, 0, 0.051]}>
          <boxGeometry args={[2.05, 2.85, 0.01]} />
          <meshStandardMaterial
            color="#d4af37"
            metalness={0.95}
            roughness={0.1}
            emissive="#d4af37"
            emissiveIntensity={0.3}
          />
        </mesh>
      </mesh>
    </Float>
  );
};

export const FinancialChart = ({ position }: { position: [number, number, number] }) => {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 20; i++) {
      const x = (i / 19) * 3 - 1.5;
      const y = Math.sin(i * 0.5) * 0.5 + Math.random() * 0.2;
      pts.push(new THREE.Vector3(x, y, 0));
    }
    return pts;
  }, []);

  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);
  const tubeGeometry = useMemo(() => new THREE.TubeGeometry(curve, 64, 0.015, 8, false), [curve]);

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.8}>
      <mesh position={position} geometry={tubeGeometry}>
        <meshStandardMaterial
          color="#d4af37"
          metalness={0.9}
          roughness={0.1}
          emissive="#d4af37"
          emissiveIntensity={0.5}
        />
      </mesh>
      {points.map((point, i) => (
        <mesh key={i} position={[position[0] + point.x, position[1] + point.y, position[2]]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.8}
            roughness={0.2}
            emissive="#d4af37"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </Float>
  );
};

export const CreditCardObject = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2 + 0.3;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
      <group position={position} ref={groupRef}>
        {/* Card body */}
        <mesh>
          <boxGeometry args={[3.4, 2.1, 0.15]} />
          <MeshTransmissionMaterial
            backside
            samples={16}
            resolution={512}
            transmission={0.92}
            roughness={0.12}
            thickness={0.4}
            ior={1.5}
            chromaticAberration={0.05}
            anisotropy={0.4}
            clearcoat={1}
            attenuationDistance={0.5}
            attenuationColor="#c0c0c0"
            color="#fafafa"
          />
        </mesh>
        
        {/* Metallic chip */}
        <mesh position={[-1, 0.4, 0.08]}>
          <boxGeometry args={[0.5, 0.4, 0.05]} />
          <meshStandardMaterial
            color="#d4af37"
            metalness={1}
            roughness={0.1}
            emissive="#d4af37"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Card number line */}
        <mesh position={[0, -0.3, 0.08]}>
          <boxGeometry args={[2.5, 0.08, 0.02]} />
          <meshStandardMaterial
            color="#c0c0c0"
            metalness={0.9}
            roughness={0.15}
          />
        </mesh>

        {/* Brand logo placeholder */}
        <mesh position={[1.2, -0.7, 0.08]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial
            color="#d4af37"
            metalness={0.95}
            roughness={0.05}
            emissive="#d4af37"
            emissiveIntensity={0.4}
          />
        </mesh>
      </group>
    </Float>
  );
};

export const AmbientParticles = () => {
  return (
    <>
      <Sparkles
        count={80}
        scale={15}
        size={2}
        speed={0.3}
        opacity={0.4}
        color="#d4af37"
      />
      <Sparkles
        count={40}
        scale={12}
        size={3}
        speed={0.2}
        opacity={0.3}
        color="#c0c0c0"
      />
    </>
  );
};

export const LuxuryLighting = () => {
  return (
    <>
      <ambientLight intensity={0.6} color="#faf8f3" />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        color="#d4af37"
        castShadow
      />
      <directionalLight
        position={[-5, 3, -5]}
        intensity={0.8}
        color="#e8dcc4"
      />
      <pointLight
        position={[0, 2, 2]}
        intensity={1.5}
        color="#f4e4c1"
        distance={10}
        decay={2}
      />
      <spotLight
        position={[0, 5, 0]}
        angle={0.5}
        penumbra={1}
        intensity={1}
        color="#fff5e1"
        castShadow
      />
    </>
  );
};
