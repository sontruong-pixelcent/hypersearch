import React, { memo } from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as classes from "./styles.module.scss"
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles"
import { Container, Text, Button } from "../ui"

let darkTheme = createTheme({
  palette: {
    type: "dark",
  },
})
darkTheme = responsiveFontSizes(darkTheme)

interface Props {}

const Hero = memo((props: Props) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.section} id="about">
        <StaticImage
          className={classes.heroImage}
          src="../../../static/hero.jpg"
          alt="Hero Image"
          style={{ position: "absolute" }}
        />
        <div className={classes.overlay}></div>

        <Container className={classes.container} width="normal">
          <div className={classes.contentWrapper}>
            <div className={classes.content}>
              <Text className={classes.typo1}>NLP</Text>
              <Text className={classes.typo2}>Natural Language Processing</Text>
              <Text className={classes.typo3}>
                Advanced Program In Computer Science
              </Text>
              <div className={classes.buttonContainer}>
                <Button className={classes.button} href="/">
                  SAY HELLO
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  )
})

export default Hero
