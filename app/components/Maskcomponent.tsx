'use client';
import styles from './maskcomponent/page.module.scss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from './maskcomponent/Buttonm';

const phrases = [
  "Innovative digital web design agency",
  "delivering stunning, user-focused websites",
  "Blending creativity and technology",
  "crafting impactful online experiences."
];

export default function Home() {
  return (
    <div className={styles.container}>
      <MaskText />
      <Button className='font-hel border rounded-[80px] text-xs text-white font-normal  hover:bg-[#333333] focus:outline-none focus:ring-gray-500 ' variant="linkHover2">ABOUT US</Button>
     
    </div>
  );
}

export function MaskText() {
  const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0",
      transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i }
    })
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <div ref={ref} className={styles.body}>
      {phrases.map((phrase, index) => (
        <div key={index} className={styles.lineMask}>
          <motion.p
            custom={index}
            variants={animation}
            initial="initial"
            animate={inView ? "enter" : ""}
            className="leading-none"
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
}

// Local Button
