import React from "react";
import KartuProfil from "./KartuProfil";
import ItemMatkul from "./ItemMatkul";
import KartuProyek from "./KartuProyek";

function App() {
  // 1. Data daftar mata kuliah praktikum
  const daftarPraktikum = [
    {
      id: 101,
      kode: "IF211",
      nama: "Pemrograman Web (React & Laravel)",
      sks: 3,
      hari: "Senin",
    },
    {
      id: 102,
      kode: "IF212",
      nama: "Sistem Basis Data (PostgreSQL)",
      sks: 3,
      hari: "Rabu",
    },
    {
      id: 103,
      kode: "IF213",
      nama: "Rekayasa Perangkat Lunak Terapan",
      sks: 3,
      hari: "Kamis",
    },
    {
      id: 104,
      kode: "IF214",
      nama: "Arsitektur Sistem Terdistribusi",
      sks: 2,
      hari: "Jumat",
    },
  ];

  // 2. Data proyek portofolio
  const daftarProyek = [
    {
      id: 1,
      judul: "Aplikasi Manajemen Tugas",
      deskripsi:
        "Aplikasi to-do list dengan fitur tambah, hapus, dan penandaan tugas selesai.",
      teknologi: ["React", "Vite", "CSS"],
      repoUrl: "https://github.com/username/todo-app",
    },
    {
      id: 2,
      judul: "Sistem Informasi Perpustakaan",
      deskripsi:
        "Pengelolaan data buku dan peminjaman dengan autentikasi pengguna.",
      teknologi: ["Laravel", "PostgreSQL", "Blade"],
      repoUrl: "https://github.com/username/perpustakaan",
    },
    {
      id: 3,
      judul: "Website Profil Kampus",
      deskripsi:
        "Situs statis responsif yang menampilkan informasi program studi dan berita.",
      teknologi: ["HTML", "CSS", "JavaScript"],
      repoUrl: "https://github.com/username/profil-kampus",
    },
    {
      id: 4,
      judul: "Dashboard Cuaca",
      deskripsi:
        "Menampilkan prakiraan cuaca berdasarkan kota menggunakan API publik.",
      teknologi: ["React", "REST API", "Axios"],
      repoUrl: "https://github.com/username/dashboard-cuaca",
    },
  ];

  // 3. Fungsi interaksi tombol
  const notifikasiSapaan = () => {
    alert(
      "Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS."
    );
  };

  // 4. Style judul section
  const judulSeksi = {
    color: "#2C3E50",
    borderBottom: "2px solid #E1E4E8",
    paddingBottom: "8px",
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "0 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "32px" }}>
        <h1 style={{ color: "#1B365D", margin: "0 0 8px 0" }}>
          Praktikum Pemrograman Web
        </h1>
        <p style={{ color: "#666", fontSize: "15px" }}>
          Laboratorium Informatika - Modul 1: Pengenalan React JS & Vite
        </p>
      </header>

      {/* 5. Profil Mahasiswa */}
      <section style={{ marginBottom: "32px" }}>
        <h2 style={judulSeksi}>Profil Mahasiswa Praktikan</h2>

        <KartuProfil
          nama="Try Noer Arreva"
          npm="243040073"
          kelas="IF - Praktikum"
          status="Aktif"
          fotoUrl="https://via.placeholder.com/80"
        />
      </section>

      {/* 6. Daftar Mata Kuliah */}
      <section style={{ marginBottom: "32px" }}>
        <h2 style={judulSeksi}>
          Daftar Rencana Praktikum Semester (List Rendering)
        </h2>

        <div style={{ display: "grid", gap: "12px" }}>
          {daftarPraktikum.map((matkul) => (
            <ItemMatkul key={matkul.id} {...matkul} />
          ))}
        </div>
      </section>

      {/* 7. Showcase Portofolio Mini */}
      <section style={{ marginBottom: "32px" }}>
        <h2 style={judulSeksi}>Showcase Portofolio Mini</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "16px",
          }}
        >
          {daftarProyek.map((proyek) => (
            <KartuProyek
              key={proyek.id}
              judul={proyek.judul}
              deskripsi={proyek.deskripsi}
              teknologi={proyek.teknologi}
              repoUrl={proyek.repoUrl}
            />
          ))}
        </div>
      </section>

      {/* 8. Tombol Interaktivitas */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          onClick={notifikasiSapaan}
          style={{
            backgroundColor: "#1B365D",
            color: "#FFFFFF",
            padding: "12px 24px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Uji Interaktivitas Event (Klik Disini)
        </button>
      </div>
    </div>
  );
}

export default App;