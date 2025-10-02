import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Preparing Students for Digital Age Learning",
    excerpt: "Exploring how modern educational tools and digital literacy prepare our students for future careers.",
    date: "March 15, 2025",
    author: "Admin",
    category: "Education",
  },
  {
    id: 2,
    title: "The Importance of Extracurricular Activities",
    excerpt: "How sports, arts, and clubs contribute to holistic student development beyond academics.",
    date: "March 10, 2025",
    author: "Admin",
    category: "Student Life",
  },
  {
    id: 3,
    title: "Parent-Teacher Collaboration for Student Success",
    excerpt: "Building strong partnerships between parents and teachers to support student achievement.",
    date: "March 5, 2025",
    author: "Admin",
    category: "Community",
  },
  {
    id: 4,
    title: "STEAM Education: Building Future Innovators",
    excerpt: "Our approach to Science, Technology, Engineering, Arts, and Mathematics education.",
    date: "February 28, 2025",
    author: "Admin",
    category: "Education",
  },
  {
    id: 5,
    title: "Annual Sports Day Highlights",
    excerpt: "Celebrating sportsmanship, teamwork, and athletic excellence at our annual sports meet.",
    date: "February 20, 2025",
    author: "Admin",
    category: "Events",
  },
  {
    id: 6,
    title: "Admission Process: What Parents Need to Know",
    excerpt: "A comprehensive guide to our admission procedures and requirements for new students.",
    date: "February 15, 2025",
    author: "Admin",
    category: "Admissions",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground text-center">
              Latest News & Updates
            </h1>
            <p className="text-xl text-primary-foreground/90 text-center mt-4">
              Stay informed about school events, achievements, and educational insights
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
                >
                  {/* Featured Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary to-secondary"></div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <Button variant="link" className="p-0 h-auto group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Posts
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
