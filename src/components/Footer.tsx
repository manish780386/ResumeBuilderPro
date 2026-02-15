export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            ResumeBuilder Pro
          </h2>
          <p className="text-sm">
            Build professional resumes with 20+ templates, ATS checker,
            and smart resume tips.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
           <a href="/templates"><li className="hover:text-white cursor-pointer">Resume</li></a>
            <a href="/ats-checker"><li className="hover:text-white cursor-pointer">ATS Checker</li></a>
           
            <a href="/templates"><li className="hover:text-white cursor-pointer">20 Templates</li></a>
            <a href="/history"><li className="hover:text-white cursor-pointer">PDF Download</li></a>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact
          </h3>
          <p className="text-sm">Email: support@resumepro.com</p>
          <p className="text-sm">India 🇮🇳</p>
        </div>
      </div>

      <div className="text-center border-t border-gray-700 py-4 text-sm">
        © 2026 ResumeBuilder Pro. All rights reserved.
      </div>
    </footer>
  );
}
