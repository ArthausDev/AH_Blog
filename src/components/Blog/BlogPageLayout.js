import React, { Fragment } from "react"
import Layout from "../Layout/Layout"
import PageTitle from "../PageTitle/PageTitle"
import ImgCard from "../ImgCard/ImgCard"
import ContentSection from "./ContentSection"
import SharePost from "./SharePost"

import styles from "./blog.module.scss"
import DefaultAvatar from "../../images/staffAvatars/anyone.jpg"
import CallumAvatar from "../../images/staffAvatars/Callum.png"
import EdAvatar from "../../images/staffAvatars/Ed.png"
import HasanAvatar from "../../images/staffAvatars/Hasan.png"
import MatthewAvatar from "../../images/staffAvatars/Matthew.png"
import MikeAvatar from "../../images/staffAvatars/Mike.png"
import RoxyAvatar from "../../images/staffAvatars/Roxy.png"
import StaceyAvatar from "../../images/staffAvatars/Stacey.png"
import ThaoAvatar from "../../images/staffAvatars/Thao.png"
import BeckyAvatar from "../../images/staffAvatars/Becky.png"
import MarkLAvatar from "../../images/staffAvatars/Mark-L.png"
import MarkBAvatar from "../../images/staffAvatars/Mark-B.png"
import ClaireAvatar from "../../images/staffAvatars/Claire.png"

const BlogPageLayout = ({ pageContext }) => {
  console.log("pageContext", pageContext)
  let avatarImgSrc = DefaultAvatar
  const { blogItem } = pageContext //object destructuring
  const { title, content, heroImg, author } = blogItem.frontmatter //object destructuring
  const avatarBkgColourList = {
    green: "#AFB744",
    burgundy: "#8E5562",
    blue: "#337AB7",
    teal: "#62AE9F",
    darkBlue: "#0e5368",
  }
  let avatarBkgColour

  let authorLastname

  switch (author) {
    case "Becky":
      avatarImgSrc = BeckyAvatar
      avatarBkgColour = avatarBkgColourList.darkBlue
      authorLastname = "Carter"
      break
    case "Claire":
      avatarImgSrc = ClaireAvatar
      avatarBkgColour = avatarBkgColourList.blue
      authorLastname = "Watson"
      break
    case "Callum":
      avatarImgSrc = CallumAvatar
      avatarBkgColour = avatarBkgColourList.blue
      authorLastname = "King"
      break
    case "Ed":
      avatarImgSrc = EdAvatar
      avatarBkgColour = avatarBkgColourList.burgundy
      authorLastname = "GarButt"
      break
    case "Hasan":
      avatarImgSrc = HasanAvatar
      avatarBkgColour = avatarBkgColourList.blue
      authorLastname = "Afzal"
      break
    case "MarkB":
      avatarImgSrc = MarkBAvatar
      avatarBkgColour = avatarBkgColourList.darkBlue
      authorLastname = "Bowerman"
      break
    case "MarkL":
      avatarImgSrc = MarkLAvatar
      avatarBkgColour = avatarBkgColourList.darkBlue
      authorLastname = "Luckett"
      break
    case "Matthew":
      avatarImgSrc = MatthewAvatar
      avatarBkgColour = avatarBkgColourList.burgundy
      authorLastname = "Masiak"
      break
    case "Mike":
      avatarImgSrc = MikeAvatar
      avatarBkgColour = avatarBkgColourList.teal
      authorLastname = "Spiers"
      break
    case "Roxy":
      avatarImgSrc = RoxyAvatar
      avatarBkgColour = avatarBkgColourList.green
      authorLastname = "Bradley"
      break
    case "Stacey":
      avatarImgSrc = StaceyAvatar
      avatarBkgColour = avatarBkgColourList.teal
      authorLastname = "Jenkins"
      break
    case "Thao":
      avatarImgSrc = ThaoAvatar
      avatarBkgColour = avatarBkgColourList.green
      authorLastname = "Truong"
      break
    default:
      avatarImgSrc = DefaultAvatar
      avatarBkgColour = "white"
      authorLastname = "Arthaus"
  }
  let authorFullName = `${author} ${authorLastname}`
  if (author.toUpperCase() === "MARKB" || author.toUpperCase() === "MARKL") {
    authorFullName = `MARK ${authorLastname}`
  }
  return (
    <Layout>
      <div className={styles.heroWrap}>
        <ImgCard src={heroImg.publicURL} className={styles.hero} alt="hero" />
        <ImgCard
          bkgColour={avatarBkgColour}
          src={avatarImgSrc}
          className={styles.authorAvatar}
          alt="writer avatar"
        />
      </div>

      <PageTitle title={title} author={authorFullName} />
      {content.length !== 0 &&
        content.map((item, index) => {
          return <ContentSection item={item} key={index} />
        })}

      <SharePost pageTitle={title} />
    </Layout>
  )
}

export default BlogPageLayout
