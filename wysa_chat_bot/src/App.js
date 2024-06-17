import './App.css';
import React from 'react';
import {BrowserRouter as BR, Route, Routes} from 'react-router-dom';


import Chat from "./pages/Chat"
import Login from "./pages/Login"

function App() {
  return (
    <div className='App'>
      <BR>
          <Routes>
            <Route path="/">
              <Route index element={<Login/>}/>
              <Route path="Chat" element={<Chat/>}/>
            </Route>
          </Routes>
      </BR>
    </div>
  );
}

export default App;
