import { useEffect, useState } from "react";

interface Item {
  name: string;
  file: string;
  date: string;
}

export default function History() {
  const [history, setHistory] = useState<Item[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("resumeHistory") || "[]");
    setHistory(data);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("resumeHistory");
    setHistory([]);
  };

  return (
    <div style={{ padding: 30 }}>
      <h1 style={{ fontSize: 28, marginBottom: 20 }}>
        📄 Resume Download History
      </h1>

      {history.length === 0 && <p>No resume downloaded yet.</p>}

      {history.map((h, i) => (
        <div key={i}
          style={{
            padding: 15,
            marginBottom: 10,
            border: "1px solid #ddd",
            borderRadius: 8
          }}
        >
          <b>{h.name}</b>
          <p>{h.file}</p>
          <small>{h.date}</small>
        </div>
      ))}

      {history.length > 0 && (
        <button
          onClick={clearHistory}
          style={{
            marginTop: 20,
            padding: 10,
            background: "red",
            color: "white",
            borderRadius: 6
          }}
        >
          Clear History
        </button>
      )}
    </div>
  );
}
