import { Hero3DCanvas } from '@/components/Hero3DCanvas';
import { HeroContent } from '@/components/HeroContent';
import { FinancialStats } from '@/components/FinancialStats';

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* 3D Scene Background */}
      <div className="absolute inset-0 w-full h-screen">
        <Hero3DCanvas />
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex items-center justify-center pt-20 pb-12">
          <HeroContent />
        </section>

        {/* Stats Section */}
        <section className="pb-20">
          <FinancialStats />
        </section>
      </div>

      {/* Subtle vignette effect */}
      <div className="fixed inset-0 pointer-events-none bg-radial-gradient from-transparent via-transparent to-background/50" />
    </main>
  );
};

export default Index;
