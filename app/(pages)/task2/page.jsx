"use client";
import styles from './task2.module.scss';
import Carousel from '../_components/Carousel/Carousel';
import DarkModeToggle from '../_components/Theme/ThemeToggle/ThemeToggle'
import ThemeProvider, { Theme } from '../_components/Theme/ThemeProvider/ThemeProvider';
import { useContext } from 'react';

const images = [
  "/cute.png",
  "/baseball.png",
  "/beast.png",
  "/cookie.png",
  "/tears.png"
]

function TaskContents() {
  const [isLight, updateTheme] = useContext(Theme);

  return (
    <div className={`${styles.mainContainer} ${!isLight ? styles.dark : ""}`}>
      <DarkModeToggle />
      <Carousel images={images} />
    </div>
  )
}

export default function Task2() {
  return (
    <ThemeProvider>
      <TaskContents />
    </ThemeProvider>
  );
}