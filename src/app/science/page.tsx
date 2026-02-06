import { Rocket } from "lucide-react";
import { fetchNews } from "@/lib/newsApi";
import NewsCard from "@/components/NewsCard";

export const revalidate = 3600; // Revalidate every hour

export default async function SciencePage() {
    const articles = await fetchNews("science");

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                    <Rocket className="w-8 h-8 text-accent-purple" />
                    <h1 className="text-3xl font-bold">Science</h1>
                </div>
                <p className="text-foreground/70 mb-8">
                    Latest discoveries in space, physics, biology, and more.
                </p>

                {articles.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.map((article, index) => (
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
                ) : (
                    <div className="text-center py-12">
                        <p className="text-foreground/50">No articles available at the moment.</p>
                    </div>
                )}
            </div>
        </div>
    );
}