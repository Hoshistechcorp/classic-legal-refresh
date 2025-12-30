import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Home, Users, Briefcase, Wine } from "lucide-react";

const practiceAreas = [
  {
    icon: Home,
    title: "Closings",
    description:
      "Our real estate closing practice provides comprehensive services to ensure your property transaction proceeds smoothly from contract to keys. We handle residential and commercial closings throughout the Atlanta metropolitan area.",
    services: [
      "Residential Purchase Closings",
      "Residential Sale Closings",
      "Refinance Closings",
      "Commercial Real Estate Closings",
      "Title Examination & Insurance",
      "Contract Review & Negotiation",
      "Deed Preparation & Recording",
      "Wire Transfer Coordination",
      "Closing Document Preparation",
      "Post-Closing Services",
    ],
    details: [
      {
        heading: "Residential Closings",
        content:
          "Whether you're buying your first home or selling a property you've owned for years, we guide you through every step of the closing process. Our team ensures all documents are properly prepared, title is clear, and funds are correctly disbursed.",
      },
      {
        heading: "Commercial Transactions",
        content:
          "Commercial real estate transactions require meticulous attention to detail. We handle complex commercial closings including multi-family properties, retail spaces, office buildings, and land acquisitions.",
      },
      {
        heading: "Title Services",
        content:
          "We conduct thorough title examinations to identify any issues that could affect your ownership rights. Our team works to resolve title defects and provides title insurance to protect your investment.",
      },
    ],
  },
  {
    icon: Users,
    title: "Family Law",
    description:
      "Our family law practice handles all aspects of family-related legal matters with compassion and expertise. We understand that family legal issues are deeply personal, and we're committed to protecting your interests while minimizing stress.",
    services: [
      "Divorce & Separation",
      "Child Custody & Visitation",
      "Child Support",
      "Spousal Support/Alimony",
      "Property Division",
      "Paternity Actions",
      "Adoption",
      "Guardianship",
      "Legitimation",
      "Modification of Orders",
      "Contempt Actions",
      "Prenuptial Agreements",
    ],
    details: [
      {
        heading: "Divorce Representation",
        content:
          "Divorce is one of life's most challenging experiences. We provide compassionate yet aggressive representation to protect your rights and interests. Whether your divorce is contested or uncontested, we work to achieve the best possible outcome for you and your children.",
      },
      {
        heading: "Child Custody & Support",
        content:
          "Your children's wellbeing is our priority. We fight for custody arrangements that serve your children's best interests while protecting your parental rights. Our team handles initial custody determinations, modifications, and enforcement of existing orders.",
      },
      {
        heading: "Asset Protection",
        content:
          "Georgia is an equitable distribution state, meaning marital assets are divided fairly but not necessarily equally. We work to ensure you receive your fair share of marital property, retirement accounts, and other assets.",
      },
    ],
  },
  {
    icon: Briefcase,
    title: "Personal Injury",
    description:
      "If you've been injured due to someone else's negligence, you deserve compensation for your losses. Our personal injury practice fights aggressively to secure maximum recovery for accident victims throughout Georgia.",
    services: [
      "Car Accidents",
      "Truck Accidents",
      "Motorcycle Accidents",
      "Slip & Fall Injuries",
      "Premises Liability",
      "Dog Bites",
      "Wrongful Death",
      "Medical Malpractice",
      "Product Liability",
      "Workplace Injuries",
      "Pedestrian Accidents",
      "Rideshare Accidents",
    ],
    details: [
      {
        heading: "Auto Accidents",
        content:
          "Car accidents can result in serious injuries, mounting medical bills, and lost wages. We investigate accidents thoroughly, negotiate with insurance companies, and when necessary, take cases to trial to ensure you receive fair compensation.",
      },
      {
        heading: "Premises Liability",
        content:
          "Property owners have a duty to maintain safe conditions. If you were injured due to hazardous conditions on someone else's property, you may be entitled to compensation. We handle slip and fall cases, inadequate security claims, and other premises liability matters.",
      },
      {
        heading: "Wrongful Death",
        content:
          "Losing a loved one due to another's negligence is devastating. Our wrongful death attorneys help families seek justice and compensation for their loss, including funeral expenses, lost income, and loss of companionship.",
      },
    ],
  },
  {
    icon: Wine,
    title: "Alcohol Licensing",
    description:
      "Navigating Georgia's alcohol licensing laws can be complex and time-consuming. Our firm provides expert guidance through every step of the licensing process, helping restaurants, bars, convenience stores, and other establishments obtain and maintain their alcohol licenses.",
    services: [
      "Retail Dealer Licenses",
      "Consumption on Premises Licenses",
      "Package Store Licenses",
      "Manufacturer Licenses",
      "Wholesale Dealer Licenses",
      "Special Event Permits",
      "License Renewals",
      "License Transfers",
      "Compliance Reviews",
      "Administrative Hearings",
      "Zoning & Distance Waivers",
      "Local Licensing Assistance",
    ],
    details: [
      {
        heading: "License Applications",
        content:
          "We guide clients through the entire alcohol license application process, from initial consultation to final approval. Our team prepares all necessary documentation, coordinates with local and state agencies, and represents clients at required hearings.",
      },
      {
        heading: "Compliance & Renewals",
        content:
          "Maintaining your alcohol license requires ongoing compliance with Georgia's regulations. We help clients understand their obligations, prepare for inspections, and handle license renewals to ensure uninterrupted operations.",
      },
      {
        heading: "Administrative Defense",
        content:
          "If your license is threatened due to alleged violations, we provide aggressive representation in administrative proceedings. Our goal is to protect your business and your livelihood from adverse licensing actions.",
      },
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
                We provide comprehensive legal representation across our core
                practice areas, ensuring you receive expert counsel for your
                specific needs in the Atlanta metropolitan area and throughout Georgia.
              </p>
            </div>
          </div>
        </section>

        {/* Practice Areas Detail */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="space-y-24">
              {practiceAreas.map((area, index) => (
                <div
                  key={area.title}
                  id={area.title.toLowerCase().replace(/\s+/g, "-")}
                  className="scroll-mt-32"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-start ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Left Column - Main Content */}
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center">
                          <area.icon className="h-8 w-8 text-secondary" />
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                          {area.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        {area.description}
                      </p>

                      {/* Detailed Information */}
                      <div className="space-y-6">
                        {area.details.map((detail) => (
                          <div key={detail.heading}>
                            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                              {detail.heading}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {detail.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column - Services List */}
                    <div
                      className={`bg-card border border-border p-8 ${
                        index % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      <h3 className="font-serif text-xl font-semibold text-card-foreground mb-6">
                        Our {area.title} Services
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {area.services.map((service) => (
                          <div
                            key={service}
                            className="flex items-center gap-2"
                          >
                            <div className="w-2 h-2 bg-secondary flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < practiceAreas.length - 1 && (
                    <div className="border-b border-border mt-24" />
                  )}
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
