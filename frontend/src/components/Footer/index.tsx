import React, { memo } from "react"
import { Instagram, Facebook } from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Box,
  Space,
  NavLink,
  Text,
  IconLink,
  VisuallyHidden,
} from "../ui"
import BrandLogo from "../BrandLogo"

const socialMedia = {
  FACEBOOK: {
    url: "https://www.facebook.com/people/Smart-CCTV/100087207242889",
    name: "Facebook",
    icon: <Facebook />,
  },
  INSTAGRAM: {
    url: "https://www.instagram.com/smartcctv0011",
    name: "Instagram",
    icon: <Instagram />,
  },
  // YOUTUBE: {
  //   url: "https://youtube.com",
  //   name: "YouTube",
  //   icon: <Youtube />,
  // },
}

const getSocialURL = ({ service, username }) => {
  const domain = socialMedia[service]?.url
  if (!domain) return false
  return `${domain}/${username}`
}

const getSocialIcon = ({ service }) => {
  return socialMedia[service]?.icon
}

const getSocialName = ({ service }) => {
  return socialMedia[service]?.name
}

const data = {
  links: [
    {
      id: 0,
      href: "#!",
      text: "CCTV",
    },
    {
      id: 1,
      href: "#!",
      text: "Alarms",
    },
    {
      id: 2,
      href: "#!",
      text: "Security",
    },
    {
      id: 3,
      href: "#!",
      text: "About",
    },
  ],
  meta: [
    {
      id: 0,
      href: "/terms",
      text: "Terms",
    },
    {
      id: 1,
      href: "/privacy",
      text: "Privacy Policy",
    },
  ],
  socialLinks: [
    {
      id: 0,
      service: "FACEBOOK",
      username: "",
    },
    {
      id: 1,
      service: "INSTAGRAM",
      username: "",
    },
    // {
    //   id: 2,
    //   service: "YOUTUBE",
    //   username: "",
    // },
  ],
  copyright: "© 2022 Smart CCTV | Developed with Love by SURGE",
}

interface FooterProps {}

const Footer = memo((props: FooterProps) => {
  const { links, meta, socialLinks, copyright } = data

  return (
    <Box as="footer" paddingY={4}>
      <Container>
        <Flex variant="start" responsive>
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <BrandLogo />
          </NavLink>
          <Space />
          <FlexList>
            {socialLinks &&
              socialLinks.map((link) => {
                const url = getSocialURL(link)
                return (
                  url && (
                    <li key={link.id}>
                      <IconLink to={url} target="_blank">
                        <VisuallyHidden>{getSocialName(link)}</VisuallyHidden>
                        {getSocialIcon(link)}
                      </IconLink>
                    </li>
                  )
                )
              })}
          </FlexList>
        </Flex>
        <Space size={5} />
        <Flex variant="start" responsive>
          <FlexList variant="start" responsive>
            {links &&
              links.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}>{link.text}</NavLink>
                </li>
              ))}
          </FlexList>
          <Space />
          <FlexList>
            {meta &&
              meta.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}>
                    <Text variant="small">{link.text}</Text>
                  </NavLink>
                </li>
              ))}
          </FlexList>
          <Text variant="small">{copyright}</Text>
        </Flex>
      </Container>
      <Space size={3} />
    </Box>
  )
})

export default Footer
