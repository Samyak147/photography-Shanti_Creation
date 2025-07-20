import React from 'react';
import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-8 px-6 md:px-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 border-t border-gray-700 pt-4">

                {/* Left - Copyright */}
                <div className="text-xs text-gray-500 text-center md:text-left">
                    © {new Date().getFullYear()} Shanti Photography & Creation. All rights reserved.
                </div>

                {/* Right - Social Links */}
                <div className="flex gap-6 text-lg text-gray-400">
                    <a
                        href="https://www.instagram.com/shantiphotography084?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                        aria-label="Instagram"
                    >
                       <FaInstagram />
                    </a>
                    <a
                        href="https://wa.me/917489134309?text=Hi%20there!%20I'm%20interested%20in%20your%20photography%20services.%20I'd%20love%20to%20know%20more%20about%20your%20packages%2C%20availability%2C%20and%20pricing.%20Please%20let%20me%20know%20how%20I%20can%20book%20a%20session.%20Thanks!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp />
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                        aria-label="Facebook"
                    >
                        <FaFacebookF />
                    </a>
                </div>
            </div>
        </footer>
    );
}
