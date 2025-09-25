import styles from './task3.module.scss';
import blogPosts from '@/data/blog';
import Link from 'next/link';

export default function Task3() {
  return (
    <main>
      <div className={styles.mainContainer}>
        <h1>Blogs:</h1>
        <div className={styles.postsContainer}>
          {blogPosts.map((post, index) => (
            <Link key={index} href={`/task3/${post.slug}`} className={styles.link}>
              {post.title}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}