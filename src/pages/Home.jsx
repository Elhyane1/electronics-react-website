import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { FiPlayCircle } from "react-icons/fi";
import { FaShippingFast } from "react-icons/fa"; //shipping icon
import { FaHandHoldingDollar } from "react-icons/fa6"; //money back icon
import { IoTimeSharp } from "react-icons/io5"; //time icon
import { RiSecurePaymentFill } from "react-icons/ri"; //secure payement icon





export default function Home() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        axios('https://mahogany-beryl-vole.glitch.me/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('error while fetching: ', error))
    }, [])


    return (
        <>
            {/* Hero section */}
            <section className="relative h-screen bg-[#111518] text-white flex flex-col">
                {/* Hero Content */}
                <div className="flex-1 flex flex-col md:flex-row items-center justify-around w-9/10 mx-auto px-6">
                    {/* Left Content */}
                    <div className="md:w-1/2 space-y-2 text-center md:text-left -mt-45">
                        <p className="text-gray-300 text-lg">From MAD 9999</p>
                        <h1 className="text-5xl font-bold mb-16">iPhone 16 Pro</h1>
                        <div className="flex justify-center md:justify-start items-center space-x-10">
                            <button className="bg-white text-black font-semibold px-7 py-3 rounded-md hover:bg-[#4B23E6] hover:text-white cursor-pointer">
                                Buy Now
                            </button>
                            <button className="flex items-center space-x-2 text-gray-400 font-bold hover:text-white cursor-pointer">
                                <FiPlayCircle size={22} />
                                <span>Watch Video</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="md:w-1/2 flex justify-center mt-2 md:mt-0">
                        <img src="/iphone16.png" alt="iPhone 12 Pro" className="w-[400px]" />
                    </div>
                </div>

                {/* Feature Bar at Bottom */}
                <div className="absolute left-1/2 -translate-x-1/2 w-8/10 bottom-11 p-6 py-8 flex flex-col md:flex-row justify-around text-center rounded-lg bg-gradient-to-r from-black/80 via-gray-900/100 to-black/80">
                    <div className="space-x-4 flex flex-row items-center">
                        <FaShippingFast className="text-3xl" />
                        <div className="text-start font-bold">
                            <p className="">Free Shipping</p>
                            <p className="text-gray-400 text-xs">
                                Free shipping on all Morocco orders
                            </p>
                        </div>
                    </div>
                    <div className="space-x-4 flex flex-row items-center">
                        <FaHandHoldingDollar className="text-3xl" />
                        <div className="text-start font-bold">
                            <p className="">100% Money Back</p>
                            <p className="text-gray-400 text-xs">
                                You have 10 days to return
                            </p>
                        </div>
                    </div>
                    <div className="space-x-4 flex flex-row items-center">
                        <IoTimeSharp className="text-3xl" />
                        <div className="text-start font-bold">
                            <p className="">Support 24/7</p>
                            <p className="text-gray-400 text-xs">
                                Contact us 24 hours a day
                            </p>
                        </div>
                    </div>
                    <div className="space-x-4 flex flex-row items-center">
                        <RiSecurePaymentFill className="text-3xl" />
                        <div className="text-start font-bold">
                            <p className="">100% Payment Secure</p>
                            <p className="text-gray-400 text-xs">
                                Your payment is safe with us
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Layout section */}
            <div className="px-15 my-8">
                <div className="grid grid-cols-2 gap-6 content-center p-6 md:grid-cols-4 h-fit">
                    {/* Laptops - Large Card */}
                    <div onClick={() => {
                        navigate("/products?category=laptop")}} className="col-span-2 row-span-2 bg-yellow-400 p-6 rounded-xl hover:bg-gray-200 transition">
                        <h2 className="font-bold text-lg text-black">Laptops</h2>
                        <p className="text-black opacity-75">245</p>
                        <img src="/laptop.png" alt="Laptop" className=" mt-20 w-9/10" />
                    </div>

                    {/* Smaller Cards */}
                    <div className="p-6 col-span-2 rounded-xl shadow-md bg-red-700 hover:bg-gray-200 transition">
                        <h2 className="font-bold text-lg">Drones</h2>
                        <p className="text-black">28</p>
                        <img src="/drone.png" alt="Drone" className="mt-1 mx-auto w-5/11" />
                    </div>

                    <div className="p-6 pb-0 rounded-xl shadow-md bg-green-600 hover:bg-gray-200 transition">
                        <h2 className="font-bold text-lg">Smartphones</h2>
                        <p className="text-black">273</p>
                        <img src="/smartphone.png" alt="Smartphone" className="mx-auto mt-1 w-6/10" />
                    </div>

                    <div className="relative p-6 rounded-xl shadow-md bg-violet-800 hover:bg-gray-200 transition">
                        <h2 className="font-bold text-lg">Gaming</h2>
                        <p className="text-black">25</p>
                        <img src="/controller.png" alt="Gaming" className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3/5" />
                    </div>
                </div>
            </div>



            {/* Featured Products */}
            <div className='px-15 my-25'>
                <div className='flex justify-between px-6'>
                    <div>
                        <h2 className='text-3xl font-bold'>Featured Products</h2>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <button className='self-start bg-gray-300 text-black font-semibold py-3 px-6 rounded-md hover:bg-[#4B23E6] hover:text-white cursor-pointer'>View All</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                    {/* Example Product Card */}
                    {products &&
                        products.slice(0, 6).map(p =>
                        (<div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition relative overflow-hidden group flex flex-col justify-between h-[300px]">
                            {/* Image with hover scale effect */}
                            <div className="w-full h-40 flex justify-center items-center">
                                <img
                                    src={p.image}
                                    alt="AirPods Pro"
                                    className="w-32 h-32 object-contain transform transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>

                            {/* Product Details */}
                            <div>
                                <h3 className="font-bold text-lg">{p.name}</h3>
                                <p className="text-gray-600">MAD249.00</p>
                                <p className="text-sm text-gray-400 uppercase tracking-wide">GADGETS</p>
                            </div>

                            {/* Add to Cart Button */}
                            <button onClick={() => dispatch(addToCart(p))}  className="mt-4 w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition">
                                Add to cart
                            </button>
                        </div>

                        )
                        )
                    }
                </div>
            </div>


            {/* Ipad showcase */}
            <section className="bg-[#111518] text-white min-h-screen flex items-center">
                <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-between">

                    {/* Product Image */}
                    <div className="relative lg:w-1/2">
                        <img src="https://startersites.io/blocksy/gadgets/wp-content/uploads/2022/05/home-page-cta-ipad.webp" alt="iPad Pro" className="w-full" />
                        <div className="absolute bottom-40 left-40 backdrop-blur-xl p-8 max-w-xs rounded-2xl">
                            <h4 className="font-semibold text-white">Super Powerful Chip</h4>
                            <p className="text-gray-300 text-sm">Pellentesque pulvinar habitant morbi tristique maecenas.</p>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="lg:w-1/2 text-center lg:text-left mt-10 p-30 lg:mt-0">
                        <p className="text-gray-400 text-sm">From $1099</p>
                        <h1 className="text-5xl font-bold">iPad Pro</h1>
                        <p className="text-gray-300 mt-6">
                            Libero nunc consequat interdum. Varius sitamet mattis vulputate.
                            Ultricies mieget mauris pharetra.
                        </p>
                        <button className="mt-6 px-6 py-3 bg-white hover:bg-[#4B23E6] hover:text-white cursor-pointer text-black font-semibold rounded-lg">
                            Buy Now
                        </button>
                    </div>

                </div>
            </section>


            {/* Features section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Card 1 */}
                        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
                            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-black rounded-full">
                                <span className="text-white text-2xl">⭐</span>
                            </div>
                            <h3 className="mt-4 text-lg font-semibold">Special Offers</h3>
                            <p className="text-gray-600 mt-2">
                                Lorem ipsum consectetur adipiscing eiusmod tempor incididunt labore dolore magna aliqua.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200">
                                Learn More
                            </button>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
                            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-black rounded-full">
                                <span className="text-white text-2xl">🎉</span>
                            </div>
                            <h3 className="mt-4 text-lg font-semibold">Amazing Events</h3>
                            <p className="text-gray-600 mt-2">
                                Massa tincidunt nunc pulvinar sapien et ligula ullamcorper blandit turpis cursus commodo sed egestas egestas.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200">
                                Learn More
                            </button>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
                            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-black rounded-full">
                                <span className="text-white text-2xl">📝</span>
                            </div>
                            <h3 className="mt-4 text-lg font-semibold">Human Reviews</h3>
                            <p className="text-gray-600 mt-2">
                                Ullamcorper malesuada proin libero nunc consequat interdum varius mauris nunc congue nisi vitae.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200">
                                Learn More
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
