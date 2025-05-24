import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <div style={{ minHeight: "100vh" }}>
      {children}
    </div>
  );
}