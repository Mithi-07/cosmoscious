import { Instagram, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-cosmic-800 border-t border-card-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="Cosmoscious Logo"
                            width={24}
                            height={24}
                        />
                        <span className="text-lg font-bold text-foreground">Cosmoscious</span>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="https://instagram.com/cosmos.cious"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-foreground/70 hover:text-accent-cyan transition-colors"
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
                        <a
                            href="https://x.com/cosmoscious"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                            <span>X</span>
                        </a>
                        <a
                            href="https://in.pinterest.com/cosmoscious/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-foreground/70 hover:text-red-400 transition-colors"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                            </svg>
                            <span>Pinterest</span>
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