import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { FloatingGlassCard, FinancialChart, CreditCardObject, AmbientParticles, LuxuryLighting } from './Hero3DScene';

export const Hero3DCanvas = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        
        <Suspense fallback={null}>
          <LuxuryLighting />
          
          {/* Main glass panels */}
          <FloatingGlassCard position={[-2.5, 0, -1]} rotation={[0, 0.3, 0]} scale={0.9} />
          <FloatingGlassCard position={[2.8, 0.5, -2]} rotation={[0, -0.4, 0]} scale={0.85} />
          <FloatingGlassCard position={[0, -1.5, -3]} rotation={[0, 0.1, 0]} scale={0.75} />
          
          {/* Financial UI elements */}
          <FinancialChart position={[-1.5, 1.2, 1]} />
          <FinancialChart position={[2, -0.8, 0.5]} />
          
          {/* Premium credit card */}
          <CreditCardObject position={[0, 0.3, 2]} />
          
          {/* Atmospheric particles */}
          <AmbientParticles />
          
          {/* Luxury environment */}
          <Environment preset="sunset" />
          
          {/* Soft fog for depth */}
          <fog attach="fog" args={['#faf8f3', 8, 20]} />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};
