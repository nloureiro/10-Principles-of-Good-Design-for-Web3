import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="py-12 text-white bg-primary">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-bold font-serif">Web3 Design Principles</h3>
            <p className="text-slate-300">A framework for designing thoughtful, ethical, and user-centered Web3 experiences.</p>
          </div>
          <div className="md:text-right">
            <h3 className="mb-4 text-xl font-bold font-serif">Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-slate-300 hover:text-white">Home</Link></li>
              <li><Link href="/principles" className="text-slate-300 hover:text-white">Principles</Link></li>
              <li><Link href="/about" className="text-slate-300 hover:text-white">About</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-slate-700">
          <p className="text-sm text-center text-slate-400">© {new Date().getFullYear()} Web3 Design Principles. These principles are open-source and available for use under the CC BY-SA 4.0 license.</p>
        </div>
      </div>
    </footer>
  );
}
