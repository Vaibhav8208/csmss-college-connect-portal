
import Navigation from '../components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, ArrowRight, Star } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Events = () => {
  const { toast } = useToast();
  const [visibleEvents, setVisibleEvents] = useState(4);

  const upcomingEvents = [
    {
      id: 1,
      title: "TechnoVision 2024 - Annual Tech Fest",
      date: "2024-07-15",
      time: "9:00 AM - 6:00 PM",
      location: "Main Campus Auditorium",
      description: "Join us for our annual technical festival featuring competitions, workshops, and tech talks by industry experts.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      type: "Technical",
      registrations: "500+ registered",
      featured: true
    },
    {
      id: 2,
      title: "Engineering Excellence Awards",
      date: "2024-07-20",
      time: "5:00 PM - 8:00 PM", 
      location: "College Auditorium",
      description: "Recognizing outstanding achievements in engineering projects and research by our students and faculty.",
      image: "https://images.unsplash.com/photo-1559223607-d9176c17c7db",
      type: "Awards",
      registrations: "200+ registered",
      featured: false
    },
    {
      id: 3,
      title: "Industry Connect Seminar",
      date: "2024-07-25",
      time: "10:00 AM - 4:00 PM",
      location: "Conference Hall",
      description: "Connect with industry leaders and explore career opportunities in engineering and technology.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
      type: "Seminar",
      registrations: "300+ registered",
      featured: false
    },
    {
      id: 4,
      title: "Cultural Night - Sanskriti 2024",
      date: "2024-08-01",
      time: "6:00 PM - 10:00 PM",
      location: "Open Air Theatre",
      description: "Celebrate diversity with cultural performances, music, dance, and traditional festivities.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
      type: "Cultural",
      registrations: "800+ registered",
      featured: true
    },
    {
      id: 5,
      title: "Robotics Workshop",
      date: "2024-08-05",
      time: "2:00 PM - 5:00 PM",
      location: "Robotics Lab",
      description: "Hands-on workshop on building and programming robots with industry experts.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      type: "Workshop",
      registrations: "150+ registered",
      featured: false
    },
    {
      id: 6,
      title: "Startup Pitch Competition",
      date: "2024-08-10",
      time: "10:00 AM - 6:00 PM",
      location: "Innovation Hub",
      description: "Student entrepreneurs pitch their innovative ideas to industry veterans and investors.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      type: "Competition",
      registrations: "80+ registered",
      featured: false
    }
  ];

  const pastEvents = [
    {
      title: "Alumni Meet 2024",
      date: "2024-06-15",
      description: "Successful alumni reunion with 200+ attendees",
      participants: "200+"
    },
    {
      title: "Research Symposium",
      date: "2024-06-10", 
      description: "Student research presentations and faculty research showcase",
      participants: "150+"
    },
    {
      title: "Sports Week 2024",
      date: "2024-05-20",
      description: "Inter-college sports competition with multiple events",
      participants: "500+"
    }
  ];

  const handleRegister = (eventTitle: string) => {
    toast({
      title: "Registration Successful!",
      description: `You have successfully registered for ${eventTitle}. Check your email for confirmation.`,
    });
  };

  const loadMoreEvents = () => {
    setVisibleEvents(prev => Math.min(prev + 2, upcomingEvents.length));
  };

  const getTypeColor = (type: string) => {
    const colors = {
      Technical: "from-blue-500 to-purple-500",
      Awards: "from-yellow-500 to-orange-500",
      Seminar: "from-green-500 to-teal-500",
      Cultural: "from-pink-500 to-purple-500",
      Workshop: "from-indigo-500 to-blue-500",
      Competition: "from-red-500 to-pink-500"
    };
    return colors[type as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Events</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Stay updated with all the exciting events, festivals, and activities at CSMSS College
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Don't miss out on these exciting upcoming events</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingEvents.slice(0, visibleEvents).map((event) => (
              <Card key={event.id} className={`overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg ${event.featured ? 'ring-2 ring-yellow-400' : ''}`}>
                {event.featured && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 text-center font-bold">
                    <Star className="w-4 h-4 inline mr-2" />
                    FEATURED EVENT
                  </div>
                )}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-4 py-2 bg-gradient-to-r ${getTypeColor(event.type)} text-white rounded-full text-sm font-semibold`}>
                      {event.type}
                    </span>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{event.registrations}</span>
                  </div>
                  <CardTitle className="text-xl text-gray-800">{event.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm bg-blue-50 p-3 rounded-lg">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-blue-800">{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm bg-green-50 p-3 rounded-lg">
                      <Clock className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-800">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm bg-purple-50 p-3 rounded-lg">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <span className="font-semibold text-purple-800">{event.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold"
                      onClick={() => handleRegister(event.title)}
                    >
                      Register Now
                    </Button>
                    <Button variant="outline" className="border-2 border-blue-200 hover:bg-blue-50">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {visibleEvents < upcomingEvents.length && (
            <div className="text-center mt-12">
              <Button 
                onClick={loadMoreEvents}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 text-lg"
              >
                Load More Events
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Past Events</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Take a look at our recent successful events</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-800">{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    {new Date(event.date).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-600" />
                      <span className="text-green-800 font-semibold">{event.participants} Participants</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
