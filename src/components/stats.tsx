import { motion } from 'framer-motion';
import LeetCodeStats from './LeetCodeStats';

export default function Stats() {
  return (
    <section id="stats" className="relative z-10 px-10 py-16 max-w-7xl mx-auto">
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-md w-full">
          <LeetCodeStats />
        </div>
      </motion.div>
    </section>
  );
}