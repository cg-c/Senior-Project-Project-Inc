import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import FAQ from './pages/FAQ';
import NoPage from './pages/NoPage';

import ProjPitch from './pages/ProjPitch';
import AdvProjStu from './pages/AdvProjStu';
import AdvProjAdv from './pages/AdvProjAdv';
import MyTeam from './pages/MyTeam';
import AdvTeam from './pages/AdvTeams';
import Grades from './pages/Grades';
import Directory from './pages/Directory';

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
          <Route path="/advisorsprojects" element={<AdvProjStu />} />
          <Route path="/addadvisorsprojects" element={<AdvProjAdv />} />
          <Route path="/myteam" element={<MyTeam />} />
          <Route path ="/mystudents" element={<AdvTeam />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/directory" element={<Directory />} />

          {/* Error Page */}
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
