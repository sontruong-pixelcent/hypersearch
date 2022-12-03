import React, { memo } from "react"
import { Container } from "../../components/ui"
import * as classes from "./styles.module.scss"

const AboutUsContainer = memo(() => {
  return (
    <Container className="about-section">
      <h2 className={classes.heading}>We are Group 10</h2>
      <p className={classes.slogan} >Our slogan</p>
      <p className={classes.aboutText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
    </Container>
  )
})

export default AboutUsContainer
