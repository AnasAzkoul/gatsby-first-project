const recipes = recipes => {
  let tagsObj = {}
  
  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (tagsObj[tag]) {
        return tagsObj[tag] += 1
      } else {
        return tagsObj[tag] = 1
      }
    })
  })
  return Object.entries(tagsObj).sort((a, b) => {
    const [firstTag] = a; 
    const [secondTag] = b; 
    return firstTag.localeCompare(secondTag)
  })
}

export default recipes; 
