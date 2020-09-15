import React from "react"
import styles from "./footer.module.scss"
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon"
import Logo from "../../images/footer/Arthaus-Logo-Badge.png"
import ImgCard from "../ImgCard/ImgCard"
const socialMediaList = [
  {
    icon: faFacebookF,
    linkUrl: "https://www.facebook.com/ArtHaus.design/",
    order: 4,
  },
  {
    icon: faLinkedinIn,
    linkUrl: "https://www.linkedin.com/company/arthaus-visual-communications-/",
    order: 2,
  },
  {
    icon: faInstagram,
    linkUrl: "https://www.instagram.com/arthaus_design/",
    order: 1,
  },
  { icon: faTwitter, linkUrl: "https://twitter.com/arthaus", order: 3 },
]

function Footer() {
  const { footerContainer, socialIconList } = styles
  return (
    <footer className={footerContainer}>
      <div className={styles.leftColumn}>
        <ImgCard
          src={Logo}
          alt="Logo company in gray colour"
          className={styles.logo}
        />
        <div className={styles.address}>
          <p>ARTHAUS</p>
          <p>24/26 Old Brewery Lane</p>
          <p>New Street, Henley on Thames,</p>
          <p>Oxon, RG9 2DE</p>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <ul className={socialIconList}>
          {/* put items in order before mapping */}
          {socialMediaList &&
            socialMediaList
              .sort((a, b) => {
                return a.order - b.order
              })
              .map((item, indx) => {
                return (
                  <li key={indx}>
                    <SocialMediaIcon icon={item.icon} linkUrl={item.linkUrl} />
                  </li>
                )
              })}
        </ul>

        <p className="text--white text--center">
          <a
          style={{fontSize:'12px',textDecoration:'none'}}
            href="https://www.arthaus.co.uk/privacy-terms-conditions.html"
            target="_blank"
          >
            Privacy, terms &#38; conditions
          </a>
        </p>
        <p className="text--white text--center text--xsmall">
          &#169; Copyright Arthaus {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
