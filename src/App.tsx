import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import BlurText from "./BlurText";
import MainContent from "./components/MainContent";
import "./App.css";

const App: React.FC = () => {
  const [loadingDone, setLoadingDone] = useState(false);

  const handleAnimationComplete = useCallback(() => {
    setTimeout(() => setLoadingDone(true), 1000);
  }, []);

  if (!loadingDone) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center">
          <BlurText
            text="Welcome to snowbunny.dev"
            delay={100}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-6xl font-bold text-white mb-8"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-xl text-gray-300"
          >
            Building Robust Systems
          </motion.div>
        </div>
      </div>
    );
  }

  return <MainContent />;
};

export default App;
