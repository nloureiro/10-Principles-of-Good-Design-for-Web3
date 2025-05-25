import { useEffect, useRef } from "react";

interface AnimatedLineProps {
  className?: string;
  principleNumber: number;
}

// Function to generate unique path for each principle using full viewport height
const generatePrinciplePath = (principleNumber: number): string => {
  const paths = {
    // Decentralized: Sophisticated network pattern with horizontal lines, verticals, and arrow-like flows
    1: "M0 360 L1340 360 C1345 360, 1350 355, 1350 350 L1350 15 C1350 8, 1360 6, 1365 12 L1470 143 C1473 147, 1470 150, 1465 150 L1410 150 C1405 150, 1400 155, 1400 160 L1400 563 C1400 570, 1410 572, 1413 567 L1470 435 C1472 432, 1470 428, 1465 428 L1445 428 C1440 428, 1435 425, 1435 420 L1435 368 C1435 365, 1440 360, 1445 360 L1920 360",
    
    // Empowering: Lightning bolt pattern using exact path from user's SVG
    2: "M0 407H950L1184.13 1.46924H1464L1344 173H1436L1252 407H1416L828 781L1234.27 97.6154H1476H1564H1908",
    
    // Transparent: Clear sight lines with layered glass-like structure showing progressive disclosure
    3: "M-10 273.002H842M842 273.002L1050 65.0018M842 273.002L1050 481.002L1258 273.002L1050 65.0018M1050 65.0018L1111 1.50244L1388 273.002L1180 481.002L941 242.002L1180 1.50244L1574 379.5H1918",
    
    // Secure: Key shape representing access control, protection, and security
    4: "M0 261H700V1H1004V233H1092L1142 183L1189 233L1247.52 200.517L1299 233L1335 200.517L1443 233L1538 200.517L1591.01 308.955L1518.29 381.676H1004V593H700V337H1928",
    
    // Trustworthy: Solid, reliable foundation building upward with consistent patterns
    5: "M0 227H1256V1H1000V347H1386V99H1124V447H1930",
    
    // Accessible: Multiple entry points with ramps and gentle slopes for everyone
    6: "M0 270.783H976V154.783H1318V122.783H1270V0.783203H1388V122.783H1348V154.783V360.783L1270 495.883H1182L1270 343.463V222.783H1136V174.783H1922",
    
    // Inclusive: Multiple parallel paths for different backgrounds converging and diverging
    7: "M0 189H1396V255H1272V123H1426V287H1226V85H1476V327H1182V35H1514V365H1140V1H1870",
    
    // Open: Connecting bridges and collaborative junction points with shared pathways
    8: "M0 1H1476L1676 147H146L346 53H1880",
    
    // Impactful: Strong directional force with focused energy and purposeful momentum
    9: "M0 463H886L938 1V729L1010 1L1036 729L1064 1L1136 729L1164 1L1236 791L1392 463H1866",
    
    // Future-proof: Modular adaptable structure with flexible joints and expandable framework
    10: "M0 209H644L670 183L724.429 277.273L810.535 128.133L921.348 320.067L1072.31 58.5999L1254.89 374.839L1470.18 1.94727L1696.69 394.289L1812.51 193.688H1906"
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
    <div className="absolute top-16 left-0 right-0 h-[500px] pointer-events-none z-0">
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