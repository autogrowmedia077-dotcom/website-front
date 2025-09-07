import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Ex-Software Engineer, Now Full-Time Creator",
    location: "Mumbai",
    initials: "RK",
    gradient: "from-purple-400 to-blue-400",
    revenue: "₹2.3L/month",
    timeframe: "4 months",
    content: "I was skeptical at first, but this system helped me quit my ₹8L/year job. Now I'm making ₹2.3 lakh per month with automated content across 5 platforms. The ROI? Over 4000% in 4 months."
  },
  {
    name: "Priya Sharma",
    role: "Former Marketing Executive", 
    location: "Bangalore",
    initials: "PS",
    gradient: "from-green-400 to-blue-400",
    revenue: "₹1.8L/month",
    timeframe: "3 months",
    content: "I went from posting manually 2-3 times a week to having content posted 4x daily across Instagram, YouTube, and LinkedIn. Revenue jumped from ₹15K to ₹1.8L per month. The automation handles everything while I focus on high-value activities."
  },
  {
    name: "Ankit Mehta",
    role: "College Student turned Entrepreneur",
    location: "Delhi",
    initials: "AM", 
    gradient: "from-pink-400 to-purple-400",
    revenue: "₹95K/month",
    timeframe: "2 months",
    content: "As a college student, I had no business experience. This system grew my YouTube from 800 to 47K subscribers and Instagram to 25K followers. Now I'm making ₹95K/month - more than most graduates earn in their first job."
  },
  {
    name: "Meera Patel",
    role: "Stay-at-Home Mom",
    location: "Ahmedabad",
    initials: "MP", 
    gradient: "from-orange-400 to-red-400",
    revenue: "₹1.2L/month",
    timeframe: "5 months",
    content: "I started this while managing two kids at home. The automation gave me my time back while growing my audience to 35K+ across platforms. I'm now earning ₹1.2L monthly selling digital products - all while being present for my family."
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full px-4 sm:px-0" data-testid="testimonial-slider">
      {/* Main testimonial display */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            <Card className="glass-card p-4 sm:p-8 border border-green-500/20 mx-auto max-w-2xl">
              <CardContent className="p-0">
                {/* Mobile-optimized header */}
                <div className="flex flex-col space-y-4 mb-6">
                  {/* User info - mobile stacked */}
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${testimonials[currentIndex].gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-base sm:text-xl">{testimonials[currentIndex].initials}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-base sm:text-xl truncate">{testimonials[currentIndex].name}</div>
                      <div className="text-xs sm:text-base text-muted-foreground truncate">{testimonials[currentIndex].role}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{testimonials[currentIndex].location}</div>
                    </div>
                  </div>
                  
                  {/* Revenue - mobile centered */}
                  <div className="text-center sm:text-right">
                    <div className="text-xl sm:text-3xl font-bold text-green-400">{testimonials[currentIndex].revenue}</div>
                    <div className="text-sm sm:text-base text-muted-foreground">in {testimonials[currentIndex].timeframe}</div>
                  </div>
                </div>
                
                {/* Rating - mobile centered */}
                <div className="flex items-center justify-center sm:justify-start mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-xs sm:text-base text-muted-foreground font-medium">Verified</span>
                </div>
                
                {/* Testimonial content - mobile optimized */}
                <blockquote className="text-sm sm:text-lg text-muted-foreground leading-relaxed mb-6 text-center sm:text-left">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                {/* Verification badge - mobile centered */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-center sm:justify-start text-xs sm:text-base text-green-400 font-semibold">
                    <span className="mr-1 sm:mr-2">✓</span>
                    Results verified by our team
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile-optimized navigation */}
      <div className="flex items-center justify-center mt-6 sm:mt-8 space-x-3 sm:space-x-4">
        <button
          onClick={goToPrevious}
          className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors touch-manipulation"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        
        {/* Dots indicator - mobile optimized */}
        <div className="flex space-x-1.5 sm:space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all touch-manipulation ${
                index === currentIndex 
                  ? 'bg-green-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={goToNext}
          className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors touch-manipulation"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Mobile-optimized counter */}
      <div className="text-center mt-3 sm:mt-4">
        <span className="text-xs sm:text-sm text-muted-foreground">
          {currentIndex + 1} of {testimonials.length}
        </span>
      </div>
    </div>
  );
}
