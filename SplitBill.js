import React, { useState } from "react";

const SplitBill = () => {
  const [totalAmount, setTotalAmount] = useState("");
  const [participants, setParticipants] = useState(2);
  const [message, setMessage] = useState("");

  const nomorSupport = "6285714070369"; // Nomor WhatsApp support (Blay)

  const handleSendWhatsApp = () => {
    if (!totalAmount || isNaN(totalAmount) || participants < 2) {
      alert("Masukkan data yang valid");
      return;
    }
    const perPerson = Math.ceil(totalAmount / participants);
    const text = `Halo, ini rincian pembagian biaya: Total Rp${parseInt(
      totalAmount
    ).toLocaleString()}, untuk ${participants} orang, masing-masing bayar Rp${perPerson.toLocaleString()}. Tolong transfer ya!`;
    const url = `https://wa.me/${nomorSupport}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="split-bill">
      <h2>Split Bill</h2>
      <label>
        Total Jumlah (Rp):
        <input
          type="number"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
          placeholder="Masukkan total biaya"
        />
      </label>
      <label>
        Jumlah Orang:
        <input
          type="number"
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
          min="2"
        />
      </label>
      <button onClick={handleSendWhatsApp}>Kirim via WhatsApp</button>
    </div>
  );
};

export default SplitBill;
