import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  Infinity, 
  Bot, 
  Target, 
  TrendingUp, 
  Headphones, 
  DollarSign, 
  Instagram, 
  ShieldCheck, 
  Layers, 
  Rocket,
  Check,
  Star,
  ArrowRight,
  Youtube,
  Twitter,
  Linkedin,
  ChevronDown,
  Users,
  Clock,
  Gift,
  Flame,
  Eye,
  TrendingDown,
  AlertTriangle,
  Crown,
  ThumbsUp,
  Award
} from "lucide-react";
import CountdownTimer from "../components/countdown-timer";
import TestimonialSlider from "../components/testimonial-slider";
import FaqSection from "../components/faq-section";
import { useState, useEffect } from "react";

export default function Landing() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [viewersCount, setViewersCount] = useState(147);
  const [soldCount, setSoldCount] = useState(1847);
  const [remainingCount, setRemainingCount] = useState(23);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Simulate live counters
    const viewersInterval = setInterval(() => {
      setViewersCount(prev => prev + Math.floor(Math.random() * 3 - 1)); // -1 to +1
    }, 5000);
    
    const soldInterval = setInterval(() => {
      setSoldCount(prev => prev + 1);
      setRemainingCount(prev => Math.max(0, prev - 1));
    }, 30000); // Every 30 seconds
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(viewersInterval);
      clearInterval(soldInterval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Bot,
      title: "Automated Content Creation",
      description: "AI-powered daily content generation and posting across all your social media platforms. Never run out of engaging content again."
    },
    {
      icon: Target,
      title: "Multi-Niche Optimization",
      description: "Advanced targeting system that optimizes your content for multiple niches, maximizing reach and engagement rates."
    },
    {
      icon: TrendingUp,
      title: "Real-time Analytics",
      description: "Comprehensive growth tracking with detailed insights, performance metrics, and optimization recommendations."
    },
    {
      icon: Headphones,
      title: "24/7 Technical Support",
      description: "Priority support from our expert team. Get help whenever you need it with our round-the-clock assistance."
    },
    {
      icon: DollarSign,
      title: "Monetization Guidance",
      description: "Step-by-step strategies to monetize your automated content and turn your digital presence into multiple revenue streams."
    },
    {
      icon: Instagram,
      title: "Instagram & YouTube Automation",
      description: "Specialized automation tools for Instagram and YouTube growth, including hashtag optimization and video scheduling."
    },
    {
      icon: ShieldCheck,
      title: "90-Day Growth Guarantee",
      description: "We guarantee measurable growth within 90 days or your money back. Risk-free investment in your digital future."
    },
    {
      icon: Layers,
      title: "Multiple Revenue Streams",
      description: "Learn how to set up and manage multiple income sources from your automated content creation system."
    },
    {
      icon: Rocket,
      title: "Instant Access",
      description: "Get immediate access to all tools and resources after purchase. Start automating your growth today, not tomorrow."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Navigation */}
      <motion.nav 
        className={`fixed top-0 w-full z-50 glass border-b border-border transition-all duration-300 ${
          isScrolled ? 'bg-black/95' : ''
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold text-gradient" data-testid="logo">AutomationPro</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-features"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-pricing"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-testimonials"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-faq"
              >
                FAQ
              </button>
            </div>
            <Button className="gradient-primary text-white hover-glow" data-testid="nav-cta">
              💰 Get ₹399 Package Now!
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Animated Discount Badge */}
          <motion.div 
            className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            data-testid="discount-badge"
          >
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-400">87% OFF - LIMITED TIME ONLY</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            data-testid="hero-headline"
          >
            Complete <span className="text-gradient">Automation</span><br />
            Package for Digital<br />
            <span className="text-gradient">Growth</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-testid="hero-subtitle"
          >
            Transform your digital presence with automated content creation, multi-platform optimization, and 24/7 growth tracking. Everything you need to scale your online business.
          </motion.p>

          {/* Price Comparison */}
          <motion.div 
            className="flex items-center justify-center space-x-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-testid="price-comparison"
          >
            <div className="text-center">
              <div className="text-2xl text-muted-foreground line-through">₹2,999</div>
              <div className="text-sm text-muted-foreground">Regular Price</div>
            </div>
            <ArrowRight className="w-8 h-8 text-muted-foreground" />
            <div className="text-center glass-card p-6 rounded-xl glow-primary">
              <div className="text-5xl font-black text-gradient">₹399</div>
              <div className="text-sm text-green-400 font-semibold">87% OFF TODAY</div>
            </div>
          </motion.div>

          {/* Main CTA */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button 
              className="gradient-primary text-white px-12 py-4 text-xl font-bold hover-glow transform transition-all duration-300 hover:scale-105"
              data-testid="hero-cta"
            >
              💰 Get ₹399 Package Now!
            </Button>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>90-Day Money Back</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <Infinity className="w-4 h-4 text-blue-400" />
                <span>Lifetime Access</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Social Proof Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex items-center justify-center space-x-8 flex-wrap gap-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 glass-card px-6 py-3 rounded-full" data-testid="live-viewers">
              <Eye className="w-5 h-5 text-red-400 animate-pulse" />
              <span className="text-sm font-semibold">{viewersCount} people viewing now</span>
            </div>
            <div className="flex items-center space-x-3 glass-card px-6 py-3 rounded-full" data-testid="sold-count">
              <ThumbsUp className="w-5 h-5 text-green-400" />
              <span className="text-sm font-semibold">{soldCount.toLocaleString()} packages sold</span>
            </div>
            <div className="flex items-center space-x-3 glass-card px-6 py-3 rounded-full border border-red-500/30" data-testid="remaining-count">
              <AlertTriangle className="w-5 h-5 text-red-400 animate-pulse" />
              <span className="text-sm font-semibold text-red-400">Only {remainingCount} left at this price!</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 border border-red-500/30 mb-8">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-2 text-red-400">🔥 FLASH SALE ENDING SOON! 🔥</h3>
                <p className="text-lg text-muted-foreground">This {remainingCount < 10 ? 'FINAL' : 'LIMITED'} offer expires at midnight. Don't miss out!</p>
              </div>
              <CountdownTimer />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-6" data-testid="features-title">
              Everything You Need to <span className="text-gradient">Dominate</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our complete automation package includes all the tools and strategies you need to scale your digital presence effortlessly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                data-testid={`feature-card-${index}`}
              >
                <Card className="glass-card p-8 h-full hover-glow">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-6">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-6" data-testid="testimonials-title">
              What Our <span className="text-gradient">Customers</span> Say
            </h2>
            <p className="text-xl text-muted-foreground">Join thousands of successful entrepreneurs who've transformed their digital presence</p>
          </motion.div>

          <TestimonialSlider />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-6" data-testid="pricing-title">
              Simple, <span className="text-gradient">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-muted-foreground mb-16">One-time payment, lifetime access. No hidden fees, no monthly subscriptions.</p>

            <Card className="glass-card p-8 border-2 border-primary glow-primary max-w-lg mx-auto" data-testid="pricing-card">
              <CardContent className="p-0">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Complete Automation Package</h3>
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <span className="text-3xl text-muted-foreground line-through">₹2,999</span>
                    <span className="text-6xl font-black text-gradient">₹399</span>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 mb-6">
                    Save ₹2,600 (87% OFF)
                  </Badge>
                </div>

                <ul className="space-y-4 mb-8 text-left">
                  {[
                    "Automated daily content creation & posting",
                    "Multi-niche optimization system",
                    "Real-time analytics & growth tracking",
                    "24/7 technical support",
                    "Monetization guidance & strategies",
                    "Instagram & YouTube automation",
                    "90-day money back guarantee",
                    "Multiple revenue stream setup"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3" data-testid={`pricing-feature-${index}`}>
                      <Check className="w-5 h-5 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full gradient-primary text-white py-4 text-xl font-bold hover-glow transform transition-all duration-300 hover:scale-105 mb-4" data-testid="pricing-cta">
                  💰 Get ₹399 Package Now!
                </Button>

                <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>Instant Access</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-6" data-testid="faq-title">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about our automation package</p>
          </motion.div>

          <FaqSection />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card p-12" data-testid="final-cta">
              <CardContent className="p-0">
                <h2 className="text-4xl sm:text-5xl font-black mb-6">
                  Ready to <span className="text-gradient">Transform</span> Your Digital Presence?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join thousands of successful entrepreneurs who've automated their way to digital success. Don't let this limited-time offer slip away.
                </p>

                <div className="flex items-center justify-center space-x-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl text-muted-foreground line-through">₹2,999</div>
                    <div className="text-sm text-muted-foreground">Regular Price</div>
                  </div>
                  <ArrowRight className="w-8 h-8 text-muted-foreground" />
                  <div className="text-center glass-card p-6 rounded-xl glow-primary">
                    <div className="text-5xl font-black text-gradient">₹399</div>
                    <div className="text-sm text-green-400 font-semibold">87% OFF TODAY</div>
                  </div>
                </div>

                <Button className="gradient-primary text-white px-12 py-4 text-xl font-bold hover-glow transform transition-all duration-300 hover:scale-105 mb-6" data-testid="final-cta-button">
                  💰 Get ₹399 Package Now!
                </Button>

                <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>90-Day Money Back</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>Instant Access</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Infinity className="w-4 h-4 text-blue-400" />
                    <span>Lifetime Support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-gradient mb-4" data-testid="footer-logo">AutomationPro</div>
            <p className="text-muted-foreground mb-6">Transform your digital presence with automated growth solutions</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="social-instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="social-youtube">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="social-twitter">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="social-linkedin">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            
            <div className="text-muted-foreground text-sm" data-testid="footer-copyright">
              © 2025 AutomationPro | Built with ❤️ | All rights reserved
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden sticky-cta z-50">
        <div className="p-4">
          <Button className="w-full gradient-primary text-white py-3 font-bold text-lg" data-testid="mobile-sticky-cta">
            💰 Get ₹399 Package Now!
          </Button>
        </div>
      </div>
    </div>
  );
}
