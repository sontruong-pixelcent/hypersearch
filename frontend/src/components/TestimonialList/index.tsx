import React, { memo } from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  Heading,
  Flex,
  Box,
  FlexList,
  Blockquote,
  Text,
  Avatar,
  HomepageImage,
} from "../ui"
import * as classes from "./styles.module.scss"

interface TestimonialProps {
  id: string
  avatar: HomepageImage
  quote: string
  source: string
}

const Testimonial = memo((props: TestimonialProps) => {
  return (
    <Flex variant="start" className={classes.flex}>
      {props.avatar && (
        <Avatar alt={props.avatar.alt} image={props.avatar.gatsbyImageData} />
      )}
      <Blockquote className={classes.blockquote}>
        <Text className={classes.text} as="p" variant="lead">
          {props.quote}
        </Text>
        <figcaption className={classes.authorContainer}>
          <Text className={classes.author} as="cite" bold variant="caps">
            {props.source}
          </Text>
        </figcaption>
      </Blockquote>
    </Flex>
  )
})

export interface TestimonialListProps {
  kicker?: string
  heading: string
  content: TestimonialProps[]
}

const TestimonialList = memo((props: TestimonialListProps) => {
  return (
    <Section className={classes.section}>
      <Container>
        <Box center className={classes.box}>
          {props.kicker && (
            <Heading className={classes.kicker}>{props.kicker?.replace("&amp;", "&")}</Heading>
          )}
          <Heading className={classes.heading}>{props.heading?.replace("&amp;", "&")}</Heading>
        </Box>
        <FlexList gutter={3} variant="start" responsive wrap className={classes.flexList}>
          {props.content.map(
            (testimonial, index) =>
              testimonial.quote && (
                <Box
                  as="li"
                  key={testimonial.id + index}
                  width="half"
                  padding={3}
                >
                  <Testimonial {...testimonial} />
                </Box>
              )
          )}
        </FlexList>
      </Container>
    </Section>
  )
})

export default TestimonialList

export const query = graphql`
  fragment HomepageTestimonialListContent on HomepageTestimonialList {
    id
    kicker
    heading
    content {
      id
      quote
      source
      avatar {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
