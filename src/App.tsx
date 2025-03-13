import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './common/Loader';
import Home from './Pages/Home';
import Users from './Pages/Bookings';

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
