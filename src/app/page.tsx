import { Rocket, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-900 via-cosmic-800 to-cosmic-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--accent-purple)_0%,_transparent_50%)] opacity-20" />

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan bg-clip-text text-transparent">
              Explore the Universe
            </span>
            <br />
            <span className="text-foreground">of Science & Technology</span>
          </h1>

          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-10">
            Your gateway to the latest discoveries, innovations, and breakthroughs
            shaping our understanding of the cosmos and technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/science"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-purple hover:bg-accent-purple/80 text-white font-semibold rounded-lg transition-all hover:scale-105"
            >
              <Rocket className="w-5 h-5" />
              Explore Science
            </Link>
            <Link
              href="/tech"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-cyan hover:bg-accent-cyan/80 text-cosmic-900 font-semibold rounded-lg transition-all hover:scale-105"
            >
              <Cpu className="w-5 h-5" />
              Explore Tech
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sections Placeholder */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Science Card */}
            <div className="group p-8 bg-card-bg border border-card-border rounded-2xl hover:border-accent-purple/50 transition-all">
              <Rocket className="w-10 h-10 text-accent-purple mb-4" />
              <h2 className="text-2xl font-bold mb-3">Science</h2>
              <p className="text-foreground/70 mb-6">
                From distant galaxies to quantum realms — explore the latest scientific discoveries and research.
              </p>
              <Link
                href="/science"
                className="inline-flex items-center gap-2 text-accent-purple group-hover:gap-3 transition-all"
              >
                View Science News <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Tech Card */}
            <div className="group p-8 bg-card-bg border border-card-border rounded-2xl hover:border-accent-cyan/50 transition-all">
              <Cpu className="w-10 h-10 text-accent-cyan mb-4" />
              <h2 className="text-2xl font-bold mb-3">Technology</h2>
              <p className="text-foreground/70 mb-6">
                AI, semiconductors, startups, and innovations driving the future of our digital world.
              </p>
              <Link
                href="/tech"
                className="inline-flex items-center gap-2 text-accent-cyan group-hover:gap-3 transition-all"
              >
                View Tech News <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}