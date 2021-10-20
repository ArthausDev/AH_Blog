import React, { useEffect, useState } from "react"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./blog.module.css"
const SharePost = () => {
  const [windowLocation, setWindowLocation] = useState(null)
  useEffect(() => {
    window && setWindowLocation(window.location.href)
  }, [])
  return (
    <div className={`${styles.section} ${styles.sharepostSection}`}>
      <p>SHARE THIS POST</p>
      <div className={styles.shareBtns}>
        <FacebookShareButton
          url={windowLocation && windowLocation}
          quote="Share post from Arthaus Blog"
        >
          <FontAwesomeIcon
            icon={faFacebookF}
            color="#42413a"
            className={`${styles.shareSocialIcon} ${styles.fbIcon}`}
          />
        </FacebookShareButton>
        <LinkedinShareButton
          url={windowLocation && windowLocation}
          quote="Read this post"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            color="#42413a"
            className={`${styles.shareSocialIcon} ${styles.linkedInIcon}`}
          />
        </LinkedinShareButton>
        <TwitterShareButton
          url={windowLocation && windowLocation}
          quote="Read this post"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            color="#42413a"
            className={`${styles.shareSocialIcon} ${styles.twitterIcon}`}
          />
        </TwitterShareButton>
      </div>
    </div>
  )
}

export default SharePost
