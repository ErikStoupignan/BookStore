import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from '../Books/Books';
import Categories from '../Categories/Categories';
import Navbar from '../Navbar/Navbar';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default App;
