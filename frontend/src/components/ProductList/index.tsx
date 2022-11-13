import React, { memo } from "react"
import { graphql } from "gatsby"
import { Text, Box, HomepageImage, HomepageLink } from "../ui"
import * as classes from "./styles.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"

interface ProductProps {
  id: string
  image: HomepageImage
  heading: string
  text: string
  links: HomepageLink[]
}

const Product = memo((props: ProductProps) => {
  return (
    <Box center>
      {props.image && (
        <GatsbyImage
          className={classes.image}
          alt={props.image.alt}
          image={props.image.gatsbyImageData}
        />
      )}
      {/* <Subhead>{props.heading?.replace("&amp;", "&")}</Subhead> */}
      <Text className={classes.text}>{props.text?.replace("&amp;", "&")}</Text>
      {/* <LinkList links={props.links} /> */}
    </Box>
  )
})

export interface ProductListProps {
  kicker?: string
  heading: string
  text?: string
  content: ProductProps[]
}

const ProductList = memo((props: ProductListProps) => {
  return (
    <></>
    // <Section className={classes.section}>
    //   <Container>
    //     <Box className={classes.box} center paddingY={4}>
    //       <Heading className={classes.heading}>
    //         {props.kicker && (
    //           <Kicker className={classes.kicker}>{props.kicker?.replace("&amp;", "&")}</Kicker>
    //         )}
    //         {props.heading?.replace("&amp;", "&")}
    //       </Heading>
    //       {/* {props.text && <Text>{props.text?.replace("&amp;", "&")}</Text>} */}
    //     </Box>
    //     <FlexList className={classes.imageList} gap={4} variant="responsive">
    //       {props.content.map((product) => (
    //         <li key={product.id}>
    //           <Product {...product} />
    //         </li>
    //       ))}
    //     </FlexList>
    //   </Container>
    // </Section>
  )
})

export default ProductList

export const query = graphql`
  fragment HomepageProductListContent on HomepageProductList {
    id
    kicker
    heading
    text
    content {
      id
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
  }
`
