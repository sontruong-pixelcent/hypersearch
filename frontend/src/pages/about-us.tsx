import React, { memo } from "react"
import Layout from "../components/layout"
import AboutUsContainer from "../containers/AboutUs"

interface Props {}

const AboutUs = memo((props: Props) => {
  return (
    <Layout title="AboutUs">
      <AboutUsContainer />
    </Layout>
  )
})

export default AboutUs
