import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./socialMediaIcon.module.scss"

function socialMediaIcon({ icon, linkUrl }) {
  return (
    <a href={linkUrl} className={styles.socialIconLink}>
      <span className="sr-only">social media icon</span>
      <FontAwesomeIcon
        icon={icon}
        color="white"
        className={styles.socialIcon}
      />
    </a>
  )
}

export default socialMediaIcon
