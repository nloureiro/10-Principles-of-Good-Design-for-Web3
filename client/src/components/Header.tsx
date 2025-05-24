import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { getAllPrinciples } from "@/lib/principles";

export default function Header() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const principles = getAllPrinciples();
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Prevent body scroll when menu is open
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };
  
  const isActive = (path: string) => {
    return location === path ? "text-secondary font-medium" : "";
  };
  
  return (
    <header className="fixed top-0 right-0 z-50 p-4">
      {/* Hamburger Menu Button */}
      <button 
        type="button" 
        className="z-50 inline-flex items-center justify-center p-2 text-primary bg-primary/10 rounded-full hover:bg-primary/20 transition-colors" 
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
        {menuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Fullscreen Menu */}
      <div 
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-opacity duration-300 bg-background/95 backdrop-blur-sm ${
          menuOpen
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button inside the menu */}
        <button 
          type="button" 
          className="absolute top-4 right-4 p-2 text-primary bg-primary/10 rounded-full hover:bg-primary/20 transition-colors" 
          onClick={closeMenu}
        >
          <span className="sr-only">Close menu</span>
          <X className="w-6 h-6" />
        </button>
        
        <div className="container flex flex-col items-center justify-between h-full py-16">
          {/* Principles Links - Centered */}
          <div className="flex-grow flex flex-col items-center justify-center w-full">
            <h2 className="mb-10 text-2xl font-bold text-primary font-serif">Principles</h2>
            <nav className="flex flex-col items-center space-y-5 text-center">
              {principles.map(principle => (
                <Link 
                  key={principle.slug}
                  href={`/principles/${principle.slug}`} 
                  className={`text-lg transition-colors border-b border-transparent hover:border-primary ${isActive(`/principles/${principle.slug}`)}`}
                  onClick={closeMenu}
                >
                  {principle.number}. {principle.title}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Bottom Links - Home, All Principles & About */}
          <div className="w-full">
            <div className="flex flex-col items-center">
              <div className="flex justify-center space-x-10 pt-8 mb-8 border-t border-primary/10">
                <Link 
                  href="/" 
                  className={`text-lg transition-colors border-b border-transparent hover:border-primary ${isActive("/")}`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link 
                  href="/all" 
                  className={`text-lg transition-colors border-b border-transparent hover:border-primary ${isActive("/all")}`}
                  onClick={closeMenu}
                >
                  All Principles
                </Link>
                <Link 
                  href="/about" 
                  className={`text-lg transition-colors border-b border-transparent hover:border-primary ${isActive("/about")}`}
                  onClick={closeMenu}
                >
                  About
                </Link>
              </div>
              
              {/* Copyright notice */}
              <p className="text-xs text-center text-slate-500 max-w-md px-4">
                © {new Date().getFullYear()} Web3 Design Principles. These principles are open-source and available for use under the CC BY-SA 4.0 license.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}