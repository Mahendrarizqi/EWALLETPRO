import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import AddTransaction from "./components/AddTransaction";
import SplitBill from "./components/SplitBill";
import Reminder from "./components/Reminder";
import Profile from "./components/Profile";

function App() {
  const [page, setPage] = useState("dashboard");
  const [wallets, setWallets] = useState({
    Kuliah: 2000000,
    "Bantu Keluarga": 1500000,
    Hiburan: 500000,
  });
  const [transactions, setTransactions] = useState([]);
  const [reminders, setReminders] = useState([
    { id: 1, name: "UKT", amount: 1500000, dueDate: "2025-04-30", paid: false },
  ]);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
    setWallets((prev) => {
      const newWallets = { ...prev };
      if (transaction.type === "Pengeluaran") {
        newWallets[transaction.wallet] -= transaction.amount;
      } else {
        newWallets[transaction.wallet] += transaction.amount;
      }
      return newWallets;
    });
  };

  const markReminderPaid = (id) => {
    setReminders((prev) =>
      prev.map((r) => (r.id === id ? { ...r, paid: true } : r))
    );
  };

  return (
    <div className="app">
      <Navbar setPage={setPage} />
      <main>
        {page === "dashboard" && (
          <Dashboard wallets={wallets} transactions={transactions} />
        )}
        {page === "add" && <AddTransaction addTransaction={addTransaction} />}
        {page === "split" && <SplitBill />}
        {page === "reminder" && (
          <Reminder reminders={reminders} markReminderPaid={markReminderPaid} />
        )}
        {page === "profile" && <Profile />}
      </main>
    </div>
  );
}

export default App;
