import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Bot, Users, Target, Shield, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-gradient">PinnaclePlus</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          We help entrepreneurs and creators automate their growth and turn their
          social media presence into a ₹1 Lakh+/month business — using AI, strategy,
          and proven automation systems.
        </motion.p>
      </div>

      {/* Our Story Section */}
      <section className="max-w-5xl mx-auto mb-20">
        <Card className="glass-card p-8 sm:p-12">
          <CardContent className="p-0">
            <motion.h2
              className="text-3xl font-bold mb-4 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Story
            </motion.h2>
            <motion.p
              className="text-muted-foreground leading-relaxed text-base sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              PinnaclePlus was founded by a small team of creators, marketers, and
              engineers under <strong>Gadget Glitz</strong> — a long-established
              digital business based in Jabalpur, India.  
              <br /><br />
              We realized most entrepreneurs spend endless hours creating, posting,
              and analyzing content manually — instead of growing their brand.  
              So we built a system that automates it all.  
              Today, over <strong>5,000+ users</strong> trust PinnaclePlus to run their
              digital growth 24/7 while they focus on what truly matters — building
              their dream business.
            </motion.p>
          </CardContent>
        </Card>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto mb-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            To empower 100,000+ entrepreneurs to achieve financial freedom through
            automation, content, and data-driven growth — all without burnout.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: Rocket,
              title: "Empower Entrepreneurs",
              text: "Helping business owners use AI to scale faster with less effort.",
            },
            {
              icon: Bot,
              title: "Build Smart Automation",
              text: "Designing systems that think, create, and post — automatically.",
            },
            {
              icon: Target,
              title: "Deliver Measurable Results",
              text: "Every feature we build is backed by data and proven ROI.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-6 hover-glow h-full">
                <CardContent className="p-0">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-5xl mx-auto mb-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Core Values</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            These values guide every product, campaign, and customer interaction we create.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { icon: Users, title: "Community First", desc: "We grow together. Your success is our success." },
            { icon: Shield, title: "Transparency", desc: "Clear pricing, honest support, zero hidden terms." },
            { icon: Zap, title: "Innovation", desc: "We move fast, experiment boldly, and improve daily." },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-6 hover-glow h-full">
                <CardContent className="p-0">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Business Info */}
      <section className="max-w-5xl mx-auto">
        <Card className="glass-card p-8 sm:p-12">
          <CardContent className="p-0 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gradient">Our Business</h2>
            <p className="text-muted-foreground mb-6">
              <strong>Gadget Glitz</strong> — Mobile Accessories Store  
              <br />
              Registered business expanding into AI automation and digital growth systems.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground max-w-xl mx-auto">
              <div>🏪 Visit Our Store</div>
              <div>📍 31, Indra Market</div>
              <div>🏙️ Jabalpur, Madhya Pradesh</div>
              <div>📮 482001</div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              © 2025 PinnaclePlus | All Rights Reserved
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
