import { Link } from "react-router-dom";
import { Scale, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

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
            <p className="text-primary-foreground/70 leading-relaxed max-w-md mb-6">
              The Awe Law Firm is dedicated to providing exceptional legal
              representation with a personal touch. We take the time to
              understand your unique situation and fight for the results you
              deserve.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-secondary hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
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
                  href="tel:4047214112"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  404-721-4112
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary" />
                <a
                  href="mailto:Info@awelawfirm.com"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Info@awelawfirm.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-secondary mt-1" />
                <span className="text-primary-foreground/70">
                  3495 Buckhead Loop NE Suite 18777<br />
                  Atlanta, GA 31126
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
