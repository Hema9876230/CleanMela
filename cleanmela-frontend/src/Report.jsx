import React, { useState } from "react";

export default function Report() {
  const [type, setType] = useState("Toilet");
  const [desc, setDesc] = useState("");
  const [sent, setSent] = useState(false);
  const [reports, setReports] = useState([]);

  const submit = () => {
    if (!desc.trim()) return; // prevent empty report

    const newReport = {
      id: reports.length + 1,
      type,
      location: "User Report",
      description: desc,
      time: new Date().toLocaleString(),
    };

    setReports([newReport, ...reports]);
    setDesc("");
    setSent(true);

    setTimeout(() => setSent(false), 2000);
  };

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {/* Left Section: Report Form */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          borderRadius: "12px",
          background: "#f9f9f9",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>📸 Report Issue</h2>
        <div style={{ display: "grid", gap: "12px" }}>
          <label>
            Category
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              style={{
                marginLeft: 8,
                padding: 8,
                borderRadius: 8,
                border: "1px solid #ccc",
              }}
            >
              <option>Toilet</option>
              <option>Dustbin</option>
              <option>Water Leak</option>
              <option>Other</option>
            </select>
          </label>

          <label>
            Description
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={4}
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 10,
                border: "1px solid #ccc",
              }}
            />
          </label>

          <button
            onClick={submit}
            style={{
              padding: "10px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Submit Report
          </button>

          {sent && (
            <div
              style={{
                background: "#4caf50",
                color: "white",
                padding: "6px 12px",
                borderRadius: "20px",
                width: "fit-content",
                fontSize: "14px",
              }}
            >
              ✅ Submitted
            </div>
          )}
        </div>
      </div>

      {/* Right Section: Reports Table */}
      <div
        style={{
          flex: 2,
          padding: "20px",
          borderRadius: "12px",
          background: "#f9f9f9",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>📋 Submitted Reports</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
          }}
        >
          <thead>
            <tr style={{ background: "#e5e7eb" }}>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Type</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Location
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Description
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Time</th>
            </tr>
          </thead>
          <tbody>
            {reports.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  style={{ padding: "12px", textAlign: "center", color: "#666" }}
                >
                  No reports submitted yet.
                </td>
              </tr>
            ) : (
              reports.map((r) => (
                <tr key={r.id}>
                  <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                    {r.id}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                    {r.type}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                    {r.location}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                    {r.description}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                    {r.time}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
