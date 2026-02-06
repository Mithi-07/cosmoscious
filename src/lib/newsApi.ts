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

export interface NewsResponse {
    articles: NewsArticle[];
    totalResults: number;
    status: string;
}

export async function fetchNews(category: "science" | "technology"): Promise<NewsArticle[]> {
    const apiKey = process.env.NEWS_API_KEY;

    if (!apiKey) {
        console.error("NEWS_API_KEY is not set");
        return [];
    }

    try {
        const response = await fetch(
            `https://newsapi.org/v2/top-headlines?category=${category}&language=en&pageSize=12&apiKey=${apiKey}`,
            { next: { revalidate: 3600 } } // Cache for 1 hour
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch news: ${response.status}`);
        }

        const data: NewsResponse = await response.json();
        return data.articles.filter(article => article.title && article.description);
    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
}