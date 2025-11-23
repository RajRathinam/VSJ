import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Music, Users,User, Heart, Award, ArrowLeft, Calendar, Star, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';

export default function Journey() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const timeline = [
    {
      year: '2013',
      title: 'Beginning of Musical Journey',
      description: 'Started learning violin at age 8 under the guidance of renowned artist Karaikal Suka Pavalan. This marked the beginning of an extraordinary musical journey.',
      icon: Music,
    },
    {
      year: '2015',
      title: 'First Live Performance',
      description: 'At just 10 years old, performed the first live concert, marking the start of a professional performing career that would span over a decade.',
      icon: Star,
    },
    {
      year: '2016-2018',
      title: 'Nadaswaram Training',
      description: 'Began learning nadaswaram under father Nadaswaram S. Govindan, expanding musical repertoire and deepening connection with traditional Indian classical music.',
      icon: Users,
    },
    {
      year: '2019-2021',
      title: 'Rising Recognition',
      description: 'Performed at numerous prestigious venues and events. Started receiving golden awards for excellence in performances, establishing reputation as a sought-after artist.',
      icon: Award,
    },
    {
      year: '2022-2023',
      title: 'Major Milestone',
      description: 'Crossed 5,000+ live concerts and received the prestigious title "Nadha Kala Nithi" recognizing dedication and excellence in music.',
      icon: Trophy,
    },
    {
      year: '2024',
      title: '10,000+ Concerts Achievement',
      description: 'Achieved the remarkable milestone of 10,000+ live concerts in just 11 years. Continue to inspire audiences while pursuing B.E. in Computer Science Engineering.',
      icon: Heart,
    },
  ];

  const mentors = [
    {
      name: 'Karaikal Suka Pavalan',
      role: 'Violin Guru',
      description: 'Trained under this renowned violinist for 2 years, learning the foundations and techniques that shaped my violin artistry.',
    },
    {
      name: 'Nadaswaram S. Govindan',
      role: 'Father & Nadaswaram Guru',
      description: 'My father and nadaswaram teacher who has been my greatest inspiration and guide in the world of traditional Indian music.',
    },
    {
      name: 'G. Sudha',
      role: 'Mother & Support Pillar',
      description: 'My mother who has been a constant source of encouragement, support, and strength throughout my musical journey.',
    },
  ];

  return (
 <Layout>
       <div className="min-h-screen bg-background">
      {/* Header */}
      {/* Hero Section */}
      <section className="py-16 md:py-24 animated-gold-bg">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-down">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Music className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">11 Years of Dedication</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              The Journey of G. Sri Jagan
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From a young violin student to a celebrated artist with 10,000+ concerts and 18 Golden Awards - 
              this is the story of passion, dedication, and the transformative power of music.
            </p>
          </div>
        </div>
      </section>

{/* About Section */}
<section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-2xl blur-xl"></div>
  <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary/5 rounded-2xl blur-xl"></div>
  <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/3 rounded-xl blur-lg"></div>
  
  {/* Animated floating elements */}
  <div className="absolute top-20 right-20 w-8 h-8 border-2 border-primary/20 rounded-lg animate-pulse"></div>
  <div className="absolute bottom-20 left-20 w-6 h-6 border-2 border-primary/15 rounded-lg animate-pulse delay-1000"></div>

  <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
    <div 
      data-aos="fade-up" 
      className="relative rounded-2xl px-4 py-6 md:p-12 bg-gradient-to-br from-card to-primary/5 border-2 border-primary/20 overflow-hidden group hover:scale-105 transition-transform duration-300"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500 rounded-bl-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/5 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500 rounded-tr-3xl"></div>
      
      {/* Corner decorative elements */}
      <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-primary/20 rounded-tr-lg"></div>
      <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-primary/20 rounded-bl-lg"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-primary/15 p-3 rounded-xl backdrop-blur-sm border border-primary/20">
            <User className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">About Me</h3>
            <p className="text-muted-foreground text-xs mt-1">Violinist & Nadaswaram Artist</p>
          </div>
        </div>

        <div className="space-y-6 text-foreground/80 text-sm leading-relaxed">
          <p className="text-justify">
            I am <span className="font-semibold text-primary">G. Sri Jagan</span>, a passionate violinist and nadaswaram artist currently pursuing my B.E. in Computer Science Engineering. 
            Music has been the core of my identity and journey from a very young age, shaping not just my career but my entire worldview.
          </p>
          
          <p className="text-justify">
            What started as a curious 8-year-old learning the violin has blossomed into an extraordinary 11-year journey filled with 
            over <span className="font-semibold text-primary">10,000 live performances</span>. Each concert, whether it's an intimate family gathering or a grand wedding celebration, 
            has been an opportunity to touch hearts and create lasting memories through music.
          </p>
          
          <p className="text-justify">
            The recognition I've received—<span className="font-semibold text-primary">18 Golden Awards</span> and the prestigious title <span className="font-semibold text-primary">"Nadha Kala Nithi"</span>—is not just a personal achievement 
            but a testament to the support of my family, my gurus, and the countless audiences who have appreciated my art. My father, 
            <span className="font-semibold text-primary"> Nadaswaram S. Govindan</span>, and my mother, <span className="font-semibold text-primary">G. Sudha</span>, have been my pillars of strength, guiding me through every step of this journey.
          </p>
          
          <p className="text-justify">
            Today, as I balance my engineering studies with my musical career, I continue to pursue my passion with the same enthusiasm 
            I had as a 10-year-old performing my first live concert. Every performance is a new opportunity to learn, grow, and share 
            the beauty of Indian classical music with the world.
          </p>
        </div>

        {/* Quick highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-primary/10">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary font-serif">11+</div>
            <div className="text-xs text-muted-foreground">Years</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary font-serif">10K+</div>
            <div className="text-xs text-muted-foreground">Concerts</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary font-serif">18</div>
            <div className="text-xs text-muted-foreground">Awards</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary font-serif">100%</div>
            <div className="text-xs text-muted-foreground">Passion</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Timeline Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-16" data-aos="fade-up">
            Musical Timeline
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>

            {timeline.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  data-aos={isEven ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                  className={`flex items-center mb-12 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="bg-card rounded-2xl p-6 shadow-warm hover:shadow-elegant transition-all border border-border">
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-primary font-bold text-lg">{item.year}</span>
                      </div>
                      <h4 className="font-serif text-xl font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="w-full md:w-2/12 flex justify-center my-4 md:my-0">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg border-4 border-background">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="w-full md:w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12" data-aos="fade-up">
            Guided by the Best
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-card rounded-2xl p-6 shadow-warm hover:shadow-elegant transition-all border border-border text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-primary">{mentor.name[0]}</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-foreground mb-2">{mentor.name}</h4>
                <p className="text-primary font-medium text-sm mb-3">{mentor.role}</p>
                <p className="text-sm text-muted-foreground">{mentor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '10K+', label: 'Live Concerts' },
              { number: '18', label: 'Golden Awards' },
              { number: '11', label: 'Years Experience' },
              { number: '2', label: 'Instruments Mastered' },
            ].map((stat, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="bg-card rounded-2xl p-6 text-center shadow-warm hover:shadow-elegant transition-all hover:scale-105"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary font-serif mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in">
          <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Create Beautiful Memories Together
          </h3>
          <p className="text-muted-foreground mb-8">
            Experience the passion and artistry that has touched thousands of hearts across 10,000+ performances
          </p>
          <Button
            onClick={() => navigate('/')}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm hover:scale-105 transition-transform"
          >
            Book Your Performance
          </Button>
        </div>
      </section>

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
    </div>
 </Layout>
  );
}