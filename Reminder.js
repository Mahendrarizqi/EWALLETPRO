import React from "react";

const Reminder = ({ reminders, markReminderPaid }) => {
  const nomorSupport = "6285714070369";

  const handleSendReminder = (reminder) => {
    const text = `Hai, jangan lupa bayar ${reminder.name} bulan ini sebesar Rp${reminder.amount.toLocaleString()}. Batas waktu sampai tanggal ${reminder.dueDate}.`;
    const url = `https://wa.me/${nomorSupport}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="reminder">
      <h2>Reminder Tagihan</h2>
      <ul>
        {reminders.map((r) => (
          <li key={r.id} className={r.paid ? "paid" : "unpaid"}>
            <strong>{r.name}</strong> - Rp {r.amount.toLocaleString()} - Jatuh tempo:{" "}
            {r.dueDate} - Status: {r.paid ? "Sudah dibayar" : "Belum dibayar"}
            {!r.paid && (
              <>
                <button onClick={() => handleSendReminder(r)}>Ingatkan via WhatsApp</button>
                <button onClick={() => markReminderPaid(r.id)}>Tandai Sudah Bayar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reminder;
