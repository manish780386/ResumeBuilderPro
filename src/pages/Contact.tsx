import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Message Sent Successfully ✅");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center p-6">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl"
      >

        <h1 className="text-3xl font-bold text-indigo-600 mb-4 text-center">
          Contact ResumeBuilder Pro
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Have questions about templates, ATS checker, or resume help?
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            required
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            required
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            required
            placeholder="Your Message"
            rows={5}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-indigo-400"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Send Message 🚀
          </button>

        </form>

        {/* Extra Info */}
        <div className="mt-8 text-center text-gray-600">
          <p>Email: support@resumebuilderpro.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

      </motion.div>
    </div>
  );
}