import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import attorneyImage from "@/assets/attorney.png";

const features = [
  "Personalized attention to every case",
  "Years of courtroom experience",
  "Transparent communication",
  "Family-oriented approach",
];

export const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative">
              <img
                src={attorneyImage}
                alt="Attorney Mayowa Jasmine Awe - Founding Attorney at Awe Law Firm"
                className="w-full shadow-lg"
              />
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-secondary -z-10" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <p className="text-secondary font-semibold tracking-wide uppercase mb-4">
              About Our Firm
            </p>
            <h2 className="section-heading text-foreground mb-6">
              Experienced Advocacy with a{" "}
              <span className="text-secondary">Personal Touch</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The Awe Law Firm is a dedicated firm that takes the time to
              properly understand your situation and your side. You may feel
              pressure and confusion which can misdirect your decision making.
              We are here to guide you through every step of the legal process.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We have built up our resources to better serve your needs
              efficiently and effectively. The Awe Law Firm is well respected
              and capable of leveraging years of experience to get you the
              results you deserve.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
