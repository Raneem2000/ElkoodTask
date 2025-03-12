import React, { useState } from "react";

const Table = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: "أحمد محمد", time: "10:00 AM", type: "مباشر", status: "upcoming" },
    { id: 2, name: "سارة خالد", time: "11:30 AM", type: "مسبق", status: "upcoming" },
    { id: 3, name: "وليد أحمد", time: "09:30 AM", type: "مباشر", status: "waiting" },
    { id: 4, name: "يوسف علي", time: "09:00 AM", type: "مسبق", status: "current" },
  ]);

  const moveToCurrent = (id) => {
    setPatients(patients.map(p => p.id === id ? { ...p, status: "current" } : p));
  };

  const cancelAppointment = (id) => {
    setPatients(patients.filter(p => p.id !== id));
  };

  return (
    <div className="container mx-auto p-6">

      {/* المرضى القادمون */}
      <div className="mb-6 bg-blue-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">📅 المرضى القادمون</h2>
        {patients.filter(p => p.status === "upcoming").map(p => (
          <div key={p.id} className="flex justify-between p-2 bg-white shadow rounded-lg my-2">
            <span>{p.name} - {p.time} ({p.type})</span>
            <button onClick={() => cancelAppointment(p.id)} className="bg-red-500 text-white px-3 py-1 rounded">
              إلغاء
            </button>
          </div>
        ))}
      </div>

      {/* المرضى في الانتظار */}
      <div className="mb-6 bg-yellow-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">⏳ المرضى في الانتظار</h2>
        {patients.filter(p => p.status === "waiting").map(p => (
          <div key={p.id} className="flex justify-between p-2 bg-white shadow rounded-lg my-2">
            <span>{p.name} - {p.time} ({p.type})</span>
            <button onClick={() => moveToCurrent(p.id)} className="bg-green-500 text-white px-3 py-1 rounded">
              ابدأ المعالجة
            </button>
          </div>
        ))}
      </div>

      {/* المريض الحالي */}
      <div className="bg-green-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">⚕️ المريض الحالي</h2>
        {patients.filter(p => p.status === "current").map(p => (
          <div key={p.id} className="p-2 bg-white shadow rounded-lg my-2">
            <span>{p.name} - {p.time} ({p.type})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
