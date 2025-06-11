
import Navigation from '../components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, Award, Computer, Wrench, Zap, Building, Beaker } from 'lucide-react';

const Departments = () => {
  const departments = [
    {
      name: 'Computer Science & Engineering',
      icon: Computer,
      description: 'Leading the digital revolution with cutting-edge technology and innovation.',
      faculty: 15,
      students: 300,
      labs: 8,
      features: [
        'Advanced Programming Labs',
        'AI & Machine Learning Research',
        'Software Development Projects',
        'Industry Collaboration Programs'
      ],
      hod: 'Dr. Rajesh Sharma',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
    },
    {
      name: 'Mechanical Engineering',
      icon: Wrench,
      description: 'Engineering excellence in design, manufacturing, and mechanical systems.',
      faculty: 12,
      students: 250,
      labs: 6,
      features: [
        'CAD/CAM Laboratory',
        'Robotics & Automation',
        'Thermal Engineering Lab',
        'Manufacturing Technology'
      ],
      hod: 'Prof. Amit Kumar',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
    },
    {
      name: 'Electronics & Communication',
      icon: Zap,
      description: 'Pioneering communication technologies and electronic innovations.',
      faculty: 10,
      students: 200,
      labs: 7,
      features: [
        'Digital Signal Processing',
        'Embedded Systems Lab',
        'Communication Networks',
        'VLSI Design Laboratory'
      ],
      hod: 'Dr. Sunita Patel',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
    },
    {
      name: 'Civil Engineering',
      icon: Building,
      description: 'Building sustainable infrastructure for tomorrow\'s world.',
      faculty: 8,
      students: 180,
      labs: 5,
      features: [
        'Structural Analysis Lab',
        'Environmental Engineering',
        'Transportation Planning',
        'Construction Management'
      ],
      hod: 'Prof. Rahul Desai',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81'
    },
    {
      name: 'Chemical Engineering',
      icon: Beaker,
      description: 'Transforming materials and processes for industrial applications.',
      faculty: 6,
      students: 120,
      labs: 4,
      features: [
        'Process Control Lab',
        'Chemical Reaction Engineering',
        'Mass Transfer Operations',
        'Industrial Chemistry'
      ],
      hod: 'Dr. Priya Sharma',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Departments</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our diverse range of engineering and technology departments, 
            each committed to excellence in education and research.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {departments.map((dept, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="flex items-center mb-4">
                      <dept.icon className="w-8 h-8 text-primary mr-3" />
                      <h2 className="text-2xl font-bold">{dept.name}</h2>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">{dept.description}</p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{dept.faculty}</div>
                        <div className="text-sm text-muted-foreground">Faculty</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{dept.students}</div>
                        <div className="text-sm text-muted-foreground">Students</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{dept.labs}</div>
                        <div className="text-sm text-muted-foreground">Labs</div>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        {dept.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* HOD */}
                    <div className="mb-6">
                      <p className="text-sm"><strong>Head of Department:</strong> {dept.hod}</p>
                    </div>
                    
                    <Button>Learn More</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discover your passion and build your future with our world-class departments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Apply for Admission</Button>
            <Button size="lg" variant="outline">Download Brochure</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
