import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

const skills = [
  'Webflow', 'GSAP', 'Framer Motion', 'Figma', 'Spline 3D', 'After Effects', 'React', 'Tailwind', 'Art Direction', 'Prototyping'
];

export default function Marquee() {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({ x: ['0%', '-50%'] , transition: { repeat: Infinity, duration: 16, ease: 'linear' } });
  }, [controls]);

  return (
    <section className="py-10 select-none">
      <div className="overflow-hidden">
        <motion.div className="flex gap-8 whitespace-nowrap text-white/70 text-sm" animate={controls}>
          {[...skills, ...skills].map((s, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10">{s}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
