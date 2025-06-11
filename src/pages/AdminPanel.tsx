
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  BookOpen, 
  Bell, 
  Calendar, 
  Image, 
  Settings, 
  Plus, 
  Edit, 
  Trash2,
  Save,
  LogOut
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminPanel = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [notices, setNotices] = useState([
    { id: 1, title: 'Admission Open for 2024-25', content: 'Applications are now open...', date: '2024-06-01', type: 'Admission' },
    { id: 2, title: 'Tech Fest Registration', content: 'Register for TechnoVision 2024...', date: '2024-05-28', type: 'Event' }
  ]);
  const [events, setEvents] = useState([
    { id: 1, title: 'Annual Tech Fest', date: '2024-07-15', location: 'Main Auditorium', description: 'Annual technology festival' },
    { id: 2, title: 'Sports Day', date: '2024-08-20', location: 'Sports Ground', description: 'Inter-departmental sports competition' }
  ]);
  const [faculty, setFaculty] = useState([
    { id: 1, name: 'Dr. Rajesh Sharma', department: 'Computer Science', position: 'Professor', email: 'rajesh@csmsscollege.edu' },
    { id: 2, name: 'Prof. Sunita Patel', department: 'Electronics', position: 'Associate Professor', email: 'sunita@csmsscollege.edu' }
  ]);

  const [newNotice, setNewNotice] = useState({ title: '', content: '', type: 'Notice' });
  const [newEvent, setNewEvent] = useState({ title: '', date: '', location: '', description: '' });
  const [newFaculty, setNewFaculty] = useState({ name: '', department: '', position: '', email: '' });

  useEffect(() => {
    const isAuth = localStorage.getItem('adminAuth');
    if (!isAuth) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/');
    toast({
      title: "Logged Out",
      description: "Successfully logged out from admin panel",
    });
  };

  const addNotice = () => {
    if (newNotice.title && newNotice.content) {
      const notice = {
        id: notices.length + 1,
        ...newNotice,
        date: new Date().toISOString().split('T')[0]
      };
      setNotices([...notices, notice]);
      setNewNotice({ title: '', content: '', type: 'Notice' });
      toast({
        title: "Notice Added",
        description: "New notice has been published successfully",
      });
    }
  };

  const deleteNotice = (id: number) => {
    setNotices(notices.filter(notice => notice.id !== id));
    toast({
      title: "Notice Deleted",
      description: "Notice has been removed successfully",
    });
  };

  const addEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.location) {
      const event = {
        id: events.length + 1,
        ...newEvent
      };
      setEvents([...events, event]);
      setNewEvent({ title: '', date: '', location: '', description: '' });
      toast({
        title: "Event Added",
        description: "New event has been created successfully",
      });
    }
  };

  const deleteEvent = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
    toast({
      title: "Event Deleted",
      description: "Event has been removed successfully",
    });
  };

  const addFaculty = () => {
    if (newFaculty.name && newFaculty.department && newFaculty.position && newFaculty.email) {
      const facultyMember = {
        id: faculty.length + 1,
        ...newFaculty
      };
      setFaculty([...faculty, facultyMember]);
      setNewFaculty({ name: '', department: '', position: '', email: '' });
      toast({
        title: "Faculty Added",
        description: "New faculty member has been added successfully",
      });
    }
  };

  const deleteFaculty = (id: number) => {
    setFaculty(faculty.filter(member => member.id !== id));
    toast({
      title: "Faculty Deleted",
      description: "Faculty member has been removed successfully",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-primary">CSMSS Admin Panel</h1>
              <p className="text-muted-foreground">Manage your college website content</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate('/')}>
                View Website
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Notices</CardTitle>
              <Bell className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{notices.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Events</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{events.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Faculty Members</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{faculty.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Departments</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="notices" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="notices">Notices</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Notices Tab */}
          <TabsContent value="notices" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Add New Notice</CardTitle>
                <CardDescription>Create and publish new notices for students and faculty</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="notice-title">Title</Label>
                    <Input
                      id="notice-title"
                      value={newNotice.title}
                      onChange={(e) => setNewNotice({...newNotice, title: e.target.value})}
                      placeholder="Enter notice title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="notice-type">Type</Label>
                    <select
                      id="notice-type"
                      className="w-full p-2 border rounded-md"
                      value={newNotice.type}
                      onChange={(e) => setNewNotice({...newNotice, type: e.target.value})}
                    >
                      <option value="Notice">Notice</option>
                      <option value="Admission">Admission</option>
                      <option value="Event">Event</option>
                      <option value="Exam">Exam</option>
                    </select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="notice-content">Content</Label>
                  <Textarea
                    id="notice-content"
                    value={newNotice.content}
                    onChange={(e) => setNewNotice({...newNotice, content: e.target.value})}
                    placeholder="Enter notice content"
                    rows={4}
                  />
                </div>
                <Button onClick={addNotice}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Notice
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Manage Notices</CardTitle>
                <CardDescription>View and manage all published notices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notices.map((notice) => (
                    <div key={notice.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-medium">{notice.title}</h3>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                            {notice.type}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{notice.content}</p>
                        <p className="text-xs text-muted-foreground">Published: {notice.date}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => deleteNotice(notice.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Add New Event</CardTitle>
                <CardDescription>Create and schedule new college events</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="event-title">Event Title</Label>
                    <Input
                      id="event-title"
                      value={newEvent.title}
                      onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                      placeholder="Enter event title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="event-date">Date</Label>
                    <Input
                      id="event-date"
                      type="date"
                      value={newEvent.date}
                      onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="event-location">Location</Label>
                  <Input
                    id="event-location"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                    placeholder="Enter event location"
                  />
                </div>
                <div>
                  <Label htmlFor="event-description">Description</Label>
                  <Textarea
                    id="event-description"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                    placeholder="Enter event description"
                    rows={3}
                  />
                </div>
                <Button onClick={addEvent}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Event
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Manage Events</CardTitle>
                <CardDescription>View and manage all college events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium mb-1">{event.title}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{event.description}</p>
                        <div className="text-xs text-muted-foreground">
                          <span>Date: {event.date}</span> | <span>Location: {event.location}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => deleteEvent(event.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Faculty Tab */}
          <TabsContent value="faculty" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Add Faculty Member</CardTitle>
                <CardDescription>Add new faculty members to the directory</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="faculty-name">Name</Label>
                    <Input
                      id="faculty-name"
                      value={newFaculty.name}
                      onChange={(e) => setNewFaculty({...newFaculty, name: e.target.value})}
                      placeholder="Enter faculty name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="faculty-department">Department</Label>
                    <Input
                      id="faculty-department"
                      value={newFaculty.department}
                      onChange={(e) => setNewFaculty({...newFaculty, department: e.target.value})}
                      placeholder="Enter department"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="faculty-position">Position</Label>
                    <Input
                      id="faculty-position"
                      value={newFaculty.position}
                      onChange={(e) => setNewFaculty({...newFaculty, position: e.target.value})}
                      placeholder="Enter position"
                    />
                  </div>
                  <div>
                    <Label htmlFor="faculty-email">Email</Label>
                    <Input
                      id="faculty-email"
                      type="email"
                      value={newFaculty.email}
                      onChange={(e) => setNewFaculty({...newFaculty, email: e.target.value})}
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
                <Button onClick={addFaculty}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Faculty
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Manage Faculty</CardTitle>
                <CardDescription>View and manage faculty directory</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faculty.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium mb-1">{member.name}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{member.position}, {member.department}</p>
                        <p className="text-xs text-muted-foreground">{member.email}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => deleteFaculty(member.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Website Settings</CardTitle>
                <CardDescription>Manage general website configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="college-name">College Name</Label>
                  <Input id="college-name" defaultValue="CSMSS College" />
                </div>
                <div>
                  <Label htmlFor="contact-email">Contact Email</Label>
                  <Input id="contact-email" defaultValue="info@csmsscollege.edu.in" />
                </div>
                <div>
                  <Label htmlFor="contact-phone">Contact Phone</Label>
                  <Input id="contact-phone" defaultValue="+91-XX-XXXX-XXXX" />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" defaultValue="CSMSS Campus, Education City" rows={3} />
                </div>
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
