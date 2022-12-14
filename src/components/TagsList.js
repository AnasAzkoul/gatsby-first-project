import React from 'react'; 
import setupTags from '../utils/setupTags';
import {Link} from 'gatsby';
import slugify from 'slugify'; 

const TagsList = ({recipes}) => {
  const newTags = setupTags(recipes); 

  return (
    <div className='tag-container'>
      <h4>Recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag; 
          const tagSlug = slugify(text, {lower: true}); 
          return (
            <Link
              key={index}
              to={`/tags/${tagSlug}`}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
