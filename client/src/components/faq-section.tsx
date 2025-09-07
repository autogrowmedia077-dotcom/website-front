import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly will I start making money?",
    answer: "Based on our data from 5,000+ users, 73% start earning within their first 30 days. Our top performers make their ₹399 investment back in the first week. We provide a complete revenue roadmap so you can start monetizing immediately."
  },
  {
    question: "Is this really a one-time payment? No hidden costs?",
    answer: "Yes, ₹399 is all you pay. Ever. This includes the complete automation system, personal coaching, all future updates, and lifetime support. We make money when our system helps you make money - there's no incentive for us to add hidden costs."
  },
  {
    question: "What if I'm not tech-savvy? Can I still do this?",
    answer: "Perfect! 68% of our successful users had zero technical experience. Our system is built for complete beginners. You get step-by-step video tutorials, done-for-you templates, and a personal coach who will walk you through everything via WhatsApp."
  },
  {
    question: "Can you guarantee I'll make money?",
    answer: "Yes. We guarantee you'll see a 300% ROI within 90 days, or we'll refund your money AND pay you ₹5,000 for your time. This isn't just confidence in our system - it's mathematical certainty based on 5,000+ success stories."
  },
  {
    question: "How much time do I need to invest daily?",
    answer: "Just 30 minutes during setup, then 15 minutes daily for optimization. The system runs 24/7 automatically. Most of our successful users spend more time counting their earnings than managing the system!"
  },
  {
    question: "Will this work in my specific niche/industry?",
    answer: "Yes. Our system works across 47+ different niches - from fitness to finance, cooking to consulting. The AI adapts to any industry. Plus, your personal coach will customize everything specifically for your niche and target audience."
  },
  {
    question: "What if I already have a small following?",
    answer: "Even better! Our system amplifies existing audiences. Users with 1K+ followers typically see faster results. The automation will optimize your current content and audience to maximize revenue potential."
  },
  {
    question: "How is this different from hiring a social media manager?",
    answer: "A good social media manager costs ₹15,000-50,000/month and may not understand monetization. Our system costs ₹399 once, includes revenue optimization, works 24/7, never takes breaks, and comes with a money-back guarantee."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4" data-testid="faq-section">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          data-testid={`faq-item-${index}`}
        >
          <Card className="glass-card overflow-hidden">
            <button
              className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              onClick={() => toggleFaq(index)}
              data-testid={`faq-question-${index}`}
            >
              <span className="font-semibold">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                  data-testid={`faq-answer-${index}`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
