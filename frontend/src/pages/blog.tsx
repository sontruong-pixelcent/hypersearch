import React, { memo, useEffect, useState } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Container, Box, Heading } from "../components/ui"
import {
  desktopHeaderNavWrapper,
  mobileHeaderNavWrapper,
} from "../components/header.css"
import SEO from "../components/SEO."

interface Props {
  data: any
}

const IndexPage = memo((props: Props) => {
  const { data } = props
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [isOpen])

  return (
    <Layout title="necta blog">
      <SEO title="necta blog" />
      <Box paddingY={5}>
        <Container className={desktopHeaderNavWrapper} width="narrow">
          <Heading as="h1">Latest Updates</Heading>
          <ul style={{ listStyle: "none" }}>
            {data.allWpPost.edges.map((post, index) => {
              return (
                <li
                  style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}
                  key={index}
                >
                  <Link
                    to={`/${post.node.slug}`}
                    style={{
                      display: "flex",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    {post?.node?.featuredImage && (
                      <GatsbyImage
                        className="art-directed"
                        alt="{post.featuredImage}"
                        image={getImage(
                          post.node.featuredImage.node.gatsbyImage
                        )}
                      />
                    )}
                    <div style={{ width: "75%", padding: "0 20px 20px" }}>
                      <h3
                        dangerouslySetInnerHTML={{ __html: post.node.title }}
                        style={{ marginBottom: 0 }}
                      />
                      <p style={{ margin: 0, color: "grey" }}>
                        {post.node.date}
                      </p>
                      <div
                        dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                      />
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Container>
        <Container
          className={mobileHeaderNavWrapper[isOpen ? "open" : "closed"]}
          width="narrow"
        >
          <h1 style={{ width: "100%", padding: "0 0 0 40px" }}>
            Latest Updates
          </h1>
          <ul style={{ listStyle: "none" }}>
            {data.allWpPost.edges.map((post, index) => {
              return (
                <li
                  style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}
                  key={index}
                >
                  <Link
                    to={`/${post.node.slug}`}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {post?.node?.featuredImage && (
                      <GatsbyImage
                        className="art-directed"
                        alt="{post.featuredImage}"
                        image={getImage(
                          post.node.featuredImage.node.gatsbyImage
                        )}
                      />
                    )}
                    <div style={{ width: "100%", padding: "0 20px 0 0" }}>
                      <h3
                        dangerouslySetInnerHTML={{ __html: post.node.title }}
                        style={{ marginBottom: 0 }}
                      />
                      <p style={{ margin: 0, color: "grey" }}>
                        {post.node.date}
                      </p>
                      <div
                        dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                      />
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Container>
      </Box>
    </Layout>
  )
})

export default IndexPage

export const query = graphql`
  query {
    allWpPost {
      edges {
        node {
          title
          excerpt
          slug
          author {
            node {
              name
            }
          }
          date(formatString: "DD, MMMM, YYYY")
          featuredImage {
            node {
              gatsbyImage(width: 300, quality: 100, placeholder: BLURRED)
              alt
            }
          }
        }
      }
    }
  }
`
