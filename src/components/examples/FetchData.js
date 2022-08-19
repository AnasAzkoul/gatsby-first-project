import React from 'react'; 
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
  query {
    site {
      info: siteMetadata {
        title
        description
        author
        simpleData
        complexData {
          age
          name
        }
        person {
          name
          age
        }
      }
    }
  }
` 
const FetchData = () => {
  const {
    site: {
      info: {
        title, 
        person: {name, age}, 
      },
    },
  } = useStaticQuery(getData); 
  
  console.log(useStaticQuery(getData))

  return (
    <div>
      <h2>Site Title is: {title}</h2>
      <h2>person: {name}, {age}</h2>
    </div>
  )
}

export default FetchData
