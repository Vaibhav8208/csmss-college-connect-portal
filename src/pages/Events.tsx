
import Navigation from '../components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const Events = () => {
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
      registrations: "500+ registered"
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
      registrations: "200+ registered"
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
      registrations: "300+ registered"
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
      registrations: "800+ registered"
    }
  ];

  const pastEvents = [
    {
      title: "Alumni Meet 2024",
      date: "2024-06-15",
      description: "Successful alumni reunion with 200+ attendees"
    },
    {
      title: "Research Symposium",
      date: "2024-06-10", 
      description: "Student research presentations and faculty research showcase"
    },
    {
      title: "Sports Week 2024",
      date: "2024-05-20",
      description: "Inter-college sports competition with multiple events"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Events</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Stay updated with all the exciting events, festivals, and activities at CSMSS College
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground">Don't miss out on these exciting upcoming events</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {event.type}
                    </span>
                    <span className="text-sm text-muted-foreground">{event.registrations}</span>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1">Register Now</Button>
                    <Button variant="outline">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Past Events</h2>
            <p className="text-xl text-muted-foreground">Take a look at our recent successful events</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(event.date).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
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
