import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <nav className="navbar">
      <button onClick={() => setPage("dashboard")}>Dashboard</button>
      <button onClick={() => setPage("add")}>Tambah Transaksi</button>
      <button onClick={() => setPage("split")}>Split Bill</button>
      <button onClick={() => setPage("reminder")}>Reminder</button>
      <button onClick={() => setPage("profile")}>Profil</button>
    </nav>
  );
};

export default Navbar;
