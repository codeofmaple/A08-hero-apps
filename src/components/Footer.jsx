import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 py-10  mt-10">
            <div className="w-11/12 mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Hero.IO</h2>
                    <p className="text-sm leading-relaxed">
                        Explore, install, and manage your favorite apps in one beautiful and responsive platform.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-white transition">Home</a></li>
                        <li><a href="/apps" className="hover:text-white transition">All Apps</a></li>
                        <li><a href="/installation" className="hover:text-white transition">My Installation</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
                    <div className="flex justify-center md:justify-start gap-5">
                        <a
                            href="https://github.com/codeofmaple"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 hover:text-white transition"
                        >
                            <Github size={20} /> GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 hover:text-white transition"
                        >
                            <Linkedin size={20} /> LinkedIn
                        </a>
                        <a
                            href="mailto:nahidali01744@gmail.com"
                            className="flex items-center gap-2 hover:text-white transition"
                        >
                            <Mail size={20} /> Email
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500 w-11/12 mx-auto">
                © {new Date().getFullYear()} Hero.IO — All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
