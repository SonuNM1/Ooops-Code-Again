import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../products/ProductCard';
import AddProduct from '../products/AddProduct';

const Home = () => {

  const products = useSelector((state) => state.products) ; 

  return (
    <div className='py-0 max-w-7xl mx-auto px-4'>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
        <div className='col-span-2'>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-8 px-5'>
                {
                    products.length ? products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    )) : (
                        <div>No product found</div>
                    )
                }
            </div>
        </div>
        <div className='mt-8'>
            <AddProduct/>
        </div>
      </div>
    </div>
  )
}

// 58

export default Home