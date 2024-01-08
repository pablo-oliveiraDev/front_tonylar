import React from "react";
import styles from "@/assets/styles/components/header.module.sass";
import Link from "next/link";
import * as Icons from "react-icons/fa";


export default function Header() {
  return (
    <header className={styles.container}>
      <ul>
        <Link href="/">
          <Icons.FaHome />
          <li>Home</li>
        </Link>
        <Link href="/contatos">
          <Icons.FaAddressBook />
          <li>Contatos</li>
        </Link>
        <Link href='/sobre'>
          <Icons.FaFileSignature />
          <li>Sobre</li>
        </Link>
        <Link href="/vendedores">
          <Icons.FaAddressCard />
          <li>Vendedores</li>
        </Link>
      </ul>
    </header>
  );
}
