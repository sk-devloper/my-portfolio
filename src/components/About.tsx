import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import BlurText from "../BlurText";

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "1+", label: "Year Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "5+", label: "Happy Clients" },
    { number: "100%", label: "Learning Drive" },
  ];

  const achievements = [
    {
      icon: "sike ",
      title: "None yet",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <BlurText
            text="About Me"
            delay={100}
            animateBy="words"
            direction="top"
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">My Story</h3>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a backend developer with a strong foundation in Python, building robust APIs, automation workflows, and scalable systems. I'm constantly learning and expanding my toolkit, diving into C++, C#, and React to bridge the gap between back-end and front-end development.
              </p>
              <p>
                I thrive on solving complex problems, exploring new technologies, and improving systems end-to-end. My work combines technical skill with creativity, and I'm always looking for ways to make software faster, smarter, and more efficient.
              </p>
              <p>
                Whether it's building automation tools, experimenting with embedded systems, or creating dynamic web applications, I approach every project with curiosity and a drive to learn. My portfolio reflects both my current capabilities and my ongoing journey as a developer.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-6 mt-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Image and achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Profile image placeholder */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-80 h-80 mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30" />
              <div className="relative w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center border border-white/20">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </motion.div>

            {/* Achievements */}
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                >
                  <div className="text-3xl">{achievement.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold">{achievement.title}</h4>
                    <p className="text-gray-400 text-sm">Coming soon...</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
