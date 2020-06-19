import React from "react"
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

import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon"
import styles from "./blog.module.scss"
const SharePost = () => {
  return (
    <div className={`${styles.section} ${styles.sharepostSection}`}>
      <p>SHARE THIS POST</p>
      <div className={styles.shareBtns}>
        <FacebookShareButton
          url={window && window.location}
          quote="Read this post"
        >
          <FontAwesomeIcon
            icon={faFacebookF}
            color="#42413a"
            className={styles.shareSocialIcon}
          />
        </FacebookShareButton>
        <LinkedinShareButton
          url={window && window.location}
          quote="Read this post"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            color="#42413a"
            className={styles.shareSocialIcon}
          />
        </LinkedinShareButton>
        <TwitterShareButton
          url={window && window.location}
          quote="Read this post"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            color="#42413a"
            className={styles.shareSocialIcon}
          />
        </TwitterShareButton>
      </div>
    </div>
  )
}

export default SharePost
