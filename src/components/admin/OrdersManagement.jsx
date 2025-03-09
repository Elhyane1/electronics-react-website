import { useState, useEffect } from "react";
import axios from "axios";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button, Input } from "@material-tailwind/react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const OrderManagement = () => {
    const [orders, setOrders] = useState([]);
    const [open, setOpen] = useState(false);
    const [editingOrder, setEditingOrder] = useState(null);
    const [formData, setFormData] = useState({
        status: "Pending",
    });

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = () => {
        axios.get("http://localhost:5000/orders")
            .then(response => setOrders(response.data))
            .catch(error => console.log(error));
    };

    const handleOpen = (order = null) => {
        setEditingOrder(order);
        setFormData(order ? { ...order } : { status: "Pending" });
        setOpen(true);
    };

    const handleSubmit = () => {
        if (editingOrder) {
            axios.put(`http://localhost:5000/orders/${editingOrder.id}`, formData)
                .then(() => fetchOrders())
                .catch(error => console.log(error));
        } else {
            alert("You can't add new orders manually.");
        }
        setOpen(false);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/orders/${id}`).then(() => fetchOrders());
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Order Management</h2>
                {/* No need to add new orders manually, so no "Add Order" button here */}
            </div>

            <table className="w-full border-collapse border border-gray-300 mt-6">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Order ID</th>
                        <th className="border p-2">Customer</th>
                        <th className="border p-2">Total Price</th>
                        <th className="border p-2">Status</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id} className="text-center">
                            <td className="border p-2">{order.id}</td>
                            <td className="border p-2">{order.shippingInfo.name}</td>
                            <td className="border p-2">${order.totalPrice}</td>
                            <td className="border p-2">{order.status}</td>
                            <td className="border p-2">
                                <Button color="green" onClick={() => handleOpen(order)}><FaEdit className="mr-2" /> Edit</Button>
                                <Button color="red" onClick={() => handleDelete(order.id)} className="ml-2"><FaTrash className="mr-2" /> Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Order Modal */}
            <Dialog open={open} handler={() => setOpen(false)} size="sm" className="p-4">
                <DialogHeader>{editingOrder ? "Edit Order" : "Order Details"}</DialogHeader>
                <DialogBody>
                    <div className="space-y-8">
                        <p className="font-medium">Customer Name: {formData.shippingInfo?.name}</p>
                        <p className="font-medium">Address: {formData.shippingInfo?.address}</p>
                        <p className="font-medium">Phone: {formData.shippingInfo?.phone}</p>
                        <p className="font-medium">Total Price: ${formData.totalPrice}</p>

                        {/* Status Selection */}
                        <label className="block font-medium mb-1">Order Status</label>
                        <select
                            className="border p-2 rounded w-full"
                            value={formData.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                        >
                            <option value="Pending">Pending</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button variant="text" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button color="blue" onClick={handleSubmit}>{editingOrder ? "Update" : "Save"}</Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
};

export default OrderManagement;
