import React from 'react'; 
import {Link} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import slugify from 'slugify'; 

const RecipesList = ({ recipes=[] }) => {
  return (
    <div className='recipes-list'>
      {recipes.map(recipe => {
        // console.log(recipe)
        const {id, title, image, prepTime, cookTime} = recipe; 
        const imagePath = getImage(image); 
        const slug = slugify(title, {lower: true})
        // console.log(imageRoute)
        return (
          <Link
            to={`/${slug}`}
            key={id}
            className='recipe'
          >
            <GatsbyImage
              image={imagePath}
              alt={`${title}`}
              className='recipe-img'
            /> 
            <h5>{title}</h5>
            <p>Prep : {prepTime}min | cook : {cookTime}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList;
