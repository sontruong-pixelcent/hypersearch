import React, { memo } from "react"
import Layout from "../components/layout"
import SEO from "../components/SEO."
import HomepageContainer from "../containers/Homepage"

interface Props {}

const Homepage = memo((props: Props) => {
  return (
    <Layout title="Homepage">
      <HomepageContainer />
    </Layout>
  )
})

export default Homepage

export const Head = () => <SEO />
