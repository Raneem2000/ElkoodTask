import { FaPlus } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { FaUserSecret } from 'react-icons/fa6';
import Table from '../components/Table';
import AddBooking from './AddBooking';
import { useState } from 'react';
const Users = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className="my-5 mx-10 flex sm:justify-between sm:flex-row flex-col">
        <div className=" text-black font-bold text-xl gap-3   p-2 px-2  ">
          Bookings
        </div>
        <div className="flex justify-end flex-wrap gap-3 items-center py-2">
          <div
            // onClick={() => handleRefetch('scheduled')}
            className="flex items-center bg-blue-100 gap-3 border rounded p-1.5 px-1.5 border-stroke dark:border-form-strokedark cursor-pointer"
          >
            <FaUserSecret />
            <h2>Comming</h2>
          </div>
          <div
            // onClick={() => handleRefetch('scheduled')}
            className="flex items-center bg-yellow-100 gap-3 border rounded p-1.5 px-1.5 border-stroke dark:border-form-strokedark cursor-pointer"
          >
            <FaUserSecret />
            <h2>Waiting</h2>
          </div>
          <div
            // onClick={() => handleRefetch('scheduled')}
            className="flex items-center bg-green-100 gap-3 border rounded p-1.5 px-1.5 border-stroke dark:border-form-strokedark cursor-pointer"
          >
            <FaUserSecret />
            <h2>Current</h2>
          </div>
        </div>
        <div
          className="flex items-center text-primary gap-3 border rounded p-1.5 px-1.5 border-stroke dark:border-form-strokedark cursor-pointer"
          onClick={() => setDialogOpen(true)}
        >
          <FaPlus />
          <h2>Add Booking</h2>
        </div>
      </div>
      <AddBooking isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} />

      <Table />
    </>
  );
};

export default Users;
