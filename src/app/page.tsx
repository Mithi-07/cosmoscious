import { Rocket, Cpu, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { fetchNews } from "@/lib/newsApi";
import NewsCard from "@/components/NewsCard";

export const revalidate = 3600;

export default async function Home() {
  const [scienceNews, techNews] = await Promise.all([
    fetchNews("science"),
    fetchNews("technology"),
  ]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-900 via-cosmic-800 to-cosmic-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--accent-purple)_0%,_transparent_50%)] opacity-20" />

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-purple rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent-cyan rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-accent-pink rounded-full animate-pulse delay-700" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-accent-purple" />
            <span className="text-sm font-medium text-accent-purple uppercase tracking-wider">
              Science & Technology
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan bg-clip-text text-transparent">
              Explore the Universe
            </span>
            <br />
            <span className="text-foreground">of Discovery</span>
          </h1>

          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-10">
            Your gateway to the latest breakthroughs in science and technology.
            Stay curious. Stay informed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/science"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-purple hover:bg-accent-purple/80 text-white font-semibold rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent-purple/25"
            >
              <Rocket className="w-5 h-5" />
              Explore Science
            </Link>
            <Link
              href="/tech"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cosmic-700 hover:bg-cosmic-600 text-foreground font-semibold rounded-xl border border-card-border transition-all hover:scale-105"
            >
              <Cpu className="w-5 h-5" />
              Explore Tech
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Science Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cosmic-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Rocket className="w-6 h-6 text-accent-purple" />
              <h2 className="text-2xl font-bold">Latest in Science</h2>
            </div>
            <Link
              href="/science"
              className="flex items-center gap-1 text-accent-purple hover:gap-2 transition-all font-medium"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scienceNews.slice(0, 3).map((article, index) => (
              <NewsCard
                key={index}
                title={article.title}
                description={article.description}
                url={article.url}
                imageUrl={article.urlToImage}
                source={article.source.name}
                publishedAt={article.publishedAt}
                accentColor="purple"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tech Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Cpu className="w-6 h-6 text-accent-cyan" />
              <h2 className="text-2xl font-bold">Latest in Tech</h2>
            </div>
            <Link
              href="/tech"
              className="flex items-center gap-1 text-accent-cyan hover:gap-2 transition-all font-medium"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techNews.slice(0, 3).map((article, index) => (
              <NewsCard
                key={index}
                title={article.title}
                description={article.description}
                url={article.url}
                imageUrl={article.urlToImage}
                source={article.source.name}
                publishedAt={article.publishedAt}
                accentColor="cyan"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent-purple/10 via-accent-pink/10 to-accent-cyan/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-foreground/70 mb-6">
            Get daily science facts, tech updates, and cosmic discoveries in your feed.
          </p>
          <a
            href="https://instagram.com/cosmos.cious"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-purple via-accent-pink to-accent-cyan text-white font-semibold rounded-xl transition-all hover:scale-105 hover:shadow-lg"
          >
            @cosmos.cious
          </a>
        </div>
      </section>
    </div>
  );
}