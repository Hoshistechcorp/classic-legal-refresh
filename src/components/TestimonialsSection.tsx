import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Attorney Awe handled my divorce case with such professionalism and compassion. She made a difficult time so much easier to navigate. I couldn't have asked for better representation.",
    case: "Family Law",
  },
  {
    name: "Michael T.",
    rating: 5,
    text: "Excellent legal services! The Awe Law Firm took the time to understand my case and fought hard for me. They kept me informed every step of the way.",
    case: "Criminal Defense",
  },
  {
    name: "Jennifer L.",
    rating: 5,
    text: "I was so stressed about my legal situation, but Attorney Awe and her team put me at ease. They delivered results beyond my expectations. Highly recommend!",
    case: "Personal Injury",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-semibold tracking-wide uppercase mb-4">
            Client Reviews
          </p>
          <h2 className="section-heading text-primary-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed">
            Don't just take our word for it. Hear from our satisfied clients
            about their experience working with The Awe Law Firm.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 border border-primary-foreground/10 p-8"
            >
              <Quote className="h-10 w-10 text-secondary/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-secondary text-secondary"
                  />
                ))}
              </div>

              <p className="text-primary-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-primary-foreground/10 pt-4">
                <p className="font-semibold text-primary-foreground">
                  {testimonial.name}
                </p>
                <p className="text-primary-foreground/60 text-sm">
                  {testimonial.case}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="secondary" size="lg" asChild>
            <Link to="/reviews">
              Read All Reviews
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
