import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaWhatsapp, FaGithub, FaLinkedinIn, FaFacebookF, FaPaperPlane } from 'react-icons/fa';
import styles from './Contact.module.css';

const cards = [
  { icon: <FaEnvelope />, label: 'Email',    val: 'pinakdattatp@gmail.com',   href: 'mailto:pinakdattatp@gmail.com' },
  { icon: <FaPhone />,    label: 'Phone',    val: '+880 1794-026053',    href: 'tel:+8801794026053' },
  { icon: <FaWhatsapp />, label: 'WhatsApp', val: '+880 1794-026053',    href: 'https://wa.me/8801794026053' },
];
const socials = [
  { icon: <FaGithub />,    href: 'https://github.com/Pinak57',                          label: 'GitHub'   },
  { icon: <FaLinkedinIn />,href: 'https://www.linkedin.com/in/pinak-datta-121639417/', label: 'LinkedIn' },
  { icon: <FaFacebookF />, href: 'https://www.facebook.com/pinak.datta.16547',         label: 'Facebook' },
];

export default function Contact() {
  const [sent, setSent]     = useState(false);
  const [form, setForm]     = useState({ name:'', email:'', subject:'', msg:'' });
  const [ref, inView]       = useInView({ threshold: 0.1, triggerOnce: true });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setForm({ name:'', email:'', subject:'', msg:'' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className={`section ${styles.sec}`} id="contact" ref={ref}>
      <div className="container">
        <div className="sec-hdr">
          <span className="sec-tag">05 / Contact</span>
          <h2 className="sec-title">Get In Touch</h2>
          <p className="sec-sub">Have a project idea or just want to connect? I'd love to hear from you.</p>
        </div>

        <div className={styles.grid}>
          {/* Info */}
          <motion.div className={styles.info}
            initial={{opacity:0,x:-24}} animate={inView?{opacity:1,x:0}:{}}
            transition={{duration:.65,ease:'easeOut'}}>

            {cards.map(c => (
              <div className={styles.cCard} key={c.label}>
                <div className={styles.cIcon}>{c.icon}</div>
                <div>
                  <h4>{c.label}</h4>
                  <a href={c.href} target={c.label==='WhatsApp'?'_blank':undefined} rel="noreferrer">{c.val}</a>
                </div>
              </div>
            ))}

            <div className={styles.socials}>
              {socials.map(s => (
                <a href={s.href} key={s.label} target="_blank" rel="noreferrer" className="s-icon" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form className={styles.form} onSubmit={handleSubmit}
            initial={{opacity:0,x:24}} animate={inView?{opacity:1,x:0}:{}}
            transition={{duration:.65,delay:.12,ease:'easeOut'}}>

            <div className={styles.row}>
              <input name="name"  value={form.name}  onChange={handleChange} placeholder="Your Name"  required className={styles.inp} />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" required className={styles.inp} type="email" />
            </div>
            <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className={styles.inp} />
            <textarea name="msg" value={form.msg} onChange={handleChange} placeholder="Your Message..." rows={5} required className={styles.inp} />

            <button type="submit" className="btn btn-primary" style={{width:'100%',justifyContent:'center'}}>
              <FaPaperPlane /> Send Message
            </button>

            {sent && (
              <p className={styles.note}>✅ Message sent! (Connect EmailJS or a backend to make this functional.)</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
