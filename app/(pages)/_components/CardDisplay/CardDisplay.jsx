"use client";
import { stringify } from 'querystring';
import styles from './CardDisplay.module.scss';
import { useEffect, useState } from 'react';

function Card ({text, title, id}) {
    const handleDelete = async (e, id) => {
        //e.preventDefault();

        const res = await fetch('/api/cards', {
        method: 'DELETE',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(id)
        })
        const data = await res.json();

        if (res.ok) {
            alert(data.message);
        } else { 
            alert(data.error);
        }
    }   

    return (
        <main className={styles.cardMainContainer}>
            <div>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
            <button onClick={(e) => handleDelete(e, id)}>X</button>
        </main>
    )
}

export default function CardDisplay() {
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

    if (loading) return <Card title="loading" text="loading"/>
    return (
        <main className={styles.cardsContainer}>
            {cardData.map((card, index) => (
                <Card key={index} title={card.title} text={card.text} id={card._id}/> 
            ))}
        </main>
    )
}