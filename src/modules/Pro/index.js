import React, { useEffect, useState } from 'react'
import Products from '../../components/Products'
import Categories from '../../components/Categories'


const Pro = () => {
  const [pro, setPro] = useState([])
  useEffect (() => {
    const fetchPro = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data)
      setPro(data)
    }
    fetchPro()
  }, [])
  return (
    <div className='bg-violet-200'>
        <Categories/>
        <div className="flex flex-col text-center w-full mt-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">ALL PRODUCTS</h1>
    </div>
        {
          Products.length > 0 ?
          <Products products={pro}/>
          :
          <div className='text-5xl'>Loading.....</div> 
        }
        <Products/>
        </div>
    
  )
}

export default Pro
