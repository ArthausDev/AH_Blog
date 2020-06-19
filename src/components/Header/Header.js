import React, { useState } from "react"
import { Link } from "gatsby"

import Logo from "../../images/header/Logo.png"
import styles from "./header.module.scss"
import MenuItem from "./MenuItem"
import ImgCard from "../ImgCard/ImgCard"
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const menuClickHandle = () => {
    setMenuOpened(!menuOpened)
  }
  return (
    <header className={styles.headerContent}>
      <nav className={styles.nav}>
        <section className={styles.navContent}>
          <Link to="/">
            <ImgCard
              src={Logo}
              alt="Arthaus logo"
              className={styles.logoWrap}
            />
          </Link>
          <ul
            className={`${styles.menuBtn} ${menuOpened && styles.menuOpened}`}
            onClick={menuClickHandle}
            onKeyPress={() => {
              console.log("press key")
            }}
          >
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>

        <ul
          className={`${styles.menuList} ${
            menuOpened ? styles.menuListShow : ""
          }`}
        >
          <MenuItem url="https://www.arthaus.co.uk/" text="HOME" />
          <MenuItem
            url="https://www.arthaus.co.uk/about/about.html"
            text="ABOUT"
          />
          <MenuItem
            url="https://www.arthaus.co.uk/expertise/expertise.html"
            text="EXPERTISE"
          />
          <MenuItem
            url="https://www.arthaus.co.uk/work/work.html"
            text="WORK"
          />
          <MenuItem
            activePage
            url="https://www.arthaus.co.uk/toolkit/toolkit/html"
            text="TOOLKIT"
          />
          <MenuItem
            url="https://www.arthaus.co.uk/contact/contact.html"
            text="CONTACT"
          />
        </ul>
      </nav>
    </header>
  )
}

export default Header
