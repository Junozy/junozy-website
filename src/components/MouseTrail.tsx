import React, { useEffect, useRef } from 'react';

interface TrailParticle {
  x: number;
  y: number;
  opacity: number;
  size: number;
  id: number;
}

const MouseTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<TrailParticle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    let particleId = 0;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTimeRef.current;
      
      if (deltaTime > 16) { // ~60fps
        lastTimeRef.current = currentTime;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Add new particle at mouse position
        particlesRef.current.push({
          x: mouseRef.current.x,
          y: mouseRef.current.y,
          opacity: 1,
          size: 15,
          id: particleId++
        });

        // Update and draw particles
        particlesRef.current = particlesRef.current.filter(particle => {
          particle.opacity -= 0.02;
          particle.size *= 0.98;

          if (particle.opacity <= 0) return false;

          // Create gradient
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size
          );

          // Golden gradient using opacity
          gradient.addColorStop(0, `rgba(251, 191, 36, ${particle.opacity * 0.8})`); // gold-400
          gradient.addColorStop(0.5, `rgba(245, 158, 11, ${particle.opacity * 0.5})`); // gold-500
          gradient.addColorStop(1, `rgba(217, 119, 6, ${particle.opacity * 0.1})`); // gold-600

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();

          return true;
        });

        // Limit particles
        if (particlesRef.current.length > 50) {
          particlesRef.current = particlesRef.current.slice(-50);
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default MouseTrail;
