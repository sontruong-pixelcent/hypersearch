import React, { memo } from "react"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import SEO from "../components/SEO."

interface Props {}

const Homepage = memo((props: Props) => {
  return (
    <Layout title="Homepage">
      <Hero />
    </Layout>
  )
})

export default Homepage

export const Head = () => <SEO />
