import { Link } from "react-router-dom";
import { Scale, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-10 w-10 text-secondary" />
              <div>
                <h2 className="text-2xl font-serif font-bold tracking-wide">
                  AWE LAW
                </h2>
                <p className="text-xs text-primary-foreground/70 tracking-widest uppercase">
                  Firm
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed max-w-md">
              The Awe Law Firm is dedicated to providing exceptional legal
              representation with a personal touch. We take the time to
              understand your unique situation and fight for the results you
              deserve.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-secondary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/practice-areas"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-secondary">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary" />
                <a
                  href="tel:7132340030"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  (713) 234-0030
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary" />
                <a
                  href="mailto:info@awelawfirm.com"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  info@awelawfirm.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-secondary mt-1" />
                <span className="text-primary-foreground/70">
                  Houston, Texas
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} The Awe Law Firm. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Advocacy • Winning • Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};
