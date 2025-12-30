import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 px-4 py-2 mb-8">
            <Award className="h-5 w-5 text-secondary" />
            <span className="text-primary-foreground text-sm font-medium">
              Clients' Choice Award 2020
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6">
            Dedicated Legal Counsel
            <span className="block text-secondary">You Can Trust</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl">
            The Awe Law Firm takes the time to properly understand your
            situation. We are skilled, experienced, and dedicated to making your
            legal matters as stress-free as possible.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="text-base font-semibold"
              asChild
            >
              <Link to="/contact">
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base font-semibold border-primary-foreground/50 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
              asChild
            >
              <Link to="/practice-areas">View Practice Areas</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20">
            <div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-secondary">
                16+
              </p>
              <p className="text-primary-foreground/70 text-sm mt-1">
                5-Star Reviews
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-secondary">
                10+
              </p>
              <p className="text-primary-foreground/70 text-sm mt-1">
                Years Experience
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif font-bold text-secondary">
                500+
              </p>
              <p className="text-primary-foreground/70 text-sm mt-1">
                Cases Handled
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
