// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Aliens from './pages/Aliens';
import Humans from './pages/Humans';
import About from './pages/About';
import Sidebar from './components/Sidebar';
import CharacterDetail from './pages/CharacterDetails';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
        <Sidebar />
        <div style={{ marginRight: 250, padding: '20px' }}>
          <Routes>
            <Route path="/INICIO" element={<Home />} />
            <Route path="/ALIENIGENAS" element={<Aliens />} />
            <Route path="/HUMANOS" element={<Humans />} />
            <Route path="/SOBRE" element={<About />} />
            <Route path="/characters/:id" element={<CharacterDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
