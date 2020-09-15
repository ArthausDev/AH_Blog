import React from "react"
import ImgCard from "../ImgCard/ImgCard"

import styles from "./blog.module.scss"

const ContentSection = ({ item }) => {
  const {
    sectionHeading,
    sectionImages,
    sectionLinks,
    sectionParagraphs,
  } = item //object destructuring
  return (
    <div className={styles.section}>
      {/* For Section Heading if exist */}
      {sectionHeading && (
        <h3 className={styles.sectionHeading}>{sectionHeading}</h3>
      )}
      {/* For Section paragraph if exist */}
      {sectionParagraphs.length !== 0 &&
        sectionParagraphs.map((item, index) => (
          <p
            className={`${styles.sectionParagraph} ${
              item.asteriskText ? styles.asteriskText : ""
            } `}
            key={index}
          >
            {item.paragraph}
          </p>
        ))}
      {/* For Section Images if exist */}
      {sectionImages &&
        sectionImages.map((img, index) => (
          <ImgCard
            key={index}
            src={img.image.publicURL}
            alt=""
            caption={img.caption}
            className={styles.sectionImage}
          />
        ))}

      {/* For Section Links if exist */}
      {sectionLinks && (
        <p className={styles.sectionLinksWrap}>
          {sectionLinks.map((link, index) => (
            <a className={styles.sectionLink} key={index} href={link.linkUrl}>
              {link.linkLabel}
            </a>
          ))}{" "}
        </p>
      )}
    </div>
  )
}

export default ContentSection
