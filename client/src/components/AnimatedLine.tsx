import { useEffect, useRef } from "react";

interface AnimatedLineProps {
  className?: string;
}

export default function AnimatedLine({ className = "" }: AnimatedLineProps) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const pathLength = path.getTotalLength();
    
    // Set initial state
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;
    
    // Animate the line
    const timer = setTimeout(() => {
      path.style.transition = 'stroke-dashoffset 2s ease-in-out';
      path.style.strokeDashoffset = '0';
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <svg 
      className={`w-full h-32 ${className}`} 
      viewBox="0 0 800 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={pathRef}
        d="M0 80 Q200 20 400 60 T800 40"
        stroke="hsl(var(--accent))"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}