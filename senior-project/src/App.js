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

import "@fontsource/dm-sans"; // Defaults to weight 400
import "@fontsource/dm-sans/400.css"; // Specify weight
import "@fontsource/dm-sans/400-italic.css"; // Specify weight and style
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
          {/* STUDENTS */}
          <Route path="/projectpitch" element={<ProjPitch />} />
          <Route path="/advisorsprojects" element={<AdvProjStu />} />
          <Route path="/myteam" element={<MyTeam />} />
          
          {/* ADVISORS */}
          <Route path="/addadvisorsprojects" element={<AdvProjAdv />} />
          <Route path ="/mystudents" element={<AdvTeam />} />
          <Route path="/grades" element={<Grades />} />

          {/* ADMIN */}
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
