import { Instagram, Youtube, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-cosmic-800 border-t border-card-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-accent-purple" />
                        <span className="text-lg font-bold text-foreground">Cosmoscious</span>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="https://instagram.com/cosmos.cious"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-foreground/70 hover:text-accent-pink transition-colors"
                        >
                            <Instagram className="w-5 h-5" />
                            <span>Instagram</span>
                        </a>
                        <a
                            href="https://youtube.com/@cosmoscious"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-foreground/70 hover:text-red-500 transition-colors"
                        >
                            <Youtube className="w-5 h-5" />
                            <span>YouTube</span>
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-foreground/50 text-sm">
                        © {new Date().getFullYear()} Cosmoscious. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}