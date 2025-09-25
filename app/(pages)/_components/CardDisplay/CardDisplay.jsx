"use client";
import styles from './CardDisplay.module.scss';
import { useEffect, useState } from 'react';

function Card ({title, text}) {
    return (
        <main className={styles.cardMainContainer}>
            <h1>{title}</h1>
            <p>{text}</p>
        </main>
    )
}

export default function CardDisplay() {
    const [cardData, setCardData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCardData = async () => {
            try {
                const res = await fetch("/api/cards");
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

    if (loading) return <Card title="loading" text="loading"/>
    return (
        <main className={styles.cardsContainer}>
            {cardData.map((card, index) => (
                <Card key={index} title={card.title} text={card.text}/> 
            ))}
        </main>
    )
}