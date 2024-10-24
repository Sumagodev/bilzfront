import React from 'react'
import Section1 from '../ComponentsPage/Home/Section1';
import Section3 from '../ComponentsPage/Home/Section3';
import Section4 from '../ComponentsPage/Home/Section4';
import Section5 from '../ComponentsPage/Home/Section5';
import Section6 from '../ComponentsPage/Home/Section6';
import '../Assets/Styles/Home.css'
import Banners from '../Components/Banners';
const Home = () => {
  return (
    <>
      <Banners />
      <Section1 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </>
  )
}

export default Home
