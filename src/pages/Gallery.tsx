
import Navigation from '../components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'campus', name: 'Campus' },
    { id: 'events', name: 'Events' },
    { id: 'labs', name: 'Laboratories' },
    { id: 'sports', name: 'Sports' },
    { id: 'cultural', name: 'Cultural' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1562774053-701939374585",
      title: "Main Campus Building",
      category: "campus"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      title: "TechnoVision 2023",
      category: "events"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780",
      title: "Computer Science Lab",
      category: "labs"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      title: "Basketball Tournament",
      category: "sports"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
      title: "Cultural Night Performance",
      category: "cultural"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3",
      title: "Library Reading Hall",
      category: "campus"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1559223607-d9176c17c7db",
      title: "Award Ceremony",
      category: "events"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1581092162384-8987c1d64718",
      title: "Electronics Laboratory",
      category: "labs"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      title: "Football Ground",
      category: "sports"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      title: "Tech Exhibition",
      category: "events"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80",
      title: "Auditorium",
      category: "campus"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      title: "Mechanical Workshop",
      category: "labs"
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Explore the vibrant campus life, events, and facilities at CSMSS College
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="px-6"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <Card key={image.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                      <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-semibold">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Video Gallery</h2>
            <p className="text-xl text-muted-foreground">Watch highlights from our events and campus life</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Campus Tour"
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">Campus Virtual Tour</h3>
                  <p className="text-sm text-muted-foreground">Take a virtual tour of our beautiful campus</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="TechnoVision Highlights"
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">TechnoVision 2023 Highlights</h3>
                  <p className="text-sm text-muted-foreground">Best moments from our annual tech fest</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Graduation Ceremony"
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">Graduation Ceremony 2023</h3>
                  <p className="text-sm text-muted-foreground">Celebrating our graduates' achievements</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
