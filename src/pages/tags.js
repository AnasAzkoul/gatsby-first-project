import React from "react"; 
import Layout from "../components/Layout"; 
import {graphql, Link} from "gatsby"; 
import setupTags from '../utils/setupTags'; 
import slugify from 'slugify'; 


export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

const Tags = ({data}) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes); 
  return (
    <Layout>
      <main className='page'>
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag; 
            const tagSlug = slugify(text, {lower: true}); 
            return (
              <Link
                key={index}
                to={`/tags/${tagSlug}`}
                className='tag'
              >
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export default Tags
