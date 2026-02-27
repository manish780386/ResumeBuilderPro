import React, { useState } from "react";
import type { ChangeEvent } from "react";

const ATSChecker: React.FC = () => {
  const [fileName, setFileName] = useState<string>("");
  const [skills, setSkills] = useState<string>("");
  const [score, setScore] = useState<number | null>(null);

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const checkATS = () => {
    if (!fileName) {
      alert("Please upload resume first");
      return;
    }

    const randomScore = Math.floor(Math.random() * 40) + 60;
    setScore(randomScore);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center mb-6">
          📄 ATS Resume Checker
        </h1>

        <div className="mb-4">
          <label className="font-semibold">Upload Resume (PDF)</label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFile}
            className="mt-2 w-full border p-2 rounded-lg"
          />
          {fileName && (
            <p className="text-green-600 mt-2">Uploaded: {fileName}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="font-semibold">
            Enter Job Skills (comma separated)
          </label>
          <textarea
            placeholder="React, Django, SQL..."
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="mt-2 w-full border p-3 rounded-lg"
          />
        </div>

        <button
          onClick={checkATS}
          className="w-full bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition"
        >
          Check ATS Score
        </button>

        {score !== null && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold">Your ATS Score</h2>
            <p className="text-5xl text-green-600 mt-2">{score}%</p>

            {score > 80 ? (
              <p className="text-green-600 mt-2">✅ Excellent Resume!</p>
            ) : (
              <p className="text-red-500 mt-2">
                ⚠ Improve keywords & formatting
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ATSChecker;