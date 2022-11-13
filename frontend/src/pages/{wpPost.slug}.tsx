import React, { memo } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Box, Heading } from "../components/ui"
import SEO from "../components/SEO."

interface Props {
  data: any
}

const wpPost = memo((props: Props) => {
  const { wpPost } = props.data

  return (
    <Layout {...wpPost}>
      <SEO title={wpPost.title} />
      <Box paddingY={5}>
        <Container width="narrow">
          <Heading as="h1">{wpPost.title}</Heading>
          <div
            className="pagehtml"
            dangerouslySetInnerHTML={{
              __html: wpPost.content,
            }}
          />
        </Container>
      </Box>
    </Layout>
  )
})

export default wpPost

export const query = graphql`
  query wpPost($id: String!) {
    wpPost(id: { eq: $id }) {
      id
      title
      slug
      featuredImage {
        node {
          gatsbyImage(quality: 10, width: 900)
          uri
        }
      }
      content
    }
  }
`
