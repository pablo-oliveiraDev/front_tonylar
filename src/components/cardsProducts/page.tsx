import React from "react";
import styles from "@/assets/styles/components/cardsProducts.module.sass";
import Image from "next/image";

async function dataproducts() {
  const response = await fetch(`${process.env.dataBaseURL}/allproducts`, {
    cache: "no-store",
  });
  const data = response.json();
  return data;
}
console.log(dataproducts());
const CardsProducts = async () => {
  const products: any = await dataproducts();
  const textImageUrl: string = "data:image/png;base64,";

  return (
    <>
      {products.map((product: any, index: number) => (
        <div className={styles.container} key={products.id}>
          <main className={styles.container_itens}>
            <section className={styles.imgInfos}>
              <Image
                src={textImageUrl +product.productImages[0].image}
                alt="card image"
              />
              
            </section>
            <section className={styles.description}>
              <span>{product.description}</span>
            </section>
          </main>
        </div>
      ))}
    </>
  );
};
export default CardsProducts;
