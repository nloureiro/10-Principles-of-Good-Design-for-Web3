import { Link } from "wouter";
import { getAllPrinciples } from "@/lib/principles";

export default function AllPrinciples() {
  const principles = getAllPrinciples();

  return (
    <section className="min-h-screen bg-background py-16">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary font-serif leading-none mb-8">
              All Principles
            </h1>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              A complete overview of the 10 principles for good Web3 design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle) => (
              <Link
                key={principle.slug}
                href={`/principles/${principle.slug}`}
                className="group block p-8 bg-card border border-muted rounded-lg hover:border-accent transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl font-bold text-accent opacity-70 font-serif">
                    {principle.number}
                  </span>
                  <div className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more →
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-primary font-serif mb-3 group-hover:text-accent transition-colors">
                  {principle.title}
                </h3>
                
                <p className="text-secondary text-base leading-relaxed">
                  {principle.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}