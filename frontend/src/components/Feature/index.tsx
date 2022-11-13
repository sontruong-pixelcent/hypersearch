import React, { memo } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Container,
  Section,
  Flex,
  Box,
  Kicker,
  Text,
  ButtonList,
  Heading,
  HomepageImage,
  HomepageLink,
} from "../ui"
import * as classes from "./styles.module.scss"

export interface FeatureDataProps {
  id: string
  image?: HomepageImage
  kicker?: string
  heading: string
  text: string
  links: HomepageLink[]
}

interface FeatureProps {
  flip: boolean
}

const Feature = memo((props: FeatureDataProps & FeatureProps) => {
  return (
    <Section className={classes.section} padding={4} background="muted">
      <Container>
        <Flex gap={4} variant="responsive">
          <Box width="half" order={props.flip ? 1 : null}>
            {props.image && (
              <GatsbyImage
                alt={props.image.alt}
                image={getImage(props.image.gatsbyImageData)}
              />
            )}
          </Box>
          <Box width="half">
            <Heading
              className={
                props.flip ? classes.headingRight : classes.headingLeft
              }
            >
              {props.kicker && (
                <Kicker
                  className={
                    props.flip ? classes.kickerRight : classes.kickerLeft
                  }
                >
                  {props.kicker?.replace("&amp;", "&")}
                </Kicker>
              )}
              {props.heading?.replace("&amp;", "&")}
            </Heading>
            <Text
              className={props.flip ? classes.textRight : classes.textLeft}
              variant="lead"
            >
              {props.text?.replace("&amp;", "&")}
            </Text>
            <ButtonList links={props.links} />
          </Box>
        </Flex>
      </Container>
    </Section>
  )
})

export default Feature

export const query = graphql`
  fragment HomepageFeatureContent on HomepageFeature {
    id
    kicker
    heading
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
