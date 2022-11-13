import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { memo } from "react"
import {
  ButtonList,
  Container,
  Heading,
  HomepageImage,
  HomepageLink,
  Section,
} from "../ui"
import * as classes from "./styles.module.scss"

export interface HeroProps {
  image?: HomepageImage
  kicker?: string
  h1: string
  subhead: string
  text: string
  links: HomepageLink[]
}

const Hero = memo((props: HeroProps) => {
  return (
    <Section className={classes.section}>
      <Container width="narrow">
        <div className={classes.content}>
          <Heading className={classes.heading} as="h1">
            {props.h1}
          </Heading>
          {/* <Subhead as="h2">
            {props.subhead}
          </Subhead> */}
          <Heading className={classes.text} as="h1">
            {props.text?.replace("&amp;", "&")}
          </Heading>
          {props.image && (
            <GatsbyImage
              className={classes.image}
              alt={props.image.alt}
              image={getImage(props.image.gatsbyImageData)}
            />
          )}
          <ButtonList className={classes.buttonList} links={props.links} />
        </div>
        {/* <Flex gap={4} variant="responsive">
          <Box width="half">
            {props.image && (
              <GatsbyImage
                alt={props.image.alt}
                image={getImage(props.image.gatsbyImageData)}
              />
            )}
          </Box>
          <Box width="half">
            <Heading as="h1">
              {props.kicker && <Kicker>{props.kicker?.replace("&amp;", "&")}</Kicker>}
              {props.h1}
            </Heading>
            <Subhead as="h2">{props.subhead}</Subhead>
            <Text as="p">{props.text?.replace("&amp;", "&")}</Text>
            <ButtonList links={props.links} />
          </Box>
        </Flex> */}
      </Container>
    </Section>
  )
})

export default Hero

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    kicker
    h1: heading
    subhead
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
