
import Navigation from '../components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CalendarDays, FileText, Users, CheckCircle, Download, Mail, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const Admission = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: ''
  });

  const admissionSteps = [
    {
      step: "1",
      title: "Fill Application Form",
      description: "Complete the online application form with required details",
      color: "from-blue-500 to-purple-500"
    },
    {
      step: "2", 
      title: "Submit Documents",
      description: "Upload all required documents including certificates",
      color: "from-green-500 to-teal-500"
    },
    {
      step: "3",
      title: "Pay Application Fee", 
      description: "Pay the application fee through online payment",
      color: "from-orange-500 to-red-500"
    },
    {
      step: "4",
      title: "Entrance Exam",
      description: "Appear for entrance examination or submit valid scores",
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "5",
      title: "Merit List & Counseling",
      description: "Check merit list and attend counseling session",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const importantDates = [
    { event: "Application Start Date", date: "June 1, 2024", status: "completed" },
    { event: "Application Last Date", date: "July 15, 2024", status: "active" },
    { event: "Entrance Exam", date: "July 25, 2024", status: "upcoming" },
    { event: "Merit List Declaration", date: "August 5, 2024", status: "upcoming" },
    { event: "Counseling Dates", date: "August 10-20, 2024", status: "upcoming" },
    { event: "Classes Begin", date: "September 1, 2024", status: "upcoming" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.course) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Application Submitted!",
      description: "Your application has been submitted successfully. You will receive a confirmation email shortly.",
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      course: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-green-600 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Admissions 2024-25</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Join CSMSS College and be part of our legacy of excellence in engineering education
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg px-8 py-4">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Admission Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Follow these simple steps to secure your admission</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {admissionSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg`}>
                    {step.step}
                  </div>
                  <CardTitle className="text-lg text-gray-800">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Important Dates</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Mark your calendar with these important dates</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {importantDates.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0">
                      <div className="flex items-center gap-4">
                        <CalendarDays className="w-6 h-6 text-blue-600" />
                        <div>
                          <span className="font-bold text-gray-800 text-lg">{item.event}</span>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              item.status === 'completed' ? 'bg-green-100 text-green-800' :
                              item.status === 'active' ? 'bg-blue-100 text-blue-800' :
                              'bg-orange-100 text-orange-800'
                            }`}>
                              {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="text-gray-600 font-semibold text-lg">{item.date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Quick Application</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get started with your application today</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Application Form</CardTitle>
                <CardDescription className="text-lg text-gray-600">Fill in your basic details to begin the application process</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-700 font-semibold">First Name *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name" 
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="mt-2 border-2 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-700 font-semibold">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name" 
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="mt-2 border-2 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <Label htmlFor="email" className="text-gray-700 font-semibold">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-2 border-2 focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-2 border-2 focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-8">
                    <Label htmlFor="course" className="text-gray-700 font-semibold">Preferred Course *</Label>
                    <select 
                      className="w-full p-3 border-2 border-gray-200 rounded-md mt-2 focus:border-blue-500 focus:outline-none"
                      value={formData.course}
                      onChange={(e) => handleInputChange('course', e.target.value)}
                    >
                      <option value="">Select Course</option>
                      <option value="cse">Computer Science Engineering</option>
                      <option value="mechanical">Mechanical Engineering</option>
                      <option value="civil">Civil Engineering</option>
                      <option value="electronics">Electronics Engineering</option>
                    </select>
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg py-4"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
