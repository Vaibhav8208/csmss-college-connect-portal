
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, BookOpen, Award, Bell, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      title: "Welcome to CSMSS College",
      subtitle: "Excellence in Education Since 1975"
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "Shape Your Future",
      subtitle: "Quality Education & Innovation"
    },
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      title: "Modern Learning Environment",
      subtitle: "State-of-the-art Facilities"
    }
  ];

  const latestNews = [
    {
      id: 1,
      title: "Admission Open for Academic Year 2024-25",
      date: "2024-06-01",
      type: "Admission"
    },
    {
      id: 2,
      title: "Annual Tech Fest 'TechnoVision 2024' Registration Started",
      date: "2024-05-28",
      type: "Event"
    },
    {
      id: 3,
      title: "Summer Vacation Notice - Classes Resume from June 15",
      date: "2024-05-25",
      type: "Notice"
    }
  ];

  const quickStats = [
    { icon: Users, label: "Students", count: "5000+" },
    { icon: BookOpen, label: "Courses", count: "25+" },
    { icon: Award, label: "Awards", count: "50+" },
    { icon: Calendar, label: "Years", count: "49+" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
              <div className="max-w-4xl px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 animate-fade-in">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <Link to="/academics">Explore Courses</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black" asChild>
                    <Link to="/admission">Apply Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.count}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News & Updates */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Latest News & Updates</h2>
            <p className="text-xl text-muted-foreground">Stay updated with the latest happenings at CSMSS College</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {latestNews.map((news) => (
              <Card key={news.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {news.type}
                    </span>
                    <span className="text-sm text-muted-foreground">{news.date}</span>
                  </div>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/notices">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild>
              <Link to="/notices">View All Notices</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose CSMSS */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose CSMSS College?</h2>
            <p className="text-xl text-muted-foreground">Excellence in every aspect of education</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
                <p className="text-muted-foreground">Experienced faculty and modern teaching methods ensure the best learning experience.</p>
                <Button variant="outline" className="mt-4" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
                <p className="text-muted-foreground">Learn from industry experts and experienced professors.</p>
                <Button variant="outline" className="mt-4" asChild>
                  <Link to="/departments">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Modern Curriculum</h3>
                <p className="text-muted-foreground">Updated curriculum aligned with industry requirements and global standards.</p>
                <Button variant="outline" className="mt-4" asChild>
                  <Link to="/academics">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">We're here to help you with your educational journey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Phone className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">+91-240-2334455</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">info@csmsscollege.edu.in</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground">CSMSS Campus, Aurangabad</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CSMSS College</h3>
              <p className="text-sm opacity-90">Excellence in education since 1975. Shaping futures, building careers.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:underline">About Us</Link></li>
                <li><Link to="/departments" className="hover:underline">Departments</Link></li>
                <li><Link to="/academics" className="hover:underline">Academics</Link></li>
                <li><Link to="/admission" className="hover:underline">Admission</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/notices" className="hover:underline">Notices</Link></li>
                <li><Link to="/events" className="hover:underline">Events</Link></li>
                <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
                <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-sm opacity-90 mb-2">Follow us on social media for latest updates</p>
              <div className="text-sm">
                <p>Phone: +91-240-2334455</p>
                <p>Email: info@csmsscollege.edu.in</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 CSMSS College. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
