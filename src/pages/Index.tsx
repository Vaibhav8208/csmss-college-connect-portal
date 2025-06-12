
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, BookOpen, Award, Bell, ArrowRight, Phone, Mail, MapPin, Star, Sparkles, Zap } from 'lucide-react';
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

  const exploreSections = [
    {
      icon: BookOpen,
      title: "Academic Programs",
      description: "Discover our comprehensive range of engineering courses",
      link: "/academics",
      color: "blue"
    },
    {
      icon: Users,
      title: "Faculty Excellence",
      description: "Meet our experienced and dedicated faculty members",
      link: "/departments",
      color: "indigo"
    },
    {
      icon: Calendar,
      title: "Campus Events",
      description: "Stay updated with exciting campus activities",
      link: "/events",
      color: "purple"
    },
    {
      icon: Award,
      title: "Achievements",
      description: "Explore our accomplishments and success stories",
      link: "/gallery",
      color: "blue"
    }
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
      <section className="relative h-[85vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-blue-600/60" />
            <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
              <div className="max-w-5xl px-4">
                <div className="animate-fade-in-up">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-blue-gradient">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-3xl mb-10 text-blue-100 leading-relaxed animate-slide-in-left">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-in-right">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 hover-lift animate-pulse-blue" asChild>
                      <Link to="/academics">
                        <Sparkles className="w-5 h-5 mr-2" />
                        Explore Courses
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold text-lg px-8 py-4 hover-lift" asChild>
                      <Link to="/admission">
                        <Zap className="w-5 h-5 mr-2" />
                        Apply Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-300 hover-glow ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-blue-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center group hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-white/20 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 animate-bounce-subtle">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2 text-white">{stat.count}</div>
                <div className="text-xl text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section className="py-20 bg-blue-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-gradient">Explore More</h2>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">Discover all aspects of CSMSS College and find your path to success</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {exploreSections.map((section, index) => (
              <Card key={index} className={`interactive-card bg-white border-0 shadow-lg hover-glow animate-slide-in-left`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className={`p-4 bg-blue-100 rounded-full w-fit mx-auto mb-6 animate-float`} style={{ animationDelay: `${index * 0.5}s` }}>
                    <section.icon className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{section.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{section.description}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <Link to={section.link}>
                      Explore <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News & Updates */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-gradient">Latest News & Updates</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Stay updated with the latest happenings at CSMSS College</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {latestNews.map((news, index) => (
              <Card key={news.id} className="hover-lift border-0 shadow-lg bg-white animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      news.type === 'Admission' ? 'bg-green-100 text-green-800' :
                      news.type === 'Event' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {news.type}
                    </span>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{news.date}</span>
                  </div>
                  <CardTitle className="text-lg text-gray-800 leading-relaxed">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-2 border-blue-200 hover:bg-blue-50 font-semibold hover-glow" asChild>
                    <Link to="/notices">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center animate-fade-in-up">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 hover-lift">
              <Link to="/notices">View All Notices</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose CSMSS */}
      <section className="py-20 bg-blue-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-gradient">Why Choose CSMSS College?</h2>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">Excellence in every aspect of education</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="text-center p-8 hover-lift border-0 shadow-lg bg-white animate-slide-in-left">
              <CardContent className="pt-8">
                <div className="p-4 bg-blue-100 rounded-full w-fit mx-auto mb-6 animate-bounce-subtle">
                  <Award className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Quality Education</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Experienced faculty and modern teaching methods ensure the best learning experience.</p>
                <Button variant="outline" className="border-2 border-blue-200 hover:bg-blue-50 font-semibold hover-glow" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover-lift border-0 shadow-lg bg-white animate-scale-in">
              <CardContent className="pt-8">
                <div className="p-4 bg-blue-100 rounded-full w-fit mx-auto mb-6 animate-float">
                  <Users className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Expert Faculty</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Learn from industry experts and experienced professors with cutting-edge knowledge.</p>
                <Button variant="outline" className="border-2 border-blue-200 hover:bg-blue-50 font-semibold hover-glow" asChild>
                  <Link to="/departments">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover-lift border-0 shadow-lg bg-white animate-slide-in-right">
              <CardContent className="pt-8">
                <div className="p-4 bg-blue-100 rounded-full w-fit mx-auto mb-6 animate-pulse-blue">
                  <BookOpen className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Modern Curriculum</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Updated curriculum aligned with industry requirements and global standards.</p>
                <Button variant="outline" className="border-2 border-blue-200 hover:bg-blue-50 font-semibold hover-glow" asChild>
                  <Link to="/academics">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-gradient">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We're here to help you with your educational journey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover-lift border-0 shadow-lg bg-white hover-glow animate-slide-in-left">
              <CardContent className="pt-8">
                <div className="p-4 bg-orange-100 rounded-full w-fit mx-auto mb-6 animate-bounce-subtle">
                  <Phone className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-bold mb-3 text-gray-800 text-xl">Phone</h3>
                <p className="text-gray-600 text-lg">+91-240-2334455</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover-lift border-0 shadow-lg bg-white hover-glow animate-scale-in">
              <CardContent className="pt-8">
                <div className="p-4 bg-blue-100 rounded-full w-fit mx-auto mb-6 animate-float">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold mb-3 text-gray-800 text-xl">Email</h3>
                <p className="text-gray-600 text-lg">info@csmsscollege.edu.in</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover-lift border-0 shadow-lg bg-white hover-glow animate-slide-in-right">
              <CardContent className="pt-8">
                <div className="p-4 bg-green-100 rounded-full w-fit mx-auto mb-6 animate-pulse-blue">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold mb-3 text-gray-800 text-xl">Address</h3>
                <p className="text-gray-600 text-lg">CSMSS Campus, Aurangabad</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold mb-4 animate-pulse-blue">CSMSS College</h3>
              <p className="text-sm opacity-90 leading-relaxed">Excellence in education since 1975. Shaping futures, building careers.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className="hover:text-blue-300 transition-colors">About Us</Link></li>
                <li><Link to="/departments" className="hover:text-blue-300 transition-colors">Departments</Link></li>
                <li><Link to="/academics" className="hover:text-blue-300 transition-colors">Academics</Link></li>
                <li><Link to="/admission" className="hover:text-blue-300 transition-colors">Admission</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/notices" className="hover:text-blue-300 transition-colors">Notices</Link></li>
                <li><Link to="/events" className="hover:text-blue-300 transition-colors">Events</Link></li>
                <li><Link to="/gallery" className="hover:text-blue-300 transition-colors">Gallery</Link></li>
                <li><Link to="/contact" className="hover:text-blue-300 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Connect</h4>
              <p className="text-sm opacity-90 mb-4">Follow us on social media for latest updates</p>
              <div className="text-sm space-y-2">
                <p>Phone: +91-240-2334455</p>
                <p>Email: info@csmsscollege.edu.in</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm">
            <p>&copy; 2024 CSMSS College. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
