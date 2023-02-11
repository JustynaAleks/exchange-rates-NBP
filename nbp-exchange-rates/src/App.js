import './App.css';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom'
import Gold from './pages/gold';
import Nav from './components/Nav';

import MyContext from './context';

function App() {
  return (
    <MyContext.Provider value={{ color: '#ccc', width: '52rem' }}>
      <h1>Kursy walut</h1>
      <Nav />
      <main>
        <Routes>
          <Route path="/gold" element={<Gold />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </main>
      <footer>
        <p> Dziś jest: {new Date().getDate()}.{new Date().getMonth()+1}.{new Date().getFullYear()} </p>
      </footer>
    </MyContext.Provider>
  )
}

export default App;
