import { Link } from "react-router-dom";
import { Calendar, ArrowRight, User } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const featuredPosts = [
  {
    id: 1,
    title: "Understanding Real Estate Closings in Georgia",
    excerpt: "Navigate the complexities of property transactions with confidence. Learn what to expect during your real estate closing.",
    category: "Closings",
    date: "December 28, 2024",
    author: "Attorney Awe",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
    slug: "understanding-real-estate-closings-georgia"
  },
  {
    id: 2,
    title: "Navigating Divorce in Georgia: Your Rights",
    excerpt: "Divorce can be overwhelming. Here's what you need to know about the divorce process and custody arrangements.",
    category: "Family Law",
    date: "December 20, 2024",
    author: "Attorney Awe",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop",
    slug: "navigating-divorce-georgia"
  },
  {
    id: 3,
    title: "What to Do After a Car Accident",
    excerpt: "The steps you take immediately after an accident can significantly impact your personal injury claim.",
    category: "Personal Injury",
    date: "December 15, 2024",
    author: "Attorney Awe",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop",
    slug: "what-to-do-after-car-accident"
  }
];

export const BlogSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
            Legal Insights
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Latest News & Articles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest legal news, case studies, and insights from our experienced attorneys
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
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
                <h3 className="text-lg font-serif font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-medium mt-4 text-sm hover:gap-3 transition-all"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/blog" className="inline-flex items-center gap-2">
              View All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
