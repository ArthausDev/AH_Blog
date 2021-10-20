import React, { Fragment } from "react"
import ImgCard from "../ImgCard/ImgCard"

import styles from "./blog.module.css"
import SectionHeading from "../SectionHeading/SectionHeading"
const mapImages = (sectionImages)=>{
return  sectionImages.map((img, index) => (
          <ImgCard
            key={index}
            src={img.image.publicURL}
            alt={img.imageAlt}
            caption={img.caption}
            className={styles.sectionImage}
          />))
}
const ContentSection = ({ item }) => {  
  //console.log('item',item)
  return (
    <div className={styles.section}> 
    {/* For Section Heading if exist */}
      {item.sectionHeading !== null && <SectionHeading heading={item.sectionHeading} iconUrl={item.sectionHeadingIcon?.publicURL}/>}
    {/* For Section paragraph if exist */}
      {item.sectionParagraphs !== null && item.sectionParagraphs.length !==0 && item.sectionParagraphs.map((paragraph, index) => (
          <p
            className={`${styles.sectionParagraph} ${
              paragraph.asteriskText ? styles.asteriskText : ""
            } `}
            key={index}
          >
            {paragraph.paragraph}
          </p>
        ))}
     {/* For Section Images if exist */}
      {item.sectionImages!==null && (item.sectionImages.length===1 ? mapImages(item.sectionImages) : (
        <Fragment>
             <div className={styles.textDividerTop}> </div>
          {mapImages(item.sectionImages)}
       <div className={styles.textDividerBottom}> </div>
        </Fragment>
     
      ))} 
      {/* For Section Links if exist */}
      {item.sectionLinks!==null && (
        <p className={styles.sectionLinksWrap}>
          {item.sectionLinks.map((link, index) => (
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
