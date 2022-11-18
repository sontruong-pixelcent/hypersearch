import React, { Fragment, memo, ReactNode } from "react"
import useSiteMetadata from "../hooks/useSiteMetadata"

interface Props {
  title?: string
  author?: string
  description?: string
  pathname?: string
  children?: ReactNode
}

const SEO = memo(
  ({ title, author, description, pathname, children }: Props) => {
    const {
      siteUrl,
      title: defaultTitle,
      author: defaultAuthor,
      description: defaultDescription,
      image,
    } = useSiteMetadata()

    const seo = {
      url: `${siteUrl}${pathname || ``}`,
      title: title || defaultTitle,
      author: author || defaultAuthor,
      description: description || defaultDescription,
      image,
    }

    return (
      <Fragment>
        <title>{seo.title}</title>
        <meta name="author" content={seo.author} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:url" content={seo.url} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
        <meta name="twitter:creator" content={seo.author} />
        {children}
      </Fragment>
    )
  }
)

export default SEO
