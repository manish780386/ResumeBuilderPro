import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { templates } from "../data/templatesData";

export default function Templates() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-6">

      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">
        Choose Your Resume Template
      </h1>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

        {templates.map((t) => (
          <motion.div
            key={t.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-xl rounded-2xl overflow-hidden"
          >
            <img
              src={t.image}
              alt={t.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-4 text-center">
              <h2 className="font-bold text-lg">{t.name}</h2>

              <Link
                to={`/builder/template/${t.id}`}
                className="mt-3 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg"
              >
                Use Template
              </Link>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}
