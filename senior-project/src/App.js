import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import FAQ from './pages/FAQ';
import NoPage from './pages/NoPage';

import ProjPitch from './pages/ProjPitch';
import AdvProj from './pages/AdvProj';
import MyTeam from './pages/MyTeam';
import AdvStudents from './pages/AdvStudents';
import Grades from './pages/Grades';


function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/data").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])


  return (
    <div>
      <BrowserRouter>
        <Routes>
          /* Info Pages */
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/FAQ" element={<FAQ />} />

          /* Need to be logged in */
          <Route path="/projectpitch" element={<ProjPitch />} />
          <Route path="/advisorsprojects" element={<AdvProj />} />
          <Route path="/myteam" element={<MyTeam />} />
          <Route path="/students" element={<AdvStudents />} />
          <Route path="/grades" element={<Grades />} />

          /* Error Page */
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

      {(typeof backendData.rows === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.rows.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  );
}

export default App;
