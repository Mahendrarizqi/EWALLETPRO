import React from "react";

const Dashboard = ({ wallets, transactions }) => {
  const totalBalance = Object.values(wallets).reduce((a, b) => a + b, 0);

  return (
    <div className="dashboard">
      <h2>Halo, Blay! Ini kondisi keuanganmu hari ini</h2>
      <h3>Total Saldo: Rp {totalBalance.toLocaleString()}</h3>
      <div className="wallets">
        {Object.entries(wallets).map(([name, amount]) => (
          <div key={name} className="wallet-card">
            <h4>{name}</h4>
            <p>Rp {amount.toLocaleString()}</p>
          </div>
        ))}
      </div>
      <h3>Transaksi Terakhir</h3>
      <ul className="transaction-list">
        {transactions.slice(-5).reverse().map((t, i) => (
          <li key={i}>
            [{t.type}] {t.wallet}: Rp {t.amount.toLocaleString()} - {t.note}
          </li>
        ))}
        {transactions.length === 0 && <p>Belum ada transaksi.</p>}
      </ul>
    </div>
  );
};

export default Dashboard;
