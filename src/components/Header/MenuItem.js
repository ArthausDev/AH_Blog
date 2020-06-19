import React from "react"

import styles from "./header.module.scss"

function MenuItem({ url, text, activePage }) {
  return (
    <li className={`${styles.menuItem} `}>
      <a className={`${activePage ? styles.activePage : null}`} src={url}>
        {text}
      </a>
    </li>
  )
}

export default MenuItem
