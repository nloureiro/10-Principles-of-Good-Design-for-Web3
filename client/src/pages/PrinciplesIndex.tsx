import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import PrincipleCard from "@/components/PrincipleCard";
import { getAllPrinciples } from "@/lib/principles";

export default function PrinciplesIndex() {
  const principles = getAllPrinciples();
  const [location, setLocation] = useLocation();
  
  // Scroll to principles section if coming from homepage
  useEffect(() => {
    if (location === "/principles") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  
  return (
    <section id="principles" className="py-16 bg-background">
      <div className="container">
        <h2 className="mb-2 text-3xl font-bold text-center font-serif">The Principles</h2>
        <p className="max-w-2xl mx-auto mb-12 text-center text-foreground/80">
          These 10 principles aim to guide thoughtful design in the evolving Web3 landscape.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
            <PrincipleCard key={principle.slug} principle={principle} />
          ))}
        </div>
      </div>
    </section>
  );
}
