import { Telescope, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getUpcomingEvents, categoryInfo } from "@/data/spaceEvents";

export default function Home() {
  const upcomingEvents = getUpcomingEvents(new Date(), 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString + "T00:00:00").toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-900 via-cosmic-800 to-cosmic-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--accent-cyan)_0%,_transparent_50%)] opacity-15" />

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-cyan rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent-blue rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-accent-purple rounded-full animate-pulse delay-700" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image
              src="/logo.png"
              alt="Cosmoscious"
              width={48}
              height={48}
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple bg-clip-text text-transparent">
              Explore the Universe
            </span>
            <br />
            <span className="text-foreground">of Discovery</span>
          </h1>

          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-10">
            Your guide to astronomical events, eclipses, meteor showers, and cosmic discoveries.
            Never miss a skygazing moment.
          </p>

          <Link
            href="/calendar"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-cyan hover:bg-accent-cyan/80 text-cosmic-900 font-semibold rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent-cyan/25"
          >
            <Telescope className="w-5 h-5" />
            Explore Space Calendar
          </Link>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cosmic-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Telescope className="w-6 h-6 text-accent-cyan" />
              <h2 className="text-2xl font-bold">Upcoming Events</h2>
            </div>
            <Link
              href="/calendar"
              className="flex items-center gap-1 text-accent-cyan hover:gap-2 transition-all font-medium"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => {
              const cat = categoryInfo[event.category];
              return (
                <Link
                  key={event.id}
                  href="/calendar"
                  className="group block bg-card-bg border border-card-border rounded-xl p-6 transition-all hover:scale-[1.02] hover:border-accent-cyan/50"
                >
                  <span className={`text-xs font-medium px-3 py-1 rounded-full bg-${cat.color}/20 text-${cat.color}`}>
                    {cat.emoji} {cat.label}
                  </span>
                  <h3 className="font-bold text-lg mt-3 mb-2 group-hover:text-white transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-accent-cyan mb-2">
                    📅 {formatDate(event.date)}
                  </p>
                  <p className="text-foreground/60 text-sm line-clamp-3">
                    {event.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent-cyan/10 via-accent-blue/10 to-accent-purple/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Follow Us Everywhere
          </h2>
          <p className="text-foreground/70 mb-8">
            Get daily science facts, tech updates, and cosmic discoveries across all platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com/cosmos.cious"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple text-white font-semibold rounded-xl transition-all hover:scale-105 hover:shadow-lg"
            >
              Instagram
            </a>
            <a
              href="https://x.com/cosmoscious"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cosmic-700 hover:bg-cosmic-600 text-foreground font-semibold rounded-xl border border-card-border transition-all hover:scale-105"
            >
              X (Twitter)
            </a>
            <a
              href="https://in.pinterest.com/cosmoscious/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cosmic-700 hover:bg-cosmic-600 text-foreground font-semibold rounded-xl border border-card-border transition-all hover:scale-105"
            >
              Pinterest
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}