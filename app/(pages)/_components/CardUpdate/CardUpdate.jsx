    "use client"
    import styles from './CardUpdate.module.scss'
    import { useState } from 'react'


    export default function CardUpdate({cardData, setCardData}) {
        const [form, updateForm] = useState({title: '', text: '', index: ''})

        const handleChange = (e) => {
            updateForm({...form, [e.target.name]: e.target.value})
        }

        const handleSubmit = async (e) => {
            e.preventDefault();

            const index = parseInt(form.index, 10) - 1;
            if (!cardData[index]) {
                alert("Card index not found");
                return;
            }

            const payload = {
                title: form.title,
                text: form.text,
                id: cardData[index]._id
            }


            const res = await fetch('/api/cards', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
            })

            const data = await res.json();

            if (res.ok) {
                alert(`Card ${form.index} Successfully Updated!`);
                setCardData((prev) => prev.map((card, i) => {
                    if (i === index) {
                        return{ ...card,
                        title: payload.title ? payload.title : card.title,
                        text: payload.text ? payload.text : card.text
                        };
                    }
                    return card;
                }))
            } else { 
                alert(data.error);
            }
    }

        return (
            <main className={styles.mainContainer}>
                update a card
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <input type="number" name="index" placeholder="card number to edit" onChange={handleChange} required/>
                    <input name="title" placeholder="new title (blank if no change)" onChange={handleChange}/>
                    <textarea name="text" placeholder="new text (leave blank if no change)" onChange={handleChange} className={styles.textInput}/>
                    <button type='submit'>submit</button>
                </form>
            </main>
        )
    }