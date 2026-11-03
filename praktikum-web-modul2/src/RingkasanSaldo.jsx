function RingkasanSaldo({ transaksi }) {
  const totalPemasukan = transaksi
    .filter((item) => item.jenis === "pemasukan")
    .reduce((total, item) => total + item.nominal, 0);

  const totalPengeluaran = transaksi
    .filter((item) => item.jenis === "pengeluaran")
    .reduce((total, item) => total + item.nominal, 0);

  const saldo = totalPemasukan - totalPengeluaran;

  const formatRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <div className="ringkasan-keuangan">
      <div className="saldo-card">
        <h3>Total Saldo</h3>
        <h2>{formatRupiah(saldo)}</h2>
      </div>

      <div className="saldo-detail">
        <div>
          <p>Total Pemasukan</p>
          <strong className="pemasukan">{formatRupiah(totalPemasukan)}</strong>
        </div>

        <div>
          <p>Total Pengeluaran</p>
          <strong className="pengeluaran">
            {formatRupiah(totalPengeluaran)}
          </strong>
        </div>
      </div>
    </div>
  );
}

export default RingkasanSaldo;
