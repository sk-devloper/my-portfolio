import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import BlurText from "../BlurText";

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "FastAPI", level: 90, icon: "⚡" },
        { name: "Django", level: 70, icon: "🎯" },
        { name: "Flask", level: 88, icon: "🌶️" },
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "Redis", level: 80, icon: "🔴" },
      ]
    },
    {
      title: "System Programming",
      skills: [
        { name: "C++", level: 15, icon: "⚙️" },
        { name: "C#", level: 25, icon: "🔷" },
        { name: "Linux", level: 85, icon: "🐧" },
        { name: "Docker", level: 80, icon: "🐳" },
        { name: "Git", level: 75, icon: "📚" },
        { name: "Bash", level: 75, icon: "💻" },
      ]
    },
    {
      title: "Frontend & Tools",
      skills: [
        { name: "React", level: 60, icon: "⚛️" },
        { name: "TypeScript", level: 75, icon: "📘" },
        { name: "VS Code", level: 85, icon: "💻" },
        { name: "AWS", level: 0, icon: "☁️" },
        { name: "Automation", level: 90, icon: "🤖" },
        { name: "APIs", level: 95, icon: "🔌" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <BlurText
            text="Skills & Expertise"
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
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building robust APIs, automation workflows, and scalable systems with a focus on backend excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + categoryIndex * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "API Development", "Database Design", "System Architecture", 
              "Performance Optimization", "Automation", "Embedded Systems", 
              "Testing", "CI/CD", "Microservices", "Cloud Infrastructure"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(168, 85, 247, 0.2)" }}
                className="px-4 py-2 bg-white/10 rounded-full text-white text-sm border border-white/20 hover:border-purple-500/50 transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
