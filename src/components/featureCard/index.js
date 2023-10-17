import React from 'react'
import { Link } from 'react-router-dom';


const FeatureCard = ({cards = [1,2,3]}) => {
  return (
    <section className="text-gray-600 body-font cursor-pointer">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">COLLECTIONS</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">SELECT YOUR CHOICE</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      {
        cards?.map((card) => {
          return(
            <Link to={`/categories/${card}`} className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full border-4 border-white p-8 flex-col  bg-violet-400">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-800 text-white flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-black text-lg title-font font-bold capitalize">{card || 'Example card'}</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-white">Step into a world of convenience and choice! Start your shopping journey with us and explore endless possibilities.</p>
                <a className="mt-3 text-indigo-900 inline-flex items-center">For More Product
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </Link>
          )
        })
      }
    </div>
  </div>
</section>
  )
}

export default FeatureCard
