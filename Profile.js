import React from "react";

const Profile = () => {
  const nomorSupport = "6285714070369";
  const handleContactSupport = () => {
    const text = "Halo, saya butuh bantuan terkait aplikasi keuangan sandwich generation.";
    const url = `https://wa.me/${nomorSupport}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="profile">
      <h2>Profil Pengguna</h2>
      <p>Nama: Blay</p>
      <p>Email: blay@example.com</p>
      <button onClick={handleContactSupport}>Hubungi Support via WhatsApp</button>
    </div>
  );
};

export default Profile;
