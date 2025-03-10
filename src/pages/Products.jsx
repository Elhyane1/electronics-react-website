import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import ReactPaginate from "react-paginate"; // Import react-paginate

export default function Products() {
    const dispatch = useDispatch();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const defaultCategory = queryParams.get("category") || "All Categories";

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState(defaultCategory); // For category filter
    const [sortOrder, setSortOrder] = useState(""); // For price sorting
    const [currentPage, setCurrentPage] = useState(0); // Current page (starts from 0)
    const itemsPerPage = 8; // Number of items per page

    useEffect(() => {
        axios('https://mahogany-beryl-vole.glitch.me/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error while fetching: ', error));
    }, []);

    // Filter products based on category selection
    const filteredProducts = category === "All Categories"
        ? products
        : products.filter(p => p.category === category)
            .sort((a, b) => {
                if (sortOrder === "lowToHigh") return a.price - b.price;
                if (sortOrder === "highToLow") return b.price - a.price;
                return 0;
            });

    // Pagination: Get the products for the current page
    const indexOfLastProduct = (currentPage + 1) * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Handle page change
    const handlePageClick = (data) => {
        setCurrentPage(data.selected); // `selected` is the page number from react-paginate
    };

    return (
        <>
            <section className="text-center py-12 bg-[#111518] text-white">
                <nav className="text-sm text-gray-400 uppercase tracking-wide">
                    <a href="#" className="hover:text-white">Home</a>
                    <span className="text-gray-500"> / </span>
                    <span className="text-white font-semibold">Products</span>
                </nav>
                <h1 className="text-4xl font-bold mt-2">Products</h1>
            </section>

            <div className="bg-gray-300 p-6">
                {/* Filter Bars */}
                <div className="mx-auto flex justify-end gap-6 px-6">
                    {/* Category Filter */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">Filter by Categories</label>
                        <select
                            defaultValue="All Categories"
                            onChange={(e) => setCategory(e.target.value)}
                            className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30 p-2.5"
                        >
                            <option value="All Categories">All Categories</option>
                            <option value="laptop">Laptop</option>
                            <option value="smartphone">Phone</option>
                            <option value="drone">Drone</option>
                            <option value="smartwatche">Smartwatch</option>
                            <option value="smartwatche">gaming</option>
                        </select>
                    </div>

                    {/* Price Sorting Filter */}
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">Filter by Price</label>
                        <select
                            className="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30 p-2.5"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="">Sort by Price</option>
                            <option value="lowToHigh">Low to High</option>
                            <option value="highToLow">High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Products Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                    {/* Display Product Cards */}
                    {currentProducts.map(p => (
                        <div key={p.id} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition relative overflow-hidden group flex flex-col min-h-[350px]">
                            {/* Image with hover scale effect */}
                            <div className="w-full h-40 flex justify-center items-center">
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    className="w-32 h-32 object-contain transform transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>

                            {/* Product Details */}
                            <div className="flex-grow">
                                <h3 className="font-bold text-lg">{p.name}</h3>
                                <p className="text-gray-600">MAD{p.price}</p>
                                <p className="text-sm text-gray-400 uppercase tracking-wide">{p.category}</p>
                            </div>

                            {/* Add to Cart Button */}
                            <button onClick={() => dispatch(addToCart(p))} className="mt-auto bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-[#4B23E6] hover:text-white transition cursor-pointer">
                                Add to cart
                            </button>
                        </div>
                    ))}
                </div>

                {/* Pagination Component */}
                <div className="flex justify-center mt-4">
                    <ReactPaginate
                        previousLabel={"< Previous"}
                        nextLabel={"Next >"}
                        breakLabel={"..."}
                        pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
                        onPageChange={handlePageClick}
                        containerClassName={"flex space-x-2"}
                        pageClassName={"px-3 py-1 border rounded-md cursor-pointer"}
                        activeClassName={"bg-blue-500 text-white"}
                    />
                </div>
            </div>
        </>
    );
}
