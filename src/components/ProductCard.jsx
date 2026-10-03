export default function ProductCard({ product, cart, setCart}) {

function addToCart() {
    const existingProduct = cart.find(
        item =>  item.id === product.id
    )

    if(existingProduct) {
        setCart(
            cart.map(item => 
                item.id === product.id
                ? {...item, quantity: item.quantity + 1}
                :item
            )
        );
    }  else {
        setCart([
            ...cart,
            {
                ...product,
                quantity: 1
            }
        ])
    }
}

    return (
        <div className="product-card">
            <img src={product.thumbnail} alt={product.title} />

            <h3>{product.title}</h3>
            <p>${product.price}</p>

            <button onClick={addToCart}>Add To Cart</button>
        </div>
    );
}