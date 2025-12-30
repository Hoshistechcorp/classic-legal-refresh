import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Star, Quote, Award } from "lucide-react";

const reviews = [
  {
    name: "Verified Client",
    rating: 5,
    title: "Great Lawyer!",
    date: "May 2020",
    text: "Attorney Awe helped me obtain a settlement from a high profile company for personal injury. She was very attentive, provided great background and knowledge on the case and communicated in a timely fashion. I appreciate her hardwork and dedication for justice!",
    case: "Personal Injury",
    verified: true,
  },
  {
    name: "Sarah M.",
    rating: 5,
    title: "Exceptional Family Law Representation",
    date: "October 2020",
    text: "Attorney Awe handled my divorce case with such professionalism and compassion. She made a difficult time so much easier to navigate. She was always available to answer my questions and kept me informed throughout the entire process. I couldn't have asked for better representation.",
    case: "Family Law - Divorce",
    verified: true,
  },
  {
    name: "Michael T.",
    rating: 5,
    title: "Highly Recommend!",
    date: "September 2020",
    text: "Excellent legal services! The Awe Law Firm took the time to understand my case and fought hard for me. They kept me informed every step of the way. I felt like I had a true advocate in my corner. Highly recommend to anyone needing legal representation.",
    case: "Personal Injury",
    verified: true,
  },
  {
    name: "Jennifer L.",
    rating: 5,
    title: "Put My Mind at Ease",
    date: "August 2020",
    text: "I was so stressed about my legal situation, but Attorney Awe and her team put me at ease from our very first consultation. They delivered results beyond my expectations. Professional, knowledgeable, and truly caring about their clients.",
    case: "Family Law",
    verified: true,
  },
  {
    name: "David R.",
    rating: 5,
    title: "Above and Beyond",
    date: "July 2020",
    text: "The Awe Law Firm went above and beyond for my family law case. They were patient, understanding, and most importantly, effective. I felt supported throughout the entire process and am grateful for their dedication to my case.",
    case: "Family Law - Child Custody",
    verified: true,
  },
  {
    name: "Amanda K.",
    rating: 5,
    title: "Outstanding Service",
    date: "June 2020",
    text: "Outstanding service from start to finish. Attorney Awe is incredibly knowledgeable and takes the time to explain everything in terms you can understand. She genuinely cares about her clients and it shows in her work.",
    case: "Real Estate Closing",
    verified: true,
  },
];

const Reviews = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        {/* Page Header */}
        <section className="bg-primary py-20">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-secondary font-semibold tracking-wide uppercase mb-4">
                Testimonials
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
                Client Reviews
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Don't just take our word for it. Read what our satisfied clients
                have to say about their experience with The Awe Law Firm.
              </p>
            </div>
          </div>
        </section>

        {/* Award Banner */}
        <section className="bg-secondary/10 border-y border-secondary/20 py-8">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
              <Award className="h-12 w-12 text-secondary" />
              <div>
                <p className="font-serif text-2xl font-semibold text-foreground">
                  Clients' Choice Award 2020
                </p>
                <p className="text-muted-foreground">
                  Recognized by Avvo for Excellence in Client Satisfaction
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-card border border-border p-8 relative"
                >
                  <Quote className="absolute top-6 right-6 h-12 w-12 text-secondary/10" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-secondary text-secondary"
                      />
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-semibold text-card-foreground mb-3">
                    {review.title}
                  </h3>

                  <p className="text-card-foreground leading-relaxed mb-6 relative z-10">
                    "{review.text}"
                  </p>

                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-card-foreground">
                          {review.name}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{review.case}</span>
                          <span>•</span>
                          <span>{review.date}</span>
                        </div>
                      </div>
                      {review.verified && (
                        <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 font-medium">
                          Hired Attorney
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Avvo Link */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Read more reviews on Avvo
              </p>
              <a
                href="https://www.avvo.com/attorneys/mayowa-awe-5079657.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary hover:underline font-semibold"
              >
                View Our Avvo Profile →
              </a>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
