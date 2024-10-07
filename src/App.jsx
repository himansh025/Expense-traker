import './App.css';
import { useState } from 'react';
import Tracker from './components/Tracker';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`h-screen flex items-center justify-center transition duration-300 ${darkMode ? 'bg-slate-900' : 'bg-slate-200'}`}>
      <div className="absolute top-5 right-5">
        <button
          onClick={toggleDarkMode}
          className={`py-2 px-4 rounded-full transition duration-300 ${darkMode ? 'bg-yellow-300 text-black' : 'bg-gray-800 text-white'}`}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <Tracker darkMode={darkMode} />
    </div>
  );
}

export default App;
