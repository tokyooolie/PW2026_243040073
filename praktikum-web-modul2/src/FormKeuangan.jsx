import { useState } from "react";

function FormKeuangan({ onTambah }) {
  const [keterangan, setKeterangan] = useState("");
  const [nominal, setNominal] = useState("");
  const [jenis, setJenis] = useState("pemasukan");

  const tanganiKirim = (event) => {
    event.preventDefault();

    if (!keterangan.trim() || Number(nominal) <= 0) {
      return;
    }

    onTambah({
      keterangan: keterangan.trim(),
      nominal: Number(nominal),
      jenis,
    });

    setKeterangan("");
    setNominal("");
    setJenis("pemasukan");
  };

  return (
    <form onSubmit={tanganiKirim}>
      <div className="form-keuangan">
        <label>Keterangan</label>
        <input
          className="input"
          type="text"
          placeholder="Contoh: Uang makan"
          value={keterangan}
          onChange={(e) => setKeterangan(e.target.value)}
        />

        <label>Nominal (Rp)</label>
        <input
          className="input"
          type="number"
          placeholder="Masukkan nominal"
          min="1"
          value={nominal}
          onChange={(e) => setNominal(e.target.value)}
        />

        <label>Jenis Transaksi</label>
        <select
          className="input"
          value={jenis}
          onChange={(e) => setJenis(e.target.value)}
        >
          <option value="pemasukan">Pemasukan</option>
          <option value="pengeluaran">Pengeluaran</option>
        </select>

        <button className="tombol" type="submit">
          Tambah Transaksi
        </button>
      </div>
    </form>
  );
}

export default FormKeuangan;
