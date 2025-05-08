import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CryptoTable from './components/CryptoTable';
import { updateAssets } from './feature/crypto/cryptoSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateAssets());
    }, 1500);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <h1 className="text-2xl font-bold text-center py-6">Real-Time Crypto Price Tracker</h1>
      <CryptoTable />
    </main>
  );
};

export default App;
