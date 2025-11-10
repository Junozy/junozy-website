import React, { useEffect, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  age: number;
}

const MouseTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailPointsRef = useRef<TrailPoint[]>([]);
  const animationRef = useRef<number>();

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
      trailPointsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 0
      });

      // Limit trail length
      if (trailPointsRef.current.length > 30) {
        trailPointsRef.current.shift();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (trailPointsRef.current.length < 2) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      // Age all points
      trailPointsRef.current = trailPointsRef.current.filter(point => {
        point.age += 1;
        return point.age < 30;
      });

      // Draw smooth line through points
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      for (let i = 0; i < trailPointsRef.current.length - 1; i++) {
        const point = trailPointsRef.current[i];
        const nextPoint = trailPointsRef.current[i + 1];
        
        // Calculate opacity based on age
        const opacity = 1 - (point.age / 30);
        
        // Gradient from current point to next
        const gradient = ctx.createLinearGradient(
          point.x, point.y,
          nextPoint.x, nextPoint.y
        );

        const nextOpacity = 1 - (nextPoint.age / 30);
        
        // Golden gradient
        gradient.addColorStop(0, `rgba(251, 191, 36, ${opacity * 0.7})`);
        gradient.addColorStop(1, `rgba(245, 158, 11, ${nextOpacity * 0.7})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3 * opacity;

        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(nextPoint.x, nextPoint.y);
        ctx.stroke();
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
