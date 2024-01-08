import styles from "@/assets/styles/pages/home.module.sass";
import CardsProducts from "../components/cardsProducts/page";
import { useEffect, useState } from "react";
import * as Icons from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tonylar",
  description:
    "Venha conhecer a Tonylar, uma empresa com atendimento especializado para melhor servir !",
};


export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.searchBar}>
        <label htmlFor="pesquisa">
          Pesquisar:
          <input type="text" id="pesquisa" />
        </label>
      </div>
      <section className={styles.main_container}>
        <CardsProducts />
        <h1>Voce esta na home!</h1>
        <button>Teste</button>
      </section>
    </main>
  );
}
