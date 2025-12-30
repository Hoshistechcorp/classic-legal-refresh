import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Scale, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Blog", href: "/blog" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
      {/* Top Bar */}
      <div className="border-b border-primary-foreground/10">
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
            <Phone className="h-4 w-4" />
            <span>404-721-4112</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-primary-foreground/80 text-sm">Advocacy • Winning • Excellence</span>
            <div className="flex items-center gap-3 ml-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <Scale className="h-10 w-10 text-secondary" />
            <div>
              <h1 className="text-2xl font-serif font-bold text-primary-foreground tracking-wide">
                AWE LAW
              </h1>
              <p className="text-xs text-primary-foreground/70 tracking-widest uppercase">
                Firm
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="nav-link text-primary-foreground/90 hover:text-primary-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant="secondary"
              className="font-semibold tracking-wide"
              asChild
            >
              <a href="https://calendly.com/mya-awelawfirm/30min" target="_blank" rel="noopener noreferrer">Schedule Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-4 py-2 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/5 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button
                  variant="secondary"
                  className="w-full font-semibold"
                  asChild
                >
                  <a href="https://calendly.com/mya-awelawfirm/30min" target="_blank" rel="noopener noreferrer">Schedule Consultation</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
