import React from 'react'; 
import Layout from '../components/Layout'; 
import RecipesList from '../components/RecipesList'; 
import { graphql } from 'gatsby';

const TagTemplate = ({data, pageContext}) => {
  const recipes = data.allContentfulRecipe.nodes; 
  console.log(pageContext);
  return (
    <Layout title={pageContext.tag}>
      <main className='page'>
        <h2>{pageContext.tag}</h2>
        <div className='tag-recipes'>
          <RecipesList recipes={recipes}/>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        prepTime
        cookTime
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default TagTemplate
