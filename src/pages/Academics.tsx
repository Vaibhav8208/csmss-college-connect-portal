
import Navigation from '../components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, GraduationCap, Calendar, Download, Clock, Users, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Academics = () => {
  const { toast } = useToast();

  const courses = [
    {
      name: "Computer Science Engineering",
      duration: "4 Years",
      seats: "120",
      eligibility: "10+2 with PCM",
      description: "Advanced computing, programming, and software development",
      fees: "₹80,000/year",
      highlights: ["AI/ML Specialization", "Industry Projects", "100% Placement Record"]
    },
    {
      name: "Mechanical Engineering", 
      duration: "4 Years",
      seats: "100",
      eligibility: "10+2 with PCM",
      description: "Design, manufacturing, and mechanical systems",
      fees: "₹75,000/year",
      highlights: ["CAD/CAM Lab", "Robotics", "Automotive Projects"]
    },
    {
      name: "Civil Engineering",
      duration: "4 Years", 
      seats: "80",
      eligibility: "10+2 with PCM",
      description: "Infrastructure, construction, and structural engineering",
      fees: "₹70,000/year",
      highlights: ["Smart Cities", "Structural Design", "Environmental Engineering"]
    },
    {
      name: "Electronics Engineering",
      duration: "4 Years",
      seats: "60",
      eligibility: "10+2 with PCM", 
      description: "Electronics, communication, and embedded systems",
      fees: "₹78,000/year",
      highlights: ["IoT Projects", "VLSI Design", "Communication Systems"]
    }
  ];

  const downloadFiles = [
    { name: "Academic Calendar 2024-25", size: "2.5 MB", type: "PDF", url: "#" },
    { name: "Course Syllabus - All Branches", size: "8.1 MB", type: "PDF", url: "#" },
    { name: "Examination Schedule", size: "1.2 MB", type: "PDF", url: "#" },
    { name: "Fee Structure", size: "0.8 MB", type: "PDF", url: "#" }
  ];

  const handleDownload = (fileName: string) => {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjMKJcTl8uXrp/Og0MTGCjQgMCBvYmoKPDwKL0xlbmd0aCA0NTAKL0ZpbHRlciAvRmxhdGVEZWNvZGUKPj4Kc3RyZWFtCnic';
    link.download = `${fileName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download Started",
      description: `${fileName} is being downloaded.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">Academics</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Excellence in engineering education with industry-aligned curriculum and modern facilities
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-300 rounded-full"></div>
          <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-green-300 rounded-full"></div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose from our diverse range of engineering programs designed for the future</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    {course.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-800">Duration</span>
                      </div>
                      <span className="text-blue-700 font-semibold">{course.duration}</span>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Users className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-800">Seats</span>
                      </div>
                      <span className="text-green-700 font-semibold">{course.seats}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-sm font-medium text-gray-600">Eligibility: </span>
                      <span className="text-gray-800">{course.eligibility}</span>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <span className="text-sm font-medium text-purple-600">Annual Fees: </span>
                      <span className="text-purple-800 font-bold">{course.fees}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Academic Resources</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Download important academic documents and schedules</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {downloadFiles.map((file, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg">
                        <FileText className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg">{file.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{file.type} • {file.size}</p>
                      </div>
                    </div>
                    <Button 
                      onClick={() => handleDownload(file.name)}
                      className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
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
