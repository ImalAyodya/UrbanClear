// filepath: d:\Y3_S2\Assignments\CSSE\UrbanClear\frontend\src\components\Dashboard.jsx
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSignOutAlt } from 'react-icons/fa';
import AuthContext from '../context/AuthContext';

function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <motion.div 
        className="w-full h-full flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-green-600">UrbanClear Dashboard</h1>
            <button 
              onClick={logout} 
              className="flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>
        </header>
        
        <main className="flex-grow p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Welcome, {user.name}!</h2>
              <p className="text-gray-600">
                You are logged in as: <span className="font-medium">{user.role}</span>
              </p>
              
              <div className="mt-8 p-6 bg-green-50 rounded-md">
                <h3 className="text-lg font-medium text-green-700">Your Dashboard is Ready</h3>
                <p className="mt-2 text-green-600">
                  This is a placeholder for your waste management dashboard. 
                  You can add features like waste collection scheduling, recycling information, and more.
                </p>
              </div>
            </div>
          </div>
        </main>
      </motion.div>
    </div>
  );
}

export default Dashboard;