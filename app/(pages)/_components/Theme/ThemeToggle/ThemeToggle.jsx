"use client";
import styles from "./ThemeToggle.module.scss";
import { CiSun, CiCloudMoon } from "react-icons/ci";
import { useContext } from "react";
import { Theme } from "../ThemeProvider/ThemeProvider";

function Toggle () {
    const [isLight, updateTheme] = useContext(Theme);
    return (
            <main onClick={() => (updateTheme(!isLight))} className={`${styles.toggle} ${!isLight ? styles.dark : ""}`}>
                <div className={`${styles.switch} ${!isLight ? styles.dark : ""}`}/>
            </main>
    )
}

export default function DarkModeToggle () {
    return (
        <main className={styles.mainContainer}>
            <CiSun size="3rem" color="orange"/>
            <Toggle/>
            <CiCloudMoon size="3rem" color="darkslateblue"/>
        </main>
    )
}