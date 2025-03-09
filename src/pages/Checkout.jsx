import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { jsPDF } from 'jspdf';
import { removeFromCart, clearCart } from "../redux/cartSlice";
import axios from "axios";

function Checkout() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    // Calculate Total Price
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    // State for Shipping Details
    const [shippingInfo, setShippingInfo] = useState({
        name: "",
        address: "",
        phone: "",
    });

    // Handle Input Changes
    const handleChange = (e) => {
        setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
    };

    // Handle Checkout Submission
    const handleCheckout = async () => {
        const order = {
            cartItems,
            shippingInfo,
            totalPrice,
            status: "Pending", // You can add a status field (e.g., Pending, Completed, etc.)
        };

        try {
            // Send the order data to JSON Server
            const response = await axios.post("http://localhost:5000/orders", order);
            console.log("Order Placed:", response.data);
            dispatch(clearCart()); // Clear Cart After Checkout
            generatePDF();
            alert("Order Placed Successfully!");
        } catch (error) {
            console.error("Error placing order:", error);
            alert("There was an error placing your order. Please try again.");
        }
    };

    const generatePDF = () => {
        const doc = new jsPDF();

        // Add title to the PDF
        doc.setFontSize(20);
        doc.text('Order Confirmation', 20, 20);

        // Add customer info
        doc.setFontSize(14);
        doc.text(`Customer Name: ${shippingInfo.name}`, 20, 30);
        doc.text(`Address: ${shippingInfo.address}`, 20, 40);

        // Add order items
        doc.text('Order Items:', 20, 60);
        cartItems.forEach((item, index) => {
            doc.text(`${item.name} x${item.quantity} - $${item.price}`, 20, 70 + (index * 10));
        });

        // Add total
        doc.text(`Total: $${totalPrice}`, 20, 90 + (cartItems.length * 10));

        // Save the PDF
        doc.save('order_confirmation.pdf');
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>

            {/* Cart Items Summary */}
            <div className="mb-6">
                {cartItems.length === 0 ? (
                    <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id} className="flex justify-between items-center border-b py-2">
                                <div>
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                                </div>
                                <p className="text-gray-900 font-medium">MAD{item.price * item.quantity}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Total Price */}
            <div className="flex justify-between items-center mb-6 text-lg font-semibold">
                <span>Total:</span>
                <span>MAD{totalPrice.toFixed(2)}</span>
            </div>

            {/* Shipping Form */}
            <div className="mb-6">
                <label className="block font-medium mb-1">Name</label>
                <input
                    type="text"
                    name="name"
                    value={shippingInfo.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />

                <label className="block font-medium mt-4 mb-1">Address</label>
                <input
                    type="text"
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />

                <label className="block font-medium mt-4 mb-1">Phone</label>
                <input
                    type="text"
                    name="phone"
                    value={shippingInfo.phone}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
            </div>

            {/* Checkout Button */}
            <button
                onClick={handleCheckout}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                disabled={cartItems.length === 0}
            >
                Confirm Order
            </button>
        </div>
    );
}

export default Checkout;
