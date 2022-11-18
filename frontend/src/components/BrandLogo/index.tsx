import React, { memo } from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as classes from "./styles.module.scss"
import clsx from "clsx"

interface BrandLogoProps {
  className?: string
}

const BrandLogo = memo((props: BrandLogoProps) => {
  const { className } = props

  return (
    <StaticImage
      className={clsx(className, classes.logo)}
      src="../../../static/logo.png"
      alt="Logo"
    />
  )
})

export default BrandLogo
