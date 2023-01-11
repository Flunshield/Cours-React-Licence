import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Css/App.css';
import Home from './View/Home';
import ListCharacter from './View/ListCharacter';
import ManagementCharacter from './View/ManagementCharacter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ListPlayers" element={<ListCharacter />} />
        <Route path="/CreatePlayers" element={<ManagementCharacter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
