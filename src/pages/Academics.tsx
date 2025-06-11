
import Navigation from '../components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, GraduationCap, Calendar, Download, Clock, Users } from 'lucide-react';

const Academics = () => {
  const courses = [
    {
      name: "Computer Science Engineering",
      duration: "4 Years",
      seats: "120",
      eligibility: "10+2 with PCM",
      description: "Advanced computing, programming, and software development"
    },
    {
      name: "Mechanical Engineering", 
      duration: "4 Years",
      seats: "100",
      eligibility: "10+2 with PCM",
      description: "Design, manufacturing, and mechanical systems"
    },
    {
      name: "Civil Engineering",
      duration: "4 Years", 
      seats: "80",
      eligibility: "10+2 with PCM",
      description: "Infrastructure, construction, and structural engineering"
    },
    {
      name: "Electronics Engineering",
      duration: "4 Years",
      seats: "60",
      eligibility: "10+2 with PCM", 
      description: "Electronics, communication, and embedded systems"
    }
  ];

  const downloadFiles = [
    { name: "Academic Calendar 2024-25", size: "2.5 MB", type: "PDF" },
    { name: "Course Syllabus - All Branches", size: "8.1 MB", type: "PDF" },
    { name: "Examination Schedule", size: "1.2 MB", type: "PDF" },
    { name: "Fee Structure", size: "0.8 MB", type: "PDF" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Academics</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Excellence in engineering education with industry-aligned curriculum and modern facilities
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-xl text-muted-foreground">Choose from our diverse range of engineering programs</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    {course.name}
                  </CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{course.seats} seats</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{course.eligibility}</div>
                  </div>
                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Academic Resources</h2>
            <p className="text-xl text-muted-foreground">Download important academic documents and schedules</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {downloadFiles.map((file, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Download className="w-8 h-8 text-primary" />
                      <div>
                        <h3 className="font-semibold">{file.name}</h3>
                        <p className="text-sm text-muted-foreground">{file.type} • {file.size}</p>
                      </div>
                    </div>
                    <Button size="sm">Download</Button>
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

export default Academics;
