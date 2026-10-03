import { useEffect, useState } from 'react'
import ProductCard from "../components/ProductCard"

export default function Shop({ cart, setCart }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data)
                console.log('Is array?', Array.isArray(data.products), data.products)
                setProducts(data.products)
            })
            .catch(error => console.error('Error fetching products:', error))
    }, [])

    if (products.length === 0) {
        return <p>Loading products...</p>
    }

    return (
        <div className="shop">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    cart={cart}
                    setCart={setCart}
                />
            ))}
        </div>
    )
}