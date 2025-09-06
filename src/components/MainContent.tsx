import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import ScrollProgress from "./ScrollProgress";

const MainContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const aboutY = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);
  const skillsY = useTransform(scrollYProgress, [0.4, 0.7], [100, 0]);
  const projectsY = useTransform(scrollYProgress, [0.6, 0.9], [100, 0]);

  // Section visibility tracking
  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -100px 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <ScrollProgress />
      <Navigation activeSection={activeSection} />
      
      <motion.div style={{ y: heroY }}>
        <Hero />
      </motion.div>
      
      <motion.div style={{ y: aboutY }}>
        <About />
      </motion.div>
      
      <motion.div style={{ y: skillsY }}>
        <Skills />
      </motion.div>
      
      <motion.div style={{ y: projectsY }}>
        <Projects />
      </motion.div>
      
      <Experience />
      <Contact />
    </div>
  );
};

export default MainContent;
