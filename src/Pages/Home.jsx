import React from 'react'
import { Link } from 'react-router-dom'
import leatherBelt from '../assets/leather_belt_main.webp'
import leatherBoots from '../assets/leather_boots_main.webp'
import leatherPurse from '../assets/leather_purse_main.jpg'
const Home = () => {
  return (
    <div className='home'>
      <h3>Out Products</h3>
      <div className='home-category'>
        <Link to="/boots"><img src={leatherBoots} alt="leather boots" /></Link>
        <Link to='/belts'><img src={leatherBelt} alt="leather belts" /></Link>
        <Link to='/wallet'><img src={leatherPurse} alt="leather purse" /></Link>
      </div>
    </div>
  )
}

export default Home
