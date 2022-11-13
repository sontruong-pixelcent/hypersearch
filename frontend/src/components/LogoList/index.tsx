import React, { memo } from "react"
import { graphql } from "gatsby"
import {
  HomepageImage,
  Section,
  Container,
  Text,
  Space,
  FlexList,
  Logo,
} from "../ui"
import * as classes from "./styles.module.scss"

export interface LogoItemProps {
  id: string
  alt: string
  image: HomepageImage
}

export const LogoItem = memo((props: LogoItemProps) => {
  if (!props.image) {
    return null
  }
  return (
    <Logo alt={props.alt} image={props.image.gatsbyImageData} size="large" />
  )
})

export interface LogoListProps {
  text?: string
  logos: LogoItemProps[]
}

const LogoList = memo((props: LogoListProps) => {
  return (
    <Section className={classes.section}>
      <Container width="narrow">
        {props.text && (
          <Text center variant="lead">
            {props.text?.replace("&amp;", "&")}
          </Text>
        )}
        <Space size={4} />
        <FlexList gap={5} variant="center">
          {props.logos.map(
            (logo) =>
              logo && (
                <li key={logo.id}>
                  <LogoItem {...logo} />
                </li>
              )
          )}
        </FlexList>
      </Container>
    </Section>
  )
})

export default LogoList

export const query = graphql`
  fragment HomepageLogoListContent on HomepageLogoList {
    id
    text
    logos {
      id
      alt
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
