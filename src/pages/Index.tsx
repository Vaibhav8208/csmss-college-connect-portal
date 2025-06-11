
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
            <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
              <div className="max-w-5xl px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-3xl mb-10 animate-fade-in text-gray-100 leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg px-8 py-4" asChild>
                    <Link to="/academics">Explore Courses</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 py-4" asChild>
                    <Link to="/admission">Apply Now</Link>
                  </Button>
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
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="bg-white/20 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <stat.icon className="w-10 h-10" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.count}</div>
                <div className="text-xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News & Updates */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Latest News & Updates</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Stay updated with the latest happenings at CSMSS College</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {latestNews.map((news) => (
              <Card key={news.id} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      news.type === 'Admission' ? 'bg-gradient-to-r from-green-100 to-green-200 text-green-800' :
                      news.type === 'Event' ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800' :
                      'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800'
                    }`}>
                      {news.type}
                    </span>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{news.date}</span>
                  </div>
                  <CardTitle className="text-lg text-gray-800 leading-relaxed">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-2 border-blue-200 hover:bg-blue-50 font-semibold" asChild>
                    <Link to="/notices">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3">
              <Link to="/notices">View All Notices</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose CSMSS */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Why Choose CSMSS College?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Excellence in every aspect of education</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-green-50">
              <CardContent className="pt-8">
                <div className="p-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-fit mx-auto mb-6">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Quality Education</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Experienced faculty and modern teaching methods ensure the best learning experience.</p>
                <Button variant="outline" className="border-2 border-green-200 hover:bg-green-50 font-semibold" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-purple-50">
              <CardContent className="pt-8">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-fit mx-auto mb-6">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Expert Faculty</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Learn from industry experts and experienced professors with cutting-edge knowledge.</p>
                <Button variant="outline" className="border-2 border-purple-200 hover:bg-purple-50 font-semibold" asChild>
                  <Link to="/departments">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50">
              <CardContent className="pt-8">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full w-fit mx-auto mb-6">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Modern Curriculum</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Updated curriculum aligned with industry requirements and global standards.</p>
                <Button variant="outline" className="border-2 border-blue-200 hover:bg-blue-50 font-semibold" asChild>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We're here to help you with your educational journey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-orange-50">
              <CardContent className="pt-8">
                <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-fit mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-3 text-gray-800 text-xl">Phone</h3>
                <p className="text-gray-600 text-lg">+91-240-2334455</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50">
              <CardContent className="pt-8">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-fit mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-3 text-gray-800 text-xl">Email</h3>
                <p className="text-gray-600 text-lg">info@csmsscollege.edu.in</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-green-50">
              <CardContent className="pt-8">
                <div className="p-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full w-fit mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-3 text-gray-800 text-xl">Address</h3>
                <p className="text-gray-600 text-lg">CSMSS Campus, Aurangabad</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 via-blue-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">CSMSS College</h3>
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
