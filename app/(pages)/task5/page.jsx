"use client"
import styles from './task_example.module.scss';
import CardCreate from '../_components/CardCreate/CardCreate';
import CardDisplay from '../_components/CardDisplay/CardDisplay';
import { useState, useEffect} from 'react';

export default function Task5() {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const res = await fetch("/api/cards"); //fetch defaults to get
        const data = await res.json();
        setCardData(data);
      }
      catch (e) {
        console.error("card data fetching error", e);
      }
      finally {
        setLoading(false);
      }
    }

    fetchCardData();
  }, [])

  const updateCardData = (card) => {
    setCardData((prev) => [...prev, card])
  }

  return (
    <div className={styles.container}>
      <CardCreate updateCards={updateCardData}/>
      <CardDisplay cardData={cardData} loading={loading} setCardData={setCardData}/>
    </div>
  );
}