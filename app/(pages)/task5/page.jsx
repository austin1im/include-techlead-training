import styles from './task_example.module.scss';
import CardCreate from '../_components/CardCreate/CardCreate';
import CardDisplay from '../_components/CardDisplay/CardDisplay';
import { useContext } from 'react';

function TaskContents() {
  return (
    <div className={styles.container}>
      <CardCreate />
      <CardDisplay />
    </div>
  )
}

export default function Task5() {
  return (
      <TaskContents/>
  );
}