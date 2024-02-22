import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import FAQ from './pages/FAQ';
import NoPage from './pages/NoPage';
import StudentInfo from './pages/StudentInfo';
import ProjPitch from './pages/ProjPitch';
import AdvProj from './pages/AdvProj';
import MyTeam from './pages/MyTeam';
import AdvStudents from './pages/AdvStudents';
import Grades from './pages/Grades';
import RequiredAuth from './components/RequiredAuth';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Info Pages */}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/FAQ" element={<FAQ />} />

          {/* Need to be logged in */}


          {/* Faculty */}
          <Route element={<RequiredAuth allowedRoles={["faculty"]} />}>
            <Route path="/students" element={<AdvStudents />} />
          </Route>

          {/* Admin */}
          <Route element={<RequiredAuth allowedRoles={["admin"]} />}>
            <Route path="/info" element={<StudentInfo />} />
          </Route>

          {/* Student, Faculty */}
          <Route element={<RequiredAuth allowedRoles={["student", "faculty"]} />}>
            <Route path="/myteam" element={<MyTeam />} />
          </Route>

          {/* Faculty, Admin */}
          <Route element={<RequiredAuth allowedRoles={["faculty", "admin"]} />}>
            <Route path="/grades" element={<Grades />} />
          </Route>

          {/* Student, Faculty, Admin */}
          <Route element={<RequiredAuth allowedRoles={["student", "faculty", "admin"]} />}>
            <Route path="/projectpitch" element={<ProjPitch />} />
            <Route path="/advisorsprojects" element={<AdvProj />} />
          </Route>

          {/* Error Page */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
