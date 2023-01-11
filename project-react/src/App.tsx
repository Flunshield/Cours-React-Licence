import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Css/App.css';
import CreateCharacter from './View/CreateCharacter';
import Home from './View/Home';
import ListCharacter from './View/ListCharacter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ListPlayers" element={<ListCharacter />} />
        <Route path="/CreatePlayers" element={<CreateCharacter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
