import { Head } from '@inertiajs/react';
import { ReactNode, useEffect, useState } from 'react';
import MainMenu from '@/components/navigation/MainMenu';
import Footer from '@/components/footer/Footer';

interface SiteLayoutProps {
  children: ReactNode;
  title?: string;
}

export default function SiteLayout({ children, title = 'Empuls3' }: SiteLayoutProps) {
  const [particles, setParticles] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    // Create particles
    const newParticles: React.ReactNode[] = [];
    const colors = [
      'rgba(189, 21, 80, 0.4)', // Brand pink
      'rgba(31, 25, 70, 0.4)',  // Brand purple
      'rgba(150, 150, 150, 0.4)' // Gray
    ];
    
    for (let i = 0; i < 60; i++) {
      // Create random starting positions across the entire screen
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      
      // Create random movement direction
      const angle = Math.random() * 360;
      const distance = Math.random() * 60 + 40; // 40-100 units of movement
      
      // Calculate x and y offsets based on angle and distance
      const xOffset = distance * Math.cos(angle * Math.PI / 180);
      const yOffset = distance * Math.sin(angle * Math.PI / 180);
      
      const size = Math.floor(Math.random() * 6) + 4; // 4-10px
      const animationDuration = Math.floor(Math.random() * 8) + 12; // 12-20s
      const delay = Math.random() * 10;
      const colorIndex = Math.floor(Math.random() * colors.length);
      const maxOpacity = 0.25 + Math.random() * 0.15; // 0.25-0.4 opacity
      
      const style = {
        position: 'fixed' as const,
        left: `${startX}%`,
        top: `${startY}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: colors[colorIndex],
        borderRadius: '50%',
        // No box shadow
        animation: `energyPulse ${animationDuration}s ease-in-out ${delay}s infinite`,
        zIndex: 10,
        '--x-offset': `${xOffset}px`,
        '--y-offset': `${yOffset}px`,
        '--max-opacity': maxOpacity,
      } as React.CSSProperties;
      
      newParticles.push(<div key={i} style={style} />);
    }
    
    setParticles(newParticles);
    
    // Add keyframes for energy impulse effect
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes energyPulse {
        0% {
          transform: translate(0, 0) scale(0.8);
          opacity: 0;
        }
        20% {
          transform: translate(var(--x-offset), var(--y-offset)) scale(1.2);
          opacity: var(--max-opacity);
        }
        40% {
          transform: translate(calc(var(--x-offset) * 1.5), calc(var(--y-offset) * 1.5)) scale(1);
          opacity: var(--max-opacity);
        }
        60% {
          transform: translate(calc(var(--x-offset) * 2), calc(var(--y-offset) * 2)) scale(1.1);
          opacity: var(--max-opacity);
        }
        80% {
          transform: translate(calc(var(--x-offset) * 2.5), calc(var(--y-offset) * 2.5)) scale(0.9);
          opacity: var(--max-opacity);
        }
        100% {
          transform: translate(calc(var(--x-offset) * 3), calc(var(--y-offset) * 3)) scale(0.7);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white font-body text-foreground">
      <Head title={title} />
      
      {/* Particles Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
        {particles}
      </div>
      
      {/* Header */}
      <MainMenu />

      {/* Main content */}
      <main className="flex-1 pt-24 relative">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
