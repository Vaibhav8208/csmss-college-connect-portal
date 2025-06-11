
import Navigation from '../components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, Award, Download, Mail, Phone } from 'lucide-react';

const Departments = () => {
  const departments = [
    {
      name: "Computer Science Engineering",
      description: "Leading department in software development, AI, and data science",
      hod: "Dr. Rajesh Kumar",
      students: "400+",
      faculty: "25",
      labs: "8",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176"
    },
    {
      name: "Mechanical Engineering", 
      description: "Excellence in design, manufacturing, and automotive engineering",
      hod: "Dr. Priya Sharma",
      students: "350+",
      faculty: "20",
      labs: "6",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780"
    },
    {
      name: "Civil Engineering",
      description: "Building the future with structural and environmental engineering",
      hod: "Dr. Amit Patil",
      students: "300+",
      faculty: "18",
      labs: "5",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
    },
    {
      name: "Electronics Engineering",
      description: "Innovation in electronics, communication, and embedded systems",
      hod: "Prof. Sunita Patel",
      students: "250+",
      faculty: "15",
      labs: "7",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176"
    }
  ];

  const facultyMembers = [
    {
      name: "Prof. Sunita Patel",
      designation: "Head of Department - Electronics",
      qualification: "Ph.D. in Electronics Engineering",
      experience: "15 years",
      specialization: "Embedded Systems, IoT",
      email: "sunita.patel@csmsscollege.edu.in",
      phone: "+91-240-2334460",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1f9"
    },
    {
      name: "Dr. Rajesh Kumar",
      designation: "Head of Department - Computer Science",
      qualification: "Ph.D. in Computer Science",
      experience: "20 years",
      specialization: "AI, Machine Learning, Data Science",
      email: "rajesh.kumar@csmsscollege.edu.in",
      phone: "+91-240-2334461",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Dr. Priya Sharma",
      designation: "Head of Department - Mechanical",
      qualification: "Ph.D. in Mechanical Engineering", 
      experience: "18 years",
      specialization: "Thermal Engineering, Manufacturing",
      email: "priya.sharma@csmsscollege.edu.in",
      phone: "+91-240-2334462",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    },
    {
      name: "Dr. Amit Patil",
      designation: "Head of Department - Civil",
      qualification: "Ph.D. in Civil Engineering",
      experience: "22 years",
      specialization: "Structural Engineering, Construction",
      email: "amit.patil@csmsscollege.edu.in",
      phone: "+91-240-2334463",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Our Departments</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Explore our diverse engineering departments, each committed to excellence in education and research
            </p>
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={dept.image} 
                    alt={dept.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{dept.name}</CardTitle>
                  <CardDescription>{dept.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <Users className="w-6 h-6 mx-auto mb-1 text-primary" />
                      <div className="text-sm font-medium">{dept.students}</div>
                      <div className="text-xs text-muted-foreground">Students</div>
                    </div>
                    <div className="text-center">
                      <BookOpen className="w-6 h-6 mx-auto mb-1 text-primary" />
                      <div className="text-sm font-medium">{dept.faculty}</div>
                      <div className="text-xs text-muted-foreground">Faculty</div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm">
                      <span className="font-medium">Head of Department:</span> {dept.hod}
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Laboratories:</span> {dept.labs}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1">Learn More</Button>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Brochure
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Directory */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Faculty Directory</h2>
            <p className="text-xl text-muted-foreground">Meet our experienced and dedicated faculty members</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src={faculty.image} 
                      alt={faculty.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{faculty.name}</h3>
                  <p className="text-sm text-primary mb-2">{faculty.designation}</p>
                  <p className="text-xs text-muted-foreground mb-2">{faculty.qualification}</p>
                  <p className="text-xs text-muted-foreground mb-2">{faculty.experience} Experience</p>
                  <p className="text-xs text-muted-foreground mb-4">{faculty.specialization}</p>
                  <div className="space-y-1">
                    <div className="flex items-center justify-center gap-1 text-xs">
                      <Mail className="w-3 h-3" />
                      <span className="truncate">{faculty.email}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-xs">
                      <Phone className="w-3 h-3" />
                      <span>{faculty.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Department Resources</h2>
            <p className="text-xl text-muted-foreground">Download department brochures and important documents</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">{dept.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">Department Brochure</p>
                  <Button className="w-full" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download Brochure
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
