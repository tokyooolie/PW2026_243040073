import { useState, useEffect } from "react";
import "./App.css";

import Kartu from "./Kartu";
import Penghitung from "./Penghitung";
import FormTugas from "./FormTugas";
import ItemTugas from "./ItemTugas";
import FormKeuangan from "./FormKeuangan";
import DaftarTransaksi from "./DaftarTransaksi";

function App() {
  // STATE DAFTAR TUGAS
  const [daftarTugas, setDaftarTugas] = useState([
    { id: 1, judul: "Install Node.js dan Vite", selesai: true },
    { id: 2, judul: "Pelajari useState", selesai: false },
  ]);

  // STATE FILTER
  const [filter, setFilter] = useState("semua");

  // MENAMBAHKAN TUGAS
  const tambahTugas = (judul) => {
    const tugasBaru = {
      id: Date.now(),
      judul,
      selesai: false,
    };

    setDaftarTugas([...daftarTugas, tugasBaru]);
  };

  // MENGUBAH STATUS TUGAS
  const ubahStatus = (id) => {
    setDaftarTugas(
      daftarTugas.map((tugas) =>
        tugas.id === id ? { ...tugas, selesai: !tugas.selesai } : tugas,
      ),
    );
  };

  // MENGHAPUS SATU TUGAS
  const hapusTugas = (id) => {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id));
  };

  // MENGHAPUS SEMUA TUGAS SELESAI
  const hapusSemuaSelesai = () => {
    setDaftarTugas(daftarTugas.filter((tugas) => !tugas.selesai));
  };

  // FILTER TUGAS
  const tugasTerfilter = daftarTugas.filter((tugas) => {
    if (filter === "belum") return !tugas.selesai;
    if (filter === "selesai") return tugas.selesai;
    return true;
  });

  const jumlahSelesai = daftarTugas.filter((tugas) => tugas.selesai).length;

  // STATE TRANSAKSI
  const [transaksi, setTransaksi] = useState(() => {
    try {
      const data = localStorage.getItem("transaksiKeuangan");
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  // MENYIMPAN DATA KE LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("transaksiKeuangan", JSON.stringify(transaksi));
  }, [transaksi]);

  // MENAMBAHKAN TRANSAKSI
  const tambahTransaksi = (dataBaru) => {
    setTransaksi([
      ...transaksi,
      {
        ...dataBaru,
        id: Date.now() + Math.random(),
      },
    ]);
  };

  // MENGHAPUS TRANSAKSI
  const hapusTransaksi = (id) => {
    setTransaksi(transaksi.filter((item) => item.id !== id));
  };

  // MENGHITUNG TOTAL PEMASUKAN
  const totalPemasukan = transaksi
    .filter((item) => item.jenis === "pemasukan")
    .reduce((total, item) => total + item.nominal, 0);

  // MENGHITUNG TOTAL PENGELUARAN
  const totalPengeluaran = transaksi
    .filter((item) => item.jenis === "pengeluaran")
    .reduce((total, item) => total + item.nominal, 0);

  // MENGHITUNG SALDO
  const saldo = totalPemasukan - totalPengeluaran;

  return (
    <div className="wadah">
      <h1 className="judul">Daftar Tugas Praktikum</h1>

      <p className="subjudul">
        Laboratorium Informatika - Modul 2: React Lanjutan
      </p>

      <Penghitung />

      {/* FORM TAMBAH TUGAS */}
      <Kartu judul="Tambah Tugas Baru">
        <FormTugas onTambah={tambahTugas} />
      </Kartu>

      {/* DAFTAR TUGAS */}
      <Kartu judul="Daftar Tugas">
        <p className="ringkasan">
          {jumlahSelesai} dari {daftarTugas.length} tugas selesai
        </p>

        {/* TOMBOL FILTER */}
        <div className="filter">
          <button
            className={filter === "semua" ? "filter-aktif" : ""}
            onClick={() => setFilter("semua")}
          >
            Semua
          </button>

          <button
            className={filter === "belum" ? "filter-aktif" : ""}
            onClick={() => setFilter("belum")}
          >
            Belum Selesai
          </button>

          <button
            className={filter === "selesai" ? "filter-aktif" : ""}
            onClick={() => setFilter("selesai")}
          >
            Selesai
          </button>
        </div>

        {/* HAPUS SEMUA TUGAS SELESAI */}
        {jumlahSelesai > 0 && (
          <button
            className="tombol tombol-merah hapus-semua"
            onClick={hapusSemuaSelesai}
          >
            Hapus Semua yang Selesai
          </button>
        )}

        {tugasTerfilter.length === 0 ? (
          <p className="kosong">Tidak ada tugas pada kategori ini.</p>
        ) : (
          <ul className="daftar">
            {tugasTerfilter.map((tugas) => (
              <ItemTugas
                key={tugas.id}
                tugas={tugas}
                onUbahStatus={ubahStatus}
                onHapus={hapusTugas}
              />
            ))}
          </ul>
        )}
      </Kartu>

      {/* CATATAN KEUANGAN MINI */}
      <div className="keuangan">
        <h1 className="judul">Catatan Keuangan Mini</h1>

        <p className="subjudul">
          Aplikasi Pencatatan Pemasukan dan Pengeluaran
        </p>

        {/* RINGKASAN KEUANGAN */}
        <div className="ringkasan-utama">
          <div className="saldo">
            <p>Total Saldo</p>
            <h2>Rp {saldo.toLocaleString("id-ID")}</h2>
          </div>

          <div className="ringkasan-dua">
            <div className="kotak-pemasukan">
              <p>Total Pemasukan</p>
              <h3>Rp {totalPemasukan.toLocaleString("id-ID")}</h3>
            </div>

            <div className="kotak-pengeluaran">
              <p>Total Pengeluaran</p>
              <h3>Rp {totalPengeluaran.toLocaleString("id-ID")}</h3>
            </div>
          </div>
        </div>

        {/* FORM TRANSAKSI */}
        <Kartu judul="Tambah Transaksi">
          <FormKeuangan onTambah={tambahTransaksi} />
        </Kartu>

        {/* DAFTAR TRANSAKSI */}
        <Kartu judul="Daftar Transaksi">
          <DaftarTransaksi transaksi={transaksi} onHapus={hapusTransaksi} />
        </Kartu>
      </div>
    </div>
  );
}

export default App;
