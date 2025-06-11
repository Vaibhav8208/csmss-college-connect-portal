
import Navigation from '../components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, Award, Download, Mail, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const Departments = () => {
  const { toast } = useToast();

  const departments = [
    {
      name: "Computer Science Engineering",
      description: "Leading department in software development, AI, and data science",
      hod: "Dr. Rajesh Kumar",
      students: "400+",
      faculty: "25",
      labs: "8",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176",
      highlights: ["AI/ML Lab", "Software Development", "Cybersecurity"]
    },
    {
      name: "Mechanical Engineering", 
      description: "Excellence in design, manufacturing, and automotive engineering",
      hod: "Dr. Priya Sharma",
      students: "350+",
      faculty: "20",
      labs: "6",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780",
      highlights: ["CAD/CAM", "Robotics", "Thermal Engineering"]
    },
    {
      name: "Civil Engineering",
      description: "Building the future with structural and environmental engineering",
      hod: "Dr. Amit Patil",
      students: "300+",
      faculty: "18",
      labs: "5",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
      highlights: ["Smart Cities", "Structural Design", "Environmental Engg"]
    },
    {
      name: "Electronics Engineering",
      description: "Innovation in electronics, communication, and embedded systems",
      hod: "Prof. Sunita Patel",
      students: "250+",
      faculty: "15",
      labs: "7",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176",
      highlights: ["IoT", "VLSI Design", "Communication Systems"]
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
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1f9?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Rajesh Kumar",
      designation: "Head of Department - Computer Science",
      qualification: "Ph.D. in Computer Science",
      experience: "20 years",
      specialization: "AI, Machine Learning, Data Science",
      email: "rajesh.kumar@csmsscollege.edu.in",
      phone: "+91-240-2334461",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Priya Sharma",
      designation: "Head of Department - Mechanical",
      qualification: "Ph.D. in Mechanical Engineering", 
      experience: "18 years",
      specialization: "Thermal Engineering, Manufacturing",
      email: "priya.sharma@csmsscollege.edu.in",
      phone: "+91-240-2334462",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Amit Patil",
      designation: "Head of Department - Civil",
      qualification: "Ph.D. in Civil Engineering",
      experience: "22 years",
      specialization: "Structural Engineering, Construction",
      email: "amit.patil@csmsscollege.edu.in",
      phone: "+91-240-2334463",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const handleDownloadBrochure = (deptName: string) => {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjMKJcTl8uXrp/Og0MTGCjQgMCBvYmoKPDwKL0xlbmd0aCA0NTAKL0ZpbHRlciAvRmxhdGVEZWNvZGUKPj4Kc3RyZWFtCnic';
    link.download = `${deptName.replace(/\s+/g, '_')}_Brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download Started",
      description: `${deptName} brochure is being downloaded.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Our Departments</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Explore our diverse engineering departments, each committed to excellence in education and research
            </p>
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            {departments.map((dept, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={dept.image} 
                    alt={dept.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{dept.name}</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">{dept.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center bg-blue-50 p-3 rounded-lg">
                      <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <div className="text-lg font-bold text-blue-800">{dept.students}</div>
                      <div className="text-xs text-blue-600">Students</div>
                    </div>
                    <div className="text-center bg-green-50 p-3 rounded-lg">
                      <BookOpen className="w-6 h-6 mx-auto mb-2 text-green-600" />
                      <div className="text-lg font-bold text-green-800">{dept.faculty}</div>
                      <div className="text-xs text-green-600">Faculty</div>
                    </div>
                    <div className="text-center bg-purple-50 p-3 rounded-lg">
                      <Award className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                      <div className="text-lg font-bold text-purple-800">{dept.labs}</div>
                      <div className="text-xs text-purple-600">Labs</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="font-semibold text-gray-700">Head of Department: </span>
                      <span className="text-gray-800">{dept.hod}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700 block mb-2">Key Areas:</span>
                      <div className="flex flex-wrap gap-2">
                        {dept.highlights.map((highlight, idx) => (
                          <span key={idx} className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button asChild className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold">
                      <Link to="/academics">Learn More</Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => handleDownloadBrochure(dept.name)}
                      className="border-2 border-blue-200 hover:bg-blue-50"
                    >
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
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Faculty Directory</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Meet our experienced and dedicated faculty members</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardContent className="pt-8">
                  <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-blue-200">
                    <img 
                      src={faculty.image} 
                      alt={faculty.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">{faculty.name}</h3>
                  <p className="text-sm text-blue-600 mb-3 font-semibold">{faculty.designation}</p>
                  <p className="text-xs text-gray-600 mb-2">{faculty.qualification}</p>
                  <p className="text-xs text-gray-600 mb-2">{faculty.experience} Experience</p>
                  <p className="text-xs text-gray-600 mb-4 font-medium">{faculty.specialization}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-xs bg-blue-50 p-2 rounded">
                      <Mail className="w-3 h-3 text-blue-600" />
                      <span className="truncate text-blue-800">{faculty.email.split('@')[0]}...</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs bg-green-50 p-2 rounded">
                      <Phone className="w-3 h-3 text-green-600" />
                      <span className="text-green-800">{faculty.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Department Resources</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Download department brochures and important documents</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-green-50">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-fit mx-auto mb-6">
                    <BookOpen className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="font-bold mb-3 text-gray-800 text-lg">{dept.name}</h3>
                  <p className="text-sm text-gray-600 mb-6">Department Brochure & Course Details</p>
                  <Button 
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold" 
                    onClick={() => handleDownloadBrochure(dept.name)}
                  >
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
