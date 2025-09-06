import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import BlurText from "../BlurText";

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      id: 1,
      title: "Developer, Sales & Support",
      company: "Altonodes",
      period: "2023 - Present",
      location: "Remote",
      description: "Multi-faceted role combining backend development, customer sales, and technical support. Building robust systems while directly engaging with clients to understand their needs and provide solutions.",
      achievements: [
        "Developed and maintained backend systems and APIs for node infrastructure",
        "Handled customer sales inquiries and technical consultations",
        "Provided technical support and troubleshooting for client issues",
        "Contributed to automation workflows and system improvements"
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "Linux"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <BlurText
            text="Professional Experience"
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
            Building experience through hands-on development, customer interaction, and continuous learning
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform -translate-x-2 md:-translate-x-2 z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2 sm:mb-0">
                        {exp.title}
                      </h3>
                      <span className="text-purple-400 font-semibold text-sm">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h4 className="text-xl text-gray-300 font-semibold">
                        {exp.company}
                      </h4>
                      <span className="text-gray-400 text-sm">
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h5 className="text-white font-semibold mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.2 + achIndex * 0.1 }}
                            className="flex items-start space-x-2 text-gray-400 text-sm"
                          >
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-white font-semibold mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: 0.6 + index * 0.2 + techIndex * 0.05 }}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learning & Growth section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Continuous Learning</h3>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-2">Self-Taught Developer</h4>
            <p className="text-gray-300 text-lg mb-2">Passionate about technology and continuous improvement</p>
            <p className="text-gray-400">Always learning and expanding my toolkit</p>
            <p className="text-gray-400 mt-4">Focus on backend development, system architecture, and automation workflows. Constantly exploring new technologies and best practices.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
