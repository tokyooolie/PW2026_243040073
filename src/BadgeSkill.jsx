// src/BadgeSkill.jsx
import React from "react";

// Warna badge dinamis sesuai level
const warnaLevel = {
  Pemula: { bg: "#D6E9FF", text: "#0B4F9C" },
  Menengah: { bg: "#FFF3CD", text: "#856404" },
  Mahir: { bg: "#D4EDDA", text: "#155724" },
};

function BadgeSkill({ namaSkill, level }) {
  const warna = warnaLevel[level] || { bg: "#E1E4E8", text: "#444" };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        backgroundColor: warna.bg,
        color: warna.text,
        padding: "6px 14px",
        borderRadius: "20px",
        fontSize: "13px",
        fontWeight: "bold",
      }}
    >
      {namaSkill}
      <span
        style={{
          fontSize: "11px",
          fontWeight: "normal",
          opacity: 0.85,
        }}
      >
        • {level}
      </span>
    </span>
  );
}

export default BadgeSkill;
