import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Build Professional Resume in Minutes 🚀
            </h1>
            <p className="text-lg mb-8">
              20+ Premium Templates • ATS Checker • Instant PDF Download
            </p>

            <div className="flex gap-4">
              <a href="/templates"><button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                Create Resume
              </button></a>
              <a href="/ats-checker"><button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition">
                Check ATS Score
              </button></a>
            </div>
          </motion.div>

          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="resume"
            className="w-80 mx-auto drop-shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-gray-100 px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          Why Choose ResumeBuilder Pro ?
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            "20 Professional Templates",
            "Real ATS Resume Checker",
            "Download Resume PDF",
            "Easy Resume Form",
            "Save Resume Online",
            "Modern Design + Animation"
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold mb-3">{item}</h3>
              <p className="text-gray-500 text-sm">
                Build job-ready resume with smart suggestions and ATS score.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEMPLATES PREVIEW */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          20+ Premium Resume Templates
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((t) => (
            <div
              key={t}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Template {t}</h3>
                <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg">
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Get Your Dream Job?
        </h2>
        <button className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Start Building Resume Now
        </button>
      </section>

    </div>
  );
}
