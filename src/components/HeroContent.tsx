import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';

export const HeroContent = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
        }
      )
      .fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.6'
      )
      .fromTo(
        ctaRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.4'
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1
          ref={titleRef}
          className="text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight"
        >
          <span className="text-gradient-gold">Luxury</span>
          <br />
          <span className="text-foreground">Financial Control</span>
        </h1>
        
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed"
        >
          Experience the pinnacle of expense tracking with our premium platform.
          Elegant insights, powerful analytics, and sophisticated wealth management.
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            size="lg"
            className="glass-card px-8 py-6 text-base font-light tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shimmer"
          >
            Start Your Journey
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="glass-card px-8 py-6 text-base font-light tracking-wide border-primary/20 hover:border-primary/40 hover:bg-primary/5 hover:scale-105 transition-all duration-300"
          >
            Explore Features
          </Button>
        </div>
      </div>
    </div>
  );
};
