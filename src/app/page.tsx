
import styles from "@/assets/styles/pages/home.module.sass";
import CardsProducts from "./components/cardsProducts/page";
import { useEffect, useState } from "react";
import * as Icons from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tonylar",
  description:
    "Venha conhecer a Tonylar, uma empresa com atendimento especializado para melhor servir !",
};
g

export default function Home() {
  const [data, SetData] = useState(null);
  useEffect(() => {
    const products = async () => {
      try {
        const response = await fetch(`${process.env.dataBaseURL}/allproducts`);
        if (!response.ok) {
          throw new Error("Falha na requisição");
        }
        const data = await response.json();
        SetData(data);
      } catch (err) {}
    };
  }, []);

  console.log(data);
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
