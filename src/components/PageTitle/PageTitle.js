import React from "react"
import styles from "./pageTitle.module.scss"
const PageTitle = ({ title, author }) => {
  return (
    <div className={styles.titleContainer}>
      <h1>{title}</h1>
      <p className={styles.author}>WRITTEN BY {author} </p>
    </div>
  )
}

export default PageTitle
