export interface NewsArticle {
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    source: {
        name: string;
    };
    publishedAt: string;
}

interface GNewsArticle {
    title: string;
    description: string;
    url: string;
    image: string | null;
    source: {
        name: string;
    };
    publishedAt: string;
}

interface GNewsResponse {
    totalArticles: number;
    articles: GNewsArticle[];
}

export async function fetchNews(category: "science" | "technology"): Promise<NewsArticle[]> {
    const apiKey = process.env.GNEWS_API_KEY;

    if (!apiKey) {
        console.error("GNEWS_API_KEY is not set");
        return [];
    }

    try {
        const response = await fetch(
            `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&max=12&apikey=${apiKey}`,
            { next: { revalidate: 3600 } } // Cache for 1 hour
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch news: ${response.status}`);
        }

        const data: GNewsResponse = await response.json();

        // Transform to our standard format
        return data.articles
            .filter((article) => article.title && article.description)
            .map((article) => ({
                title: article.title,
                description: article.description,
                url: article.url,
                urlToImage: article.image,
                source: article.source,
                publishedAt: article.publishedAt,
            }));
    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
}