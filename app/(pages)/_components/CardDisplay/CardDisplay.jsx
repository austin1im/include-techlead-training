"use client";
import styles from './CardDisplay.module.scss';
import { useEffect, useState } from 'react';

function Card ({text, title, id, onDelete}) {
    const handleDelete = async (e, id) => {
        const res = await fetch('/api/cards', {
        method: 'DELETE',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(id)
        })
        const data = await res.json();

        if (res.ok) {
            alert(data.message);
            onDelete(id);
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

export default function CardDisplay({cardData, loading, setCardData}) {
    const handleCardDelete = (id) => {
        setCardData((prev) => prev.filter((card) => card._id !== id)) 
    }

    if (loading) return <Card title="loading" text="loading"/>
    return (
        <main className={styles.cardsContainer}>
            {cardData.map((card, index) => (
                <Card key={index} title={card.title} text={card.text} id={card._id} onDelete={handleCardDelete}/> 
            ))}
        </main>
    )
}