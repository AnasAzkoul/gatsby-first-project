import React from "react"
import Layout from "../components/Layout"; 
import AllRecipes from '../components/AllRecipes';


const Recipes = () => {
  return (
    <Layout title={"Recipes"}>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
