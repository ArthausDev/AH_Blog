import React from "react"
import styles from "./ImgCard.module.css"
const ImgCard = ({ src, alt, className, caption, bkgColour }) => {
  return (
    <figure
      className={className}
      style={bkgColour && { backgroundColor: bkgColour }}
    >
      <img src={src} alt={alt} className={styles.imgFullWidth} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}

export default ImgCard
