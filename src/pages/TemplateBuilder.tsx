import { useParams } from "react-router-dom";

export default function TemplateBuilder() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-indigo-600 mb-6">
        Resume Builder - Template {id}
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {/* LEFT FORM */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Enter Details</h2>

          <input className="input mb-3" placeholder="Full Name" />
          <input className="input mb-3" placeholder="Email" />
          <input className="input mb-3" placeholder="Phone" />
          <textarea className="input mb-3" placeholder="Skills" />
        </div>

        {/* RIGHT PREVIEW */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Live Preview</h2>
          <p className="text-gray-500">
            Template {id} preview yaha dikhega
          </p>
        </div>

      </div>
    </div>
  );
}
