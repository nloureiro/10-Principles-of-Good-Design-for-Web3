import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section className="py-12 md:py-24 lg:py-32 min-h-screen bg-background flex items-center">
      <div className="container">
        <div className="relative">
          {/* Large "O" in the background */}
          <div className="absolute top-0 right-0 text-[20rem] leading-none text-primary opacity-20 font-serif hidden lg:block">
            O
          </div>
          
          <div className="max-w-4xl relative">
            {/* Title */}
            <h1 className="home-title mb-12">
              10 Principles of<br />
              Good Design<br />
              for Web3
            </h1>
            
            {/* Description text */}
            <p className="home-subtitle mb-24">
              Guiding principles for thoughtful design in the evolving Web3 landscape. Inspired by Dieter Rams' famous "Good design is..." statements, adapted for blockchain-based digital experiences.
            </p>
            
            {/* Start the journey link */}
            <Link href="/principles/decentralized" className="journey-link group">
              <span className="mr-2">Start the journey</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
