import React, { Fragment } from "react"
import Layout from "../Layout/Layout"
import PageTitle from "../PageTitle/PageTitle"
import ImgCard from "../ImgCard/ImgCard"

import styles from "./blog.module.scss"

const BlogPageLayout = ({ pageContext }) => {
  console.log("pageContext", pageContext)
  let avatarImgSrc =
    "https://p7.hiclipart.com/preview/81/570/423/computer-icons-user-clip-art-user.jpg"
  const { blogItem } = pageContext //object destructuring
  const { title, content, heroImg } = blogItem.frontmatter //object destructuring

  const displayContentItem = item => {
    let outputContentItem = []
    const {
      sectionHeading,
      sectionImages,
      sectionLinks,
      sectionParagraphs,
    } = item //object destructuring
    return (
      <Fragment>
        {/* For Section Heading if exist */}
        {sectionHeading && <h3>{sectionHeading}</h3>}

        {/* For Section Images if exist */}
        {sectionImages &&
          sectionImages.map((img, index) => (
            <figure key={index}>
              <image src={img.image.publicURL} alt="" />
            </figure>
          ))}

        {/* For Section Links if exist */}
        {sectionLinks &&
          sectionLinks.map((link, index) => {
            return (
              <p key={index}>
                <a href={link.linkUrl}>{link.linkLabel}</a>
              </p>
            )
          })}
        {/* For Section paragraph if exist */}
        {sectionParagraphs.length !== 0 &&
          sectionParagraphs.map((item, index) => {
            return <p key={index}>{item.paragraph}</p>
          })}
      </Fragment>
    )
  }

  return (
    <Layout>
      <div className={styles.heroWrap}>
        <ImgCard src={heroImg.publicURL} className={styles.hero} alt="hero" />
        <ImgCard
          src={avatarImgSrc}
          className={styles.authorAvatar}
          alt="writer avatar"
        />
      </div>

      <PageTitle title={title} />
    </Layout>
  )
}

export default BlogPageLayout
