import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function ProductCard({ product }) {
    return (
        <div className="w-full">
            <Link to={`${product.productID}`}><img src={product.image} alt="product" className="w-full h-[220px] object-contain mx-auto"></img></Link>
            <div className="mt-2 px-4 text-center">
                <Link to={`${product.productID}`} className="hover:text-[#535C91] duration-200"><h2 className="font-medium">{product.name}</h2></Link>
                <h2 className="text-md">{product.price} L.E</h2>
            </div>
        </div>
    )
}
function Products() {
    const [products, setProducts] = useState([]);
    const categories = ["electronics" , "jewelery" , "men's clothing" , "women's clothing"];
    function getProducts() {
        fetch('http://localhost:4500/product/getAllProductsHome')
            .then(res => res.json())
            .then(response => setProducts(response.data))
            .catch()
    }
    useEffect(() => {
        getProducts();
    }, [])
    return (
        <div className="w-[90%] mx-auto mt-[50px] mb-[50px]">
            <div className="md:w-3/4 w-full">
                <h2 className="main-font text-2xl">Explore Our Products</h2>
                <p>
                    Welcome to our expansive emporium of innovation and style! Delve into a digital marketplace brimming with possibilities on our Explore Products page. Here, every click unveils a treasure trove of diverse offerings, curated to cater to your every whim and necessity.From cutting-edge gadgets to timeless fashion staples, our meticulously organized interface ensures seamless navigation through an array of categories, each promising a delightful journey of discovery.
                </p>
            </div>
            <div className="mt-10 flex items-center gap-4">
                <button className="px-4 py-2 text-sm border border-black rounded-full">All</button>
                {categories.map((category)=>{
                    return <Link to={`category?type=${category}`}><button className="px-4 py-2 text-sm border border-gray-300 rounded-full">{category}</button></Link>
                })}
            </div>
            <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
                {products.map((product) => {
                    return <ProductCard product={product} />
                })}
            </div>
        </div>
    )
}

export default Products;