import { useRoute, Link, useLocation } from "wouter";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useEffect } from "react";
import { getPrincipleBySlug, getPrincipleByNumber, getAllPrinciples } from "@/lib/principles";
import { renderMarkdown } from "@/utils/markdownUtils";
import AnimatedLine from "@/components/AnimatedLine";

export default function PrincipleDetail() {
  const [match, params] = useRoute("/principles/:slug");
  const slug = params?.slug || "";
  const [, setLocation] = useLocation();
  
  const principle = useMemo(() => getPrincipleBySlug(slug), [slug]);
  const allPrinciples = useMemo(() => getAllPrinciples(), []);
  
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
    <section className="min-h-screen bg-background flex flex-col relative">
      {/* Full-screen animated line background */}
      <AnimatedLine principleNumber={principle.number} />
      
      <div className="container flex-1 relative z-10">
        <div className="max-w-4xl mx-auto pt-16">
          {/* Principle number in top right */}
          <div className="flex justify-end mb-8">
            <span className="text-6xl font-bold text-accent opacity-50 font-serif">
              {principle.number}
            </span>
          </div>

          {/* Main heading */}
          <div className="mb-16">
            <h3 className="text-xl text-secondary mb-6 font-serif">Good design for Web3</h3>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-primary font-serif leading-none mb-8">
              is {principle.title.toLowerCase()}
            </h1>
            <p className="text-2xl text-secondary max-w-2xl">{principle.summary}</p>
          </div>
        </div>
      </div>

      <div className="container flex-1 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="mb-20">
            <div 
              className="prose prose-xl max-w-none text-secondary [&>h2]:text-primary [&>h2]:font-serif [&>h2]:text-4xl [&>h2]:mb-6 [&>h3]:text-primary [&>h3]:font-serif [&>h3]:text-2xl [&>h3]:mb-4 [&>p]:text-secondary [&>p]:text-lg [&>p]:leading-relaxed [&>p]:mb-6"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(principle.content) }}
            />
          </div>
          
          {/* Navigation between principles */}
          <div className="flex items-center justify-between mt-12 border-t border-muted pt-6">
            {prevPrinciple && (
              <Link 
                href={`/principles/${prevPrinciple.slug}`}
                className="inline-flex items-center text-sm font-medium text-secondary hover:text-primary transition-colors"
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
              >
                Next: {nextPrinciple.title}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
