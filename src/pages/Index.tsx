import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  ChevronLeft, ChevronRight, Sparkles,
  Instagram, Facebook, Youtube, Menu, X, ChevronUp, Mail, Music, Sun, Moon,
  Heart, Users, Calendar, Clock,ChevronDown, MapPin, Phone, Star, Trophy, Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import heroImage1 from '@/assets/atmosphere-1.jpg';
import atmosphere1 from '@/assets/atmosphere-1.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';

// SVG Icons
const SpotifyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate(); // Add this

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('darkMode', isDark ? 'true' : 'false');
  };

  const navLinks = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'About', href: '#about', type: 'section' },
    { name: 'Performances', href: '#performances', type: 'section' },
    { name: 'Gallery', href: '#gallery', type: 'section' },
    // { name: 'Contact', href: '#contact', type: 'section' },
    { name: 'Journey', href: '/journey', type: 'route' },
    { name: 'Awards', href: '/awards', type: 'route' },
    { name: 'Testimonials', href: '/testimonials', type: 'route' },
  ];

  const handleNavigation = (href: string, type: string) => {
    if (type === 'route') {
      navigate(href);
    } else {
      // Handle section scrolling for home page
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          scrollToSection(href);
        }, 100);
      } else {
        scrollToSection(href);
      }
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
        <div className={`border-2 rounded-2xl transition-all duration-300 relative ${
          isScrolled 
            ? 'border-primary/20 bg-card/95 backdrop-blur-lg shadow-elegant' 
            : 'border-border bg-background/80 backdrop-blur-sm'
        }`}>
          <div className="flex h-16 items-center justify-between md:h-20 px-6">
            <div className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-primary" />
              <span className="font-serif text-xl font-bold text-foreground md:text-2xl">G. Sri Jagan</span>
            </div>

            <nav className="hidden items-center space-x-8 md:flex">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.href, link.type)}
                  className="text-sm font-medium text-foreground transition-all hover:text-primary hover:scale-105"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Rest of your header code remains the same */}
            <div className="hidden items-center space-x-4 md:flex">
              <button
                onClick={toggleDarkMode}
                className="relative h-10 w-10 rounded-full bg-card p-2 border border-border hover:shadow-warm transition-all hover:scale-110"
                aria-label="Toggle dark mode"
              >
                <Sun className="h-6 w-6 text-yellow-500 absolute inset-0 m-auto transition-all dark:opacity-0 dark:scale-0" />
                <Moon className="h-6 w-6 text-indigo-400 absolute inset-0 m-auto transition-all opacity-0 scale-0 dark:opacity-100 dark:scale-100" />
              </button>

              <Button 
                onClick={() => handleNavigation('#contact', 'section')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm rounded-xl hover:scale-105 transition-transform"
              >
                Book Performance
              </Button>
            </div>

            <button
              className="md:hidden p-2 text-foreground hover:scale-110 transition-transform z-60"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-5 md:hidden pb-6 pt-4 px-6 border-t border-border bg-card/95 backdrop-blur-lg rounded-2xl border-2 border-border shadow-elegant z-50 animate-fade-in">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link.href, link.type)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-muted transition-all hover:scale-105 text-left"
                  >
                    {link.name}
                  </button>
                ))}
                <Button 
                  onClick={() => handleNavigation('#contact', 'section')}
                  className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl hover:scale-105 transition-transform py-3"
                >
                  Book Performance
                </Button>
              </nav>
              
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => {
                    toggleDarkMode();
                    setIsMenuOpen(!isMenuOpen);
                  }}
                  className="rounded-full bg-card p-4 shadow-warm border border-border hover:scale-110 transition-transform"
                >
                  <Sun className="h-7 w-7 text-yellow-500 dark:hidden" />
                  <Moon className="h-7 w-7 text-indigo-400 hidden dark:block" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
