import React, { memo } from "react"
import { graphql } from "gatsby"
import { Container, Box, Kicker, Heading } from "../ui"
import Feature, { FeatureDataProps } from "../Feature"
import * as classes from "./styles.module.scss"

export interface FeatureListProps {
  kicker?: string
  heading: string
  text?: string
  content: FeatureDataProps[]
}

const FeatureList = memo((props: FeatureListProps) => {
  return (
    <Container width="fullbleed">
      <Box className={classes.box} background="muted" radius="large">
        <Box center paddingY={5} className={classes.headerContainer}>
          <Heading className={classes.heading}>
            {props.kicker && (
              <Kicker className={classes.kicker}>
                {props.kicker?.replace("&amp;", "&")}
              </Kicker>
            )}
            {props.heading?.replace("&amp;", "&")}
          </Heading>
          {/* {props.text && <Text>{props.text?.replace("&amp;", "&")}</Text>} */}
        </Box>
        {props.content.map((feature, i) => (
          <Feature key={feature.id} {...feature} flip={Boolean(i % 2)} />
        ))}
      </Box>
    </Container>
  )
})

export default FeatureList

export const query = graphql`
  fragment HomepageFeatureListContent on HomepageFeatureList {
    id
    kicker
    heading
    text
    content {
      id
      ...HomepageFeatureContent
    }
  }
`
