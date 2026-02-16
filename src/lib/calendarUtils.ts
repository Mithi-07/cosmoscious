import { SpaceEvent } from "@/data/spaceEvents";

/**
 * Generate a Google Calendar URL for an event.
 * Opens in a new tab — no user data collected.
 */
export function generateGoogleCalendarUrl(event: SpaceEvent): string {
    const startDate = event.date.replace(/-/g, "");
    const endDate = event.endDate
        ? event.endDate.replace(/-/g, "")
        : startDate;

    // For all-day events, use date format (no time component)
    const dates = `${startDate}/${endDate}`;

    const params = new URLSearchParams({
        action: "TEMPLATE",
        text: event.title,
        dates: dates,
        details: `${event.description}${event.visibility ? `\n\nVisibility: ${event.visibility}` : ""}\n\nTime: ${event.time}\n\nvia Cosmoscious — cosmoscious.vercel.app`,
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Generate an ICS file content string for an event.
 * Works with Google Calendar, Apple Calendar, Outlook, etc.
 */
export function generateICSContent(event: SpaceEvent): string {
    const startDate = event.date.replace(/-/g, "");
    const endDate = event.endDate
        ? event.endDate.replace(/-/g, "")
        : startDate;

    // Escape special characters in ICS format
    const escapeICS = (text: string) =>
        text.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

    const description = escapeICS(
        `${event.description}${event.visibility ? `\nVisibility: ${event.visibility}` : ""}\nTime: ${event.time}`
    );

    return [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Cosmoscious//Space Calendar//EN",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        "BEGIN:VEVENT",
        `DTSTART;VALUE=DATE:${startDate}`,
        `DTEND;VALUE=DATE:${endDate}`,
        `SUMMARY:${escapeICS(event.title)}`,
        `DESCRIPTION:${description}`,
        `UID:${event.id}@cosmoscious.vercel.app`,
        "END:VEVENT",
        "END:VCALENDAR",
    ].join("\r\n");
}

/**
 * Trigger download of an ICS file. Runs entirely client-side.
 */
export function downloadICSFile(event: SpaceEvent): void {
    const icsContent = generateICSContent(event);
    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${event.id}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