// Hero Component
const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative animated-gold-bg w-full pt-28 pb-14 sm:pt-28 sm:pb-8 md:pt-32 md:pb-8">
      <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative w-full h-[500px] overflow-hidden rounded-3xl shadow-elegant">
          <img
            src={heroImage1}
            alt="G. Sri Jagan performing violin"
            className="hidden md:block h-full w-full object-cover aspect-video"
          />
          <img
            src={gallery4}
            alt="G. Sri Jagan performing violin"
            className="block md:hidden h-full w-full object-cover aspect-video"
          />
          
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:hidden bg-gradient-to-t from-black/70 via-black/40 to-transparent">
            <h1 className="font-serif text-2xl font-bold text-white leading-tight">
              G. Sri Jagan<br />Nadha Kala Nithi
            </h1>
            <p className="mt-3 text-white/90 text-sm">
              Professional Violinist & Nadaswaram Artist | 10,000+ Live Concerts
            </p>
            <Button 
              onClick={() => navigate('/journey')}
              className="mt-4 w-full bg-white/15 text-white backdrop-blur-sm border border-white/25 hover:bg-white/25 shadow-warm transition-smooth text-sm py-2"
            >
              Explore Journey
            </Button>
          </div>

          <div className="absolute left-6 top-6 max-w-sm rounded-2xl bg-card/15 backdrop-blur-xl border border-white/15 p-5 shadow-2xl hidden md:block">
            <h1 className="font-serif text-2xl font-bold text-white leading-tight drop-shadow-lg md:text-3xl">
              G. Sri Jagan<br />Nadha Kala Nithi
            </h1>
            <p className="mt-3 text-white/90 text-xs md:text-sm drop-shadow-md leading-relaxed">
              Professional Violinist & Nadaswaram Artist | 10,000+ Live Concerts in 11 Years | 18 Golden Awards
            </p>
            <Button 
              onClick={() => navigate('/journey')}
              className="mt-4 w-full bg-white/15 text-white backdrop-blur-sm border border-white/25 hover:bg-white/25 shadow-warm transition-smooth text-sm py-2 hover:scale-105 hover:border-white/40"
            >
              Explore Musical Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  const navigate = useNavigate();
  
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              About 
            </h2>
            <p className="mt-6 text-justify text-base text-foreground/80 leading-relaxed">
              I am G. Sri Jagan, a passionate violinist and nadaswaram artist, currently pursuing B.E. in Computer Science Engineering. Music has been the core of my identity from a very young age.
            </p>
            <p className="mt-4 text-base text-justify text-muted-foreground leading-relaxed">
              I began learning violin at age 8 under Karaikal Suka Pavalan. By age 10, I started performing live and have since completed over <strong className="text-primary">10,000+ successful concerts</strong> in just 11 years. My nadaswaram journey began under my father, Nadaswaram S. Govindan, with constant support from my mother, G. Sudha.
            </p>
            <div className="mt-6 mx-2.5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Star className="w-5 h-5 text-primary fill-primary" />
              <span className="text-primary text-sm font-semibold">Nadha Kala Nithi | 18 Golden Awards</span>
              <Star className="w-5 h-5 text-primary fill-primary" />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button 
                onClick={() => navigate('/journey')}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-elegant hover:scale-105 transition-transform"
              >
                Read Full Journey
              </Button>
              <Button 
                onClick={() => navigate('/awards')}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-transform"
              >
                View Awards
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-elegant">
              <img 
                src={gallery2}
                alt="G. Sri Jagan performing"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            {/* <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-warm border border-border max-w-xs">
              <Trophy className="w-10 h-10 text-primary mb-2" />
              <p className="text-2xl font-serif font-bold text-primary">10,000+</p>
              <p className="text-sm text-foreground font-semibold">Live Concerts</p>
              <p className="text-xs text-muted-foreground mt-1">In 11 Years</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

// Journey Component
const Journey = () => {
  return (
    <section className="py-16 md:py-24 animated-gold-bg bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-4xl font-bold text-foreground md:text-5xl mb-12">
          My Musical Journey
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-6 shadow-warm border border-border hover:scale-105 transition-transform">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Music className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Violin Training</h3>
                <p className="text-muted-foreground text-sm">Started at age 8 under Karaikal Suka Pavalan. Trained for 2 years before beginning live performances at age 10.</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-warm border border-border hover:scale-105 transition-transform">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Nadaswaram</h3>
                <p className="text-muted-foreground text-sm">Learned from my father, Nadaswaram S. Govindan. My mother, G. Sudha, has been my constant pillar of support.</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-warm border border-border hover:scale-105 transition-transform">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Recognition</h3>
                <p className="text-muted-foreground text-sm">Honored with 18 Golden Awards and the title "Nadha Kala Nithi" for dedication and excellence in music.</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-warm border border-border hover:scale-105 transition-transform">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Education</h3>
                <p className="text-muted-foreground text-sm">Currently pursuing B.E. in Computer Science Engineering while continuing my musical career.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Stats Component
const Stats = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl mb-4">
            11 Years of Excellence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey marked by dedication, passion, and countless memorable performances
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-card rounded-2xl p-6 text-center shadow-warm hover:shadow-elegant transition-all hover:scale-105">
            <div className="text-4xl md:text-5xl font-bold text-primary font-serif">10K+</div>
            <div className="text-sm text-muted-foreground mt-2">Live Concerts</div>
          </div>
          
          <div className="bg-card rounded-2xl p-6 text-center shadow-warm hover:shadow-elegant transition-all hover:scale-105">
            <div className="text-4xl md:text-5xl font-bold text-primary font-serif">11</div>
            <div className="text-sm text-muted-foreground mt-2">Years Experience</div>
          </div>
          
          <div className="bg-card rounded-2xl p-6 text-center shadow-warm hover:shadow-elegant transition-all hover:scale-105">
            <div className="text-4xl md:text-5xl font-bold text-primary font-serif">18</div>
            <div className="text-sm text-muted-foreground mt-2">Golden Awards</div>
          </div>
          
          <div className="bg-card rounded-2xl p-6 text-center shadow-warm hover:shadow-elegant transition-all hover:scale-105">
            <div className="text-4xl md:text-5xl font-bold text-primary font-serif">100%</div>
            <div className="text-sm text-muted-foreground mt-2">Client Satisfaction</div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button
            onClick={() => navigate('/testimonials')}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-transform"
          >
            Read Client Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

// Performance Types Component
const PerformanceTypes = () => {
  const performances = [
    {
      icon: Heart,
      title: 'Wedding Ceremonies',
      description: 'Create magical moments with soulful violin melodies during your wedding ceremony and special moments.',
    },
    {
      icon: Users,
      title: 'Receptions',
      description: 'Elevate your reception with elegant performances that guests will remember forever.',
    },
    {
      icon: Calendar,
      title: 'Birthday Celebrations',
      description: 'Add a musical touch to birthday celebrations with personalized performances.',
    },
    {
      icon: Sparkles,
      title: 'Corporate Events',
      description: 'Professional performances for corporate functions and cultural events.',
    },
  ];

  return (
    <section id="performances" className="py-16 md:py-24 animated-gold-bg bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-4xl font-bold text-foreground md:text-5xl mb-4">
          Performance Services
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Bringing elegance and emotion to every occasion
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performances.map((perf, index) => {
            const IconComponent = perf.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-warm hover:shadow-elegant transition-all hover:scale-105 border border-border"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{perf.title}</h3>
                <p className="text-sm text-muted-foreground">{perf.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Gallery Component
const Gallery = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery1, gallery3, gallery2, gallery4];
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
      } else if (e.key === 'ArrowRight') {
        setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, images.length]);

  return (
    <>
      <section id="gallery" className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl mb-12">
            Performance Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {images.map((src, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`
                  group relative overflow-hidden rounded-xl md:rounded-2xl shadow-warm hover:shadow-elegant transition-all duration-500 hover:scale-105 cursor-pointer
                  ${i === 1 ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'}
                `}
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="h-full w-full object-cover aspect-square transition-transform group-hover:scale-110 duration-700 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-elegant-dark/80 via-elegant-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4 md:pb-6">
                  <span className="text-primary-foreground font-semibold text-xs md:text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Image
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-white/30"
          >
            <X className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-white/30"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-white/30"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </button>

          <div className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center px-2">
            <img
              src={images[selectedImage]}
              alt={`Gallery ${selectedImage + 1}`}
              className="max-h-[80vh] md:max-h-[85vh] max-w-full object-contain rounded-lg md:rounded-xl shadow-2xl"
            />
          </div>

          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3 border border-white/10">
            <span className="text-white text-sm md:text-lg font-medium">
              {selectedImage + 1} / {images.length}
            </span>
          </div>

          <div 
            className="absolute inset-0 -z-10"
            onClick={() => setSelectedImage(null)}
          />
        </div>
      )}
    </>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      date: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      description: 'Available 9 AM - 9 PM'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'srijagan.music@gmail.com',
      description: 'Response within 24 hours'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tamil Nadu, India',
      description: 'Available across South India'
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      color: 'hover:bg-pink-500/20 hover:border-pink-500/30'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      color: 'hover:bg-blue-500/20 hover:border-blue-500/30'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      color: 'hover:bg-red-500/20 hover:border-red-500/30'
    },
    {
      icon: SpotifyIcon,
      label: 'Spotify',
      color: 'hover:bg-green-500/20 hover:border-green-500/30'
    }
  ];

  // Custom date formatting for display
  const formatDateForDisplay = (dateString: string) => {
    if (!dateString) return 'Select event date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Get In Touch</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Let's Create Something
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Magical Together
            </span>
          </h2>
          <p className="text-md text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to make your event unforgettable? Contact me to discuss your requirements 
            and get a customized performance package tailored to your special occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                Feel free to reach out through any of these channels. I'm always happy to 
                discuss your event and how we can make it truly special with beautiful music.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground mb-1">{item.label}</p>
                      <p className="text-lg font-semibold text-foreground mb-1">{item.value}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-serif text-xl font-bold text-foreground mb-4">Follow My Journey</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <button
                      key={index}
                      className={`p-4 bg-card rounded-xl border border-border ${social.color} transition-all duration-300 hover:scale-110 group`}
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                    >
                      <IconComponent className="w-5 h-5 text-foreground group-hover:scale-110 transition-transform" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
                <div className="text-2xl font-bold text-primary font-serif">24h</div>
                <div className="text-xs text-muted-foreground">Response Time</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-accent/5 border border-accent/10">
                <div className="text-2xl font-bold text-accent font-serif">100%</div>
                <div className="text-xs text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="bg-card/80 backdrop-blur-lg rounded-2xl px-6 py-8 shadow-elegant border border-border hover:shadow-2xl transition-all duration-500"
            data-aos="fade-left"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                Send Your Inquiry
              </h3>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you soon
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 border-border focus:border-primary transition-colors rounded-xl px-4 py-3"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 border-border focus:border-primary transition-colors rounded-xl px-4 py-3"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-background/50 border-border focus:border-primary transition-colors rounded-xl px-4 py-3"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-3">
                    Event Type *
                  </label>
                  <div className="relative group">
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer pr-12 group-hover:border-primary/50"
                    >
                      <option value="" className="text-muted-foreground">Select event type</option>
                      <option value="wedding" className="text-foreground py-2">Wedding Ceremony</option>
                      <option value="reception" className="text-foreground py-2">Reception</option>
                      <option value="birthday" className="text-foreground py-2">Birthday Celebration</option>
                      <option value="corporate" className="text-foreground py-2">Corporate Event</option>
                      <option value="anniversary" className="text-foreground py-2">Anniversary</option>
                      <option value="other" className="text-foreground py-2">Other Celebration</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none transition-transform group-hover:scale-110">
                      <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="date" className="block text-sm font-medium text-foreground mb-3">
                  Event Date
                </label>
                <div className="relative group">
                  <Input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-background/50 border-border focus:border-primary transition-colors rounded-xl px-4 py-3 appearance-none cursor-pointer pr-12 group-hover:border-primary/50 [color-scheme:dark]"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none transition-transform group-hover:scale-110">
                    <Calendar className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  {/* Custom date display overlay */}
                  {!formData.date && (
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-muted-foreground">
                      Select event date
                    </div>
                  )}
                  {formData.date && (
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-foreground font-medium">
                      {formatDateForDisplay(formData.date)}
                    </div>
                  )}
                </div>
                {formData.date && (
                  <p className="text-xs text-primary font-medium mt-2 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDateForDisplay(formData.date)}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none placeholder:text-muted-foreground/60"
                  placeholder="Tell us about your event, preferred music, venue details, and any specific requirements you might have..."
                />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 shadow-warm rounded-xl hover:scale-105 transition-all duration-300 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 group"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending Inquiry...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Send Inquiry
                  </div>
                )}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                I typically respond within 2-4 hours during business days
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Add custom styles for date picker and select */}
      <style>{`
        /* Custom styles for date picker */
        input[type="date"] {
          color: transparent; /* Hide default text */
        }
        
        input[type="date"]:focus {
          color: inherit; /* Show text when focused */
        }
        
        /* Webkit browsers (Chrome, Safari) */
        input[type="date"]::-webkit-calendar-picker-indicator {
          background: transparent;
          bottom: 0;
          color: transparent;
          cursor: pointer;
          height: auto;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          width: auto;
          opacity: 0;
        }
        
        /* Firefox */
        input[type="date"]::-moz-focus-inner {
          border: 0;
        }
        
        /* Custom select styling */
        select {
          background-image: none;
        }
        
        select option {
          background: hsl(var(--background));
          color: hsl(var(--foreground));
          padding: 12px;
          margin: 4px 0;
        }
        
        select option:checked {
          background: hsl(var(--primary) / 0.1);
          color: hsl(var(--primary));
        }
      `}</style>
    </section>
  );
};
// Footer Component
// Footer Component
const Footer = () => {
  const navigate = useNavigate(); // Add this

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFooterNavigation = (href: string) => {
    if (window.location.pathname !== '/') {
      // If not on home page, navigate to home first
      navigate('/');
      // Wait for navigation then scroll to section
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const headerHeight = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // If already on home page, just scroll to section
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-elegant-dark text-white py-12 relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Music className="h-8 w-8 text-primary" />
              <span className="font-serif text-2xl font-bold">G. Sri Jagan</span>
            </div>
            <p className="text-white/70 mb-4 max-w-md">
              Professional Violinist & Nadaswaram Artist bringing soulful melodies to your special occasions with over 10,000+ successful performances.
            </p>
            <div className="flex space-x-4">
              <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Youtube className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleFooterNavigation('#home')}
                  className="text-white/70 hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterNavigation('#about')}
                  className="text-white/70 hover:text-white transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterNavigation('#performances')}
                  className="text-white/70 hover:text-white transition-colors text-left"
                >
                  Performances
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterNavigation('#gallery')}
                  className="text-white/70 hover:text-white transition-colors text-left"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleFooterNavigation('#contact')}
                  className="text-white/70 hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>srijagan.music@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © 2024 G. Sri Jagan. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 bg-primary rounded-full hover:bg-primary/90 transition-colors"
          >
            <ChevronUp className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};
export { Header, Footer, Hero, About, Journey, Stats, PerformanceTypes, Gallery, Contact };
// Main Index Component
const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      offset: 50,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header /> {/* Uncomment this */}
      <main>
        <Hero />
        <About />
        <Journey />
        <Stats />
        <PerformanceTypes />
        <Gallery />
        <Contact />
      </main>
      <Footer /> {/* Uncomment this */}
    </div>
  );
};

export default Index;
