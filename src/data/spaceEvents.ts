export type EventCategory = "eclipse" | "meteor" | "alignment" | "opposition" | "mission" | "moon" | "conjunction";

export interface SpaceEvent {
    id: string;
    title: string;
    date: string; // ISO date: YYYY-MM-DD
    endDate?: string; // For multi-day events
    time: string; // Human-readable time
    description: string;
    category: EventCategory;
    visibility?: string; // Where it's visible
}

export const categoryInfo: Record<EventCategory, { label: string; emoji: string; color: string }> = {
    eclipse: { label: "Eclipse", emoji: "🌑", color: "accent-cyan" },
    meteor: { label: "Meteor Shower", emoji: "☄️", color: "accent-blue" },
    alignment: { label: "Alignment", emoji: "🪐", color: "accent-purple" },
    opposition: { label: "Opposition", emoji: "🔭", color: "accent-cyan" },
    mission: { label: "Space Mission", emoji: "🚀", color: "accent-blue" },
    moon: { label: "Moon Event", emoji: "🌕", color: "accent-purple" },
    conjunction: { label: "Conjunction", emoji: "✨", color: "accent-cyan" },
};

export const spaceEvents: SpaceEvent[] = [
    // January
    {
        id: "supermoon-jan",
        title: "Supermoon",
        date: "2026-01-03",
        time: "All night",
        description: "A full moon occurring near its closest point to Earth (perigee), making it appear larger and brighter than usual. Great opportunity for moongazing and photography.",
        category: "moon",
    },
    {
        id: "quadrantids-2026",
        title: "Quadrantids Meteor Shower",
        date: "2026-01-03",
        endDate: "2026-01-04",
        time: "Pre-dawn hours",
        description: "One of the strongest annual meteor showers, producing up to 120 meteors per hour at its peak. Known for bright fireballs. Best viewed from the Northern Hemisphere. Note: Full moon may reduce visibility of fainter meteors.",
        category: "meteor",
        visibility: "Northern Hemisphere",
    },
    {
        id: "jupiter-opposition",
        title: "Jupiter at Opposition",
        date: "2026-01-10",
        time: "Sunset to sunrise",
        description: "Jupiter will be at its closest and brightest for the year, appearing opposite the Sun in the sky. Visible from sunset to sunrise — the best time to observe Jupiter and its moons with binoculars or a telescope.",
        category: "opposition",
    },

    // February
    {
        id: "annular-solar-eclipse",
        title: "Annular Solar Eclipse",
        date: "2026-02-17",
        time: "Varies by location",
        description: "A 'ring of fire' eclipse where the Moon appears slightly smaller than the Sun, creating a bright ring of light around the dark lunar surface. Visible primarily over the southern Indian Ocean and Antarctica.",
        category: "eclipse",
        visibility: "Southern Indian Ocean, Antarctica",
    },
    {
        id: "six-planet-alignment",
        title: "6-Planet Alignment",
        date: "2026-02-28",
        time: "~45–60 minutes after local sunset",
        description: "Mercury, Venus, Jupiter, Saturn, Uranus, and Neptune will be visible together in the night sky just after sunset. Four planets visible to the naked eye; Uranus and Neptune require binoculars or a telescope. Look from the western horizon towards southeast.",
        category: "alignment",
        visibility: "Worldwide",
    },

    // March
    {
        id: "total-lunar-eclipse",
        title: "Total Lunar Eclipse (Blood Moon)",
        date: "2026-03-03",
        time: "Varies by location",
        description: "The full Worm Moon will pass through Earth's shadow, appearing reddish-orange for 58 minutes. One of the most dramatic celestial events of the year.",
        category: "eclipse",
        visibility: "Western North America, Australia, New Zealand, East Asia, Pacific",
    },
    {
        id: "venus-saturn-conjunction",
        title: "Venus-Saturn Conjunction",
        date: "2026-03-08",
        time: "Evening sky, after sunset",
        description: "Venus and Saturn will appear within approximately 1 degree of each other in the evening sky. A beautiful pairing visible to the naked eye, best seen shortly after sunset.",
        category: "conjunction",
    },
    {
        id: "artemis-ii",
        title: "Artemis II Crewed Lunar Flyby",
        date: "2026-03-15",
        endDate: "2026-04-15",
        time: "TBD",
        description: "NASA's Artemis II mission is scheduled to carry four astronauts around the Moon, marking the first crewed lunar flyby since the Apollo program. A historic moment in space exploration.",
        category: "mission",
    },

    // April
    {
        id: "mercury-elongation",
        title: "Mercury at Greatest Elongation",
        date: "2026-04-04",
        time: "Evening sky, after sunset",
        description: "The best time to spot Mercury as it appears farthest from the Sun. Look low on the western horizon shortly after sunset. Mercury is notoriously difficult to observe, making this a rare opportunity.",
        category: "opposition",
    },
    {
        id: "lyrids-2026",
        title: "Lyrids Meteor Shower",
        date: "2026-04-22",
        endDate: "2026-04-23",
        time: "After midnight until dawn",
        description: "A medium-strength shower producing about 18 meteors per hour. Known for occasional bright fireballs. Favorable viewing conditions in 2026 with a waxing crescent moon setting early.",
        category: "meteor",
        visibility: "Both Hemispheres",
    },

    // May
    {
        id: "eta-aquariids",
        title: "Eta Aquariids Meteor Shower",
        date: "2026-05-06",
        endDate: "2026-05-07",
        time: "Pre-dawn hours",
        description: "Caused by debris from Halley's Comet, this shower produces fast-moving meteors with persistent trains. Up to 50 meteors per hour at peak. Best viewed from the Southern Hemisphere.",
        category: "meteor",
        visibility: "Southern Hemisphere favored",
    },
    {
        id: "blue-moon",
        title: "Blue Moon",
        date: "2026-05-31",
        time: "All night",
        description: "The second full moon in May, making it a 'Blue Moon.' 2026 will have 13 full moons total. While not actually blue, this rare occurrence is worth noting — hence the phrase 'once in a blue moon.'",
        category: "moon",
    },

    // June
    {
        id: "venus-jupiter-conjunction",
        title: "Venus-Jupiter Conjunction",
        date: "2026-06-09",
        time: "Evening sky, after sunset",
        description: "The two brightest planets in the sky will appear within about 1 degree of each other. A stunning sight visible to the naked eye in the western sky after sunset.",
        category: "conjunction",
    },

    // July
    {
        id: "hayabusa2-flyby",
        title: "Hayabusa2 Asteroid Flyby",
        date: "2026-07-01",
        time: "N/A",
        description: "Japan's Hayabusa2 spacecraft will fly by the asteroid Torifune, extending its already successful sample-return mission. Hayabusa2 previously returned samples from asteroid Ryugu.",
        category: "mission",
    },
    {
        id: "tianwen-2",
        title: "Tianwen-2 Asteroid Arrival",
        date: "2026-07-15",
        time: "N/A",
        description: "China's Tianwen-2 spacecraft is expected to arrive at the small near-Earth asteroid Kamo'oalewa, aiming to collect the first-ever samples from a quasi-satellite of Earth.",
        category: "mission",
    },

    // August
    {
        id: "total-solar-eclipse",
        title: "Total Solar Eclipse",
        date: "2026-08-12",
        time: "Varies by location",
        description: "A major highlight of 2026! The path of totality passes over the Arctic Ocean, Greenland, Iceland, the Atlantic Ocean, Portugal, and northern Spain. Totality lasts up to 2 minutes and 18 seconds.",
        category: "eclipse",
        visibility: "Arctic, Greenland, Iceland, Spain, Portugal",
    },
    {
        id: "perseids-2026",
        title: "Perseids Meteor Shower",
        date: "2026-08-12",
        endDate: "2026-08-13",
        time: "After midnight until dawn",
        description: "The king of meteor showers! Up to 100 meteors per hour during peak. Excellent viewing conditions in 2026 with a new moon. Fast, bright meteors often leave persistent trains. Best show of the year.",
        category: "meteor",
        visibility: "Northern Hemisphere favored",
    },
    {
        id: "partial-lunar-eclipse",
        title: "Partial Lunar Eclipse",
        date: "2026-08-28",
        time: "Varies by location",
        description: "A deep partial lunar eclipse where a significant portion of the Moon will pass through Earth's shadow. Visible from parts of Europe, Asia, Africa, North America, and South America.",
        category: "eclipse",
        visibility: "Europe, Asia, Africa, Americas",
    },

    // September
    {
        id: "neptune-opposition",
        title: "Neptune at Opposition",
        date: "2026-09-25",
        time: "Sunset to sunrise",
        description: "Neptune will be at its brightest for the year and closest to Earth. A telescope is required to observe this distant ice giant, which will appear as a tiny blue disc.",
        category: "opposition",
    },

    // October
    {
        id: "saturn-opposition",
        title: "Saturn at Opposition",
        date: "2026-10-04",
        time: "Sunset to sunrise",
        description: "Saturn will be at its closest and brightest, with its magnificent ring system visible through even a small telescope. Visible all night long from sunset to sunrise.",
        category: "opposition",
    },
    {
        id: "orionids-2026",
        title: "Orionids Meteor Shower",
        date: "2026-10-21",
        endDate: "2026-10-22",
        time: "After midnight until dawn",
        description: "Another shower produced by debris from Halley's Comet. Up to 20 fast-moving meteors per hour, known for their brightness and occasional fireballs.",
        category: "meteor",
        visibility: "Both Hemispheres",
    },
    {
        id: "mmx-launch",
        title: "MMX Mars Moons Mission Launch",
        date: "2026-10-15",
        endDate: "2026-11-15",
        time: "TBD",
        description: "JAXA's Martian Moons eXploration (MMX) mission will launch to explore Mars' moons Phobos and Deimos. The spacecraft will land on Phobos and return samples to Earth.",
        category: "mission",
    },

    // November
    {
        id: "hera-arrival",
        title: "Hera Spacecraft Arrives at Didymos",
        date: "2026-11-01",
        time: "N/A",
        description: "ESA's Hera spacecraft will arrive at the double asteroid system Didymos to study the aftermath of NASA's DART impact, which intentionally changed the orbit of the moonlet Dimorphos.",
        category: "mission",
    },
    {
        id: "jupiter-mars-conjunction",
        title: "Jupiter-Mars Conjunction",
        date: "2026-11-16",
        time: "Early morning hours",
        description: "Jupiter and Mars will pass within 1°11' of each other in the pre-dawn sky. Two bright planets creating a striking pair, easily visible to the naked eye.",
        category: "conjunction",
    },
    {
        id: "leonids-2026",
        title: "Leonids Meteor Shower",
        date: "2026-11-17",
        endDate: "2026-11-18",
        time: "After midnight until dawn",
        description: "Fast-moving meteors from Comet Tempel-Tuttle. About 15 meteors per hour. Dark, moonless skies after midnight in 2026 will provide excellent viewing conditions.",
        category: "meteor",
        visibility: "Both Hemispheres",
    },

    // December
    {
        id: "geminids-2026",
        title: "Geminids Meteor Shower",
        date: "2026-12-14",
        endDate: "2026-12-15",
        time: "After 9 PM until dawn",
        description: "One of the best meteor showers of the year, producing up to 75 bright, multi-colored meteors per hour. Unique among major showers — caused by an asteroid (3200 Phaethon), not a comet.",
        category: "meteor",
        visibility: "Both Hemispheres, Northern favored",
    },
    {
        id: "bepicolombo",
        title: "BepiColombo Mercury Orbit Insertion",
        date: "2026-12-01",
        time: "N/A",
        description: "The joint ESA-JAXA BepiColombo mission will enter orbit around Mercury after a 7-year journey. It will be the first European mission to Mercury, carrying two orbiters to study the planet.",
        category: "mission",
    },
];

// Helper to get events for a specific month (1-indexed)
export function getEventsByMonth(month: number): SpaceEvent[] {
    return spaceEvents.filter((event) => {
        const eventMonth = new Date(event.date).getMonth() + 1;
        return eventMonth === month;
    });
}

// Helper to get upcoming events from a given date
export function getUpcomingEvents(fromDate: Date = new Date(), count: number = 3): SpaceEvent[] {
    const from = fromDate.getTime();
    return spaceEvents
        .filter((event) => new Date(event.date).getTime() >= from)
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .slice(0, count);
}

export const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
];
