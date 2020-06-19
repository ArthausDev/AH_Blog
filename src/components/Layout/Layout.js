import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "../../styles/styles.scss"
import styles from "./layout.module.scss"

function Layout({ ...props }) {
  return (
    <>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </>
  )
}
export default Layout
