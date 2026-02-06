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

interface TheNewsAPIArticle {
    title: string;
    description: string;
    url: string;
    image_url: string | null;
    source: string;
    published_at: string;
}

interface TheNewsAPIResponse {
    data: TheNewsAPIArticle[];
}

export async function fetchNews(category: "science" | "technology"): Promise<NewsArticle[]> {
    const apiKey = process.env.THE_NEWS_API_KEY;

    if (!apiKey) {
        console.error("THE_NEWS_API_KEY is not set");
        return [];
    }

    // TheNewsAPI uses different category names
    const categoryMap = {
        science: "science",
        technology: "tech",
    };

    try {
        const response = await fetch(
            `https://api.thenewsapi.com/v1/news/top?api_token=${apiKey}&categories=${categoryMap[category]}&language=en&limit=12`,
            { next: { revalidate: 3600 } } // Cache for 1 hour
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch news: ${response.status}`);
        }

        const data: TheNewsAPIResponse = await response.json();

        // Transform to our standard format
        return data.data
            .filter((article) => article.title && article.description)
            .map((article) => ({
                title: article.title,
                description: article.description,
                url: article.url,
                urlToImage: article.image_url,
                source: { name: article.source },
                publishedAt: article.published_at,
            }));
    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
}