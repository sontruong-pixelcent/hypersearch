import React, { memo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import GravityFormForm from "gatsby-plugin-gravity-forms"
import Layout from "../components/layout"
import { Box, Container, Flex, Heading } from "../components/ui"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/gravity.css"

interface ContactPageProps {}

const ContactPage = memo((props: ContactPageProps) => {
  const data = useStaticQuery(graphql`
    query formQueryContact {
      wp {
        ...GravityFormSettings
      }
      wpGfForm(databaseId: { eq: 1 }) {
        ...GravityFormFields
      }
    }
  `)

  return (
    <Layout title="Smart CCTV Contact">
      <Box paddingY={4}>
        <Container>
          <Heading>Contact Us</Heading>
          <Flex gap={4} variant="responsive">
            <Box width="half">
              <StaticImage alt="Kerikeri" src="../../static/kerikeri.jpeg" />
            </Box>
            <Box width="half">
              <GravityFormForm data={data} />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Layout>
  )
})

export default ContactPage
