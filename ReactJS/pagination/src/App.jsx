
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)

  const fetchProducts = async () => {

    const res = await fetch('https://dummyjson.com/products?limit=100')

    const data = await res.json()

    if(data && data.products){
      setProducts(data.products)
    }

    console.log(data)

  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const selectPageHandler = (selectedPage) => {
    setPage(selectedPage)
  }

  return (
    <div>
      {
        products.length > 0 && <div className='products'>
          {
            products.slice(page * 10 - 10, page * 10).map((prod) => {
              return (
                <span className='products__single'
                key={prod.id}
                >
                <img 
                  src={prod.thumbnail}
                  alt={prod.title}
                  />
                <span>{prod.title}</span>
              </span>
              )
          })
          }
          {
            products.length > 0 && <div className='pagination'>
              <span>{"<"} Previous</span>
              {
                [...Array(Math.ceil(products.length / 10))].map((_, i) => (
                  <span 
                    key={i}
                    onClick={() => selectPageHandler(i+1)}
                  >
                    {i + 1}
                  </span>
                ))
              }
              <span>1</span>
              <span>{">"} Next</span>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default App
