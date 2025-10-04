"use client";
import styles from "./CompanyCard.module.scss"
import Image from "next/image";

export default function CompanyCard({term, logoPath, org, description, URL}) {
    return (
      <main className={styles.card}>
        <h4 className={styles.term}>
          {term}
        </h4>
        <Image width={523} height={300} src={logoPath} alt={org} className={styles.logo}/>
        <h3 className={styles.org}>
          {org}
        </h3>
        <p className={styles.description}>
          {description}
        </p>
        <a className={styles.redirectButton} href={URL} target="_blank" rel="noopener noreferrer" >
          <div className={styles.greenCircle}></div>
          VISIT SITE
        </a>
      </main>
    );
  }
  