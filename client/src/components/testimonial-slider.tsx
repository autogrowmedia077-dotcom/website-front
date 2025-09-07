import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Digital Entrepreneur",
    initials: "RK",
    gradient: "from-purple-400 to-blue-400",
    content: "This automation package completely transformed my Instagram growth. I went from 500 to 15K followers in just 2 months. The ROI has been incredible!"
  },
  {
    name: "Priya Sharma",
    role: "Content Creator", 
    initials: "PS",
    gradient: "from-green-400 to-blue-400",
    content: "The automated content creation saved me 20+ hours per week. Now I focus on strategy while the system handles daily posting. Best investment ever!"
  },
  {
    name: "Ankit Mehta",
    role: "YouTuber",
    initials: "AM", 
    gradient: "from-pink-400 to-purple-400",
    content: "My YouTube channel grew from 1K to 50K subscribers in 3 months. The multi-platform automation is pure genius. Worth every rupee!"
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
    <div className="fade-edges overflow-hidden" data-testid="testimonial-slider">
      <motion.div 
        className="flex space-x-8"
        animate={{ x: -currentIndex * (400 + 32) }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="min-w-[400px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            data-testid={`testimonial-${index}`}
          >
            <Card className="glass-card p-8 h-full">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold">{testimonial.initials}</span>
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
