import React, { useState } from "react";

const AddTransaction = ({ addTransaction }) => {
  const [type, setType] = useState("Pengeluaran");
  const [amount, setAmount] = useState("");
  const [wallet, setWallet] = useState("Kuliah");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount)) {
      alert("Masukkan nominal yang valid");
      return;
    }
    addTransaction({
      type,
      amount: parseInt(amount),
      wallet,
      note,
      date: new Date(),
    });
    alert("Transaksi berhasil ditambahkan!");
    setAmount("");
    setNote("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tambah Transaksi</h2>
      <label>
        Jenis:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Pengeluaran">Pengeluaran</option>
          <option value="Pemasukan">Pemasukan</option>
        </select>
      </label>
      <label>
        Nominal:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Masukkan nominal"
        />
      </label>
      <label>
        Kantong Wallet:
        <select value={wallet} onChange={(e) => setWallet(e.target.value)}>
          <option value="Kuliah">Kuliah</option>
          <option value="Bantu Keluarga">Bantu Keluarga</option>
          <option value="Hiburan">Hiburan</option>
        </select>
      </label>
      <label>
        Catatan (opsional):
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Contoh: Beli pulsa untuk orang tua"
        />
      </label>
      <button type="submit">Simpan Transaksi</button>
    </form>
  );
};

export default AddTransaction;
