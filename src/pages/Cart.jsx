import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart, updateQuantity, clearCart } from "../redux/cartSlice";

function Cart(){
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-4 border-b">
                            <div className="flex items-center gap-4">
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                                <div>
                                    <h3 className="font-bold">{item.name}</h3>
                                    <p>MAD{item.price}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) =>
                                        dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                                    }
                                    className="w-16 p-1 border rounded-md"
                                />
                                <button
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between mt-6">
                        <button
                            onClick={() => dispatch(clearCart())}
                            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700"
                        >
                            Clear Cart
                        </button>
                        <button onClick={()=>navigate("/checkout")} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700">
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
