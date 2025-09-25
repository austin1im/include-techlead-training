"use client";
import styles from './task4.module.scss';
import ContactForm from '../_components/ContactForm/ContactForm';
import CreateEvent from '../_components/CreateEvent/CreateEvent'


export default function task4() {
  return (
    <main>
      <div className={styles.mainContainer}>
        <ContactForm/>
        <CreateEvent/>
      </div>
    </main>
  );

}