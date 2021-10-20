import React from "react"

import styles from "./header.module.css"

function MenuItem({ url, text, activePage,subList,...props }) {
  return (
    <li className={`${styles.menuItem} ${text==='INSIGHTS' || text==='ABOUT' ? styles.insightsItem : ''} `}>
      <a
        className={`${activePage ? styles.activePage : null}`}
        href={url}
        rel="noopener noreferrer"
      >
        {text}
      </a>
      {subList && props.children}
    </li>
  )
}

export default MenuItem
