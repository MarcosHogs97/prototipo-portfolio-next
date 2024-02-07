import React from "react";
import styles from "./css/page.module.css";
import CompHeader from "./components/header/compHeader";
import CompMain from "./components/main/compMain";
import CompSkills from "./components/main/CompSkills";
import CompProjetos from "./components/main/CompProjetos";

export default function Home() {
  return (
    <main className={styles.main}>
      <CompHeader/>
      <CompMain/>
      <CompSkills/>
      <CompProjetos/>
    </main>
  );
}

