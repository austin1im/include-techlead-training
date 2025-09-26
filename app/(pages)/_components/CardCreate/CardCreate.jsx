"use client"
import styles from './CardCreate.module.scss'
import { useState } from 'react'


export default function CardCreate() {
    const [form, updateForm] = useState({title: '', text: ''})

    const handleChange = (e) => {
        updateForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/cards', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
        })

        const data = await res.json();

        if (res.ok) {
            alert(data.message);
        } else { 
            alert(data.error);
        }
}

    return (
        <main className={styles.mainContainer}>
            create a card
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <input name="title" placeholder="title" onChange={handleChange} required/>
                <textarea name="text" placeholder="text" onChange={handleChange} className={styles.textInput} required/>
                <button type='submit'>submit</button>
            </form>
        </main>
    )
}