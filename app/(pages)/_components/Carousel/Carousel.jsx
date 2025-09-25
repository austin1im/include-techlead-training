"use client";
import styles from "./Carousel.module.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { Theme } from "../Theme/ThemeProvider/ThemeProvider"

export default function Carousel({ images }) {
    const [main, setMain] = useState(0)
    const [left, setLeft] = useState(images.length - 1)
    const [right, setRight] = useState(1)

    useEffect(() => {
        if (main == 0) {
            setLeft(images.length - 1)
            setRight(1)
        }
        else if (main == images.length - 1) {
            setRight(0)
            setLeft(main - 1)
        }
        else {
            setLeft(main - 1)
            setRight(main + 1)
        }
    }, [main])

    const prev = () =>
        setMain(main == 0 ? images.length - 1 : main - 1)
    const next = () =>
        setMain(main == images.length - 1 ? 0 : main + 1)

    const [isLight, updateTheme] = useContext(Theme);

    return (
        <main >
            <h1 className={`${styles.title} ${!isLight ? styles.dark : ""}`}>Carousel</h1>
            <div className={styles.sliderContainer}>
                <div className={`${styles.sideArrow} ${!isLight ? styles.dark : ""}`} onClick={prev}>
                    <FaAngleLeft size="5rem" />
                </div>
                <div className={`${styles.smallPanel} ${!isLight ? styles.dark : ""}`}>
                    <Image width={256} height={256} src={images[left]} alt="idk" />
                </div>
                <div className={`${styles.bigPanel} ${!isLight ? styles.dark : ""}`}>
                    <Image width={512} height={512} src={images[main]} alt="idk" />
                </div>
                <div className={`${styles.smallPanel} ${!isLight ? styles.dark : ""}`}>
                    <Image width={256} height={256} src={images[right]} alt="idk" />
                </div>
                <div className={`${styles.sideArrow} ${!isLight ? styles.dark : ""}`} onClick={next}>
                    <FaAngleRight size="5rem" />
                </div>
            </div>
            <div className={styles.dotContainer}>
                {images.map((_, index) => (
                    <div key={index} className={`${styles.dot} ${!isLight ? styles.dark : ""} ${index == left || index == main || index == right ? styles.active : ""}`} />
                ))}
            </div>
        </main>
    )
}