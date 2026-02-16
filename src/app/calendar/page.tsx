"use client";

import { useState } from "react";
import { spaceEvents, getEventsByMonth, months, categoryInfo, EventCategory } from "@/data/spaceEvents";
import EventCard from "@/components/EventCard";
import { Telescope } from "lucide-react";

const categories: EventCategory[] = ["eclipse", "meteor", "alignment", "opposition", "conjunction", "mission", "moon"];

export default function CalendarPage() {
    const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<EventCategory | null>(null);

    // Filter events
    const filteredEvents = spaceEvents.filter((event) => {
        const eventMonth = new Date(event.date).getMonth() + 1;
        const matchesMonth = selectedMonth === null || eventMonth === selectedMonth;
        const matchesCategory = selectedCategory === null || event.category === selectedCategory;
        return matchesMonth && matchesCategory;
    });

    // Group filtered events by month
    const eventsByMonth: Record<number, typeof filteredEvents> = {};
    filteredEvents.forEach((event) => {
        const month = new Date(event.date).getMonth() + 1;
        if (!eventsByMonth[month]) eventsByMonth[month] = [];
        eventsByMonth[month].push(event);
    });

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Telescope className="w-8 h-8 text-accent-cyan" />
                        <h1 className="text-3xl sm:text-4xl font-bold">Space Calendar 2026</h1>
                    </div>
                    <p className="text-foreground/70 max-w-2xl mx-auto">
                        Browse astronomical events throughout the year. Add any event to your calendar with one click — no account needed.
                    </p>
                </div>

                {/* Filters */}
                <div className="mb-10 space-y-4">
                    {/* Month Filter */}
                    <div className="flex flex-wrap gap-2 justify-center">
                        <button
                            onClick={() => setSelectedMonth(null)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedMonth === null
                                    ? "bg-accent-cyan text-cosmic-900"
                                    : "bg-cosmic-700 text-foreground/70 hover:text-foreground hover:bg-cosmic-600"
                                }`}
                        >
                            All Months
                        </button>
                        {months.map((month, index) => (
                            <button
                                key={month}
                                onClick={() => setSelectedMonth(index + 1)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedMonth === index + 1
                                        ? "bg-accent-cyan text-cosmic-900"
                                        : "bg-cosmic-700 text-foreground/70 hover:text-foreground hover:bg-cosmic-600"
                                    }`}
                            >
                                {month.slice(0, 3)}
                            </button>
                        ))}
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2 justify-center">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === null
                                    ? "bg-accent-blue text-white"
                                    : "bg-cosmic-700 text-foreground/70 hover:text-foreground hover:bg-cosmic-600"
                                }`}
                        >
                            All Types
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === cat
                                        ? "bg-accent-blue text-white"
                                        : "bg-cosmic-700 text-foreground/70 hover:text-foreground hover:bg-cosmic-600"
                                    }`}
                            >
                                {categoryInfo[cat].emoji} {categoryInfo[cat].label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Events by Month */}
                {Object.keys(eventsByMonth).length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-foreground/50 text-lg">No events match your filters.</p>
                    </div>
                ) : (
                    Object.entries(eventsByMonth)
                        .sort(([a], [b]) => Number(a) - Number(b))
                        .map(([monthNum, events]) => (
                            <div key={monthNum} className="mb-12">
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-full bg-accent-cyan/10 text-accent-cyan flex items-center justify-center text-sm font-bold">
                                        {Number(monthNum)}
                                    </span>
                                    {months[Number(monthNum) - 1]} 2026
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {events.map((event) => (
                                        <EventCard key={event.id} event={event} />
                                    ))}
                                </div>
                            </div>
                        ))
                )}
            </div>
        </div>
    );
}
