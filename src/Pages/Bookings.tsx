import { FaPlus } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { FaUserSecret } from 'react-icons/fa6';
import Table from '../components/Table';
import AddBooking from './AddBooking';
import { useState } from 'react';

const Users = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: 'أحمد محمد',
      time: '10:00 AM',
      type: 'مباشر',
      status: 'upcoming',
    },
    {
      id: 2,
      name: 'سارة خالد',
      time: '11:30 AM',
      type: 'مسبق',
      status: 'upcoming',
    },
    {
      id: 3,
      name: 'وليد أحمد',
      time: '09:30 AM',
      type: 'مباشر',
      status: 'waiting',
    },
    {
      id: 4,
      name: 'يوسف علي',
      time: '09:00 AM',
      type: 'مسبق',
      status: 'current',
    },
  ]);

  const handleAddBooking = (newPatient: any) => {
    const newBooking = {
      id: Date.now(),
      ...newPatient,
      status: 'upcoming', // تأكد من تعيين الحالة
    };
    setPatients((prevPatients) => [...prevPatients, newBooking]);
    setDialogOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="my-5 mx-10 flex sm:justify-between sm:flex-row flex-col">
        <div className="text-black font-bold text-xl gap-3 p-2 px-2">
          Bookings
        </div>
        <div className="flex justify-end flex-wrap gap-3 items-center py-2">
          <div className="flex items-center bg-blue-100 gap-3 border rounded p-1.5 px-1.5 cursor-pointer">
            <FaUserSecret />
            <h2>Comming</h2>
          </div>
          <div className="flex items-center bg-yellow-100 gap-3 border rounded p-1.5 px-1.5 cursor-pointer">
            <FaUserSecret />
            <h2>Waiting</h2>
          </div>
          <div className="flex items-center bg-green-100 gap-3 border rounded p-1.5 px-1.5 cursor-pointer">
            <FaUserSecret />
            <h2>Current</h2>
          </div>
        </div>
        <div
          className="flex items-center text-primary gap-3 border rounded p-1.5 px-1.5 cursor-pointer"
          onClick={() => setDialogOpen(true)}
        >
          <FaPlus />
          <h2>Add Booking</h2>
        </div>
      </div>

      {/* تمرير handleAddBooking */}
      <AddBooking
        isOpen={isDialogOpen}
        onClose={() => setDialogOpen(false)}
        addBooking={handleAddBooking}
      />

      {/* تمرير المرضى إلى الجدول */}
      <Table patients={patients} setPatients={setPatients} />
    </>
  );
};

export default Users;
