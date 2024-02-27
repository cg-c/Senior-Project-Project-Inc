import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import FAQ from './pages/FAQ';
import NoPage from './pages/NoPage';

import ProjPitch from './pages/ProjPitch';
import AdvProj from './pages/AdvProj';
import MyTeam from './pages/MyTeam';
import AdvStudents from './pages/AdvStudents';
import Grades from './pages/Grades';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
/*global google*/

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Info Pages */}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/FAQ" element={<FAQ />} />

          {/* Need to be logged in */}
          <Route path="/projectpitch" element={<ProjPitch />} />
          <Route path="/advisorsprojects" element={<AdvProj />} />
          <Route path="/myteam" element={<MyTeam />} />
          <Route path="/students" element={<AdvStudents />} />
          <Route path="/grades" element={<Grades />} />

          {/* Error Page */}
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
