import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly will I see results?",
    answer: "Most users see significant growth within the first 30 days. Our automation starts working immediately, but meaningful results typically appear within 2-4 weeks of consistent use."
  },
  {
    question: "Is this a one-time payment or subscription?",
    answer: "It's a one-time payment of ₹399 for lifetime access. No monthly fees, no hidden costs, no recurring charges. Pay once, use forever."
  },
  {
    question: "What platforms does this work with?",
    answer: "Our automation package works with Instagram, YouTube, Facebook, Twitter, LinkedIn, and TikTok. We're constantly adding support for new platforms."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes! We offer a 90-day money-back guarantee. If you don't see meaningful growth in your digital presence within 90 days, we'll refund your full payment."
  },
  {
    question: "Do I need technical knowledge to use this?",
    answer: "Not at all! Our system is designed for complete beginners. Everything is automated and user-friendly. We also provide step-by-step tutorials and 24/7 support."
  },
  {
    question: "How does the 24/7 support work?",
    answer: "You get priority access to our support team via email, chat, and WhatsApp. Our experts are available around the clock to help you maximize your results."
  },
  {
    question: "Can I customize the automated content?",
    answer: "Absolutely! You have full control over content themes, posting schedules, hashtags, and messaging. The automation adapts to your brand voice and style preferences."
  },
  {
    question: "What makes this different from other automation tools?",
    answer: "Our package combines automation with human expertise. You get AI-powered tools plus personal coaching, optimization strategies, and ongoing support - not just software."
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
