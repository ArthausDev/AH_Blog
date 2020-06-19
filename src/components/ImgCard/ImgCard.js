import React from "react"
import styles from "./ImgCard.module.scss"
const ImgCard = ({ src, alt, className, caption }) => {
  return (
    <figure className={className}>
      <img src={src} alt={alt} className={styles.imgFullWidth} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}

export default ImgCard
