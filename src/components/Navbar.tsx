import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <h1 className="text-2xl font-bold tracking-wide hover:scale-105 transition">
          <a href="/" className="hover:text-yellow-300">ResumeBuilder Pro</a>
        </h1>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li className="hover:text-yellow-300 transition cursor-pointer">
            <a href="/templates" className="hover:text-yellow-300">
              Templates
            </a>
          </li>


          <li className="hover:text-yellow-300 transition cursor-pointer">
            <a href="/ats-checker" className="hover:text-yellow-300">
              ATS Checker
            </a>
          </li>

          <li>
            <a href="/pricing" className="hover:text-yellow-300">
              Pricing
            </a>
          </li>


          <li className="hover:text-yellow-300 transition cursor-pointer">
            <a href="/contact" className="hover:text-yellow-300">
              Contact
            </a>
          </li>

        </ul>

        <div className="flex gap-4">
          <a href="/login" className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold">
            Login
          </a>
          <a href="/register" className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold">
            Register
          </a>
        </div>


        {/* Mobile Icon */}
        <div className="md:hidden">
          {open ? (
            <X onClick={() => setOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu onClick={() => setOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-indigo-700 px-6 pb-4 space-y-3 animate-fade">
          <p className="hover:text-yellow-300 cursor-pointer">Templates</p>
          <p className="hover:text-yellow-300 cursor-pointer">ATS Checker</p>
          <p className="hover:text-yellow-300 cursor-pointer">Pricing</p>
          <p className="hover:text-yellow-300 cursor-pointer">Contact</p>
          <button className="block w-full mt-2 border rounded-lg py-2">
            Login
          </button>
          <button className="block w-full bg-yellow-400 text-black rounded-lg py-2 font-semibold">
            Register
          </button>
        </div>
      )}
    </nav>
  );
}
