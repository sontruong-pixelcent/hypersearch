import React, { Fragment, memo } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Head from "./head"
import "../styles.css"

interface LayoutProps {
  title: string
  description?: string
  image?: { id: string; url: string }
  children: React.ReactNode
}

const Layout = memo((props: LayoutProps) => {
  return (
    <Fragment>
      <Head {...props} />
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  )
})

export default Layout
