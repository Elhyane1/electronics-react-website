import { useState, useEffect } from "react";
import axios from "axios";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button, Input } from "@material-tailwind/react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

function ProductManagement({ addProduct, updateProduct, deleteProduct }){
    const [products, setProducts] = useState([]);

    const [open, setOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [formData, setFormData] = useState({ name: "", price: "", description:"", image: "" });


        const fetchProducts = () => {
        axios.get("http://localhost:5000/products")
            .then(response => setProducts(response.data))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleOpen = (product = null) => {
        setEditingProduct(product);
        setFormData(product ? { ...product } : { name: "", price: "", description:"",  image: "" });
        setOpen(true);
    };

    const handleSubmit = () => {
        if (editingProduct) {
            updateProduct(editingProduct.id, formData);
        } else {
            addProduct(formData);
        }
        setOpen(false);
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Admin Panel</h2>
                <Button color="blue" onClick={() => handleOpen()}><FaPlus className="mr-2" /> Add Product</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="p-4 border rounded-lg shadow-md">
                        <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-4" />
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-gray-600">${product.price}</p>
                        <div className="flex justify-between mt-4">
                            <Button color="green" onClick={() => handleOpen(product)}><FaEdit className="mr-2" /> Edit</Button>
                            <Button color="red" onClick={() => deleteProduct(product.id)}><FaTrash className="mr-2" /> Delete</Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add/Edit Product Modal */}
            <Dialog open={open} handler={() => setOpen(false)} size="sm" className="p-4">
                <DialogHeader>{editingProduct ? "Edit Product" : "Add Product"}</DialogHeader>
                <DialogBody>
                    <div className="space-y-8">
                        <Input label="Product Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        <Input label="Price" type="number" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
                        <Input label="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                        <Input label="Image URL" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} />
                        {formData.image && <img src={formData.image} alt="Preview" className="w-full h-40 object-contain mt-2" />}
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button variant="text" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button color="blue" onClick={handleSubmit}>{editingProduct ? "Update" : "Add"}</Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
};

export default ProductManagement;
