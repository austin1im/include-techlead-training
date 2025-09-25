import styles from './task_example.module.scss';
import CardCreate from '../_components/CardCreate/CardCreate';

export default function Task() {
  return (
    <main>
      <div className={styles.container}>
        <CardCreate/>
      </div>
    </main>
  );
}