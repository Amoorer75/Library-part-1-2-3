import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './componets/Home'
import BookInfo from './componets/BookInfo'
import CreateBook from './componets/CreateBook'
import EditBook from './componets/EditBook'
import './App.css';


function App() {
const location = useLocation


  return (
    <div className="App" >
       <h3>{location.state ? location.state.msg : null}</h3>
      
      <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/books/:id" element={<BookInfo />} />

      <Route path="/books/:id/edit" element={<EditBook />} />

      <Route path="/create-book" element={<CreateBook />} />

    






      </Routes>


    </div>
  );
}

export default App;
