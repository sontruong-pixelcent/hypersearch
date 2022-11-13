import React, { useState, useEffect, memo } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as classes from "./styles.module.scss"
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles"
import { Container, HomepageImage, Text, Button } from "../ui"

let darkTheme = createTheme({
  palette: {
    type: "dark",
  },
})
darkTheme = responsiveFontSizes(darkTheme)

interface CustomHeroProps {
  heroImage: HomepageImage
}

const CustomHero = memo((props: CustomHeroProps) => {
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => setShouldShow(true), [])

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.section} id="about">
        <GatsbyImage
          className={classes.heroImage}
          image={props?.heroImage?.gatsbyImageData}
          alt={props?.heroImage?.alt}
          style={{ position: "absolute" }}
        />
        <div className={classes.overlay}></div>

        <Container className={classes.container} width="normal">
          <div className={classes.contentWrapper}>
            <div className={classes.content}>
              <Text className={classes.typo1}>Smart CCTV</Text>
              <Text className={classes.typo2}>Alarms and Security</Text>
              <Text className={classes.typo3}>
                Keeping Kerikeri safe and secure from within and outside their
                home and/or business.
              </Text>
              <div className={classes.buttonContainer}>
                <Button className={classes.button} href="tel:094040011">
                  CALL US NOW
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  )
})

export default CustomHero
