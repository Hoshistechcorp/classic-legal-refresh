import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import {
  Scale,
  Users,
  FileText,
  Shield,
  Briefcase,
  Home,
  Car,
  Building2,
} from "lucide-react";

const practiceAreas = [
  {
    icon: Users,
    title: "Family Law",
    description:
      "Our family law practice handles all aspects of family-related legal matters with compassion and expertise.",
    services: [
      "Divorce & Separation",
      "Child Custody & Visitation",
      "Child Support",
      "Adoption",
      "Paternity",
      "Modifications",
    ],
  },
  {
    icon: Shield,
    title: "Criminal Defense",
    description:
      "We provide aggressive defense for those facing criminal charges, protecting your rights at every step.",
    services: [
      "Felonies",
      "Misdemeanors",
      "DUI/DWI",
      "Drug Charges",
      "Assault & Battery",
      "Expunctions",
    ],
  },
  {
    icon: Briefcase,
    title: "Personal Injury",
    description:
      "If you've been injured due to someone else's negligence, we fight to get you the compensation you deserve.",
    services: [
      "Car Accidents",
      "Truck Accidents",
      "Slip & Fall",
      "Medical Malpractice",
      "Wrongful Death",
      "Product Liability",
    ],
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description:
      "Protect your assets and ensure your wishes are carried out with comprehensive estate planning services.",
    services: [
      "Wills",
      "Trusts",
      "Power of Attorney",
      "Healthcare Directives",
      "Probate",
      "Asset Protection",
    ],
  },
  {
    icon: Home,
    title: "Real Estate Law",
    description:
      "Navigate complex real estate transactions and disputes with experienced legal guidance.",
    services: [
      "Closings",
      "Title Issues",
      "Property Disputes",
      "Landlord-Tenant",
      "Foreclosure Defense",
      "Contracts",
    ],
  },
  {
    icon: Scale,
    title: "Civil Litigation",
    description:
      "Resolve disputes through skilled negotiation or aggressive courtroom representation.",
    services: [
      "Contract Disputes",
      "Business Litigation",
      "Collections",
      "Injunctions",
      "Appeals",
      "Mediation",
    ],
  },
  {
    icon: Car,
    title: "Traffic Violations",
    description:
      "Protect your driving record and minimize the impact of traffic citations and violations.",
    services: [
      "Speeding Tickets",
      "Reckless Driving",
      "License Suspension",
      "Commercial Violations",
      "Insurance Issues",
      "Point Reduction",
    ],
  },
  {
    icon: Building2,
    title: "Business Law",
    description:
      "Comprehensive legal services for businesses of all sizes, from startups to established companies.",
    services: [
      "Formation",
      "Contracts",
      "Employment Law",
      "Compliance",
      "Mergers & Acquisitions",
      "Dissolution",
    ],
  },
];

const PracticeAreas = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        {/* Page Header */}
        <section className="bg-primary py-20">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-secondary font-semibold tracking-wide uppercase mb-4">
                Our Services
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Practice Areas
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                We provide comprehensive legal representation across multiple
                practice areas, ensuring you receive expert counsel for your
                specific needs.
              </p>
            </div>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {practiceAreas.map((area) => (
                <div
                  key={area.title}
                  className="bg-card border border-border p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <area.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-serif text-2xl font-semibold text-card-foreground mb-3">
                        {area.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {area.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {area.services.map((service) => (
                          <span
                            key={service}
                            className="bg-muted px-3 py-1 text-sm text-muted-foreground"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default PracticeAreas;
