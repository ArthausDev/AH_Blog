import React from "react"
import styles from "./pageTitle.module.scss"
const PageTitle = ({ title }) => {
  return (
    <h1 className={styles.titleContainer}>
      <span className={styles.titleText}>{title}</span>
    </h1>
  )
}

export default PageTitle
