"use client";
import { useState } from 'react';
import styles from './ContactForm.module.scss'

export default function ContactForm() {
    const [form, updateForm] = useState({ name: '', email: '', message: '' })

    const handleChange = (e) => {
        updateForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })

        const data = await res.json()
        alert(data.message)
    }

    return (
        <main className={styles.formContainer}>
                <h1>Contact Form</h1>
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <input name="name" placeholder='name' onChange={handleChange} required />
                    <input name="email" placeholder='email' onChange={handleChange} required />
                    <textarea name="message" placeholder='message' onChange={handleChange} required />
                    <button type='submit'>submit</button>
                </form>
        </main>
    );
}