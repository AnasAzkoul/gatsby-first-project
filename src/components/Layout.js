import React from 'react'; 
import Footer from './Footer';
import Navbar from './navbar';
import 'normalize.css'; 
import '../assets/css/main.css'; 

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
