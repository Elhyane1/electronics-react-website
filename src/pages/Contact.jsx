import { useState } from "react";
import axios from "axios"; // Import axios
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null); // Reset any previous errors

        const contactMessage = {
            name,
            email,
            message,
            timestamp: new Date().toISOString(),
        };

        try {
            // Send the POST request to the JSON Server
            await axios.post("https://mahogany-beryl-vole.glitch.me/api/messages", contactMessage);

            // Reset form fields after successful submission
            setName("");
            setEmail("");
            setMessage("");
            alert("Message sent successfully!");
        } catch (err) {
            setError("There was an error sending your message. Please try again later.");
            console.error("Error sending message:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section className="text-center py-12 bg-[#111518] text-white">
                <nav className="text-sm text-gray-400 uppercase tracking-wide">
                    <a href="#" className="hover:text-white">Home</a>
                    <span className="text-gray-500"> / </span>
                    <span className="text-white font-semibold">Contact</span>
                </nav>
                <h1 className="text-4xl font-bold mt-2">Contact</h1>
            </section>
            <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-16">
                {/* Title */}
                <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-6">Get in Touch</h2>
                <p className="text-gray-600 text-center max-w-2xl mb-10">
                    Have questions or need support? Fill out the form below or contact us through our social media.
                </p>

                <div className="flex flex-wrap w-full max-w-6xl gap-10 justify-center">
                    {/* Contact Form */}
                    <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="4"
                                className="p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            {error && <p className="text-red-600">{error}</p>} {/* Display error */}
                            <button
                                type="submit"
                                className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
                                disabled={loading} // Disable button while loading
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="w-full md:w-1/3 bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
                        <h3 className="text-2xl font-semibold">Contact Info</h3>
                        <div className="flex items-center gap-3 text-gray-700">
                            <FaPhone className="text-blue-600 text-xl" />
                            <span>+1 234 567 890</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                            <FaEnvelope className="text-blue-600 text-xl" />
                            <span>support@yourcompany.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                            <FaMapMarkerAlt className="text-blue-600 text-xl" />
                            <span>123 Main St, Your City, Country</span>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl"><FaFacebook /></a>
                            <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl"><FaTwitter /></a>
                            <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl"><FaInstagram /></a>
                        </div>
                    </div>
                </div>

                {/* Google Map Section (Optional) */}
                <div className="w-full max-w-6xl mt-12">
                    <iframe
                        title="Google Map"
                        className="w-full h-64 rounded-xl shadow-md"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.679626077323!2d-9.545196100000002!3d30.360053699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b80078f28753%3A0x25e156fa43a73a5f!2sISTA%20Inezgane!5e0!3m2!1sfr!2sma!4v1741137997393!5m2!1sfr!2sma"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </>
    );
}

export default Contact;
