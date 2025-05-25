import { Principle } from "@/types";

const principlesData: Principle[] = [
  {
    number: 1,
    title: "Decentralized",
    slug: "decentralized",
    summary: "Put control in users' hands — not platforms.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=600&h=400",
    content: `
Decentralization transforms users from passive participants into active custodians of their digital lives. Interfaces should respect that by enabling users to manage their data and access without relying on centralized gatekeepers.

### Example:
Signing into a dApp with a wallet, then choosing exactly what on-chain data to share.

### Case in Practice:
Uniswap lets you swap tokens using just a wallet — no account, no platform ownership of your assets. The app is just a window to the protocol.

### Design Tip:
Start with progressive decentralization. Use centralized elements to reduce friction early, but design a clear path to hand over control to users.
`,
    metadata: {
      keywords: ["decentralized design", "user control", "Web3 autonomy", "self-custody", "wallet integration", "progressive decentralization"],
      description: "Learn how to design decentralized Web3 interfaces that put control in users' hands, not platforms. Discover progressive decentralization strategies and wallet integration best practices.",
      twitterDescription: "Put control in users' hands — not platforms. Learn decentralized Web3 design principles with real examples from Uniswap and more."
    }
  },
  {
    number: 2,
    title: "Empowering",
    slug: "empowering",
    summary: "Give users meaningful control — and the knowledge to use it.",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&w=600&h=400",
    content: `
Web3 shifts ownership to the user, but that comes with responsibility. A good interface gives people clarity, options, and confidence — whether managing assets, permissions, or identity.

### Example:
Clear, plain-language permission screens before signing a transaction.

### Case in Practice:
Rainbow Wallet translates contract calls into real human actions, so users aren't just clicking "approve" blindly.

### Design Tip:
Not everyone wants full control. Offer role-based flows — e.g. beginner, advanced — and add protective layers like recovery options without taking away autonomy.
`,
    metadata: {
      keywords: ["user empowerment", "Web3 education", "transaction clarity", "permission design", "role-based UX", "wallet UX"],
      description: "Design empowering Web3 interfaces that give users meaningful control and knowledge. Learn from Rainbow Wallet's approach to clear transaction explanations.",
      twitterDescription: "Give users meaningful control — and the knowledge to use it. See how Rainbow Wallet empowers users with clear transaction explanations."
    }
  },
  {
    number: 3,
    title: "Transparent",
    slug: "transparent",
    summary: "Show what's happening — clearly and consistently.",
    image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?auto=format&fit=crop&w=600&h=400",
    content: `
Blockchain is open by nature, but that doesn't mean users understand it. Good design makes transaction flows, fees, and risks visible and understandable.

### Example:
A pre-transaction screen that shows gas fees, smart contract actions, and the target address — in plain language.

### Case in Practice:
Etherscan does this well: it breaks down every transaction so anyone can see exactly what happened, even if they're not technical.

### Design Tip:
Use progressive disclosure. Show essentials by default, then let users dive deeper if they want. Avoid overwhelming them upfront.
`,
    metadata: {
      keywords: ["transparency design", "transaction clarity", "gas fee display", "progressive disclosure", "blockchain explorer UX", "smart contract interaction"],
      description: "Create transparent Web3 interfaces that clearly show transaction flows, fees, and risks. Learn from Etherscan's approach to making blockchain data understandable.",
      twitterDescription: "Show what's happening — clearly and consistently. Learn how Etherscan makes complex blockchain data transparent and understandable."
    }
  },
  {
    number: 4,
    title: "Secure",
    slug: "secure",
    summary: "Make safe choices the default — without killing UX.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=600&h=400",
    content: `
Web3 users interact directly with contracts, wallets, and money. Design must prevent mistakes, not just warn about them after the fact.

### Example:
Use strong visual cues (color, icons) to flag high-risk actions and ask for extra confirmation.

### Case in Practice:
Ledger requires you to verify an address both in-app and on-device. It's slow — and that's the point.

### Design Tip:
Don't overdo alerts. Calibrate by risk level: mild nudge for small transfers, serious friction for dangerous actions.
`,
    metadata: {
      keywords: ["Web3 security", "secure design patterns", "risk prevention", "hardware wallet UX", "transaction safety", "security UX"],
      description: "Design secure Web3 interfaces that make safe choices the default without killing UX. Learn from Ledger's approach to transaction verification and risk management.",
      twitterDescription: "Make safe choices the default — without killing UX. See how Ledger balances security and usability in Web3 design."
    }
  },
  {
    number: 5,
    title: "Trustworthy",
    slug: "trustworthy",
    summary: "Trust is earned through clarity, consistency, and honest UI.",
    image: "https://images.unsplash.com/photo-1521790361543-f645cf042ec4?auto=format&fit=crop&w=600&h=400",
    content: `
In Web3, there's no brand middleman — the interface *is* the trust layer. That means it needs to be honest about what's happening and predictable in how it behaves.

### Example:
Show contract metadata, audit status, and simulate transaction results before signing.

### Case in Practice:
ENS makes domain registration feel safe by showing every step, status, and potential risk clearly — even for high-value domains.

### Design Tip:
Add trust signals: verification badges, contract previews, and readable labels. A secure product that *feels* sketchy won't earn user trust.
`,
    metadata: {
      keywords: ["trustworthy design", "trust signals", "contract verification", "audit status", "ENS UX", "Web3 credibility"],
      description: "Build trustworthy Web3 interfaces through clarity, consistency, and honest UI. Learn from ENS's approach to transparent domain registration and trust building.",
      twitterDescription: "Trust is earned through clarity, consistency, and honest UI. See how ENS builds trust through transparent domain registration processes."
    }
  },
  {
    number: 6,
    title: "Accessible",
    slug: "accessible",
    summary: "Make it simple for everyone — not just early adopters.",
    image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&w=600&h=400",
    content: `
Web3 is complex under the hood, but users shouldn't need to understand crypto to use it. Design should lower the learning curve and remove barriers.

### Example:
Offer plain-language onboarding, hide complex jargon, and support accessibility standards.

### Case in Practice:
Argent removed seed phrases and replaced them with social recovery — a huge accessibility win for mainstream users.

### Design Tip:
Design in layers. Start simple, and let users unlock complexity as they grow.
`,
    metadata: {
      keywords: ["Web3 accessibility", "inclusive design", "social recovery", "onboarding UX", "mainstream adoption", "crypto simplification"],
      description: "Design accessible Web3 interfaces for everyone, not just early adopters. Learn from Argent's social recovery approach and inclusive design strategies.",
      twitterDescription: "Make it simple for everyone — not just early adopters. See how Argent revolutionized wallet accessibility with social recovery."
    }
  },
  {
    number: 7,
    title: "Inclusive",
    slug: "inclusive",
    summary: "Build for everyone, not just \"crypto-native\" users.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&h=400",
    content: `
Inclusivity means supporting different backgrounds, cultures, devices, and levels of technical experience. Design should welcome people, not gatekeep.

### Example:
Offer multiple languages, respect cultural metaphors, and test with non-technical users.

### Case in Practice:
Crypto.com and Worldcoin localize their apps for dozens of markets, adjusting flows to match regional norms.

### Design Tip:
Don't just design for yourself. Create personas across cultures and experience levels — then test your product with them.
`,
    metadata: {
      keywords: ["inclusive design", "Web3 localization", "cultural design", "global accessibility", "diverse user testing", "international UX"],
      description: "Create inclusive Web3 interfaces for diverse global audiences. Learn from Crypto.com and Worldcoin's localization strategies and cultural design approaches.",
      twitterDescription: "Build for everyone, not just 'crypto-native' users. See how Crypto.com and Worldcoin design for global, diverse audiences."
    }
  },
  {
    number: 8,
    title: "Open",
    slug: "open",
    summary: "Openness drives collaboration, community, and innovation.",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&w=600&h=400",
    content: `
Web3 thrives on open standards, shared protocols, and community-driven development. Your design should reflect and support that.

### Example:
Make your design system public, let the community suggest improvements, and build for composability.

### Case in Practice:
MakerDAO and Lido publish their components and API docs, so other apps can build on top without friction.

### Design Tip:
Use open standards, shared UI patterns, and cross-app consistency. Don't trap users in your system — empower them to move freely.
`,
    metadata: {
      keywords: ["open design", "design systems", "composability", "open source UX", "community-driven design", "interoperability"],
      description: "Design open Web3 interfaces that drive collaboration and innovation. Learn from MakerDAO and Lido's approach to open design systems and composability.",
      twitterDescription: "Openness drives collaboration, community, and innovation. See how MakerDAO and Lido embrace open design for better composability."
    }
  },
  {
    number: 9,
    title: "Impactful",
    slug: "impactful",
    summary: "Design with purpose — tech is not neutral.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&h=400",
    content: `
Web3 design should strive to widen access, reduce bias, and build systems that serve more than just the loudest voices.

### Example:
Clear DAO interfaces that allow anyone — not just developers — to participate in governance.

### Case in Practice:
Gitcoin's quadratic funding UI helps everyday users support public goods without needing to understand the math behind it.

### Design Tip:
Measure impact — not just usage. Who benefits from your design? Who's left out?
`,
    metadata: {
      keywords: ["impactful design", "DAO governance UX", "quadratic funding", "public goods", "inclusive governance", "social impact design"],
      description: "Create impactful Web3 interfaces that serve diverse communities. Learn from Gitcoin's approach to making quadratic funding accessible and inclusive governance design.",
      twitterDescription: "Design with purpose — tech is not neutral. See how Gitcoin makes complex funding mechanisms accessible to everyday users."
    }
  },
  {
    number: 10,
    title: "Future-proof",
    slug: "future-proof",
    summary: "Design for change — not just for now.",
    image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=600&h=400",
    content: `
Web3 is evolving fast. Your design should be resilient, flexible, and able to adapt as protocols, wallets, and user expectations shift.

### Example:
Use modular layouts and protocol-agnostic interfaces that don't break when new chains or standards emerge.

### Case in Practice:
MetaMask scaled from a single-chain Ethereum wallet to a multichain experience with minimal UI disruption.

### Design Tip:
Separate user goals from technical implementation. Keep the UX stable, even as the backend changes.
`,
    metadata: {
      keywords: ["future-proof design", "modular design", "multichain UX", "protocol-agnostic design", "scalable interfaces", "adaptive design"],
      description: "Build future-proof Web3 interfaces that adapt to rapid technological change. Learn from MetaMask's evolution from single-chain to multichain design.",
      twitterDescription: "Design for change — not just for now. See how MetaMask evolved from single-chain to multichain without breaking the user experience."
    }
  }
];

export const getAllPrinciples = (): Principle[] => {
  return principlesData;
};

export const getPrincipleBySlug = (slug: string): Principle | undefined => {
  return principlesData.find(principle => principle.slug === slug);
};

export const getPrincipleByNumber = (number: number): Principle | undefined => {
  return principlesData.find(principle => principle.number === number);
};
