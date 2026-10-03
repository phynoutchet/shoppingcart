import { Link } from "react-router-dom"

const Header = ({cart}) => {

    const cartQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
    )

    return (
        <header>
        <div className="logo-container">
            <h1 className="app-title">The Arcade</h1>
        </div>

        <div className="header-menu">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">
            Cart ({cartQuantity})
            </Link>
        </div>

        </header>
    )
}

export default Header