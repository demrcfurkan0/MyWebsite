import { useEffect, useState } from 'react';
import { Shield, Terminal, Lock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Securing systems. Breaking boundaries.';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Status Badge */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Badge 
            className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border border-primary/30 animate-glow-pulse"
          >
            <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
            STATUS: AVAILABLE FOR HIRE
          </Badge>
        </div>

        {/* Terminal-style intro */}
        <div className="terminal-window mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="terminal-header">
            <div className="terminal-dot bg-destructive" />
            <div className="terminal-dot bg-yellow-500" />
            <div className="terminal-dot bg-primary" />
            <span className="ml-3 text-xs text-muted-foreground">~/security-researcher</span>
          </div>
          <div className="p-6 text-left">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Terminal className="w-4 h-4" />
              <span className="text-xs">user@kali:~$</span>
              <span className="text-primary text-xs">whoami</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-glow">
              Furkan <span className="text-primary">Demirci </span>
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-lg md:text-xl text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span>Security Researcher</span>
              <span className="text-primary">|</span>
              <Lock className="w-5 h-5 text-primary" />
              <span>Penetration Tester</span>
            </div>
          </div>
        </div>

        {/* Typing animation tagline */}
        <div 
          className="text-xl md:text-2xl text-muted-foreground mb-12 h-8 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <span className="text-primary font-medium">&gt; </span>
          <span>{displayText}</span>
          <span 
            className={`text-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 0.1s' }}
          >
            █
          </span>
        </div>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          <a 
            href="#projects" 
            className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 border-glow hover:scale-105"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in"
          style={{ animationDelay: '1s' }}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
