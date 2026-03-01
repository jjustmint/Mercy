import React from 'react'
import PetAvaliable from '../components/PetAvaliable'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Cat = () => {
  return (
    <div>
      <Navbar />
      Cat
      {/* {Data.map((e) => {
        return <PetAvaliable name={e.name}/>>
      })} */}
      <Footer />
    </div>
  )
}

export default Cat