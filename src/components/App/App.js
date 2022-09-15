import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Books from '../Books/Books';
import Categories from '../Categories/Categories';

function App() {
  // eslint-disable-next-line react/jsx-filename-extension
  <BrowserRouter>
    {/* {<NavBar />} */}
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/Books" element={<Books />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>;
}

export default App;
