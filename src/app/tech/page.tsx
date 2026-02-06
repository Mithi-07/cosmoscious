import { Cpu } from "lucide-react";

export default function TechPage() {
    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <Cpu className="w-8 h-8 text-accent-cyan" />
                    <h1 className="text-3xl font-bold">Technology</h1>
                </div>
                <p className="text-foreground/70 mb-8">
                    AI, semiconductors, startups, and cutting-edge innovations.
                </p>

                {/* News grid will go here in Phase 3 */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 bg-card-bg border border-card-border rounded-xl">
                        <p className="text-foreground/50">News cards coming in Phase 3...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}