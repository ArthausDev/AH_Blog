import React from "react"
import styles from "./footer.module.css"

import FBImg from '../../images/footer/dec2020/facebook.png'
import InstagramImg from '../../images/footer/dec2020/instagram.png'
import LinkedInImg from '../../images/footer/dec2020/linkedin.png'
import TwitterImg from '../../images/footer/dec2020/twitter.png'

import BSILogo from '../../images/BSI Logo_white.png';
import CyberLogo from '../../images/Certified.png'

import Logo from "../../images/footer/Arthaus-Logo-Badge.png"
import ImgCard from "../ImgCard/ImgCard"
const socialMediaList = [
  {
    iconImg: FBImg,
    linkUrl: "https://www.facebook.com/ArtHaus.design/",
    order: 4,
  },
  {
    iconImg: LinkedInImg,
    linkUrl: "https://www.linkedin.com/company/arthaus-visual-communications-/",
    order: 2,
  },
  {
    iconImg: InstagramImg,
    linkUrl: "https://www.instagram.com/arthaus_design/",
    order: 1,
  },
  { iconImg: TwitterImg, linkUrl: "https://twitter.com/arthaus", order: 3 },
]

function Footer() {
  const {
    
    socialIconList,
    socialIconItem,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkedInIcon,
  } = styles
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.leftColumn}>
        <ImgCard
          src={Logo}
          alt="Logo company in gray colour"
          className={styles.logo}
        />
        <div className={styles.address}>
          <p>ARTHAUS</p>
          <p>24 Old Brewery Lane</p>
          <p>New Street, Henley on Thames</p>
          <p>Oxon, RG9 2DE</p>
          <p>
            T:
            <a href="tel:+441628487333"
              > +44 (0)1628 487 333</a>
          </p>
          <p>
            E:
            <a href="mailto:think@arthaus.co.uk"
              > think@arthaus.co.uk</a>
          </p>
          <p className={styles.copyRight}>
            &#169; Arthaus
            <span> {new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <ul className={socialIconList}>
         {socialMediaList &&
            socialMediaList
              .sort((a, b) => {
                return a.order - b.order
              })
              .map((item, indx) => {
                return (
                  <li key={indx} className={styles.socialIconItem}>
                     <a  href={item.linkUrl}>
                    <img alt='social icon' src={item.iconImg} className={styles.socialIconImg}/>
                  </a>
                  </li>
                 
                )
              })}
           
        </ul>
        <div className="text--white text--center" style={{fontSize:'11px',paddingTop:'13px'}}>
            <a
              href="https://www.arthaus.co.uk/documents/Privacy Policy.pdf"
              rel="noopener noreferrer"
              target="_blank"
              >Privacy</a>
            &#8194; | &#8194;
            <a
              href="https://www.arthaus.co.uk/privacy-terms-conditions.html"
              rel="noopener noreferrer"
              target="_blank"
              >Terms &amp; Conditions
            </a>          
        </div>
        <div className={styles.certifications}>
          <ImgCard alt='BSI Logo' src={BSILogo} className={styles.bsiLogo}/>
          <ImgCard alt='Cyber Logo' src={CyberLogo} className={styles.cyberLogo}/>
        </div>
       
      </div>
    </footer>
  )
}

export default Footer
/*
<ul className={socialIconList}>
          // put items in order before mapping 
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
 */
