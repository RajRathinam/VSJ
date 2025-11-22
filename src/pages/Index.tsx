import { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Globe, ChevronDown, Star, ChevronLeft, ChevronRight, Sparkles,
  Instagram, Facebook, Youtube, Menu, X, ChevronUp, Mail, Music, Sun, Moon,
  Heart, Users, Calendar, Clock, MapPin, Phone, MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroImage1 from '@/assets/atmosphere-1.jpg';
import heroImage2 from '@/assets/hero-sirijagan.jpg';
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

// ... (Header, Hero, Intro, Atmosphere, Nutshell, Testimonials components remain the same) ...

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

// Header Component
// Header Component - Update the mobile menu section
// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { name: 'Performances', href: '#performances' },
    { name: 'Events', href: '#events' },
    { name: 'Book Now', href: '#booking' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 100; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
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
              <span className="font-serif text-xl font-bold text-foreground md:text-2xl">Sri Jagan</span>
            </div>

            <nav className="hidden items-center space-x-8 md:flex">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium text-foreground transition-all hover:text-primary hover:scale-105"
                >
                  {link.name}
                </button>
              ))}
            </nav>

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
                onClick={() => scrollToSection('#booking')}
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

          {/* Mobile Menu - Updated with absolute positioning */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-5 md:hidden pb-6 pt-4 px-6 border-t border-border bg-card/95 backdrop-blur-lg rounded-2xl border-2 border-border shadow-elegant z-50 animate-fade-in">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-muted transition-all hover:scale-105 text-left"
                  >
                    {link.name}
                  </button>
                ))}
                <Button 
                  onClick={() => scrollToSection('#booking')}
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
  return (
       <section id="performances" className="relative  animated-gold-bg w-full pt-24 pb-10 sm:pt-28 sm:pb-8 md:pt-32 md:pb-8">
      <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative w-full h-[500px] overflow-hidden rounded-3xl shadow-elegant">
          <img
            src={heroImage1}
            alt="Sri Jagan performing violin at an elegant wedding ceremony"
            className="hidden md:block h-full w-full object-cover aspect-video"
          />
          <img
            src={gallery4}
            alt="Sri Jagan performing violin at an elegant wedding ceremony"
            className="block md:hidden h-full w-full object-cover aspect-video"
          />
          
          {/* Mobile: Text directly on image */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:hidden bg-gradient-to-t from-black/70 via-black/40 to-transparent">
            <h1 className="font-serif text-2xl font-bold text-white leading-tight">
              Soulful Violin,<br />Memorable Moments
            </h1>
            <p className="mt-3 text-white/90 text-sm">
              Professional violin performances for weddings, engagements, and special ceremonies
            </p>
            {/* <Button className="mt-4 w-full bg-white/15 text-white backdrop-blur-sm border border-white/25 hover:bg-white/25 shadow-warm transition-smooth text-sm py-2 hover:scale-105 hover:border-white/40">
              Book Sri Jagan
            </Button> */}
          </div>

          {/* Desktop: Glass morphism container - positioned to not cover person */}
          <div className="absolute left-6 top-6 max-w-sm rounded-2xl bg-card/15 backdrop-blur-xl border border-white/15 p-5 shadow-2xl hidden md:block">
            <h1 className="font-serif text-2xl font-bold text-white leading-tight drop-shadow-lg md:text-3xl">
              Soulful Violin,<br />Memorable Moments
            </h1>
            <p className="mt-3 text-white/90 text-xs md:text-sm drop-shadow-md leading-relaxed">
              Professional violin performances for weddings, engagements, receptions, and special ceremonies
            </p>
            <Button className="mt-4 w-full bg-white/15 text-white backdrop-blur-sm border border-white/25 hover:bg-white/25 shadow-warm transition-smooth text-sm py-2 hover:scale-105 hover:border-white/40">
              Book Sri Jagan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Intro Component
const Intro = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Elevate Your Special Day
            </h2>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              Sri Jagan brings elegance and emotion to your most precious moments. Whether it's a wedding, engagement, reception, or any special ceremony, his violin melodies create an unforgettable atmosphere.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              With years of experience performing at prestigious venues and events, Sri Jagan specializes in both classical masterpieces and contemporary favorites, tailored perfectly to your celebration.
            </p>
            <Button className="mt-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-elegant hover:scale-105 transition-transform">
              View Performance Packages
            </Button>
          </div>
          <div className="aspect-video w-full rounded-3xl bg-elegant-dark/90 p-8 flex items-center justify-center text-center shadow-elegant">
            <div className="space-y-4">
              <div className="mx-auto h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                <div className="h-0 w-0 border-l-[20px] border-l-primary border-y-[12px] border-y-transparent ml-1"></div>
              </div>
              <p className="text-cream/90 font-medium">Watch Performance Video</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Atmosphere Component
const Atmosphere = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [atmosphere1];

  const nextSlide = () => setCurrentSlide((s) => (s === slides.length - 1 ? 0 : s + 1));
  const prevSlide = () => setCurrentSlide((s) => (s === 0 ? slides.length - 1 : s - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="events" className="py-16 md:py-24  animated-gold-bg bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Perfect for Every Ceremony
            </h2>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              Thousands of candles flicker softly, casting a warm, golden glow throughout stunning venues. The intimate ambiance creates a unique connection between performers and audience.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl bg-card p-4 shadow-warm hover:scale-105 transition-transform">
                <p className="font-serif text-3xl font-bold text-primary">1000+</p>
                <p className="mt-1 text-sm text-muted-foreground">Candles</p>
              </div>
              <div className="rounded-2xl bg-card p-4 shadow-warm hover:scale-105 transition-transform">
                <p className="font-serif text-3xl font-bold text-primary">200+</p>
                <p className="mt-1 text-sm text-muted-foreground">Venues</p>
              </div>
              <div className="rounded-2xl bg-card p-4 shadow-warm hover:scale-105 transition-transform">
                <p className="font-serif text-3xl font-bold text-primary">4.8★</p>
                <p className="mt-1 text-sm text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="relative w-full overflow-hidden rounded-3xl shadow-elegant">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Atmosphere slide ${index + 1}`}
                    className="aspect-[4/3] w-full flex-shrink-0 object-cover"
                  />
                ))}
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-card/90 backdrop-blur-sm p-3 shadow-warm transition-smooth hover:bg-card hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-card/90 backdrop-blur-sm p-3 shadow-warm transition-smooth hover:bg-card hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${currentSlide === index ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/50'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Nutshell Component
// Nutshell Component
const Nutshell = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl leading-tight">
          Sri Jagan: Professional violin artistry for life's most beautiful celebrations
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent"></div>
        </div>
        
        {/* Image with clip-path effect and text overlay */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-2xl">
            <div className="clip-path-hexagon overflow-hidden rounded-lg shadow-2xl relative group">
              <img 
                src={gallery2}
                alt="Sri Jagan performing violin at an event"
                className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-110"
              />
              
              {/* Text overlay - Fixed positioning */}
              <div className="absolute inset-0 flex flex-col justify-end items-end">
            <div className="relative bg-white/15 backdrop-blur-xl border border-white/30 text-white p-3 md:p-6 rounded-tl-2xl rounded-br-2xl shadow-2xl transform transition-transform duration-300 group-hover:scale-105 overflow-hidden">
  {/* Shine effect overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
  
  <div className="relative z-10 text-center">
    <div className="font-bold text-md md:text-6xl lg:text-7xl mb-1 md:mb-2 drop-shadow-2xl">6+</div>
    <div className="text-sm md:text-xl lg:text-2xl font-semibold tracking-wider drop-shadow">Years Of</div>
    <div className="text-sm md:text-xl lg:text-2xl font-semibold tracking-wider drop-shadow">Experience</div>
  </div>
</div>
              </div>
            </div>
            
            {/* Optional decorative border effect */}
            <div className="absolute -inset-2 clip-path-hexagon bg-gradient-to-r from-primary to-accent -z-10 opacity-20 blur-sm"></div>
          </div>
        </div>
      </div>

      {/* Add custom styles for clip-path */}
      <style>{`
        .clip-path-hexagon {
          clip-path: inset(0% 0% 0% 0% round 0% 20% 0% 20%);
        }
        
        @media (min-width: 768px) {
          .clip-path-hexagon {
            clip-path: inset(0% 0% 0% 0% round 15% 0% 15% 0%);
          }
        }
      `}</style>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: 'Priya & Rahul',
      location: 'Chennai',
      rating: 5,
      text: 'Made our wedding absolutely magical! Every guest complimented the beautiful violin performance.',
    },
    {
      name: 'Lakshmi',
      location: 'Bangalore',
      rating: 5,
      text: 'Perfect romantic atmosphere for our engagement. Professional and incredibly talented!',
    },
    {
      name: 'Anand & Divya',
      location: 'Mumbai',
      rating: 5,
      text: 'Elevated our entire reception evening. Guests are still talking about the beautiful music!',
    },
    {
      name: 'Karthik Family',
      location: 'Hyderabad',
      rating: 5,
      text: 'Added elegance and emotion to our daughter\'s wedding. Truly a gifted artist.',
    },
    {
      name: 'Sneha & Arjun',
      location: 'Delhi',
      rating: 5,
      text: 'The violin melodies created unforgettable memories. Highly recommend for any special occasion!',
    },
    {
      name: 'Meera',
      location: 'Pune',
      rating: 5,
      text: 'Exceptional talent! The performance added a touch of sophistication to our corporate event.',
    },
  ];

  // Create enough duplicates for seamless looping
  const infiniteReviews = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <>
<style>{`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-350px * ${reviews.length}));
    }
  }

  @keyframes goldenShimmer {
    0% {
      background-position: -200% center;
    }
    100% {
      background-position: 200% center;
    }
  }

  .scroll-container {
    animation: scroll 120s linear infinite;
    will-change: transform;
    width: max-content;
  }

  .scroll-container:hover {
    animation-play-state: paused;
  }

  .testimonial-card {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    background: linear-gradient(
      135deg,
      hsl(var(--card)) 0%,
      rgba(251, 191, 36, 0.1) 50%,
      hsl(var(--card)) 100%
    );
    background-size: 200% 200%;
    animation: goldenShimmer 6s ease-in-out infinite;
  }

  .testimonial-card:hover {
    transform: scale(1.02);
    box-shadow: 0 20px 40px rgba(251, 191, 36, 0.15);
    z-index: 10;
    animation-duration: 3s;
    background: linear-gradient(
      135deg,
      rgba(251, 191, 36, 0.12) 0%,
      rgba(252, 211, 77, 0.18) 50%,
      rgba(251, 191, 36, 0.12) 100%
    );
    border-color: hsl(var(--primary) / 0.3);
  }
`}</style>

   <section className="py-16 md:py-24 bg-muted/30 dark:bg-background overflow-hidden">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 className="text-center font-serif text-4xl font-bold text-foreground md:text-5xl">
      What Clients Say
    </h2>
   
    <p className="mt-4 text-center text-muted-foreground">Based on 200+ weddings and events</p>

    <div className="relative mt-12 overflow-hidden">
      <div className="scroll-container flex gap-6">
        {infiniteReviews.map((review, index) => (
          <div
            key={index}
            className="testimonial-card flex-shrink-0 w-[350px] rounded-2xl border border-border border-orange-200 p-3 shadow-warm hover:shadow-elegant transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center space-x-1 mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-primary fill-primary" />
              ))}
            </div>
            <p className="text-foreground/90 leading-relaxed text-sm h-20">{review.text}</p>
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-semibold">{review.name[0]}</span>
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-12 text-center">
      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-transform">
        Read More Reviews
      </Button>
    </div>
  </div>
</section>
    </>
  );
};

