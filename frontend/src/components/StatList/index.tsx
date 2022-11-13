import React, { memo } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Container,
  Section,
  FlexList,
  Text,
  Heading,
  Flex,
  Box,
  ButtonList,
  HomepageImage,
  HomepageLink,
} from "../ui"
import * as classes from "./styles.module.scss"

interface StatProps {
  id: string
  value: string
  label: string
}

const Stat = memo((props: StatProps) => {
  return (
    <Box>
      <Text className={classes.statValue} variant="stat">
        {props.value}
      </Text>
      <Text className={classes.statLabel} variant="statLabel">
        {props.label}
      </Text>
    </Box>
  )
})

export interface StatListProps {
  icon?: HomepageImage
  kicker?: string
  heading: string
  text?: string
  content: StatProps[]
  links: HomepageLink[]
  image?: HomepageImage
}

const StatList = memo((props: StatListProps) => {
  return (
    <Container width="fullbleed">
      <Section className={classes.section} padding={5} radius="large">
        <Flex className={classes.flex} responsive variant="start">
          <Box width="half">
            {/* {props.icon && (
              <Icon alt={props.icon.alt} image={props.icon.gatsbyImageData} />
            )} */}
            <Heading className={classes.heading}>
              {/* {props.kicker && <Kicker>{props.kicker?.replace("&amp;", "&")}</Kicker>} */}
              {props.heading?.replace("&amp;", "&")}
            </Heading>
            {props.text && (
              <Text className={classes.text} variant="lead">
                {props.text?.replace("&amp;", "&")}
              </Text>
            )}
          </Box>
          <Box className={classes.imageContainer} width="half">
            {props.image && (
              <GatsbyImage
                className={classes.image}
                alt={props.image.alt}
                image={getImage(props.image.gatsbyImageData)}
              />
            )}
          </Box>
        </Flex>
        <FlexList className={classes.flexList} wrap gap={4}>
          {props.content.map((stat) => (
            <li key={stat.id}>
              <Stat {...stat} />
            </li>
          ))}
        </FlexList>
        <ButtonList
          className={classes.buttonList}
          links={props.links}
          reversed
          target="_blank"
        />
      </Section>
    </Container>
  )
})

export default StatList

export const query = graphql`
  fragment HomepageStatListContent on HomepageStatList {
    id
    kicker
    heading
    text
    image {
      id
      alt
      gatsbyImageData
    }
    icon {
      id
      alt
      gatsbyImageData
    }
    content {
      id
      value
      label
      heading
    }
    links {
      id
      href
      text
    }
  }
`
