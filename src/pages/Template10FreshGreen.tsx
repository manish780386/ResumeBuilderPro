import { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function TemplateFreshGreen() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const [photo, setPhoto] = useState<string | null>(null);
  const [history, setHistory] = useState<any[]>([]);

  const [data, setData] = useState({
    name: "Manish Dange",
    role: "Frontend Developer | React & Django",
    about:
      "Creative developer passionate about building modern UI with React, Tailwind, Django APIs and beautiful user experience.",
    phone: "9999999999",
    email: "manish@email.com",
    city: "Indore, India",
    skills:
      "React, TypeScript, Tailwind, Django, SQL, REST API, UI Design",
    education: "B.Tech Computer Science – SVVV Indore",
    experience:
      "2 Years experience building Resume Builder, KisanMitra, Spotify Clone & Ticketing Chatbot.",
    projects:
      "Resume Builder, Notes Website, Spotify Clone, Person Management System",
    certificates:
      "React Certification, Django Course, AWS Basics"
  });

  useEffect(() => {
    const old = JSON.parse(localStorage.getItem("resumeHistory") || "[]");
    setHistory(old);
  }, []);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e: any) => {
    const file = e.target.files[0];
    if (file) setPhoto(URL.createObjectURL(file));
  };

  // ✅ PDF + HISTORY
  const downloadPDF = async () => {
    if (!resumeRef.current) return;

    const canvas = await html2canvas(resumeRef.current, {
      scale: 2,
      backgroundColor: "#ffffff",
    });

    const img = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const fileName = `${data.name}_FreshGreen_${Date.now()}.pdf`;

    pdf.addImage(img, "PNG", 0, 0, 210, 297);
    pdf.save(fileName);

    const old = JSON.parse(localStorage.getItem("resumeHistory") || "[]");

    const newHistory = [
      { name: data.name, file: fileName, date: new Date().toLocaleString() },
      ...old,
    ];

    localStorage.setItem("resumeHistory", JSON.stringify(newHistory));
    setHistory(newHistory);
  };

  return (
    <div style={{ background: "#ecfdf5", minHeight: "100vh", padding: 20 }}>

      <h1 style={{
        textAlign: "center",
        color: "#065f46",
        marginBottom: 20,
        fontSize: 28,
        fontWeight: "bold"
      }}>
        Resume Builder – Fresh Green
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

        {/* ========= FORM ========= */}
        <div style={{
          background: "white",
          padding: 20,
          borderRadius: 12,
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
        }}>
          <h2>Edit Resume</h2>

          <input type="file" onChange={handlePhoto} />

          {Object.keys(data).map((k) => (
            <input
              key={k}
              name={k}
              value={(data as any)[k]}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: 8,
                marginTop: 8,
                borderRadius: 6,
                border: "1px solid #ccc"
              }}
            />
          ))}

          <button
            onClick={downloadPDF}
            style={{
              marginTop: 15,
              background: "linear-gradient(90deg,#10b981,#22c55e)",
              color: "white",
              padding: 10,
              width: "100%",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Download PDF
          </button>
        </div>

        {/* ========= RESUME ========= */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            ref={resumeRef}
            style={{
              width: "210mm",
              height: "297mm",
              background: "white",
              display: "flex",
              fontFamily: "Poppins"
            }}
          >

            {/* LEFT GREEN */}
            <div style={{
              width: "32%",
              background: "linear-gradient(180deg,#10b981,#22c55e)",
              color: "white",
              padding: 25
            }}>
              {photo && (
                <img
                  src={photo}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    border: "3px solid white",
                    marginBottom: 20
                  }}
                />
              )}

              <h3>CONTACT</h3>
              <p>{data.phone}</p>
              <p>{data.email}</p>
              <p>{data.city}</p>

              <h3 style={{ marginTop: 20 }}>SKILLS</h3>
              <p>{data.skills}</p>

              <h3 style={{ marginTop: 20 }}>CERTIFICATES</h3>
              <p>{data.certificates}</p>
            </div>

            {/* RIGHT */}
            <div style={{ flex: 1, padding: 35 }}>
              <h1 style={{ fontSize: 32, color: "#065f46" }}>
                {data.name}
              </h1>
              <p style={{ fontWeight: "bold", marginBottom: 15 }}>
                {data.role}
              </p>

              <h3 style={{ color: "#065f46" }}>ABOUT</h3>
              <p>{data.about}</p>

              <h3 style={{ marginTop: 20, color: "#065f46" }}>EXPERIENCE</h3>
              <p>{data.experience}</p>

              <h3 style={{ marginTop: 20, color: "#065f46" }}>PROJECTS</h3>
              <p>{data.projects}</p>

              <h3 style={{ marginTop: 20, color: "#065f46" }}>EDUCATION</h3>
              <p>{data.education}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========= HISTORY ========= */}
      {history.length > 0 && (
        <div style={{
          background: "white",
          padding: 20,
          marginTop: 20,
          borderRadius: 10
        }}>
          <h2>Download History</h2>
          {history.map((h, i) => (
            <p key={i}>📄 {h.file} — {h.date}</p>
          ))}
        </div>
      )}
    </div>
  );
}
