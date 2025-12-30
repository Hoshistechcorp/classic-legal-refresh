import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in every case, ensuring the highest quality legal representation for our clients.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description:
      "Your needs come first. We take the time to understand your unique situation and tailor our approach accordingly.",
  },
  {
    icon: Clock,
    title: "Responsive",
    description:
      "We understand the importance of timely communication and keep you informed every step of the way.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        {/* Page Header */}
        <section className="bg-primary py-20">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-secondary font-semibold tracking-wide uppercase mb-4">
                About Us
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Meet The Awe Law Firm
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Dedicated legal professionals committed to fighting for your
                rights with integrity and excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="section-heading text-foreground mb-6">
                  Our Story
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The Awe Law Firm is a dedicated firm that takes the time to
                  properly understand your situation and your side. You may feel
                  pressure and confused which can misdirect your decision
                  making. The Awe Law Firm is skilled and experienced and we are
                  here and dedicated to making your situation as stress free as
                  possible.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We have built up our resources to better serve your needs
                  efficiently and effectively. The Awe Law Firm is well
                  respected and capable of leveraging years of experience to get
                  you the results you deserve!
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Dedication and a family feel is what gives our clients the
                  confidence to sit back and expect results. We believe that
                  every client deserves personalized attention and aggressive
                  representation.
                </p>
              </div>

              <div className="bg-primary p-12">
                <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-6">
                  Attorney Mayowa Jasmine Awe
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed mb-6">
                  Attorney Awe is the founder and lead counsel of The Awe Law
                  Firm. With years of experience in multiple practice areas, she
                  brings a unique combination of skill, dedication, and
                  compassion to every case.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-primary-foreground">
                      Clients' Choice Award 2020
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-primary-foreground">
                      16+ Five Star Reviews on Avvo
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-primary-foreground">
                      Licensed in Texas
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-muted">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-secondary font-semibold tracking-wide uppercase mb-4">
                Our Values
              </p>
              <h2 className="section-heading text-foreground">
                What Sets Us Apart
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="bg-card p-8 text-center">
                  <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-card-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
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

export default About;
