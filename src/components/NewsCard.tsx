import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface NewsCardProps {
    title: string;
    description: string;
    url: string;
    imageUrl: string | null;
    source: string;
    publishedAt: string;
    accentColor: "purple" | "cyan";
}

export default function NewsCard({
    title,
    description,
    url,
    imageUrl,
    source,
    publishedAt,
    accentColor,
}: NewsCardProps) {
    const accentClasses = {
        purple: "group-hover:border-accent-purple/50",
        cyan: "group-hover:border-accent-cyan/50",
    };

    const badgeClasses = {
        purple: "bg-accent-purple/20 text-accent-purple",
        cyan: "bg-accent-cyan/20 text-accent-cyan",
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block bg-card-bg border border-card-border rounded-xl overflow-hidden transition-all hover:scale-[1.02] ${accentClasses[accentColor]}`}
        >
            {/* Image */}
            <div className="relative h-48 bg-cosmic-700">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-foreground/30">
                        No Image
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Source & Date */}
                <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${badgeClasses[accentColor]}`}>
                        {source}
                    </span>
                    <span className="text-xs text-foreground/50">{formatDate(publishedAt)}</span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-foreground transition-colors">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-foreground/60 text-sm line-clamp-3 mb-4">{description}</p>

                {/* Read More */}
                <div className="flex items-center gap-1 text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">
                    Read Article <ExternalLink className="w-4 h-4" />
                </div>
            </div>
        </a>
    );
}