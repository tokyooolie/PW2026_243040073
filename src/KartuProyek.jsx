// src/KartuProyek.jsx
import React from "react";

function KartuProyek({ judul, deskripsi, teknologi, repoUrl }) {
  return (
    <div
      style={{
        border: "1px solid #D0D7DE",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        {/* Judul Proyek */}
        <h3 style={{ margin: "0 0 8px 0", color: "#1B365D" }}>{judul}</h3>

        {/* Ringkasan Deskripsi */}
        <p style={{ margin: "0 0 14px 0", fontSize: "14px", color: "#555" }}>
          {deskripsi}
        </p>

        {/* Tagar Teknologi */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "16px",
          }}
        >
          {teknologi.map((tech) => (
            <span
              key={tech}
              style={{
                backgroundColor: "#E8EEF7",
                color: "#1B365D",
                padding: "3px 10px",
                borderRadius: "12px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              #{tech}
            </span>
          ))}
        </div>
      </div>

      {/* Tombol Tautan Repositori GitHub */}
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          textAlign: "center",
          backgroundColor: "#1B365D",
          color: "#FFFFFF",
          padding: "10px 16px",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        Lihat di GitHub
      </a>
    </div>
  );
}

export default KartuProyek;