"use client";
import styles from './CardDisplay.module.scss';
import { useEffect, useState } from 'react';

function Card ({text, title, id, onDelete, index}) {
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
            <div>
                <button onClick={(e) => handleDelete(e, id)}>X</button>
                <h4>{`card number: ${index+1}`}</h4>
            </div>
        </main>
    )
}

function LoadingCard() {
    return (
        <main className={styles.cardMainContainer}>
        <div>
            <h1>Loading...</h1>
            <p>Loading...</p>
        </div>
    </main>
    )
}

export default function CardDisplay({cardData, loading, setCardData}) {
    const handleCardDelete = (id) => {
        setCardData((prev) => prev.filter((card) => card._id !== id)) 
    }

    if (loading) return <LoadingCard/>
    return (
        <main className={styles.cardsContainer}>
            {cardData.map((card, index) => (
                <Card key={index} title={card.title} text={card.text} id={card._id} onDelete={handleCardDelete} index={index}/> 
            ))}
        </main>
    )
}