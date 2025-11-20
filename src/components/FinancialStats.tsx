import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface StatCardProps {
  label: string;
  value: string;
  trend: string;
  delay?: number;
}

const StatCard = ({ label, value, trend, delay = 0 }: StatCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay,
          ease: 'power3.out',
        }
      );
    }
  }, [delay]);

  return (
    <div ref={cardRef} className="glass-card p-6 shimmer group hover:scale-105 transition-transform duration-300">
      <div className="text-sm text-muted-foreground mb-2 font-light tracking-wide uppercase">
        {label}
      </div>
      <div className="text-3xl font-light mb-1 text-gradient-gold">
        {value}
      </div>
      <div className="text-xs text-primary font-medium flex items-center gap-1">
        <span className="text-lg">↗</span>
        {trend}
      </div>
    </div>
  );
};

export const FinancialStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
      <StatCard
        label="Total Balance"
        value="$284,392"
        trend="+12.5% this month"
        delay={0.2}
      />
      <StatCard
        label="Monthly Spending"
        value="$8,245"
        trend="-3.2% vs last month"
        delay={0.4}
      />
      <StatCard
        label="Investments"
        value="$156,820"
        trend="+18.7% ROI"
        delay={0.6}
      />
    </div>
  );
};
