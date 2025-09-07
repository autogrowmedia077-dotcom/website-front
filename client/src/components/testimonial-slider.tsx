import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
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
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fade-edges overflow-hidden px-4 sm:px-0" data-testid="testimonial-slider">
      <motion.div 
        className="flex space-x-4 sm:space-x-8"
        animate={{ x: -currentIndex * (320 + 16) }} // Adjusted for mobile
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="min-w-[320px] sm:min-w-[450px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            data-testid={`testimonial-${index}`}
          >
            <Card className="glass-card p-4 sm:p-8 h-full border border-green-500/20">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 space-y-2 sm:space-y-0">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm sm:text-base">{testimonial.initials}</span>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <div className="font-semibold text-sm sm:text-base">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-xl sm:text-2xl font-bold text-green-400">{testimonial.revenue}</div>
                    <div className="text-xs text-muted-foreground">in {testimonial.timeframe}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">Verified Purchase</span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{testimonial.content}</p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border">
                  <div className="text-xs sm:text-sm text-green-400 font-semibold">✓ Results verified by our team</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
