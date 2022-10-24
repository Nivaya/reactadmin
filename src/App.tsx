import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <Login/>
      {/*<Routes>*/}
      {/*  <Route path="/" element={<Dashboard/>}/>*/}
      {/*  <Route path="/dashboard" element={<Dashboard/>}/>*/}
      {/*  <Route path="/login" element={<SignIn/>}/>*/}
      {/*</Routes>*/}
    </div>
  );
}

export default App;
