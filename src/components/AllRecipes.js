import React from 'react'; 
import TagsList from './TagsList';
import RecipesList from './RecipesList';
import {graphql, useStaticQuery} from 'gatsby';

const query = graphql`
  query {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        cookTime
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query); 
  const { nodes } = data.allContentfulRecipe
  
  return (
    <section className='recipes-container'>
      <TagsList recipes={nodes} />
      <RecipesList recipes={nodes} />
    </section>
  )
}

export default AllRecipes; 
