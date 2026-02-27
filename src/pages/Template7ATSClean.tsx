import { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function TemplateATSClean() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const [photo, setPhoto] = useState<string | null>(null);
  const [history, setHistory] = useState<any[]>([]);

  const [data, setData] = useState({
    name: "Manish Dange",
    role: "Full Stack Developer",
    phone: "9999999999",
    email: "manish@email.com",
    city: "Indore, India",
    linkedin: "linkedin.com/in/manish",
    github: "github.com/manish",
    summary:
      "React + Django developer with experience building scalable web apps and REST APIs.",
    skills:
      "React, TypeScript, JavaScript, Django, SQL, REST API, Git, Tailwind",
    experience:
      "Frontend Developer – 2 Years experience working on Resume Builder, KisanMitra and Ticketing Chatbot projects.",
    education:
      "B.Tech Computer Science – SVVV Indore",
    projects:
      "Resume Builder, Spotify Clone, Notes Website, Person Management System",
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

  const downloadPDF = async () => {
    if (!resumeRef.current) return;

    const canvas = await html2canvas(resumeRef.current, {
      scale: 2,
      backgroundColor: "#ffffff",
    });

    const img = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const fileName = `${data.name}_ATSClean_${Date.now()}.pdf`;

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
    <div style={{ background: "#f3f4f6", minHeight: "100vh", padding: 20 }}>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        Resume Builder – ATS Clean
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* ========= FORM ========= */}
        <div style={{ background: "white", padding: 20, borderRadius: 10 }}>
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
                borderRadius: 5,
                border: "1px solid #ccc",
              }}
            />
          ))}

          <button
            onClick={downloadPDF}
            style={{
              marginTop: 15,
              background: "#000",
              color: "white",
              padding: 10,
              width: "100%",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
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
              padding: 40,
              fontFamily: "Arial",
            }}
          >
            {/* ✅ PHOTO USED (Error Fix) */}
            {photo && (
              <img
                src={photo}
                alt="Profile"
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  marginBottom: 15,
                }}
              />
            )}

            <h1 style={{ fontSize: 28 }}>{data.name}</h1>
            <p>{data.role}</p>
            <p>
              {data.phone} | {data.email} | {data.city}
            </p>
            <p>
              {data.linkedin} | {data.github}
            </p>

            <hr style={{ margin: "15px 0" }} />

            <h3>SUMMARY</h3>
            <p>{data.summary}</p>

            <h3 style={{ marginTop: 15 }}>SKILLS</h3>
            <p>{data.skills}</p>

            <h3 style={{ marginTop: 15 }}>EXPERIENCE</h3>
            <p>{data.experience}</p>

            <h3 style={{ marginTop: 15 }}>PROJECTS</h3>
            <p>{data.projects}</p>

            <h3 style={{ marginTop: 15 }}>EDUCATION</h3>
            <p>{data.education}</p>

            <h3 style={{ marginTop: 15 }}>CERTIFICATES</h3>
            <p>{data.certificates}</p>
          </div>
        </div>
      </div>

      {/* ========= HISTORY ========= */}
      {history.length > 0 && (
        <div
          style={{
            background: "white",
            padding: 20,
            marginTop: 20,
            borderRadius: 10,
          }}
        >
          <h2>Download History</h2>
          {history.map((h, i) => (
            <p key={i}>
              📄 {h.file} — {h.date}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}