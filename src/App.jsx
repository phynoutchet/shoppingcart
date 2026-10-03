import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";

export default function App() {
    const [cart, setCart] = useState([]);

    return (
        <BrowserRouter>
            <Header cart={cart} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/shop"
                    element={<Shop cart={cart} setCart={setCart} />}
                />
                <Route
                    path="/cart"
                    element={<Cart cart={cart} setCart={setCart} />}
                />
            </Routes>
        </BrowserRouter>
    );
}