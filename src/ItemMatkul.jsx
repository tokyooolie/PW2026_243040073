// src/ItemMatkul.jsx
import React from "react";

// Warna badge dinamis sesuai level (jumlah SKS)
function warnaBadge(sks) {
  if (sks >= 3) return { bg: "#D4EDDA", text: "#155724" }; // level tinggi
  if (sks === 2) return { bg: "#FFF3CD", text: "#856404" }; // level sedang
  return { bg: "#E1E4E8", text: "#444" }; // level rendah
}

function ItemMatkul({ kode, nama, sks, hari }) {
  const warna = warnaBadge(sks);

  return (
    <div
      style={{
        padding: "14px 18px",
        backgroundColor: "#F8F9FA",
        borderLeft: "5px solid #1B365D",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <span style={{ fontWeight: "bold", color: "#1B365D" }}>{kode}</span> -{" "}
        {nama}
        <div style={{ fontSize: "12px", color: "#777", marginTop: "4px" }}>
          Jadwal Sesi: {hari}
        </div>
      </div>
      <span
        style={{
          backgroundColor: warna.bg,
          color: warna.text,
          padding: "4px 10px",
          borderRadius: "12px",
          fontSize: "13px",
          fontWeight: "bold",
        }}
      >
        {sks} SKS
      </span>
    </div>
  );
}

export default ItemMatkul;