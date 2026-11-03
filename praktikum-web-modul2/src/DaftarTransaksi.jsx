function DaftarTransaksi({ transaksi, onHapus }) {
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(angka);
  };

  if (transaksi.length === 0) {
    return (
      <p className="kosong">
        Belum ada transaksi. Silakan tambahkan transaksi!
      </p>
    );
  }

  return (
    <ul className="daftar">
      {transaksi.map((item) => (
        <li className="item transaksi" key={item.id}>
          <div>
            <strong>{item.keterangan}</strong>
            <p
              className={
                item.jenis === "pemasukan" ? "pemasukan" : "pengeluaran"
              }
            >
              {item.jenis === "pemasukan" ? "Pemasukan" : "Pengeluaran"}:{" "}
              {formatRupiah(item.nominal)}
            </p>
          </div>

          <button
            className="tombol tombol-merah tombol-kecil"
            onClick={() => onHapus(item.id)}
          >
            Hapus
          </button>
        </li>
      ))}
    </ul>
  );
}

export default DaftarTransaksi;
