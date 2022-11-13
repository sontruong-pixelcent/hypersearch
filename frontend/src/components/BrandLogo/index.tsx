import React, { memo } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import * as classes from "./styles.module.scss"
import clsx from "clsx"

interface BrandLogoProps {
  className?: string
}

const BrandLogo = memo((props: BrandLogoProps) => {
  const { className } = props

  const data = useStaticQuery(graphql`
    query Homepage {
      homepage {
        logo {
          id
          gatsbyImageData
          alt
        }
      }
    }
  `)

  return (
    <GatsbyImage
      className={clsx(className, classes.logo)}
      image={data?.homepage?.logo?.gatsbyImageData}
      alt={data?.homepage?.logo?.alt}
    />
  )
})

export default BrandLogo
