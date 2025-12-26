import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-800 text-white">
            <div className="mx-auto max-w-7xl px-6 py-8">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                
                {/* Brand / Copyright */}
                <p className="text-sm text-white/60">
                    © {year} SAYA AI. All rights reserved.
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-2">
                    <a
                    href="https://github.com/trustonyekwere"
                    className="text-white/60 transition p-3 bg-white/10 rounded-md hover:text-white hover:bg-white/20"
                    aria-label="GitHub"
                    target="_blank"
                    >
                    <Github size={20} />
                    </a>

                    <a
                    href="https://x.com/trust_onyekwere"
                    className="text-white/60 transition p-3 bg-white/10 rounded-md hover:text-white hover:bg-white/20"
                    aria-label="Twitter"
                    target="_blank"
                    >
                    <Twitter size={20} />
                    </a>

                    <a
                    href="https://www.linkedin.com/in/onyekwere-trust/"
                    className="text-white/60 transition p-3 bg-white/10 rounded-md hover:text-white hover:bg-white/20"
                    aria-label="LinkedIn"
                    target="_blank"
                    >
                    <Linkedin size={20} />
                    </a>

                    <a
                    href="mailto:trustonyekwere151@gmail.com"
                    className="text-white/60 transition p-3 bg-white/10 rounded-md hover:text-white hover:bg-white/20"
                    aria-label="Email"
                    target="_blank"
                    >
                    <Mail size={20} />
                    </a>
                </div>

                </div>
            </div>
        </footer>
    );
}