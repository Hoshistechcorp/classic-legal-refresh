import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, User } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Real Estate Closings in Georgia: A Complete Guide",
    excerpt: "Navigate the complexities of property transactions with confidence. Learn what to expect during your real estate closing process in Georgia.",
    category: "Closings",
    date: "December 28, 2024",
    author: "Attorney Awe",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
    slug: "understanding-real-estate-closings-georgia"
  },
  {
    id: 2,
    title: "Navigating Divorce in Georgia: Your Rights and Options",
    excerpt: "Divorce can be overwhelming. Here's what you need to know about the divorce process, asset division, and custody arrangements in Georgia.",
    category: "Family Law",
    date: "December 20, 2024",
    author: "Attorney Awe",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop",
    slug: "navigating-divorce-georgia"
  },
  {
    id: 3,
    title: "What to Do After a Car Accident: Protecting Your Rights",
    excerpt: "The steps you take immediately after an accident can significantly impact your personal injury claim. Learn how to protect yourself.",
    category: "Personal Injury",
    date: "December 15, 2024",
    author: "Attorney Awe",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop",
    slug: "what-to-do-after-car-accident"
  },
  {
    id: 4,
    title: "Georgia Alcohol Licensing: Requirements for Bars and Restaurants",
    excerpt: "Opening a bar or restaurant in Georgia? Understand the licensing requirements, application process, and compliance regulations.",
    category: "Alcohol Licensing",
    date: "December 10, 2024",
    author: "Attorney Awe",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&auto=format&fit=crop",
    slug: "georgia-alcohol-licensing-requirements"
  },
  {
    id: 5,
    title: "Child Custody Laws in Georgia: Best Interests of the Child",
    excerpt: "Georgia courts prioritize the best interests of children in custody decisions. Learn about the factors that influence custody arrangements.",
    category: "Family Law",
    date: "December 5, 2024",
    author: "Attorney Awe",
    image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&auto=format&fit=crop",
    slug: "child-custody-laws-georgia"
  },
  {
    id: 6,
    title: "Commercial Real Estate Closings: Key Considerations for Investors",
    excerpt: "Commercial property transactions require careful attention to due diligence, zoning, and financing. Here's what investors need to know.",
    category: "Closings",
    date: "November 28, 2024",
    author: "Attorney Awe",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
    slug: "commercial-real-estate-closings"
  },
  {
    id: 7,
    title: "Slip and Fall Accidents: Proving Negligence in Georgia",
    excerpt: "Premises liability cases require proving the property owner knew or should have known about the dangerous condition. Learn how to build your case.",
    category: "Personal Injury",
    date: "November 20, 2024",
    author: "Attorney Awe",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    slug: "slip-fall-accidents-proving-negligence"
  },
  {
    id: 8,
    title: "Liquor License Transfers: What You Need to Know",
    excerpt: "Buying a business with an existing liquor license? Understand the transfer process, timeline, and potential pitfalls to avoid.",
    category: "Alcohol Licensing",
    date: "November 15, 2024",
    author: "Attorney Awe",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&auto=format&fit=crop",
    slug: "liquor-license-transfers"
  },
  {
    id: 9,
    title: "Firm Update: AWE Law Firm Expands Practice Areas",
    excerpt: "We're excited to announce the expansion of our legal services to better serve the Atlanta community and surrounding areas.",
    category: "Firm News",
    date: "November 10, 2024",
    author: "Attorney Awe",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
    slug: "awe-law-firm-expands-practice-areas"
  }
];

const categories = ["All", "Closings", "Family Law", "Personal Injury", "Alcohol Licensing", "Firm News"];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-32 pb-20">
        {/* Hero Section */}
        <section className="bg-primary py-16">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Legal Insights & News
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Stay informed with the latest legal news, case studies, and insights from the AWE Law Firm
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant={category === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <Badge variant="secondary" className="w-fit mb-2">
                      {post.category}
                    </Badge>
                    <h2 className="text-xl font-serif font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-medium mt-4 hover:gap-3 transition-all"
                    >
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-muted">
          <div className="container text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest legal insights, firm updates, and important announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-input bg-background"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
