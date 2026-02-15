import { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function TemplateProfessionalGray() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const [photo, setPhoto] = useState<string | null>(null);
  const [history, setHistory] = useState<any[]>([]);

  const [data, setData] = useState({
    name: "Manish Dange",
    role: "Frontend Developer",
    about: "React + Django developer building modern apps.",
    phone: "9999999999",
    email: "manish@email.com",
    city: "Indore, India",
    skills: "React, TypeScript, Django, SQL",
    education: "B.Tech Computer Science",
    experience: "2 Years Developer",
  });

  // Load history from localStorage
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

  // ✅ PDF + HISTORY SAVE
  const downloadPDF = async () => {
    if (!resumeRef.current) return;

    const canvas = await html2canvas(resumeRef.current, {
      scale: 2,
      backgroundColor: "#ffffff",
    });

    const img = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const fileName = `${data.name}_Gray_${Date.now()}.pdf`;

    pdf.addImage(img, "PNG", 0, 0, 210, 297);
    pdf.save(fileName);

    // SAVE HISTORY
    const old = JSON.parse(localStorage.getItem("resumeHistory") || "[]");

    const newHistory = [
      {
        name: data.name,
        file: fileName,
        date: new Date().toLocaleString(),
      },
      ...old,
    ];

    localStorage.setItem("resumeHistory", JSON.stringify(newHistory));
    setHistory(newHistory);
  };

  return (
    <div style={{ background: "#e5e7eb", minHeight: "100vh", padding: 20 }}>
      <h1 style={{
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        color: "#374151",
        marginBottom: 20
      }}>
        Resume Builder – Professional Gray
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20
      }}>

        {/* ========= FORM ========= */}
        <div style={{
          background: "white",
          padding: 20,
          borderRadius: 10,
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
        }}>
          <h2 style={{ color: "#374151" }}>Edit Resume</h2>

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
                border: "1px solid #ccc"
              }}
            />
          ))}

          <button
            onClick={downloadPDF}
            style={{
              marginTop: 15,
              background: "#374151",
              color: "white",
              padding: 10,
              width: "100%",
              borderRadius: 6,
              border: "none",
              cursor: "pointer"
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
              boxShadow: "0 5px 20px rgba(0,0,0,0.2)"
            }}
          >

            {/* LEFT GRAY */}
            <div style={{
              width: "30%",
              background: "#374151",
              color: "white",
              padding: 20
            }}>
              {photo && (
                <img
                  src={photo}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    border: "4px solid white",
                    display: "block",
                    margin: "0 auto 20px"
                  }}
                />
              )}

              <h3>CONTACT</h3>
              <p>{data.phone}</p>
              <p>{data.email}</p>
              <p>{data.city}</p>

              <h3 style={{ marginTop: 20 }}>SKILLS</h3>
              <p>{data.skills}</p>

              <h3 style={{ marginTop: 20 }}>EDUCATION</h3>
              <p>{data.education}</p>
            </div>

            {/* RIGHT */}
            <div style={{ flex: 1, padding: 30 }}>
              <h1 style={{ color: "#374151", fontSize: 28 }}>
                {data.name}
              </h1>
              <p>{data.role}</p>

              <h3 style={{ color: "#374151", marginTop: 20 }}>ABOUT</h3>
              <p>{data.about}</p>

              <h3 style={{ color: "#374151", marginTop: 20 }}>
                EXPERIENCE
              </h3>
              <p>{data.experience}</p>
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
          <h2 style={{ color: "#374151" }}>
            Download History
          </h2>
          {history.map((h, i) => (
            <p key={i}>📄 {h.file} — {h.date}</p>
          ))}
        </div>
      )}
    </div>
  );
}
