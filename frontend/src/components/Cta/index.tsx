import React, { memo } from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  Heading,
  ButtonList,
  Kicker,
  Subhead,
  HomepageImage,
  HomepageLink,
} from "../ui"
import * as classes from "./styles.module.scss"

export interface CtaProps {
  id: string
  kicker?: string
  heading: string
  text: string
  links: HomepageLink[]
  image?: HomepageImage
}

const Cta = memo((props: CtaProps) => {
  return (
    <Container width="fullbleed">
      <Section className={classes.section} padding={5} radius="large">
        <Heading className={classes.heading} center>
          {props.kicker && (
            <Kicker className={classes.kicker} center>
              {props.kicker?.replace("&amp;", "&")}
            </Kicker>
          )}
          {props.heading?.replace("&amp;", "&")}
        </Heading>
        <Subhead className={classes.text} as="p" center>
          {props.text?.replace("&amp;", "&")}
        </Subhead>
        <ButtonList
          className={classes.buttonList}
          links={props.links}
          variant="center"
          reversed
        />
        {/* {props.image && (
          <Nudge left={5} right={5} bottom={5}>
            <GatsbyImage
              alt={props.image.alt}
              image={getImage(props.image.gatsbyImageData)}
            />
          </Nudge>
        )} */}
      </Section>
    </Container>
  )
})

export default Cta

export const query = graphql`
  fragment HomepageCtaContent on HomepageCta {
    id
    kicker
    heading
    text
    image {
      alt
      id
      gatsbyImageData
    }
    links {
      id
      href
      text
    }
  }
`
