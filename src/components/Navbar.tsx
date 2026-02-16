"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/calendar", label: "Space Calendar" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-cosmic-900/80 backdrop-blur-md border-b border-card-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image
                            src="/logo.png"
                            alt="Cosmoscious Logo"
                            width={32}
                            height={32}
                            className="group-hover:scale-110 transition-transform"
                        />
                        <span className="text-xl font-bold bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple bg-clip-text text-transparent">
                            Cosmoscious
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-foreground/80 hover:text-accent-cyan transition-colors font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-foreground/80 hover:text-accent-cyan"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-card-border">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-3 text-foreground/80 hover:text-accent-cyan transition-colors font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}