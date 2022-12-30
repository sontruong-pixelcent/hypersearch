import React, { memo } from "react"
import Layout from "../components/layout"
import ContactContainer from "../containers/Contact"

interface Props {}

const Contact = memo((props: Props) => {
  return (
    <Layout title="Contact">
      <ContactContainer />
    </Layout>
  )
})

export default Contact