import { useEffect, useRef } from "react";

interface AnimatedLineProps {
  className?: string;
  principleNumber: number;
}

// Function to generate unique path for each principle using full viewport height
const generatePrinciplePath = (principleNumber: number): string => {
  const paths = {
    1: "M0 400 C320 200, 480 300, 640 300 C800 300, 960 500, 1280 250 C1600 100, 1760 350, 1920 350",
    2: "M0 350 C320 600, 480 450, 640 450 C800 450, 960 700, 1280 550 C1600 400, 1760 650, 1920 650", 
    3: "M0 650 C320 300, 480 450, 640 450 C800 450, 960 200, 1280 400 C1600 550, 1760 150, 1920 150",
    4: "M0 150 C320 500, 480 650, 640 650 C800 650, 960 400, 1280 600 C1600 750, 1760 500, 1920 500",
    5: "M0 500 C320 250, 480 400, 640 400 C800 400, 960 150, 1280 450 C1600 600, 1760 300, 1920 300",
    6: "M0 300 C320 650, 480 500, 640 500 C800 500, 960 800, 1280 600 C1600 450, 1760 750, 1920 750",
    7: "M0 750 C320 400, 480 250, 640 250 C800 250, 960 500, 1280 300 C1600 150, 1760 100, 1920 100",
    8: "M0 100 C320 450, 480 600, 640 600 C800 600, 960 300, 1280 650 C1600 800, 1760 600, 1920 600",
    9: "M0 600 C320 300, 480 150, 640 150 C800 150, 960 450, 1280 250 C1600 500, 1760 400, 1920 400",
    10: "M0 400 C320 750, 480 600, 640 600 C800 600, 960 250, 1280 500 C1600 300, 1760 400, 1920 400"
  };
  
  return paths[principleNumber as keyof typeof paths] || paths[1];
};

export default function AnimatedLine({ className = "", principleNumber }: AnimatedLineProps) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    // Clear any existing transition first
    path.style.transition = 'none';
    
    // Force a reflow to ensure the new path is rendered
    path.getBoundingClientRect();
    
    const pathLength = path.getTotalLength();
    
    // Set initial state (line hidden)
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;
    
    // Animate the line after a short delay
    const timer = setTimeout(() => {
      path.style.transition = 'stroke-dashoffset 1s ease-in-out';
      path.style.strokeDashoffset = '0';
    }, 100);

    return () => {
      clearTimeout(timer);
      // Reset transition when component unmounts or principle changes
      if (path) {
        path.style.transition = 'none';
      }
    };
  }, [principleNumber]); // Re-animate when principle changes

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <svg 
        className={`w-full h-full ${className}`} 
        viewBox="0 0 1920 800" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d={generatePrinciplePath(principleNumber)}
          stroke="hsl(var(--accent))"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}