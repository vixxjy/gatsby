import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/layout"

const HomePage = ({ data }) => {
  return (
    <Layout>
      {/* <Img
        className="headshot"
        fixed={data.file.childImageSharp.fixed}
        alt=""
      /> */}
    </Layout>
  )
}

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "img/x.png" }) {
//       childImageSharp {
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `
export default HomePage