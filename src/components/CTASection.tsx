import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="bg-secondary/10 border border-secondary/20 p-12 md:p-16 text-center">
          <h2 className="section-heading text-foreground mb-6">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Schedule a free consultation today and let us help you understand
            your legal options. We're here to fight for your rights and get you
            the results you deserve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://calendly.com/mya-awelawfirm/30min" target="_blank" rel="noopener noreferrer">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:7132340030">
                <Phone className="mr-2 h-4 w-4" />
                (713) 234-0030
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
