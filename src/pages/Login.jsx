import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:5000/users?username=${username}&password=${password}`);
            if (response.data.length > 0) {
                const user = response.data[0];
                localStorage.setItem("user", JSON.stringify(user));
                if (user.role === "admin") {
                    navigate("/admin");
                } else {
                    navigate("/");
                }
            } else {
                setError("Invalid username or password");
            }
        } catch (err) {
            setError("Something went wrong. Try again!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                <form onSubmit={handleLogin} className="flex flex-col gap-3">
                    <input 
                        type="text" 
                        placeholder="Username" 
                        className="p-2 border rounded" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="p-2 border rounded" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
