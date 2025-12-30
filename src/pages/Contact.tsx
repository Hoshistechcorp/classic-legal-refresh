import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "404-721-4112",
    href: "tel:4047214112",
  },
  {
    icon: Mail,
    title: "Email",
    content: "Info@awelawfirm.com",
    href: "mailto:Info@awelawfirm.com",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "3495 Buckhead Loop NE Suite 18777, Atlanta, GA 31126",
    href: null,
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon-Fri: 9AM - 6PM",
    href: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description:
        "Thank you for contacting us. We will get back to you shortly.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        {/* Page Header */}
        <section className="bg-primary py-20">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-secondary font-semibold tracking-wide uppercase mb-4">
                Get In Touch
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Schedule a free consultation to discuss your legal needs. We're
                here to help you navigate your legal challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {item.title}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-muted-foreground hover:text-secondary transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="mt-12 p-6 bg-primary">
                  <h3 className="font-serif text-lg font-semibold text-primary-foreground mb-3">
                    Free Consultation
                  </h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">
                    We offer free initial consultations for most practice areas.
                    Contact us today to schedule your appointment and discuss
                    your case with our experienced legal team.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card border border-border p-8 md:p-12">
                  <h2 className="font-serif text-2xl font-semibold text-card-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Please describe your legal matter..."
                        rows={6}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
