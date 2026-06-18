import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import styles from './About.module.css';

const stats = [
  { n: 3, suffix: '+', label: 'Year Coding' },
  { n: 10, suffix: '+', label: 'Projects'    },
  { n: 3,  suffix: 'rd', label: 'Year CSE'  },
];

const tags = ['⚡ Fast Learner','🤝 Team Player','🎯 Detail Oriented','⚽ Football Fan','🎮 Strategy Gamer','📚 Continuous Learner'];

const reveal = { hidden:{opacity:0,y:30}, show:{opacity:1,y:0,transition:{duration:.65,ease:'easeOut'}} };

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className={`section ${styles.about}`} id="about" ref={ref}>
      <div className="container">
        <motion.div className="sec-hdr" variants={reveal} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <span className="sec-tag">01 / About</span>
          <h2 className="sec-title">Who I Am</h2>
        </motion.div>

        <div className={styles.grid}>
          {/* Image col */}
          <motion.div className={styles.imgCol}
            initial={{opacity:0,x:-30}} animate={inView?{opacity:1,x:0}:{}}
            transition={{duration:.7,ease:'easeOut'}}>
            <div className={styles.imgBox}>
              <img
                src="https://i.postimg.cc/906yG3HY/Glass-walla-removebg-preview.png"
                alt="Pinak Datta"
              />
              <div className={styles.imgDeco} />
            </div>
            <div className={styles.stats}>
              {stats.map((s,i) => (
                <div className={styles.stat} key={i}>
                  <span className={styles.statN}>
                    {inView && <CountUp end={s.n} duration={2} />}{s.suffix}
                  </span>
                  <span className={styles.statL}>{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text col */}
          <motion.div className={styles.txt}
            initial={{opacity:0,x:30}} animate={inView?{opacity:1,x:0}:{}}
            transition={{duration:.7,delay:.15,ease:'easeOut'}}>
            <h3>Full-Stack MERN Developer &amp; Lifelong Learner</h3>
            <p>
              I'm <strong>Pinak Datta</strong>, a Computer Science undergraduate at{' '}
              <strong>Sylhet Engineering College, school of Applied Science & Technology, SUST</strong> with a strong passion for problem-solving
              and software development. I enjoy building meaningful products that balance
              functionality and design.
            </p>
            <p>
              My programming journey started when I typed my first <code>&lt;html&gt;</code> tag and
              realised I could build anything I imagined on a screen. That curiosity grew into a
              full-stack skillset — React on the frontend, Node.js &amp; Express on the backend,
              MongoDB for data, and Firebase for auth and real-time features.
            </p>
            <p>
              I value <em>discipline, consistency, and continuous improvement</em>. Whether
              learning a new technology or refining an existing solution, I believe growth comes
              from persistence and curiosity. My goal is to keep evolving as a developer while
              creating impactful, user-focused applications.
            </p>
            <p>
              Outside of code, I'm a football fan ⚽, love strategy games 🎮, and enjoy solving
              logic puzzles — habits that train me to think clearly and spot patterns.
            </p>

            <div className={styles.tags}>
              {tags.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>

            <a href="#contact" className={`btn btn-primary ${styles.cta}`}
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}); }}>
              Let's Connect →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
