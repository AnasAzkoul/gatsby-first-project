import React from 'react'
import Layout from '../components/Layout'; 
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

const Contact = ({data}) => {
  return (
    <Layout title={"Contact"}>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To get in touch?</h3>
            <p>
              kitsch squid slow-carb palo santo VHS you probably haven't heard
              of them drinking vinegar. Vexillologist iceland affogato mlkshk
              actually franzen taxidermy cloud bread scenester gentrify fixie
              meditation you probably haven't heard of them direct trade tumblr.
              Selfies single-origin coffee offal glossier humblebrag.
            </p>
            <p>
              8-bit yr green juice tilde, intelligentsia hot chicken sustainable
              big mood salvia DIY.
            </p>
            <p>
              hella PBR&B leggings vibecession edison bulb same adaptogen
              vexillologist. Bespoke single-origin coffee squid vibecession
              flexitarian.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mwkzkdob"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this awesomesouce!</h5>
          <RecipesList recipes={data.allContentfulRecipe.nodes} />
        </section>
      </main>
    </Layout>
  )
}

export default Contact
