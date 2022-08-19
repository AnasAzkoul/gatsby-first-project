import React from 'react'

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()}
        <span> Simply Recipes</span> Built With{" "}
        <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer; 
