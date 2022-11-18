import React, { memo } from "react"
import { Container, Flex, Box, Space, Text } from "../ui"
import * as classes from "./styles.module.scss"

interface FooterProps {}

const Footer = memo((props: FooterProps) => {
  return (
    <Box as="footer" paddingY={4}>
      <Container>
        <Flex variant="start" responsive>
          <Space />
          <Text className={classes.footer} variant="small">
            © 2022 | Developed with Love by Son Dep Trai
          </Text>
        </Flex>
      </Container>
    </Box>
  )
})

export default Footer
