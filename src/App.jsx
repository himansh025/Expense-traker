import './App.css';
import { ThemeProvider } from './context/ThemeContext'; // Import the ThemeProvider
import Tracker from './components/Tracker';

function App() {
  return (
    <ThemeProvider>
      <div className="h-screen flex items-center justify-center">
        <Tracker />
      </div>
    </ThemeProvider>
  );
}

export default App;
