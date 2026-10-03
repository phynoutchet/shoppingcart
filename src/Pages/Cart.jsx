export default function Cart ({ cart, setCart }) {

     function increaseQuantity(id) {
        setCart(
            cart.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    }

    function decreaseQuantity(id) {
        setCart(
            cart
                .map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    }

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map(item => (
                    <div className="card-item" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />

                        <h3>{item.title}</h3>

                        <p>${item.price}</p>

                        <p>Quantity: {item.quantity}</p>

                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    </div>
                ) )
            ) }
        </div>


    )
}