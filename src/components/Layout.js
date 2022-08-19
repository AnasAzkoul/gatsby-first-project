import React from 'react'; 
import Footer from './Footer';
import Navbar from './navbar';
import 'normalize.css'; 
import '../assets/css/main.css'; 
import SEO from './SEO';

const Layout = ({children, title, description}) => {
  return (
    <>
      <SEO title={title} description={description} /> 
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
