import React from 'react'
import Nav from './component/Nav'
import Section from './component/Section'
import Footer from './component/Footer'
import PortfolioCards from './component/portfolio/PortfolioCards'


export default function Index() {
  return (
    <div>
        <Nav/>
        <Section/>
        <PortfolioCards/>
        <Footer/>
    </div>
  )
}
