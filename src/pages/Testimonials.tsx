import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Star, ArrowLeft, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';

export default function Testimonials() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);
  // Add this useEffect to scroll to top on component mount
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);
  const testimonials = [
    {
      name: 'Priya & Rahul',
      location: 'Chennai',
      event: 'Wedding Ceremony',
      rating: 5,
      image: 'P',
      text: 'G. Sri Jagan made our wedding absolutely magical! His violin performance during our ceremony brought tears to everyone\'s eyes. The way he played traditional songs with such emotion was breathtaking. Every guest complimented the beautiful music, and we couldn\'t have asked for a better artist.',
      date: 'October 2024',
    },
    {
      name: 'Anand & Divya',
      location: 'Bangalore',
      event: 'Reception',
      rating: 5,
      image: 'A',
      text: 'We hired Sri Jagan for our reception evening and it was the best decision ever! His repertoire included both classical and contemporary pieces that kept all age groups entertained. The professionalism and talent he brings is unmatched. Guests are still talking about the beautiful music!',
      date: 'September 2024',
    },
    {
      name: 'Lakshmi Sundaram',
      location: 'Coimbatore',
      event: 'Engagement',
      rating: 5,
      image: 'L',
      text: 'Perfect romantic atmosphere for our engagement! Sri Jagan understood exactly what we wanted and delivered beyond expectations. His ability to read the room and adjust his performance accordingly shows true artistry. Professional, talented, and incredibly kind. Highly recommended!',
      date: 'August 2024',
    },
    {
      name: 'Karthik Family',
      location: 'Hyderabad',
      event: 'Wedding',
      rating: 5,
      image: 'K',
      text: 'Sri Jagan added such elegance and emotion to our daughter\'s wedding ceremony. His nadaswaram performance was traditional yet fresh, and the violin melodies during the reception were simply divine. Truly a gifted artist who respects the sanctity of the occasion.',
      date: 'July 2024',
    },
    {
      name: 'Sneha & Arjun',
      location: 'Mumbai',
      event: 'Wedding & Reception',
      rating: 5,
      image: 'S',
      text: 'We booked Sri Jagan for both our wedding ceremony and reception. The violin melodies created unforgettable memories for us and our families. He played all our requested songs beautifully and even surprised us with a special arrangement. An absolute professional!',
      date: 'June 2024',
    },
    {
      name: 'Meera Krishnan',
      location: 'Pune',
      event: 'Corporate Event',
      rating: 5,
      image: 'M',
      text: 'Exceptional talent! We hired Sri Jagan for our company\'s annual celebration and he was phenomenal. The performance added a touch of sophistication and cultural richness to our event. His ability to engage the audience while maintaining musical excellence is remarkable.',
      date: 'May 2024',
    },
    {
      name: 'Venkat & Preethi',
      location: 'Madurai',
      event: 'Wedding',
      rating: 5,
      image: 'V',
      text: 'Sri Jagan\'s performance at our wedding was nothing short of spectacular. His mastery over the violin and his deep understanding of both classical and modern music made our special day even more memorable. Thank you for the beautiful memories!',
      date: 'April 2024',
    },
    {
      name: 'Aishwarya Reddy',
      location: 'Vijayawada',
      event: 'Birthday Celebration',
      rating: 5,
      image: 'A',
      text: 'Hired Sri Jagan for my father\'s 60th birthday and it was the highlight of the evening! His performance was personalized and heartfelt. He even learned a special song that was meaningful to our family. Such dedication and talent!',
      date: 'March 2024',
    },
    {
      name: 'Ravi & Deepika',
      location: 'Kochi',
      event: 'Reception',
      rating: 5,
      image: 'R',
      text: 'Outstanding performance at our reception! Sri Jagan\'s music created the perfect ambiance for our celebration. His professionalism, punctuality, and incredible talent made everything seamless. We received so many compliments from our guests!',
      date: 'February 2024',
    },
    {
      name: 'Harini Subramanian',
      location: 'Trichy',
      event: 'Wedding Ceremony',
      rating: 5,
      image: 'H',
      text: 'Sri Jagan brought our wedding ceremony to life with his soulful violin performance. Every note resonated with emotion and beauty. His understanding of traditional music combined with modern sensibilities is truly unique. Highly recommended for any special occasion!',
      date: 'January 2024',
    },
  ];

  return (
    <Layout>

      <div className="min-h-screen bg-background">


        {/* Hero Section */}
        <section className="py-16 md:py-24 animated-gold-bg">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div data-aos="fade-down">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <span className="text-primary font-semibold">10,000+ Happy Clients</span>
              </div>
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
                What Clients Say
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Read testimonials from families and organizations who experienced memorable performances
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-card rounded-2xl p-4 shadow-warm hover:shadow-elegant transition-all duration-300 border border-border hover:scale-105"
                >
                  {/* <Quote className="h-8 w-8 text-primary/30 mb-4" /> */}

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground/90 leading-relaxed text-xs text-justify mb-6">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold text-lg">{testimonial.image}</span>
                    </div>
                    <div className='flex-1'>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-primary font-medium mt-1">{testimonial.event}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Create Your Own Memorable Experience?
            </h3>
            <p className="text-muted-foreground text-sm mb-8">
              Join thousands of satisfied clients who chose G. Sri Jagan for their special occasions
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