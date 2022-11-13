import React, { memo } from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  FlexList,
  Box,
  Icon,
  Heading,
  Text,
  Space,
  Subhead,
  HomepageImage,
} from "../ui"
import * as classes from "./styles.module.scss"

interface BenefitProps {
  id: string
  image?: HomepageImage
  heading: string
  text: string
}

const Benefit = memo((props: BenefitProps) => {
  return (
    <Box as="li" width="third" padding={4} paddingY={3}>
      <div className={classes.header}>
        {props.image && (
          <Icon
            alt={props.image.alt}
            image={props.image.gatsbyImageData}
            size="small"
          />
        )}
        <Heading className={classes.subHeadSmall} variant="subheadSmall">
          {props.heading?.replace("&amp;", "&")}
        </Heading>
      </div>
      <Text className={classes.text}>
        <div dangerouslySetInnerHTML={{ __html: props.text }} />
      </Text>
    </Box>
  )
})

export interface BenefitListProps {
  heading?: string
  text?: string
  content: BenefitProps[]
}

const BenefitList = memo((props: BenefitListProps) => {
  return (
    <Section className={classes.section}>
      <Container>
        <Box center>
          {/* {props.heading && <Heading>{props.heading?.replace("&amp;", "&")}</Heading>} */}
          {props.text && <Subhead>{props.text?.replace("&amp;", "&")}</Subhead>}
        </Box>
        <Space size={3} />
        <FlexList gutter={3} variant="start" responsive wrap>
          {props.content.map((benefit) => (
            <Benefit key={benefit.id} {...benefit} />
          ))}
        </FlexList>
      </Container>
    </Section>
  )
})

export default BenefitList

export const query = graphql`
  fragment HomepageBenefitListContent on HomepageBenefitList {
    id
    heading
    text
    content {
      id
      heading
      text
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
