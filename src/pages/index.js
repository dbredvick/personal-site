import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello</h1>
    <p>Welcome to my new site.</p>
    <p>
      This is a work-in-progress using{' '}
      <a href="https://gatsbyjs.org">Gatsby.js.</a>
    </p>
    <p>
      If you want to know more about me, please check me out on{' '}
      <a href="https://www.linkedin.com/in/drew-bredvick/">LinkedIn</a>.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
