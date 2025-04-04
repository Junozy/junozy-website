
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  sparkleType: number;
  sparkleTime: number;
  sparkleMax: number;
}

const FloatingElements: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const sparkle1Ref = useRef<HTMLImageElement | null>(null);
  const sparkle2Ref = useRef<HTMLImageElement | null>(null);
  
  useEffect(() => {
    // Preload sparkle images
    const sparkle1 = new Image();
    sparkle1.src = '/lovable-uploads/9157df55-5c0c-4959-babc-1f109426001c.png'; // Hollow sparkle
    sparkle1.onload = () => { sparkle1Ref.current = sparkle1; };
    
    const sparkle2 = new Image();
    sparkle2.src = '/lovable-uploads/5fa604f8-ee76-448d-82f4-f4447881a34d.png'; // Filled sparkle
    sparkle2.onload = () => { sparkle2Ref.current = sparkle2; };
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Create particles
    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor(window.innerWidth / 100); // Fewer particles for better performance
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 25 + 15, // Larger sparkles
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.2,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 0.2,
          sparkleType: Math.random() > 0.7 ? 1 : 0, // Alternate between sparkle types
          sparkleTime: 0,
          sparkleMax: Math.random() * 180 + 60 // Random time until sparkle effect
        });
      }
      
      return particles;
    };
    
    particlesRef.current = createParticles();
    
    // Animation loop
    let animationFrameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        // Skip rendering if images aren't loaded yet
        if (!sparkle1Ref.current || !sparkle2Ref.current) return;
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;
        
        // Update sparkle effect timer
        particle.sparkleTime++;
        if (particle.sparkleTime > particle.sparkleMax) {
          particle.sparkleTime = 0;
          particle.sparkleMax = Math.random() * 180 + 60;
        }
        
        // Calculate sparkle effect
        const isSparkleActive = particle.sparkleTime > particle.sparkleMax - 20;
        const sparkleIntensity = isSparkleActive ? 
          Math.sin((particle.sparkleTime - (particle.sparkleMax - 20)) / 20 * Math.PI) : 0;
        
        // Boundary check
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;
        
        // Draw particle
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation * Math.PI / 180);
        
        // Apply gold color tint
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = particle.opacity + (isSparkleActive ? sparkleIntensity * 0.5 : 0);
        
        // Scale for sparkle effect
        const scale = 1 + (isSparkleActive ? sparkleIntensity * 0.2 : 0);
        ctx.scale(scale, scale);
        
        // Choose sparkle image
        const sparkleImg = particle.sparkleType === 0 ? sparkle1Ref.current : sparkle2Ref.current;
        
        // Draw the sparkle with gold tint
        ctx.filter = 'sepia(1) saturate(5) hue-rotate(35deg)'; // Gold color filter
        ctx.drawImage(sparkleImg, -particle.size/2, -particle.size/2, particle.size, particle.size);
        ctx.filter = 'none';
        
        ctx.restore();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-5 opacity-40"
      aria-hidden="true"
    />
  );
};

export default FloatingElements;
