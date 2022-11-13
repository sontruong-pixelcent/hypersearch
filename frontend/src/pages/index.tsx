import React, { memo } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import CustomHero from "../components/CustomHero"
import { HomepageImage } from "../components/ui"
import SEO from "../components/SEO."

interface HomepageProps {
  data: {
    homepage: {
      id: string
      title: string
      description: string
      heroImage: HomepageImage
      image: { id: string; url: string }
      blocks: sections.HomepageBlock[]
    }
  }
}

const Homepage = memo((props: HomepageProps) => {
  const { homepage } = props.data

  return (
    <Layout {...homepage}>
      <CustomHero heroImage={homepage?.heroImage} />
      {homepage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...(componentProps as any)} />
      })}
    </Layout>
  )
})

export default Homepage

export const Head = () => <SEO />

export const query = graphql`
  {
    homepage {
      id
      title
      description
      image {
        id
        url
      }
      heroImage {
        id
        gatsbyImageData
        alt
      }
      blocks: content {
        id
        blocktype
        ...HomepageHeroContent
        ...HomepageLogoListContent
        ...HomepageProductListContent
        ...HomepageFeatureListContent
        ...HomepageBenefitListContent
        ...HomepageStatListContent
        ...HomepageTestimonialListContent
        ...HomepageCtaContent
      }
    }
  }
`
