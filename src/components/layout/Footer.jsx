"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Flavours of Agartala</h3>
            <p className="text-gray-400">
              Serving the community with fresh snacks and beverages since 2016.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5" />
                <span>Agartala, Tripura</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>+91 12345 67890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>flavoursagt@mail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5" />
                <span>Mon-Sat: 4:00 PM - 11:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <Link href="/menu" className="hover:text-white">
                Menu
              </Link>
              <Link href="/beverages" className="hover:text-white">
                Beverages
              </Link>
              <Link href="/snacks" className="hover:text-white">
                Snacks
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Flavours of Agartala. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
