import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <div>
      <nav className={styles.title}>
        <ul>
          {/* <li><Link href="/">Home</Link></li> */}
          <li onClick={() => router.push("/")} style={{ cursor: "pointer" }}>
            Home
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/product">Product</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
