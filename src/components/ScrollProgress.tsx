import { motion, useScroll } from "framer-motion";

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{ background: 'var(--primary-accent)', scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
