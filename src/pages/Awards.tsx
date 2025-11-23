import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Award, 
  Trophy, 
  Star, 
  Medal,
  Crown,
  Music,
  Sparkles,
  ChevronLeft,
  Calendar,
  MapPin,
  Users,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const Awards = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    concerts: 0,
    years: 0,
    awards: 0,
    instruments: 0
  });

  const statsRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      offset: 50,
    });
    window.scrollTo(0, 0);

    // Intersection Observer for counting animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounts();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const animateCounts = () => {
    animateCounter(10000, 'concerts', 2000);
    animateCounter(11, 'years', 1500);
    animateCounter(18, 'awards', 1800);
    animateCounter(2, 'instruments', 1200);
  };

  const animateCounter = (target, key, duration) => {
    const startTime = Date.now();
    const startValue = 0;
    
    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
      
      setCounts(prev => ({
        ...prev,
        [key]: currentValue
      }));
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

  const awards = [
    {
      id: 1,
      title: "Nadha Kala Nithi",
      year: "2023",
      description: "Prestigious title awarded for dedication and excellence in the field of music, recognizing outstanding musical journey",
      category: "Lifetime Achievement",
      icon: Crown,
      color: "text-yellow-600",
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-950/50 dark:to-amber-900/30",
      borderColor: "border-yellow-200 dark:border-yellow-800",
      featured: true
    },
    {
      id: 2,
      title: "Golden Excellence Award",
      year: "2023",
      description: "Recognizing exceptional talent and 10,000+ successful live concerts completed in 11 years",
      category: "Performance Excellence",
      icon: Trophy,
      color: "text-amber-600",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950/50 dark:to-orange-900/30",
      borderColor: "border-amber-200 dark:border-amber-800",
      featured: true
    },
    {
      id: 3,
      title: "Young Virtuoso Award",
      year: "2022",
      description: "Awarded for mastering both violin and nadaswaram at a young age while pursuing engineering education",
      category: "Musical Mastery",
      icon: Star,
      color: "text-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/50 dark:to-cyan-900/30",
      borderColor: "border-blue-200 dark:border-blue-800"
    },
    {
      id: 4,
      title: "Violin Prodigy Award",
      year: "2022",
      description: "Recognizing exceptional violin skills developed under Karaikal Suka Pavalan from age 8",
      category: "Instrumental Excellence",
      icon: Music,
      color: "text-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/50 dark:to-pink-900/30",
      borderColor: "border-purple-200 dark:border-purple-800"
    },
    {
      id: 5,
      title: "Nadaswaram Heritage Award",
      year: "2021",
      description: "For preserving and excelling in traditional nadaswaram under father's guidance - Nadaswaram S. Govindan",
      category: "Traditional Arts",
      icon: Medal,
      color: "text-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/50 dark:to-emerald-900/30",
      borderColor: "border-green-200 dark:border-green-800"
    },
    {
      id: 6,
      title: "10K Concerts Milestone Award",
      year: "2021",
      description: "Special recognition for achieving 10,000+ live concerts milestone in just 11 years",
      category: "Career Achievement",
      icon: Award,
      color: "text-red-600",
      bgColor: "bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-950/50 dark:to-rose-900/30",
      borderColor: "border-red-200 dark:border-red-800"
    },
    {
      id: 7,
      title: "Dual Talent Recognition",
      year: "2020",
      description: "For exceptional achievement in both classical violin and traditional nadaswaram performances",
      category: "Versatility",
      icon: Users,
      color: "text-indigo-600",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-indigo-950/50 dark:to-purple-900/30",
      borderColor: "border-indigo-200 dark:border-indigo-800"
    },
    {
      id: 8,
      title: "Student-Musician Excellence",
      year: "2020",
      description: "Balancing B.E. in Computer Science Engineering with professional music career successfully",
      category: "Academic & Arts",
      icon: Sparkles,
      color: "text-pink-600",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-950/50 dark:to-rose-900/30",
      borderColor: "border-pink-200 dark:border-pink-800"
    }
  ];

  const performanceStats = [
    {
      number: "10,000+",
      label: "Live Concerts",
      icon: Music,
      color: "text-primary"
    },{
      number: "18",
      label: "Golden Awards",
      icon: Trophy,
      color: "text-yellow-600"
    },
    {
      number: "11",
      label: "Years Experience",
      icon: Calendar,
      color: "text-amber-600"
    },
    
    {
      number: "2",
      label: "Instruments Mastered",
      icon: Award,
      color: "text-purple-600"
    }
  ];

  return (
    <Layout>
      <style>{`
        .animated-gold-bg {
          background: linear-gradient(
            135deg,
            hsl(var(--background)) 0%,
            rgba(251, 191, 36, 0.05) 50%,
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
      
      <div className="min-h-screen animated-gold-bg pt-10 pb-10 bp-15">
        {/* Header Section */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div 
            data-aos="fade-down"
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="bg-gradient-to-r from-primary to-yellow-600 p-4 rounded-2xl shadow-elegant">
                  <Trophy className="h-16 w-16 text-white" />
                </div>
                <Sparkles className="h-8 w-8 text-yellow-500 absolute -top-2 -right-2" />
              </div>
            </div>
            
            <h1 className="font-serif text-3xl md:text-6xl font-bold text-foreground mb-4">
              Awards & Honors
            </h1>
            <p className="text-md text-muted-foreground max-w-2xl mx-auto mb-6">
              Celebrating 18 golden awards that recognize a journey of passion, dedication, and musical excellence
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Button
                onClick={() => navigate('/journey')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 shadow-warm"
              >
                View My Journey
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div 
            ref={statsRef}
            data-aos="fade-up"
            data-aos-delay="200"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {performanceStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="relative rounded-2xl p-6 text-center bg-gradient-to-br from-card to-primary/5 border-2 border-primary/20 overflow-hidden group hover:scale-105 transition-all duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  {/* Background accents */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500 rounded-bl-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/5 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500 rounded-tr-2xl"></div>
                  
                  <IconComponent className={`h-8 w-8 ${stat.color} mx-auto mb-3 relative z-10`} />
                  <div className="text-md md:text-3xl font-bold text-foreground font-serif relative z-10">
                    {index === 0 ? (isVisible ? counts.concerts.toLocaleString() + '+' : '0+') :
                     index === 1 ? (isVisible ? counts.years : '0') :
                     index === 2 ? (isVisible ? counts.awards : '0') :
                     (isVisible ? counts.instruments : '0')}
                  </div>
                  <div className="text-xs text-muted-foreground relative z-10">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Featured Awards */}
          <div className="mb-16">
            <h2 
              className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
              data-aos="fade-up"
            >
              Featured Honors
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {awards.filter(award => award.featured).map((award, index) => {
                const IconComponent = award.icon;
                return (
                  <div
                    key={award.id}
                    data-aos="flip-up"
                    data-aos-delay={index * 200}
                    className={`relative rounded-3xl p-6 shadow-elegant border-2 ${award.borderColor} ${award.bgColor} overflow-hidden group hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-xl bg-white/50 dark:bg-black/20 backdrop-blur-sm ${award.color}`}>
                            <IconComponent className="h-8 w-8" />
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                            {award.category}
                          </span>
                          <div className="text-md font-bold text-foreground">{award.year}</div>
                        </div>
                      </div>
                      
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                        {award.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-xs text-justify leading-relaxed mb-4">
                        {award.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Award className="h-4 w-4" />
                        <span>One of 18 Golden Awards</span>
                      </div>
                    </div>
                    
                    {/* Animated background elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-current to-transparent opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-current to-transparent opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* All Awards Grid */}
          <div>
            <h2 
              className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
              data-aos="fade-up"
            >
              All Recognitions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.filter(award => !award.featured).map((award, index) => {
                const IconComponent = award.icon;
                return (
                  <div
                    key={award.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className={`relative bg-card rounded-2xl p-6 shadow-warm border ${award.borderColor} hover:shadow-elegant transition-all hover:scale-105 group`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl ${award.bgColor}`}>
                        <IconComponent className={`h-6 w-6 ${award.color}`} />
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-foreground">{award.year}</div>
                      </div>
                    </div>
                    
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {award.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {award.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-primary/10 text-primary border border-primary/20">
                        {award.category}
                      </span>
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    </div>
                    {/* Animated background elements */}
                    <div className="absolute top-0 rounded-tr-xl right-0 w-32 h-32 bg-gradient-to-bl from-yellow-500 to-transparent opacity-10 group-hover:opacity-10 transition-opacity duration-500" />
                    <div className="absolute bottom-0 rounded-bl-xl left-0 w-24 h-24 bg-gradient-to-tr from-yellow-500 to-transparent opacity-10 group-hover:opacity-10 transition-opacity duration-500" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Journey Summary */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-16 bg-gradient-to-r from-primary/10 to-yellow-600/10 rounded-3xl p-8 text-center border border-primary/20"
          >
            <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              A Journey Fueled by Passion
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              From learning violin at age 8 to completing 10,000+ concerts, each award represents countless hours of practice, 
              dedication, and the unwavering support of my family and mentors.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-8 w-8" />
                <span>Mentors: Karaikal Suka Pavalan & Nadaswaram S. Govindan</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Heart className="h-4 w-4" />
                <span>Supported by: G. Sudha (Mother)</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div 
            data-aos="zoom-in"
            data-aos-delay="400"
            className="text-center mt-16"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Create Musical Magic?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Book a performance for your special occasion and experience the award-winning talent firsthand.
            </p>
            <Button
              onClick={() => navigate('/')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg shadow-warm hover:scale-105 transition-transform"
            >
              Book a Performance
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Awards;