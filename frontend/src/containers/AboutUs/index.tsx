import React, { memo } from "react"
import { Container } from "../../components/ui"
import * as classes from "./styles.module.scss"

const AboutUsContainer = memo(() => {
  return (
    <Container>
      <p className={classes.text}>This is about us page.</p>
    </Container>
  )
})

export default AboutUsContainer
