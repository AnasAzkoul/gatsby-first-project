import React from 'react'; 
import Layout from '../components/Layout';
import {StaticImage} from 'gatsby-plugin-image';
import {Link} from 'gatsby';
import {graphql} from 'gatsby';
import RecipesList from '../components/RecipesList';


export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        cookTime
      }
    }
  }
`

const About = ({data}) => {
  
  return (
    <Layout title={"About Us"} description={"this is about page"}>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
            </p>
            <p>
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person pouring salt in the bowl"
            className="about-img"
            placeholder="blurred"
          ></StaticImage>
        </section>
        <section className="featured-recipes">
          <h5>Look at this awesomesouce!</h5>
          <RecipesList recipes={data.allContentfulRecipe.nodes} />
        </section>
      </main>
    </Layout>
  )
}

export default About; 
