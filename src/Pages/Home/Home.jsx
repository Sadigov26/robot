import React from 'react'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import Products from '../../Components/Products/Products'
import SiteSec from '../../Components/SiteSec/SiteSec'
import SiteSecTwo from '../../Components/SiteSecTwo/SiteSecTwo'
import Features from '../../Components/Features/Features'
import Brand from '../../Components/Brand/Brand'
import Blog from '../../Components/Blog/Blog'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Products/>
      <SiteSec/>
      <SiteSecTwo/>
      <Features/>
      <Brand/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default Home
