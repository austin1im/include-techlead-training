"use client"
import styles from './CardCreate.module.scss'
import { useState } from 'react'


export default function CardCreate() {
    const [form, updateForm] = useState({title: '', text: ''})

    const handleChange = (e) => {
        updateForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <main className={styles.mainContainer}>
            create a card
            <form className={styles.formContainer}>
                <input name="title" placeholder="title" onChange={handleChange} required/>
                <textarea name="text" placeholder="text" onChange={handleChange} className={styles.textInput} required/>
                <button type='submit'>submit</button>
            </form>
        </main>
    )
}