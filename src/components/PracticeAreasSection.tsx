import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Users, Briefcase, Wine, ArrowRight } from "lucide-react";

const practiceAreas = [
  {
    icon: Home,
    title: "Closings",
    description:
      "Comprehensive real estate closing services ensuring smooth property transactions from contract to keys.",
  },
  {
    icon: Users,
    title: "Family Law",
    description:
      "Compassionate representation for divorce, custody, child support, and all family legal matters.",
  },
  {
    icon: Briefcase,
    title: "Personal Injury",
    description:
      "Aggressive advocacy for accident victims to secure maximum compensation for your injuries.",
  },
  {
    icon: Wine,
    title: "Alcohol Licensing",
    description:
      "Expert guidance through Georgia's alcohol licensing process for restaurants, bars, and retailers.",
  },
];

export const PracticeAreasSection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-semibold tracking-wide uppercase mb-4">
            What We Do
          </p>
          <h2 className="section-heading text-foreground mb-6">
            Our Practice Areas
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We provide comprehensive legal services across our core practice
            areas, ensuring you receive expert representation for your specific
            legal needs in the Atlanta metropolitan area.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {practiceAreas.map((area) => (
            <div
              key={area.title}
              className="bg-card p-8 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <area.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-card-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/practice-areas">
              View All Practice Areas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
