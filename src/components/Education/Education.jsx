import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles from './Education.module.css';

const items = [
  {
    year: '2023 — 2027',
    title: 'B.Sc. in Computer Science',
    inst:  'Sylhet Engineering College, school of Applied Science & Technology, SUST, Bangladesh',
    desc:  'Currently pursuing a Bachelor\'s degree in Computer Science with strong emphasis on core computing principles, problem-solving, and software development. Core areas: Data Structures & Algorithms, OOP, DBMS, Computer Networks, Computer Architecture, Operating Systems.',
  },
  {
    year: '2024 — 2025',
    title: 'Full-Stack MERN Bootcamp',
    inst:  'Programming Hero',
    desc:  'Completed an intensive full-stack course covering React, Node.js, Express, MongoDB, Firebase Auth, JWT (httpOnly cookies), Stripe payments, REST API design, React Hook Form, Axios interceptors, and deployment on Netlify , Vercel & Rander.',
  },
  {
    year: '2018 — 2020',
    title: 'Higher Secondary Certificate (HSC)',
    inst:  'BAF Shaheen College, Shamshernagar (Science Group) — Bangladesh',
    desc:  'Completed HSC in the Science group. Strong foundation in Mathematics and Physics developed a problem-solving mindset I apply daily in software development.',
  },
];

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section className={`section ${styles.edu}`} id="education" ref={ref}>
      <div className="container">
        <div className="sec-hdr">
          <span className="sec-tag">03 / Education</span>
          <h2 className="sec-title">Academic Background</h2>
        </div>

        <div className={styles.timeline}>
          {items.map((it, i) => (
            <motion.div className={styles.item} key={i}
              initial={{ opacity:0, x:-24 }}
              animate={inView ? { opacity:1, x:0 } : {}}
              transition={{ duration:.6, delay: i*.15, ease:'easeOut' }}>
              <div className={styles.dot} />
              <div className={styles.card}>
                <span className={styles.yr}>{it.year}</span>
                <h3>{it.title}</h3>
                <span className={styles.inst}>{it.inst}</span>
                <p>{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
