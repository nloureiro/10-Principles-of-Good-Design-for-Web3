import { Link } from "wouter";
import { Principle } from "@/types";

interface PrincipleCardProps {
  principle: Principle;
}

export default function PrincipleCard({ principle }: PrincipleCardProps) {
  return (
    <Link href={`/principles/${principle.slug}`} className="principle-card">
      <img 
        src={principle.image} 
        alt={`${principle.title} concept`} 
        className="object-cover w-full h-48"
      />
      <div className="p-6">
        <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-primary">
          Principle {principle.number}
        </span>
        <h3 className="mb-2 text-xl font-bold font-serif text-primary">{principle.title}</h3>
        <p className="text-primary/80">{principle.summary}</p>
      </div>
    </Link>
  );
}
