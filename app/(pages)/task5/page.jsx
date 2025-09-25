import styles from './task_example.module.scss';
import CardCreate from '../_components/CardCreate/CardCreate';
import CardDisplay from '../_components/CardDisplay/CardDisplay';

export default function Task() {
  return (
    <main>
      <div className={styles.container}>
        <CardCreate/>
        <CardDisplay/>
      </div>
    </main>
  );
}