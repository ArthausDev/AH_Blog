import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "../../styles/styles.css"
import styles from "./layout.module.css"
import SEO from '../SEO/SEO'

function Layout({ ...props }) {
  return (
    <>
      <SEO metadataTitle={props.metadataTitle}/>
      <Header />
      <main className={styles.main}>{props.children}</main>
      {/* <ContactForm /> */}
      <Footer />
    </>
  )
}
export default Layout
