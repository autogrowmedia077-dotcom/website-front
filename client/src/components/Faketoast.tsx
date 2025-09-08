"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { buyers } from "./buyers";

function getRandomTimeAgo() {
  const minutes = Math.floor(Math.random() * 5) + 1; // 1–5 minutes
  return minutes === 1 ? "Just now" : `${minutes} minutes ago`;
}

function getRandomInterval() {
  return Math.floor(Math.random() * 4000) + 3000; // 3000–7000 ms
}

export default function FakeToast() {
  const [toast, setToast] = useState<{
    name: string;
    city: string;
    timeAgo: string;
  } | null>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const showToast = () => {
      const randomBuyer = buyers[Math.floor(Math.random() * buyers.length)];
      setToast({
        name: randomBuyer.name,
        city: randomBuyer.city,
        timeAgo: getRandomTimeAgo(),
      });

      // Hide after 3s
      setTimeout(() => setToast(null), 3000);

      // Schedule next toast randomly
      timeout = setTimeout(showToast, getRandomInterval());
    };

    // Start the first toast
    showToast();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-900 bg-opacity-95 backdrop-blur-md shadow-2xl rounded-xl px-5 py-4 border border-gray-700 flex items-center space-x-4 max-w-xs w-full text-white"
          >
            <span className="text-yellow-400 text-2xl animate-pulse">🎉</span>
            <div className="flex flex-col">
              <p className="text-sm font-semibold">
                <span className="text-gradient font-bold">{toast.name}</span> from {toast.city} just purchased{" "}
                <span className="text-purple-400 font-bold">Starter Pack</span> for <span className="text-green-400 font-bold">₹399</span>.
              </p>
              <p className="text-gray-400 text-xs mt-1">{toast.timeAgo}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
