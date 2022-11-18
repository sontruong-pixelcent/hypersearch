import { graphql, useStaticQuery } from "gatsby"

export function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          title
          author
          description
          image
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
