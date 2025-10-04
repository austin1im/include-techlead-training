"use client";
import CompanyCard from "../_components/CompanyCard/CompanyCard"
import styles from "./page.module.scss"
import Image from "next/image";
import { FaPenNib } from "react-icons/fa";
import cards from "./cardData.json"

export default function Home() {
  return (
    <main>
      <div className={styles.whiteBackground}>
        <div className={styles.mission}>
          <h1 className={styles.missionText}>
            Our mission is to design creative digital solutions that have a positive social impact
          </h1>
          <Image width={824} height={412} src="/helloworld.png" alt="hello world" className={styles.helloImage}/>
        </div>
      </div>

      <div className={styles.recent}>
          <FaPenNib size="5rem" color="white" className={styles.penLogo}/>
          <h2 className={styles.recentTitle}>
            Recent Work
          </h2>
          <h3 className={styles.recentSubtitle}>
            Transforming ideas into incredible realities is what we do best.
          </h3>
          <div className={styles.cardContainer}>
            {cards.map((card, index) => (
              <CompanyCard key={index} term={card.term} logoPath={card.logoPath} org={card.org} description={card.description} URL={card.URL}/>
            ))}
          </div>
          <h4 className={styles.andMore}> AND MORE... </h4>
      </div>
    </main>
  );
}
