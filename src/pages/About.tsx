
import Navigation from '../components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, BookOpen, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '1975', event: 'College established with first batch of 50 students' },
    { year: '1980', event: 'Engineering department launched' },
    { year: '1995', event: 'Computer Science department added' },
    { year: '2000', event: 'ISO 9001:2000 certification achieved' },
    { year: '2010', event: 'NAAC A+ accreditation received' },
    { year: '2020', event: 'Digital transformation and online learning implementation' },
  ];

  const leadership = [
    {
      name: 'Dr. Rajesh Sharma',
      position: 'Principal',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      qualification: 'Ph.D. in Computer Science, M.Tech'
    },
    {
      name: 'Prof. Sunita Patel',
      position: 'Vice Principal',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b86ba781',
      qualification: 'M.E. in Electronics, B.Tech'
    },
    {
      name: 'Dr. Amit Kumar',
      position: 'Dean Academic Affairs',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      qualification: 'Ph.D. in Mechanical Engineering'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About CSMSS College</h1>
          <p className="text-xl max-w-3xl mx-auto">
            For nearly five decades, CSMSS College has been a beacon of educational excellence, 
            nurturing minds and shaping futures with dedication and innovation.
          </p>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <Eye className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Vision</h3>
                <p className="text-muted-foreground">
                  To be a globally recognized institution of higher learning that empowers 
                  students with knowledge, skills, and values for lifelong success.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Mission</h3>
                <p className="text-muted-foreground">
                  To provide quality education through innovative teaching methods, 
                  research excellence, and industry collaboration while fostering 
                  holistic development of students.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Values</h3>
                <p className="text-muted-foreground">
                  Excellence, Integrity, Innovation, Inclusivity, and Social Responsibility 
                  form the cornerstone of our educational philosophy and institutional culture.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">Key milestones in our educational excellence journey</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                      <p className="text-muted-foreground">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">Meet our experienced leaders guiding the institution</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                  <p className="text-primary font-medium mb-2">{leader.position}</p>
                  <p className="text-sm text-muted-foreground">{leader.qualification}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl opacity-90">Recognition and accolades that reflect our commitment to excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">NAAC A+</h3>
              <p className="opacity-90">Accreditation</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">95%</h3>
              <p className="opacity-90">Placement Rate</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="opacity-90">Research Papers</p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">100+</h3>
              <p className="opacity-90">Industry Partners</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