// Partners Component
const Partners = () => {
  const partners = [
    'ITC Grand Chola', 
    'Leela Palace', 
    'Taj Hotels', 
    'Park Hyatt', 
    'The Oberoi',
    'Marriott Hotels',
    'Hilton',
    'Radisson Blu'
  ];

  // Duplicate for seamless loop
  const infinitePartners = [...partners, ...partners];

  return (
    <>
      <style>{`
        @keyframes scrollPartners {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes goldenShimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .scroll-container {
          animation: scrollPartners 40s linear infinite;
          will-change: transform;
        }

        .scroll-container:hover {
          animation-play-state: paused;
        }

        .partner-badge {
          background: linear-gradient(
            135deg,
            hsl(var(--card)) 0%,
            rgba(251, 191, 36, 0.15) 50%,
            hsl(var(--card)) 100%
          );
          background-size: 200% 200%;
          animation: goldenShimmer 6s ease-in-out infinite;
          transition: all 0.4s ease;
          border: 1px solid hsl(var(--border));
        }

        .partner-badge:hover {
          transform: translateY(-6px) scale(1.04);
          box-shadow: 0 12px 30px rgba(251, 191, 36, 0.25);
          background: linear-gradient(
            135deg,
            rgba(251, 191, 36, 0.2) 0%,
            rgba(252, 211, 77, 0.3) 50%,
            rgba(251, 191, 36, 0.2) 100%
          );
          animation-duration: 3s;
        }

        .sparkle-icon {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      <section className="py-16 md:py-20 bg-muted/30 dark:bg-background border-y border-border overflow-hidden relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/40 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Trusted by the Finest
              </span>
              <Sparkles className="w-4 h-4 text-primary" style={{ animationDelay: '1.5s' }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
              Performed at Prestigious Venues
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bringing elegance and sophistication to India's most luxurious hotels and celebration spaces
            </p>
          </div>

          {/* Scrolling Partners */}
          <div className="relative overflow-hidden py-8">
            <div className="scroll-container flex gap-6">
              {infinitePartners.map((partner, index) => (
                <div
                  key={index}
                  className="partner-badge flex-shrink-0 px-8 py-4 rounded-full shadow-warm hover:shadow-elegant cursor-pointer"
                >
                  <p className="text-lg font-bold text-foreground whitespace-nowrap">
                    {partner}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom decorative line */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>
      </section>
    </>
  );
};








// FAQ Component
const FAQ = () => {
  const faqs = [
    {
      question: 'What types of events does Sri Jagan perform at?',
      answer: 'Sri Jagan specializes in weddings, engagement ceremonies, receptions, and other special celebrations. Each performance is customized to match your event\'s theme and atmosphere.',
    },
    {
      question: 'How long are the performances?',
      answer: 'Performance lengths are flexible and customized to your needs. Typical packages range from 30 minutes for ceremony entrances to 2-3 hours for full reception coverage. Discuss your requirements during booking.',
    },
    {
      question: 'Can Sri Jagan play specific songs we request?',
      answer: 'Absolutely! Sri Jagan has an extensive repertoire including classical, contemporary, Tamil film songs, and Western favorites. Share your song preferences during the booking consultation and he will prepare them specially for your event.',
    },
    {
      question: 'How far in advance should we book?',
      answer: 'It\'s recommended to book at least 2-3 months in advance, especially for wedding season (December-February and April-June). However, last-minute bookings may be accommodated based on availability.',
    },
    {
      question: 'What areas does Sri Jagan perform in?',
      answer: 'Sri Jagan is based in Tamil Nadu and regularly performs across Chennai, Bangalore, Hyderabad, and Mumbai. He is also available to travel for destination weddings and special events across India and internationally.',
    },
  ];

  return (
    <section className="py-16  animated-gold-bg md:py-24 bg-background">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-4xl font-bold text-foreground md:text-5xl mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-border bg-card px-6 shadow-warm hover:shadow-elegant transition-all"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

// Gallery Component
// Gallery Component
const Gallery = () => {
  const images = [gallery1,gallery2, gallery3, gallery4, gallery1, gallery3, gallery2, gallery4];
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Prevent body scroll when modal is open
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

  // Keyboard navigation
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
      <section id="gallery" className="py-16 md:py-24 bg-muted/30 overflow-hidden">
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

      {/* Full Page Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-white/30"
          >
            <X className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </button>
          
          {/* Navigation Buttons */}
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

          {/* Image Container */}
          <div className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center px-2">
            <img
              src={images[selectedImage]}
              alt={`Gallery ${selectedImage + 1}`}
              className="max-h-[80vh] md:max-h-[85vh] max-w-full object-contain rounded-lg md:rounded-xl shadow-2xl"
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3 border border-white/10">
            <span className="text-white text-sm md:text-lg font-medium">
              {selectedImage + 1} / {images.length}
            </span>
          </div>

          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10"
            onClick={() => setSelectedImage(null)}
          />
        </div>
      )}
    </>
  );
};


// Back to Top Button
// Back to Top Button
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 rounded-full bg-primary text-primary-foreground p-3 shadow-warm transition-all duration-300 z-50 hover:shadow-elegant hover:scale-110 md:p-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
    >
      <ChevronUp className="h-5 w-5 md:h-6 md:w-6" />
    </button>
  );
};

// Offers Component - Refined and Minimal
// Offers Component - Premium Version
const Offers = () => {
  const offers = [
    {
      title: 'Wedding Ceremonies',
      description: 'Soulful violin melodies for your ceremony, entry, and special moments.',
      icon: Heart,
      duration: '2-4 hours',
      price: '₹25,000',
      cta: 'Learn More',
      featured: true,
    },
    {
      title: 'Engagement Events',
      description: 'Romantic violin performances tailored to your love story.',
      icon: Users,
      duration: '1-2 hours',
      price: '₹15,000',
      cta: 'View Packages',
      featured: false,
    },
    {
      title: 'Reception Parties',
      description: 'Elegant violin music to complement your celebration.',
      icon: Calendar,
      duration: '3-5 hours',
      price: '₹30,000',
      cta: 'Book Now',
      featured: false,
    },
  ];

  return (
    <section id="booking" className="py-16 animated-gold-bg md:py-24 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl mb-4">
            Performance Packages
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tailored violin experiences for your most cherished moments
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {offers.map((offer, index) => {
            const IconComponent = offer.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-border border-orange-200/50 p-6 shadow-warm hover:shadow-elegant transition-all duration-300 cursor-pointer ${
                  offer.featured 
                    ? 'ring-2 ring-primary/20 scale-105' 
                    : 'hover:scale-105'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                {/* Featured Badge */}
                {offer.featured && (
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 ${
                    offer.featured 
                      ? 'bg-primary text-primary-foreground shadow-lg' 
                      : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                  }`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mb-4">
                  <h3 className={`font-serif text-xl font-bold mb-2 ${
                    offer.featured ? 'text-primary' : 'text-foreground'
                  }`}>
                    {offer.title}
                  </h3>
                  
                  <p className="text-foreground/80 leading-relaxed text-sm mb-3 h-12">
                    {offer.description}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-3">
                    <Clock className="h-3 w-3" />
                    <span>{offer.duration}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-4">
                  <p className={`text-xl font-bold ${
                    offer.featured ? 'text-primary' : 'text-foreground'
                  }`}>
                    {offer.price}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">starting price</p>
                </div>

                {/* CTA Button */}
                <Button className={`w-full transition-all duration-300 text-sm ${
                  offer.featured
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}>
                  {offer.cta}
                </Button>

                {/* Premium Hover Effects */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Custom Package CTA - Premium */}
        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="300">
          <div className="inline-flex items-center gap-4 p-5 rounded-2xl bg-card/80 backdrop-blur-sm border border-border border-orange-200/30 shadow-warm hover:shadow-elegant transition-all duration-300 cursor-pointer max-w-md mx-auto">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="text-left flex-1">
              <h4 className="font-semibold text-foreground text-sm">Custom Package?</h4>
              <p className="text-xs text-muted-foreground">Let's create something unique</p>
            </div>
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs">
              <Phone className="h-3 w-3 mr-1" />
              Discuss
            </Button>
          </div>
        </div>
      </div>

      {/* Add premium styling */}
      <style >{`
        .animated-gold-bg {
          background: linear-gradient(
            135deg,
            hsl(var(--background)) 0%,
            rgba(251, 191, 36, 0.03) 50%,
            hsl(var(--background)) 100%
          );
          background-size: 200% 200%;
          animation: goldenShimmer 8s ease-in-out infinite;
        }

        @keyframes goldenShimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
};
// Newsletter Component with Lucide icons
const Newsletter = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
      <div data-aos="flip-left" data-aos-easing="ease-out-cubic" className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-card/80 backdrop-blur-sm p-8 md:p-12 shadow-elegant text-center">
          <Mail className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto">
            Planning your special day? Contact Sri Jagan to discuss your event requirements and get a customized performance package.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-background border-border"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm hover:scale-105 transition-transform">
              <Mail className="h-4 w-4 mr-2" />
              Contact Now
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            <Clock className="h-3 w-3 inline mr-1" />
            Quick response within 24 hours. Free consultation available.
          </p>
        </div>
      </div>
    </section>
  );
};

// Footer Component with Lucide icons
const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-4 md:py-16">
      <div className="container mx-auto max-w-7xl px-7 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Music className="h-8 w-8 text-primary" />
              <span className="font-serif text-xl font-bold">Sri Jagan</span>
            </div>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              Professional violinist creating memorable experiences for weddings, engagements, receptions, and special ceremonies.
            </p>
          </div>

          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Services
              </h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span>•</span> Wedding Ceremonies</a></li>
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span>•</span> Engagements</a></li>
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span>•</span> Receptions</a></li>
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span>•</span> Special Events</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/70">
                <li><a href="#about" className="hover:text-primary transition-colors flex items-center gap-2"><span>•</span> About</a></li>
                <li><a href="#gallery" className="hover:text-primary transition-colors flex items-center gap-2"><span>•</span> Gallery</a></li>
                <li><a href="#booking" className="hover:text-primary transition-colors flex items-center gap-2"><span>•</span> Book Now</a></li>
                <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span>•</span> Contact</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Users className="h-4 w-4" />
              Connect
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors hover:scale-110 p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary/20">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors hover:scale-110 p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary/20">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors hover:scale-110 p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary/20">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors hover:scale-110 p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary/20">
                <SpotifyIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-secondary-foreground/60 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              © 2024 Sri Jagan. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-secondary-foreground/60">
              <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">
                <span>Privacy Policy</span>
              </a>
              <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">
                <span>Terms of Service</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ... (BackToTopButton and Main App components remain the same) ...

// Main App
export default function Index() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
      mirror: false,
    });
    
    setTimeout(() => AOS.refresh(), 300);
  }, []);

  return (
    <>
      <div className="min-h-screen font-sans text-foreground overflow-x-hidden">
        <div className="content-wrapper">
          <Header />
          <main className="overflow-x-hidden">
            <div data-aos="fade-down" data-aos-delay="100"><Hero /></div>
            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500"><Intro /></div>
            <div data-aos="zoom-in" data-aos-delay="300" data-aos-easing="ease-out-back"><Atmosphere /></div>
            <div data-aos="flip-up" data-aos-delay="400"><Nutshell /></div>
            <div data-aos="fade-left" data-aos-delay="500"><Testimonials /></div>
            <div data-aos="fade-up" data-aos-delay="600"><Offers /></div>
            <div data-aos="fade-right" data-aos-delay="700"><Partners /></div>
            <div><Newsletter /></div>
            <div data-aos="fade-up" data-aos-delay="900"><FAQ /></div>
            <div data-aos="zoom-in-up" data-aos-delay="1000"><Gallery /></div>
          </main>
          <Footer />
          <BackToTopButton />
        </div>
      </div>
    </>
  );
}