import { useRoute, Link, useLocation } from "wouter";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useEffect } from "react";
import { getPrincipleBySlug, getPrincipleByNumber, getAllPrinciples } from "@/lib/principles";
import { renderMarkdown } from "@/utils/markdownUtils";
import { generatePrincipleMetadata, updatePageMetadata } from "@/utils/metadataUtils";
import AnimatedLine from "@/components/AnimatedLine";

export default function PrincipleDetail() {
  const [match, params] = useRoute("/principles/:slug");
  const slug = params?.slug || "";
  const [, setLocation] = useLocation();
  
  const principle = useMemo(() => getPrincipleBySlug(slug), [slug]);
  const allPrinciples = useMemo(() => getAllPrinciples(), []);
  
  // SEO: Update metadata for each principle page
  useEffect(() => {
    if (principle) {
      const metadata = generatePrincipleMetadata(principle);
      updatePageMetadata(metadata);
    }
  }, [principle]);

  // Add keyboard event listener for arrow keys
  useEffect(() => {
    // Define navigation function inside useEffect to avoid dependency issues
    const navigateToPrinciple = (direction: "next" | "previous") => {
      if (!principle) return;
      
      const currentNumber = principle.number;
      let targetNumber: number;
      
      if (direction === "next") {
        targetNumber = currentNumber === 10 ? 1 : currentNumber + 1;
      } else {
        targetNumber = currentNumber === 1 ? 10 : currentNumber - 1;
      }
      
      const targetPrinciple = getPrincipleByNumber(targetNumber);
      if (targetPrinciple) {
        setLocation(`/principles/${targetPrinciple.slug}`);
      }
    };
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        navigateToPrinciple("next");
      } else if (event.key === "ArrowLeft") {
        navigateToPrinciple("previous");
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [principle, setLocation]);
  
  if (!principle) {
    return (
      <div className="container py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Principle Not Found</h2>
          <p className="mt-4 mb-8">The principle you're looking for doesn't exist or has been moved.</p>
          <Link href="/principles" className="btn btn-primary">
            View All Principles
          </Link>
        </div>
      </div>
    );
  }
  
  const alternateBackground = "";
  
  // Get previous and next principles
  const prevPrinciple = getPrincipleByNumber(principle.number === 1 ? 10 : principle.number - 1);
  const nextPrinciple = getPrincipleByNumber(principle.number === 10 ? 1 : principle.number + 1);
  
  return (
    <article className="min-h-screen bg-background flex flex-col relative">
      {/* Full-screen animated line background */}
      <AnimatedLine principleNumber={principle.number} />
      
      <div className="container flex-1 relative z-10">
        <div className="max-w-4xl mx-auto pt-16">
          {/* Principle number in top right */}
          <div className="flex justify-end mb-4">
            <span className="text-9xl font-bold text-accent opacity-50 font-serif" aria-label={`Principle ${principle.number}`}>
              {principle.number}
            </span>
          </div>

          {/* Main heading */}
          <header className="mb-16">
            <p className="text-xl md:text-3xl text-secondary font-serif">Good design for Web3</p>
            <h1 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-primary font-serif leading-none mb-8">
              is {principle.title.toLowerCase()}
            </h1>
            <h2 className="text-xl md:text-xl lg:text-2xl text-secondary max-w-2xl font-sans font-normal text-primary">{principle.summary}</h2>
          </header>
        </div>
      </div>

      <div className="container flex-1 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <main className="mb-20">
            {/* Main description paragraph */}
            <section className="mb-16">
              <p className="text-base md:text-lg text-secondary leading-relaxed max-w-3xl">
                {principle.content.split('\n\n')[0].trim()}
              </p>
            </section>
            
            {/* Two column layout for desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left column */}
              <div className="space-y-12">
                {/* Example section */}
                <section>
                  <h3 className="text-2xl lg:text-3xl font-serif text-primary mb-6">Example</h3>
                  <p className="text-base md:text-lg text-secondary leading-relaxed">
                    {principle.content.split('### Example:')[1]?.split('### Case in Practice:')[0]?.trim() || ''}
                  </p>
                </section>
                
                {/* Case in Practice section */}
                <section>
                  <h3 className="text-2xl lg:text-3xl font-serif text-primary mb-6">Applied</h3>
                  <p className="text-base md:text-lg text-secondary leading-relaxed">
                    {principle.content.split('### Case in Practice:')[1]?.split('### Design Tip:')[0]?.trim() || ''}
                  </p>
                </section>
              </div>
              
              {/* Right column */}
              <div>
                {/* Design Tip section */}
                <section>
                  <h3 className="text-2xl lg:text-3xl font-serif text-primary mb-6">Design Tip:</h3>
                  <p className="text-base md:text-lg text-secondary leading-relaxed">
                    {principle.content.split('### Design Tip:')[1]?.trim() || ''}
                  </p>
                </section>
              </div>
            </div>
          </main>
          
          {/* Navigation between principles */}
          <nav className="flex items-center justify-between mt-12 border-t border-muted pt-6" aria-label="Principle navigation">
            {prevPrinciple && (
              <Link 
                href={`/principles/${prevPrinciple.slug}`}
                className="inline-flex items-center text-sm font-medium text-secondary hover:text-primary transition-colors"
                aria-label={`Previous principle: ${prevPrinciple.title}`}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous: {prevPrinciple.title}
              </Link>
            )}
            
            <div className="text-sm text-muted-foreground">
              Use ← → arrow keys to navigate
            </div>
            
            {nextPrinciple && (
              <Link 
                href={`/principles/${nextPrinciple.slug}`}
                className="inline-flex items-center text-sm font-medium text-secondary hover:text-primary transition-colors"
                aria-label={`Next principle: ${nextPrinciple.title}`}
              >
                Next: {nextPrinciple.title}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            )}
          </nav>
        </div>
      </div>
    </article>
  );
}
