import { Card } from "@/components/ui/card";
import { Quote, Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface Testimonial {
  name: string;
  title: string;
  image: string;
  quote: string;
  testimonial: string;
  platform?: "fiverr" | "upwork" | "client";
  rating?: number;
  reviewUrl?: string;
}

const testimonials: Testimonial[] = [
  // Fiverr Reviews
  {
    name: "Sports Analytics Client",
    title: "Data Analyst",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sports&backgroundColor=f4b6c3",
    quote: "Excellent Web Scraping Work - Highly Recommend",
    testimonial: "Ayoub did an excellent job on our web scraper project. He delivered exactly what we needed - a reliable tool that extracts web data. What impressed us most: Strong technical skills in web scraping and data extraction, attention to detail in matching specific games, delivered ahead of schedule. The scraper works reliably and efficiently. Would definitely work with him again.",
    platform: "upwork",
    rating: 5,
    reviewUrl: "https://www.upwork.com/freelancers/~01d52af64f03234e9f"
  },
  {
    name: "Website Owner",
    title: "Business Owner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Website&backgroundColor=b6f4c3",
    quote: "Great job on user activity tracking",
    testimonial: "Delivered a simple yet effective code to track user activity including IP addresses and clicked URLs on our site. Clean implementation and exactly what we needed.",
    platform: "upwork",
    rating: 5,
    reviewUrl: "https://www.upwork.com/freelancers/~01d52af64f03234e9f"
  },
  {
    name: "E-commerce Developer",
    title: "Full Stack Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ecommerce&backgroundColor=f4f4b6",
    quote: "Amazing work!!! Extremely happy!",
    testimonial: "Fixed our category issues quickly and efficiently. The solution was implemented perfectly and resolved all our problems. Highly satisfied with the service.",
    platform: "upwork",
    rating: 5,
    reviewUrl: "https://www.upwork.com/freelancers/~01d52af64f03234e9f"
  },
  {
    name: "Travel Platform Manager",
    title: "Product Manager",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Travel&backgroundColor=f4b6f4",
    quote: "Quick and thorough review scraping",
    testimonial: "He got the task done quickly and provided plenty of feedback. Scraped and formatted reviews from Klook platform efficiently with great attention to detail.",
    platform: "upwork",
    rating: 5,
    reviewUrl: "https://www.upwork.com/freelancers/~01d52af64f03234e9f"
  },
  {
    name: "API Developer",
    title: "Backend Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=API&backgroundColor=b6f4f4",
    quote: "Great work as always",
    testimonial: "Fixed our API issues promptly and effectively. Consistent quality work and reliable service. Always delivers what promised.",
    platform: "upwork",
    rating: 5,
    reviewUrl: "https://www.upwork.com/freelancers/~01d52af64f03234e9f"
  },
  {
    name: "Real Estate Professional",
    title: "Real Estate Agent",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=RealEstate&backgroundColor=f4c3b6",
    quote: "Professional French-speaking automation specialist",
    testimonial: "I had a one-hour consultation with Ayoub. He is very professional, clear in communication and pleasant to talk with. Excellent understanding of real estate automation needs.",
    platform: "upwork",
    rating: 5,
    reviewUrl: "https://www.upwork.com/freelancers/~01d52af64f03234e9f"
  },
  {
    name: "Data Scientist",
    title: "ML Engineer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=DataScientist&backgroundColor=f4b6d1",
    quote: "Quick issue resolution on Python script",
    testimonial: "Was again a pleasure to work with Ayoub. Quickly identified the issue with our Python script for extracting and grouping images data and solved it efficiently.",
    platform: "upwork",
    rating: 5,
    reviewUrl: "https://www.upwork.com/freelancers/~01d52af64f03234e9f"
  },
  {
    name: "Social Media Analyst",
    title: "Digital Marketing Specialist",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=SocialMedia&backgroundColor=d1b6f4",
    quote: "Fantastic Twitter data extraction work",
    testimonial: "Ayoub was fantastic to work with from start to finish. He clearly understood the task of extracting and organizing Twitter follower/following data, asked the right clarifying questions, and delivered exactly what was needed. Sorted by number of followers perfectly.",
    platform: "upwork",
    rating: 5,
    reviewUrl: "https://www.upwork.com/freelancers/~01d52af64f03234e9f"
  },
  {
    name: "API Integration Specialist",
    title: "Technical Lead",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=APIIntegration&backgroundColor=b6f4d1",
    quote: "Exceptional worker! Always goes above and beyond!",
    testimonial: "Exceptional worker! Always goes above and beyond!! This guy is the best I've worked with by far!! Fixed our live API issue with outstanding quality and speed.",
    platform: "upwork",
    rating: 5,
    reviewUrl: "https://www.upwork.com/freelancers/~01d52af64f03234e9f"
  },
  {
    name: "WordPress Developer",
    title: "E-commerce Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=WordPressDev&backgroundColor=f4d1b6",
    quote: "Amazing worker! Highly recommend",
    testimonial: "Amazing worker! In constant contact throughout. Provided high quality work! Advanced API integration to products in WordPress. Highly recommend working with him.",
    platform: "upwork",
    rating: 5,
    reviewUrl: "https://www.upwork.com/freelancers/~01d52af64f03234e9f"
  },
  {
    name: "WordPress Specialist",
    title: "Web Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=WordPressSpecialist&backgroundColor=b6d1f4",
    quote: "Brilliant Communication, fully understood requirements",
    testimonial: "Great worker! Brilliant Communication, fully understood what was needed and fixed my API import with ease! Highly recommended for WordPress API work.",
    platform: "upwork",
    rating: 5,
    reviewUrl: "https://www.upwork.com/freelancers/~01d52af64f03234e9f"
  },
  {
    name: "Python Developer",
    title: "Software Engineer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=PythonDev&backgroundColor=f4b6f4",
    quote: "Highly committed engineer and developer",
    testimonial: "Ayoub is a highly committed engineer and developer. Communication is always active. Delivered great results, adapted to changes throughout the task. Modified existing Python script to extract and group images data perfectly. Would hire Ayoub again for future tasks.",
    platform: "upwork",
    rating: 5,
    reviewUrl: "https://www.upwork.com/freelancers/~01d52af64f03234e9f"
  },
  {
    name: "C# Developer",
    title: "Software Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=CSharpDev&backgroundColor=d1f4b6",
    quote: "Solid work on C# higher-order functions",
    testimonial: "Helped with QCM test revisions for higher-order functions in C#. Good technical knowledge and clear explanations. Rating reflects the quality of work delivered.",
    platform: "upwork",
    rating: 4,
    reviewUrl: "https://www.upwork.com/freelancers/~01d52af64f03234e9f"
  },
  {
    name: "E-commerce Owner",
    title: "Business Owner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=EcommerceOwner&backgroundColor=f4f4b6",
    quote: "Data extraction tool development",
    testimonial: "Developed a tool for retrieving e-commerce data including emails, phone numbers, and store names. Good technical implementation with solid results.",
    platform: "upwork",
    rating: 4,
    reviewUrl: "https://www.upwork.com/freelancers/~01d52af64f03234e9f"
  },
  {
    name: "Automation Specialist",
    title: "Technical Consultant",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=AutomationSpecialist&backgroundColor=b6f4f4",
    quote: "Great job on n8n workflow integration",
    testimonial: "Created a n8n workflow to integrate WhatsApp and Slack with potential for customer support agent integration. Executed exactly as expected with professional quality.",
    platform: "upwork",
    rating: 5,
    reviewUrl: "https://www.upwork.com/freelancers/~01d52af64f03234e9f"
  },
  // Additional Fiverr Reviews
  {
    name: "Software Update Client",
    title: "Project Manager",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=SoftwareUpdate&backgroundColor=f4b6d1",
    quote: "A very good person and specialist",
    testimonial: "A very good person and specialist. You can feel that Abdoul is constantly developing. His approach to work and deadlines is very proper.",
    platform: "fiverr",
    rating: 5,
    reviewUrl: "https://fr.fiverr.com/softdevlamine01?msockid=265873ff63d96e452c2b676362c36f6d"
  },
  {
    name: "Research Study Client",
    title: "Academic Researcher",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=ResearchStudy&backgroundColor=d1b6f4",
    quote: "Very good communication, delivered on time",
    testimonial: "Very good communication, delivered on time. It was nice working with him!",
    platform: "fiverr",
    rating: 5,
    reviewUrl: "https://fr.fiverr.com/softdevlamine01?msockid=265873ff63d96e452c2b676362c36f6d"
  },
  {
    name: "Laravel Developer",
    title: "Business Owner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=LaravelDev&backgroundColor=b6f4d1",
    quote: "Great work thanks!",
    testimonial: "Great work thanks!",
    platform: "fiverr",
    rating: 5,
    reviewUrl: "https://fr.fiverr.com/softdevlamine01?msockid=265873ff63d96e452c2b676362c36f6d"
  },
  {
    name: "Java Developer",
    title: "Tech Lead",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=JavaDev&backgroundColor=f4d1b6",
    quote: "Abdoul is a serious, courteous, and available professional",
    testimonial: "Abdoul is a serious, courteous, and available professional, absolutely recommended. We will definitely contact him for other projects.",
    platform: "fiverr",
    rating: 5,
    reviewUrl: "https://fr.fiverr.com/softdevlamine01?msockid=265873ff63d96e452c2b676362c36f6d"
  },
  {
    name: "Gonensagie",
    title: "Data Analyst",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gonensagie&backgroundColor=b6d1f4",
    quote: "Amine did way and beyond my expectations",
    testimonial: "Amine did way and beyond my expectations. Great guy to work with",
    platform: "fiverr",
    rating: 5,
    reviewUrl: "https://fr.fiverr.com/softdevlamine01?msockid=265873ff63d96e452c2b676362c36f6d"
  },
  {
    name: "Gonensagie",
    title: "Data Analyst",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gonensagie2&backgroundColor=f4b6f4",
    quote: "Amazing guy",
    testimonial: "Amazing guy",
    platform: "fiverr",
    rating: 5,
    reviewUrl: "https://fr.fiverr.com/softdevlamine01?msockid=265873ff63d96e452c2b676362c36f6d"
  },
  {
    name: "Gonensagie",
    title: "Data Analyst",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gonensagie3&backgroundColor=d1f4b6",
    quote: "Great developer, very responsive, and creative!",
    testimonial: "Great developer, very responsive, and creative!",
    platform: "fiverr",
    rating: 5,
    reviewUrl: "https://fr.fiverr.com/softdevlamine01?msockid=265873ff63d96e452c2b676362c36f6d"
  },
  {
    name: "Molotov4",
    title: "Business Owner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Molotov4&backgroundColor=f4f4b6",
    quote: "I recommend this seller",
    testimonial: "I recommend this seller",
    platform: "fiverr",
    rating: 5,
    reviewUrl: "https://fr.fiverr.com/softdevlamine01?msockid=265873ff63d96e452c2b676362c36f6d"
  },
  {
    name: "Aaron Lee",
    title: "Entrepreneur",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=AaronLee&backgroundColor=b6f4f4",
    quote: "Been working with him for a long time",
    testimonial: "Been working with him for a long time and always delivers and provides advice on improvements! Great guy to work with!",
    platform: "fiverr",
    rating: 5,
    reviewUrl: "https://fr.fiverr.com/softdevlamine01?msockid=265873ff63d96e452c2b676362c36f6d"
  },
  {
    name: "Infiniteral",
    title: "Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Infiniteral&backgroundColor=f4c3b6",
    quote: "Great. Fast and good quality.",
    testimonial: "Great. Fast and good quality.",
    platform: "fiverr",
    rating: 5,
    reviewUrl: "https://fr.fiverr.com/softdevlamine01?msockid=265873ff63d96e452c2b676362c36f6d"
  },
  {
    name: "Euan Wheatley",
    title: "Project Manager",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=EuanWheatley&backgroundColor=c3b6f4",
    quote: "Good work!",
    testimonial: "Good work!",
    platform: "fiverr",
    rating: 5,
    reviewUrl: "https://fr.fiverr.com/softdevlamine01?msockid=265873ff63d96e452c2b676362c36f6d"
  },
  {
    name: "Reythab",
    title: "Business Owner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Reythab&backgroundColor=b6c3f4",
    quote: "Je recommande",
    testimonial: "Je recommande",
    platform: "fiverr",
    rating: 5,
    reviewUrl: "https://fr.fiverr.com/softdevlamine01?msockid=265873ff63d96e452c2b676362c36f6d"
  },
  {
    name: "Bill",
    title: "Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bill&backgroundColor=f4b6c3",
    quote: "The communication was great",
    testimonial: "The communication was great, the delivery was fast and even better than I expected. I can say that he is very skilled and it was easy to work with him. Highly recommend :)",
    platform: "fiverr",
    rating: 5,
    reviewUrl: "https://fr.fiverr.com/softdevlamine01?msockid=265873ff63d96e452c2b676362c36f6d"
  },
  {
    name: "David Bourak",
    title: "Entrepreneur",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=DavidBourak&backgroundColor=d1b6c3",
    quote: "I am happy to work with this seller",
    testimonial: "I am happy to work with this seller, I hope we continue together !! Thank you",
    platform: "fiverr",
    rating: 5,
    reviewUrl: "https://fr.fiverr.com/softdevlamine01?msockid=265873ff63d96e452c2b676362c36f6d"
  },
  {
    name: "Jesse Flores",
    title: "Project Manager",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=JesseFlores&backgroundColor=b6d1c3",
    quote: "Fast!!!!!!",
    testimonial: "Fast!!!!!!",
    platform: "fiverr",
    rating: 5,
    reviewUrl: "https://fr.fiverr.com/softdevlamine01?msockid=265873ff63d96e452c2b676362c36f6d"
  },
  {
    name: "James",
    title: "Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James&backgroundColor=f4d1c3",
    quote: "Good work",
    testimonial: "Good work",
    platform: "fiverr",
    rating: 5,
    reviewUrl: "https://fr.fiverr.com/softdevlamine01?msockid=265873ff63d96e452c2b676362c36f6d"
  },
  {
    name: "Bill",
    title: "C++ Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bill2&backgroundColor=c3f4b6",
    quote: "This seller delivered the work perfectly",
    testimonial: "This seller delivered the work perfectly and within such a short time. The seller is extremely good with C++ languages. He delivered exactly what I wanted with perfectly compiled code along with the executable. Communicating with him was very easy since he was very cooperative and patient.",
    platform: "fiverr",
    rating: 5,
    reviewUrl: "https://fr.fiverr.com/softdevlamine01?msockid=265873ff63d96e452c2b676362c36f6d"
  },
  {
    name: "Kinan Hamouda",
    title: "Student",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=KinanHamouda&backgroundColor=b6f4c3",
    quote: "Stunning, have done it within the timeframe",
    testimonial: "Stunning, have done it within the timeframe and absolutely would refer it to anyone needs help with their work Thank you so much",
    platform: "fiverr",
    rating: 5,
    reviewUrl: "https://fr.fiverr.com/softdevlamine01?msockid=265873ff63d96e452c2b676362c36f6d"
  },
  {
    name: "Dari",
    title: "Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dari&backgroundColor=f4c3d1",
    quote: "Good knowledge :)",
    testimonial: "Good knowledge :)",
    platform: "fiverr",
    rating: 4,
    reviewUrl: "https://fr.fiverr.com/softdevlamine01?msockid=265873ff63d96e452c2b676362c36f6d"
  }
];

const Testimonials = () => {
  const getPlatformBadge = (platform?: string) => {
    switch (platform) {
      case "fiverr":
        return <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Fiverr</span>;
      case "upwork":
        return <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Upwork</span>;
      default:
        return null;
    }
  };

  const renderStars = (rating?: number) => {
    if (!rating) return null;
    return (
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
          />
        ))}
        <span className="text-sm text-muted-foreground ml-2">{rating}/5</span>
      </div>
    );
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-gradient">Clients & Platforms</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from clients and verified reviews on leading platforms.
          </p>
        </div>

        <div className="relative group px-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-gray-400',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary',
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="!pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto">
                <Card className="bg-card border-border p-4 hover-lift hover-glow relative flex flex-col h-80">
                  {/* Platform Badge */}
                  {testimonial.platform !== "client" && (
                    <div className="absolute top-4 right-4 z-10">
                      {getPlatformBadge(testimonial.platform)}
                    </div>
                  )}

                  <Quote className="text-primary mb-4 flex-shrink-0" size={28} />

                  {/* Rating Stars for Platform Reviews */}
                  {testimonial.platform !== "client" && renderStars(testimonial.rating)}

                  <p className="text-lg font-semibold mb-2 text-primary flex-shrink-0">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex-1 overflow-hidden">
                    <p className="text-sm text-muted-foreground leading-tight overflow-hidden" style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical'
                    }}>
                      {testimonial.testimonial}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-border flex-shrink-0 mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{testimonial.title}</p>
                    </div>

                    {/* Review Link for Platform Reviews */}
                    {testimonial.reviewUrl && (
                      <a
                        href={testimonial.reviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary dark:bg-gray-800 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary dark:bg-gray-800 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
