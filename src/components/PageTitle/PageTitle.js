import React from "react"
import styles from "./pageTitle.module.scss"
const PageTitle = ({ title, author,company,guest }) => {
  return (
    <div className={styles.titleContainer}>
      <h1>{title}</h1>
      <div className={styles.author}>
        <p>{guest && 'GUEST'} WRITTEN BY {author} </p>
        {company && <p>{company}</p>}
        </div>
      
    </div>
  )
}

export default PageTitle
