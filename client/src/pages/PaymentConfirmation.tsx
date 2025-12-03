
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { useLocation } from 'wouter';

const PaymentConfirmation: React.FC = () => {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="glass-card p-8 sm:p-12 text-center glow-primary">
          <CardContent className="p-0">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
              className="mx-auto mb-6"
            >
              <CheckCircle className="w-24 h-24 text-green-400 mx-auto" />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-black text-gradient mb-6">
              Payment Received!
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Thank you for your purchase. Our Onboarding Team will contact you in 48 hours to collect all the details.
            </p>
            <Button 
              onClick={() => setLocation('/')} 
              className="gradient-primary text-white px-8 py-3 text-lg font-bold hover-glow transform transition-all duration-300 hover:scale-105"
            >
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default PaymentConfirmation;
