
import Navigation from '../components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CalendarDays, FileText, Users, CheckCircle, Download, Mail, Phone } from 'lucide-react';

const Admission = () => {
  const admissionSteps = [
    {
      step: "1",
      title: "Fill Application Form",
      description: "Complete the online application form with required details"
    },
    {
      step: "2", 
      title: "Submit Documents",
      description: "Upload all required documents including certificates"
    },
    {
      step: "3",
      title: "Pay Application Fee", 
      description: "Pay the application fee through online payment"
    },
    {
      step: "4",
      title: "Entrance Exam",
      description: "Appear for entrance examination or submit valid scores"
    },
    {
      step: "5",
      title: "Merit List & Counseling",
      description: "Check merit list and attend counseling session"
    }
  ];

  const importantDates = [
    { event: "Application Start Date", date: "June 1, 2024" },
    { event: "Application Last Date", date: "July 15, 2024" },
    { event: "Entrance Exam", date: "July 25, 2024" },
    { event: "Merit List Declaration", date: "August 5, 2024" },
    { event: "Counseling Dates", date: "August 10-20, 2024" },
    { event: "Classes Begin", date: "September 1, 2024" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Admissions 2024-25</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Join CSMSS College and be part of our legacy of excellence in engineering education
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Admission Process</h2>
            <p className="text-xl text-muted-foreground">Follow these simple steps to secure your admission</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {admissionSteps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Important Dates</h2>
            <p className="text-xl text-muted-foreground">Mark your calendar with these important dates</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {importantDates.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
                      <div className="flex items-center gap-3">
                        <CalendarDays className="w-5 h-5 text-primary" />
                        <span className="font-medium">{item.event}</span>
                      </div>
                      <span className="text-muted-foreground">{item.date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Quick Application</h2>
            <p className="text-xl text-muted-foreground">Get started with your application today</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Application Form</CardTitle>
                <CardDescription>Fill in your basic details to begin the application process</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
                <div>
                  <Label htmlFor="course">Preferred Course</Label>
                  <select className="w-full p-2 border border-border rounded-md">
                    <option>Select Course</option>
                    <option>Computer Science Engineering</option>
                    <option>Mechanical Engineering</option>
                    <option>Civil Engineering</option>
                    <option>Electronics Engineering</option>
                  </select>
                </div>
                <Button className="w-full">Submit Application</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
