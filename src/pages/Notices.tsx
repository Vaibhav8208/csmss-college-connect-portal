
import { useState } from 'react';
import Navigation from '../components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Bell, Search, Calendar, Download, Eye } from 'lucide-react';

const Notices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const notices = [
    {
      id: 1,
      title: 'Admission Open for Academic Year 2024-25',
      content: 'Applications are now open for all undergraduate and postgraduate programs. Last date for submission is June 30, 2024.',
      date: '2024-06-01',
      category: 'Admission',
      priority: 'High',
      attachment: 'admission_form_2024.pdf'
    },
    {
      id: 2,
      title: 'Annual Tech Fest "TechnoVision 2024" Registration Started',
      content: 'Register now for the biggest technical festival of the year. Multiple competitions, workshops, and guest lectures.',
      date: '2024-05-28',
      category: 'Event',
      priority: 'Medium',
      attachment: null
    },
    {
      id: 3,
      title: 'Summer Vacation Notice - Classes Resume from June 15',
      content: 'All departments will remain closed from May 15 to June 14. Classes will resume on June 15, 2024.',
      date: '2024-05-25',
      category: 'Academic',
      priority: 'High',
      attachment: null
    },
    {
      id: 4,
      title: 'Scholarship Applications Open for Merit Students',
      content: 'Students with CGPA above 8.5 can apply for merit-based scholarships. Application deadline: June 20, 2024.',
      date: '2024-05-20',
      category: 'Scholarship',
      priority: 'Medium',
      attachment: 'scholarship_form.pdf'
    },
    {
      id: 5,
      title: 'Library Timing Changes During Summer',
      content: 'Library will operate from 9:00 AM to 5:00 PM during summer vacation period.',
      date: '2024-05-18',
      category: 'General',
      priority: 'Low',
      attachment: null
    },
    {
      id: 6,
      title: 'End Semester Examination Schedule Released',
      content: 'Examination schedule for all semesters has been published. Students are advised to check the timetable.',
      date: '2024-05-15',
      category: 'Exam',
      priority: 'High',
      attachment: 'exam_schedule_2024.pdf'
    },
    {
      id: 7,
      title: 'Industry Guest Lecture Series - AI & Machine Learning',
      content: 'Join us for an exclusive lecture series by industry experts on AI and Machine Learning applications.',
      date: '2024-05-10',
      category: 'Event',
      priority: 'Medium',
      attachment: null
    },
    {
      id: 8,
      title: 'Fee Payment Deadline Extension',
      content: 'Due to technical issues, the fee payment deadline has been extended to May 31, 2024.',
      date: '2024-05-08',
      category: 'Finance',
      priority: 'High',
      attachment: null
    }
  ];

  const categories = ['All', 'Admission', 'Academic', 'Event', 'Exam', 'Scholarship', 'General', 'Finance'];

  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || notice.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Admission': return 'bg-blue-100 text-blue-800';
      case 'Academic': return 'bg-purple-100 text-purple-800';
      case 'Event': return 'bg-orange-100 text-orange-800';
      case 'Exam': return 'bg-red-100 text-red-800';
      case 'Scholarship': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <Bell className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Notices & Announcements</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay updated with the latest announcements, important dates, and college news.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notices List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {filteredNotices.length > 0 ? (
              filteredNotices.map((notice) => (
                <Card key={notice.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={getCategoryColor(notice.category)}>
                            {notice.category}
                          </Badge>
                          <Badge className={getPriorityColor(notice.priority)}>
                            {notice.priority}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl mb-2">{notice.title}</CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(notice.date).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{notice.content}</p>
                    <div className="flex items-center gap-4">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        Read More
                      </Button>
                      {notice.attachment && (
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download {notice.attachment}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <Bell className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">No Notices Found</h3>
                  <p className="text-muted-foreground">
                    {searchTerm || selectedCategory !== 'All' 
                      ? 'Try adjusting your search or filter criteria.'
                      : 'No notices available at the moment.'}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Pagination */}
          {filteredNotices.length > 0 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss an Update</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to our newsletter and get notified about important announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Enter your email" type="email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notices;
