import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../../components/Products'
import Pro from '../Pro'

const CategoryProduct = () => {
    const { name } = useParams()
    const [products, setProducts] = useState([])
    useEffect (() => {
      const fetchProducts = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
        const data = await response.json()
        console.log(data)
        setProducts(data)
      }
      fetchProducts()
    }, [])

    if (products.length === 0) return <div className='text-5xl'>Loading.....</div>
  return (
    <div className='bg-violet-200'>
   <Products products={products}/>
   </div>
  )
}

export default CategoryProduct
