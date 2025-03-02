import styles from '../components/sta/styles.module.scss';
import { useScroll, useTransform, motion } from 'framer-motion';
import { div } from 'framer-motion/client';
import { useRef } from 'react';

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scale = useTransform(scrollYProgress, [0, 2], [1.2, 1.22]);

    return (
        <div className='rounded-[80px]'><div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                <motion.div style={{ scale }} className={styles.el}>
                    <div className={styles.videoContainer}>
                        <div className='rounded-[80px]'>
                            <div>
                                <h1 className='text-white font-hel font-black w-full opacity-55 '>SPIREWAVE</h1>
                                
                            </div>

                            <video
                                className={`${styles.video} `} // Add rounded and border via class
                                src="/videos/m1.mp4" // Path to your video file in the public/videos folder
                                autoPlay
                                loop
                                muted
                                playsInline
                                poster="/videos/video1.jpg" // Optional: use a poster image while the video is loading
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div></div>

    );
}
