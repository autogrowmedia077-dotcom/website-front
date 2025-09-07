import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 35 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      const distance = tomorrow.getTime() - now;

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="glass-card p-8 border border-red-500/30" data-testid="countdown-timer">
      <CardContent className="p-0 text-center">
        <h3 className="text-2xl font-bold mb-2 text-red-400">⏰ ₹399 Price Expires in:</h3>
        <p className="text-sm text-muted-foreground mb-4">After this timer, price increases to ₹2,999</p>
        <div className="flex justify-center space-x-4 mb-6">
          <div className="countdown-digit p-4 rounded-lg text-center" data-testid="countdown-hours">
            <div className="text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
            <div className="text-sm text-muted-foreground">Hours</div>
          </div>
          <div className="countdown-digit p-4 rounded-lg text-center" data-testid="countdown-minutes">
            <div className="text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
            <div className="text-sm text-muted-foreground">Minutes</div>
          </div>
          <div className="countdown-digit p-4 rounded-lg text-center" data-testid="countdown-seconds">
            <div className="text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
            <div className="text-sm text-muted-foreground">Seconds</div>
          </div>
        </div>
        <p className="text-red-400 font-semibold">Secure your spot before the price jumps 650%!</p>
      </CardContent>
    </Card>
  );
}
