import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Template1ModernBlue() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const [photo, setPhoto] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  

  const [data, setData] = useState({
    name: "Manish Dange",
    role: "Frontend Developer",
    about:
      "Passionate React + TypeScript developer building modern web apps.",
    phone: "9999999999",
    email: "manish@email.com",
    city: "Indore, India",
    skills: "React, TypeScript, Tailwind, Django",
    education: "B.Tech Computer Science",
    experience: "2 Years Developer at ABC Company",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e: any) => {
    const file = e.target.files[0];
    if (file) setPhoto(URL.createObjectURL(file));
  };

  // ✅ FIXED PDF DOWNLOAD (NO OKLCH ERROR)
  const downloadPDF = async () => {
    if (!resumeRef.current) return;

  

    // clone element without Tailwind gradients
    const clone = resumeRef.current.cloneNode(true) as HTMLElement;
    clone.style.background = "#ffffff";
    clone.style.color = "#000000";
    document.body.appendChild(clone);

    const canvas = await html2canvas(clone, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
    });

    document.body.removeChild(clone);

    const img = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(img, "PNG", 0, 0, 210, 297);
    pdf.save(`${data.name}.pdf`);

    setHistory((prev) => [...prev, `${data.name}.pdf`]);
  };

  return (
    <div style={{ background: "#f3f4f6", minHeight: "100vh", padding: 20 }}>

      <h1 style={{
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        color: "#1e40af",
        marginBottom: 20
      }}>
        Resume Builder – Modern Blue
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
          <h2 style={{ color: "#1e40af", marginBottom: 10 }}>
            Edit Resume
          </h2>

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
              background: "#1e40af",
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

            {/* LEFT BLUE */}
            <div style={{
              width: "30%",
              background: "#1e40af",
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
              <h1 style={{ color: "#1e40af", fontSize: 28 }}>
                {data.name}
              </h1>
              <p>{data.role}</p>

              <h3 style={{ color: "#1e40af", marginTop: 20 }}>ABOUT</h3>
              <p>{data.about}</p>

              <h3 style={{ color: "#1e40af", marginTop: 20 }}>
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
          <h2 style={{ color: "#1e40af" }}>
            Download History
          </h2>
          {history.map((h, i) => (
            <p key={i}>📄 {h}</p>
          ))}
        </div>
      )}
    </div>
  );
}
