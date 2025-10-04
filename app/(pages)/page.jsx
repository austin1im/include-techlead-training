import Link from 'next/link';
import styles from './page.module.scss';

const days = [
  { day: 1, title: 'Task 1', description: 'Recreating a portion of the #include website', url: '/task1' },
  { day: 2, title: 'Task 2', description: 'Carousel (useContext)', url: '/task2' },
  { day: 3, title: 'Task 3', description: 'Blogs (SSG)', url: '/task3' },
  { day: 4, title: 'Task 4', description: 'API (Nodemailer + Google Calendar)', url: '/task4' },
  { day: 0, title: 'Additional Practice', description: 'API + MongoDB', url: '/task5' },
];

export default function Home() {
  return (
    <main className={styles.container}>
      <header className={styles.hero}>
        <h1>2025–2026 <i>#include</i> Leads Training Onboarding</h1>
      </header>

      <section id="plan" className={styles.planSection}>
        <h2>Task Dashboard</h2>
        <div className={styles.grid}>
          {days.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <Link href={item.url} className={styles.link}>
                <div className={styles.day}>Day {item.day}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
