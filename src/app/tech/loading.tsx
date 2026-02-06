export default function Loading() {
    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="animate-pulse">
                    <div className="h-10 w-48 bg-cosmic-700 rounded mb-8" />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-card-bg border border-card-border rounded-xl overflow-hidden">
                                <div className="h-48 bg-cosmic-700" />
                                <div className="p-5 space-y-3">
                                    <div className="h-4 w-20 bg-cosmic-700 rounded" />
                                    <div className="h-6 w-full bg-cosmic-700 rounded" />
                                    <div className="h-4 w-3/4 bg-cosmic-700 rounded" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}