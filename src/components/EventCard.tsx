"use client";

import { SpaceEvent, categoryInfo } from "@/data/spaceEvents";
import { generateGoogleCalendarUrl, downloadICSFile } from "@/lib/calendarUtils";
import { Calendar, Download } from "lucide-react";

interface EventCardProps {
    event: SpaceEvent;
}

export default function EventCard({ event }: EventCardProps) {
    const category = categoryInfo[event.category];

    const formatDate = (dateString: string) => {
        return new Date(dateString + "T00:00:00").toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    };

    const isPast = new Date(event.date) < new Date(new Date().toDateString());

    return (
        <div
            className={`group bg-card-bg border border-card-border rounded-xl overflow-hidden transition-all hover:scale-[1.01] hover:border-${category.color}/50 ${isPast ? "opacity-60" : ""}`}
        >
            <div className="p-6">
                {/* Category & Date Row */}
                <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full bg-${category.color}/20 text-${category.color}`}>
                        {category.emoji} {category.label}
                    </span>
                    <span className="text-xs text-foreground/50">
                        {formatDate(event.date)}
                        {event.endDate && ` — ${formatDate(event.endDate)}`}
                    </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-white transition-colors">
                    {event.title}
                </h3>

                {/* Time */}
                <p className="text-sm text-accent-cyan mb-3">
                    🕐 {event.time}
                </p>

                {/* Description */}
                <p className="text-foreground/60 text-sm mb-4 leading-relaxed">
                    {event.description}
                </p>

                {/* Visibility */}
                {event.visibility && (
                    <p className="text-xs text-foreground/40 mb-4">
                        📍 Visible from: {event.visibility}
                    </p>
                )}

                {/* Calendar Buttons */}
                {!isPast && (
                    <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-card-border">
                        <a
                            href={generateGoogleCalendarUrl(event)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-accent-cyan/10 hover:bg-accent-cyan/20 text-accent-cyan text-sm font-medium rounded-lg transition-colors"
                        >
                            <Calendar className="w-4 h-4" />
                            Add to Google Calendar
                        </a>
                        <button
                            onClick={() => downloadICSFile(event)}
                            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-cosmic-700 hover:bg-cosmic-600 text-foreground/80 text-sm font-medium rounded-lg border border-card-border transition-colors"
                        >
                            <Download className="w-4 h-4" />
                            Download .ics
                        </button>
                    </div>
                )}

                {isPast && (
                    <div className="pt-2 border-t border-card-border">
                        <span className="text-xs text-foreground/40 italic">This event has passed</span>
                    </div>
                )}
            </div>
        </div>
    );
}
