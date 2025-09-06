import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-12 h-6 bg-gray-600 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
    >
      <motion.div
        className="w-4 h-4 bg-white rounded-full shadow-md"
        animate={{ x: isDark ? 0 : 24 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      
      {/* Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
        <motion.span
          className="text-xs"
          animate={{ opacity: isDark ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          🌙
        </motion.span>
        <motion.span
          className="text-xs"
          animate={{ opacity: isDark ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          ☀️
        </motion.span>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
