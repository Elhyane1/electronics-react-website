import { useState, useEffect } from "react";
import axios from "axios";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button, Input } from "@material-tailwind/react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [formData, setFormData] = useState({ username: "", email: "", password:"",  role: "client" });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get("http://localhost:5000/users")
            .then(response => setUsers(response.data))
            .catch(error => console.log(error));
    };

    const handleOpen = (user = null) => {
        setEditingUser(user);
        setFormData(user ? { ...user } : { username: "", email: "", password:"",  role: "client" });
        setOpen(true);
    };

    const handleSubmit = () => {
        if (editingUser) {
            axios.put(`http://localhost:5000/users/${editingUser.id}`, formData).then(() => fetchUsers());
        } else {
            axios.post("http://localhost:5000/users", formData).then(() => fetchUsers());
        }
        setOpen(false);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/users/${id}`).then(() => fetchUsers());
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">User Management</h2>
                <Button color="blue" onClick={() => handleOpen()}><FaPlus className="mr-2" /> Add User</Button>
            </div>

            <table className="w-full border-collapse border border-gray-300 mt-6">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Role</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id} className="text-center">
                            <td className="border p-2">{user.username}</td>
                            <td className="border p-2">{user.email}</td>
                            <td className="border p-2">{user.role}</td>
                            <td className="border p-2">
                                <Button color="green" onClick={() => handleOpen(user)}><FaEdit className="mr-2" /> Edit</Button>
                                <Button color="red" onClick={() => handleDelete(user.id)} className="ml-2"><FaTrash className="mr-2" /> Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Add/Edit User Modal */}
            <Dialog open={open} handler={() => setOpen(false)} size="sm" className="p-4">
                <DialogHeader>{editingUser ? "Edit User" : "Add User"}</DialogHeader>
                <DialogBody>
                    <div className="space-y-8">
                        <Input label="Name" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                        <Input label="Email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        <Input label="Password" type="text" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                        <select className="border p-2 rounded w-full" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
                            <option value="client">Client</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button variant="text" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button color="blue" onClick={handleSubmit}>{editingUser ? "Update" : "Add"}</Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
};

export default UserManagement;
