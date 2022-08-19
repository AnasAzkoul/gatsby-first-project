import React from "react"; 
import Layout from '../components/Layout';
import {StaticImage} from 'gatsby-plugin-image';
import AllRecipes from '../components/AllRecipes';



const Home = () => {
  return (
    <Layout title={"Home"} description={"this is home page"}>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs with flour"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
 }

 
export default Home; 
