import React from 'react'
import logo from '../Assets/girl.png'

const hero = () => {
  return (
    <section className="text-gray-600 body-font mt-2">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-7xl text-7xl mb-4 font-bold text-indigo-600">Shop Shop
        <br className="hidden lg:inline-block"/>Shoppy!
      </h1>
      <p className="mb-8 leading-relaxed">"Welcome to our online shopping haven! We're thrilled to have you join us on this exciting journey. At SHOP SHOP SHOPPY!, we've curated a world of products just for you, from the latest trends to everyday essentials. Our mission is to make your shopping experience convenient and enjoyable. Explore our wide range of offerings, take advantage of exclusive deals, and discover quality products that cater to your unique needs. Thank you for choosing us as your trusted online shopping destination, and we look forward to being a part of your shopping adventures."</p>
      
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={logo} w-700 h-600/>
    </div>
  </div>
</section>
  )
}

export default hero
