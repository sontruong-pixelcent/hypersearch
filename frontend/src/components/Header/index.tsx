import React, { Fragment, memo, useEffect, useState } from "react"
import { Container, Flex, FlexList, NavLink, Button } from "../ui"
import {
  mobileNavOverlay,
  mobileNavLink,
  desktopHeaderNavWrapper,
  mobileHeaderNavWrapper,
  mobileNavSVGColorWrapper,
} from "../header.css"
import BrandLogo from "../BrandLogo"
import clsx from "clsx"
import * as classes from "./styles.module.scss"
import PhoneIcon from "@mui/icons-material/Phone"

interface HeaderProps {}

const Header = memo((props: HeaderProps) => {
  const navItems = []
  // const navItems = data?.allPage?.nodes?.map((item, index) => {
  //   return {
  //     id: index,
  //     navItemType: "Link",
  //     href: `/${item?.slug}`,
  //     text: item?.title,
  //   }
  // })

  const cta = {
    href: "/",
    text: "Contact",
  }

  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }, [isOpen])

  return (
    <Fragment>
      <div className={clsx(desktopHeaderNavWrapper, classes.headerContainer)}>
        <Container>
          <Flex
            variant="spaceBetween"
            gap={2}
            className={classes.headerContent}
          >
            <NavLink to="/">
              <BrandLogo />
            </NavLink>
            <nav>
              <FlexList className={classes.flexList} gap={5}>
                {navItems &&
                  navItems.map((navItem) => (
                    <li key={navItem.id}>
                      <NavLink className={classes.headerItem} to={navItem.href}>
                        {navItem.text}
                      </NavLink>
                    </li>
                  ))}
              </FlexList>
            </nav>
            <div>
              {cta && (
                <Button className={classes.headerButton} to={cta.href}>
                  {cta.text}
                </Button>
              )}
            </div>
          </Flex>
        </Container>
      </div>

      <div
        className={clsx(
          mobileHeaderNavWrapper[isOpen ? "open" : "closed"],
          classes.headerContainer
        )}
      >
        <Container>
          <Flex className={classes.headerContent} variant="spaceBetween">
            <span
              className={
                mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]
              }
            >
              <NavLink to="/">
                <BrandLogo />
              </NavLink>
            </span>
            <Flex>
              <div>
                {cta && (
                  <Button
                    className={classes.headerButton}
                    to={cta.href}
                    variant={isOpen ? "reversed" : "primary"}
                  >
                    <PhoneIcon />
                  </Button>
                )}
              </div>
              {/* <Nudge right={3}>
                <InteractiveIcon
                  title="Toggle menu"
                  onClick={() => setOpen(!isOpen)}
                  className={
                    mobileNavSVGColorWrapper[isOpen ? "reversed" : "primary"]
                  }
                >
                  {isOpen ? <X /> : <Menu />}
                </InteractiveIcon>
              </Nudge> */}
            </Flex>
          </Flex>
        </Container>
      </div>

      {isOpen && (
        <div className={clsx(mobileNavOverlay, classes.headerContainer)}>
          <nav>
            <FlexList responsive variant="center">
              {navItems?.map((navItem) => (
                <li key={navItem.id}>
                  <NavLink to={navItem.href} className={mobileNavLink}>
                    {navItem.text}
                  </NavLink>
                </li>
              ))}
            </FlexList>
          </nav>
        </div>
      )}
    </Fragment>
  )
})

export default Header
