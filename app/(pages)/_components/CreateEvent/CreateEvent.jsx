"use client";
import { useState } from 'react';
import styles from './CreateEvent.module.scss'

export default function ContactForm() {
    const [form, updateForm] = useState({ title: '', startTime: '', endTime: '' })

    const handleChange = (e) => {
        updateForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isoedForm = {
            ...form,
            startTime: new Date(form.startTime).toISOString(),
            endTime: new Date(form.endTime).toISOString()
          };

        if (isoedForm.startTime >= isoedForm.endTime) {
            alert("End time must be ahead of start time")
            return;
        }

        const res = await fetch('/api/creategCalEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(isoedForm)
        })

        const data = await res.json()
        alert(data.message)
    }

    return (
        <main className={styles.formContainer}>
                <h1>Create Event</h1>
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <input name="title" placeholder='event title' onChange={handleChange} required />
                    <input name="startTime" type="datetime-local" onChange={handleChange} required />
                    <input name="endTime" type="datetime-local" onChange={handleChange} required />
                    <button type='submit'>submit</button>
                </form>
        </main>
    );
}