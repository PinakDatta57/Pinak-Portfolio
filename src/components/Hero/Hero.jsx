import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaEye, FaChevronDown } from 'react-icons/fa';
import styles from './Hero.module.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: 'easeOut' },
});

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      {/* Background grid */}
      <div className={styles.grid} />
      <div className={`${styles.blob} ${styles.b1}`} />
      <div className={`${styles.blob} ${styles.b2}`} />

      <div className={`container ${styles.wrap}`}>
        {/* ── Text ── */}
        <div className={styles.text}>
          <motion.div className={styles.eyebrow} {...fadeUp(0.1)}>
            <span className={styles.dot} />
            Available for opportunities
          </motion.div>

          <motion.h1 className={styles.name} {...fadeUp(0.2)}>
            Pinak Datta
          </motion.h1>

          <motion.div className={styles.role} {...fadeUp(0.3)}>
            <TypeAnimation
              sequence={[
                'Full-Stack MERN Developer', 2000,
                'React.js Specialist',       2000,
                'Node.js Backend Engineer',  2000,
                'UI/UX Craftsman',           2000,
                'Problem Solver',            2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
            />
          </motion.div>

          <motion.p className={styles.desc} {...fadeUp(0.4)}>
            I specialize in building responsive and scalable web applications using the
            MERN stack, Firebase, and modern UI frameworks. I focus on clean code,
            performance, and continuous learning.
          </motion.p>

          <motion.div className={styles.btns} {...fadeUp(0.5)}>
            <a href="/assets/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
              <FaEye /> View Resume
            </a>
            <a href="#projects" className="btn btn-outline"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior:'smooth' }); }}>
              <FaEye /> View Projects
            </a>
          </motion.div>

          <motion.div className={styles.socials} {...fadeUp(0.6)}>
            <a href="https://github.com/PinakDatta57" target="_blank" rel="noreferrer" className="s-icon" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/pinakdatta57/" target="_blank" rel="noreferrer" className="s-icon" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://www.facebook.com/pinak.datta.16547" target="_blank" rel="noreferrer" className="s-icon" aria-label="Facebook">
              <FaFacebookF />
            </a>
          </motion.div>
        </div>

        {/* ── Photo ── */}
        <motion.div className={styles.photoWrap} initial={{ opacity:0, scale:.9 }} animate={{ opacity:1, scale:1 }} transition={{ duration:.7, delay:.2 }}>
          <div className={styles.ring}>
            <img
              src="https://i.postimg.cc/906yG3HY/Glass-walla-removebg-preview.png"
              alt="Pinak Datta"
              className={styles.photo}
            />
          </div>
          <div className={`${styles.badge} ${styles.bd1}`}><span>⚛️</span> React</div>
          <div className={`${styles.badge} ${styles.bd2}`}><span>🟢</span> Node.js</div>
          <div className={`${styles.badge} ${styles.bd3}`}><span>🍃</span> MongoDB</div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <a href="#about" className={styles.scrollHint}
        onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior:'smooth' }); }}>
        <FaChevronDown />
      </a>
    </section>
  );
}
