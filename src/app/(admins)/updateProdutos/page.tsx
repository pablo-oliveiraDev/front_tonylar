import React from "react";
import styles from '@/assets/styles/pages/updateProdutos.module.sass';

export default function UpdateProducts() {
  return (
    <div className={styles.container}>
      <h1>Editar Produtos</h1>
      <form action="">
        <label htmlFor="name">
          Nome: <input id="name" />
        </label>
        <label htmlFor="description">
          Descrição: <input id="description" />
        </label>
        <label htmlFor="price">
          Preço: <input id="price" />
        </label>
        <label htmlFor="image">
          Selecione a imagem: <br />
          <input type="file" id="image" />
        </label>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
