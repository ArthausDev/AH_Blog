import React, { useState } from "react"

import Logo from "../../images/header/Logo.png"
import styles from "./header.module.scss"
import MenuItem from "./MenuItem"
import ImgCard from "../ImgCard/ImgCard"
import BlogIcon from "../../images/insights/icon_blog.png"
import InspirationIcon from "../../images/insights/icon_inspiration.png"
import SocialIcon from "../../images/insights/icon_socials.png"
import AllIcon from "../../images/insights/icon_all.png"
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const menuClickHandle = () => {
    setMenuOpened(!menuOpened)
  }
  return (
    <header className={styles.headerContent}>
      <nav className={styles.nav}>
        <section className={styles.navContent}>
          <a href="https://www.arthaus.co.uk/">
            <ImgCard
              src={Logo}
              alt="Arthaus logo"
              className={styles.logoWrap}
            />
          </a>
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
          {/* <MenuItem url="https://www.arthaus.co.uk/" text="HOME" /> */}
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
            url="https://www.arthaus.co.uk/insights/insights.html"
            text="INSIGHTS"
            subList={true}
          >
            <ul className={styles.insightsList}>
              <li className={styles.insightsListItem} posttype="blogPost">
                <a href="https://www.arthaus.co.uk/insights/insights.html?postType=blogPost">
                  {" "}
                  <img
                    alt=""
                    className={styles.insightsItemIcon}
                    src={BlogIcon}
                  />
                  <span>BLOG</span>
                </a>
              </li>
              <li className={styles.insightsListItem} posttype="inspiration">
                <a href="https://www.arthaus.co.uk/insights/insights.html?postType=inspiration">
                  <img
                    alt=""
                    style={{ position: "relative", left: " -3px" }}
                    className={styles.insightsItemIcon}
                    src={InspirationIcon}
                  />
                  <span>INSPIRATION</span>
                </a>
              </li>
              <li className={styles.insightsListItem} posttype="socialPost">
                <a href="https://www.arthaus.co.uk/insights/insights.html?postType=socialPost">
                  {" "}
                  <img
                    alt=""
                    className={styles.insightsItemIcon}
                    src={SocialIcon}
                  />
                  <span>SOCIAL</span>
                </a>
              </li>
              <li className={styles.insightsListItem} posttype="allPost">
                <a href="https://www.arthaus.co.uk/insights/insights.html?postType=all">
                  {" "}
                  <img
                    alt=""
                    className={styles.insightsItemIcon}
                    src={AllIcon}
                  />
                  <span>ALL</span>
                </a>
              </li>
            </ul>
          </MenuItem>
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
