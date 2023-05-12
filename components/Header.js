import React from 'react'
import styles from "../styles/Header.module.css"
import Link from 'next/link';

const Header = () => {
  return (
    <div>
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/product">Product</Link></li>
      
      </ul>
    </nav>
    </div>
  );
}

export default Header