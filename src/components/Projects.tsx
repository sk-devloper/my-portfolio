import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import BlurText from "../BlurText";

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "Node Infrastructure API",
      description: "Robust backend API for managing node infrastructure with automated monitoring, health checks, and performance analytics.",
      image: "🖥️",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["RESTful API", "Health Monitoring", "Performance Analytics", "Automated Scaling"]
    },
    {
      id: 2,
      title: "Automation Workflow System",
      description: "Python-based automation system for streamlining repetitive tasks and improving operational efficiency.",
      image: "🤖",
      technologies: ["Python", "Celery", "Redis", "Linux"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Task Automation", "Scheduled Jobs", "Error Handling", "Monitoring Dashboard"]
    },
    {
      id: 3,
      title: "Customer Support Portal",
      description: "Backend system for managing customer inquiries, ticket routing, and support analytics with real-time updates.",
      image: "🎧",
      technologies: ["Python", "Django", "PostgreSQL", "WebSockets"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Ticket Management", "Real-time Updates", "Analytics Dashboard", "Customer History"]
    },
    {
      id: 4,
      title: "System Monitoring Tool",
      description: "Custom monitoring solution for tracking system performance, resource usage, and alerting on critical issues.",
      image: "📊",
      technologies: ["Python", "C++", "Linux", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["Real-time Monitoring", "Performance Metrics", "Alert System", "Historical Data"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <BlurText
            text="Featured Projects"
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
            Backend systems and automation solutions built with Python, focusing on reliability and performance
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{project.image}</div>
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-white/10 text-white text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium"
                >
                  View Live
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-2 border border-white/30 text-white rounded-lg text-sm font-medium hover:border-white/60"
                >
                  GitHub
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
