import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Homepage from './pages';
import { Footer, Header } from './components';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import ServicesPage from './pages/services';
import ArchitecturalDesign from './pages/services/ArchitecturalDesign';
import EstateDevelopment from './pages/services/EstateDevelopment';
import FacilityManagement from './pages/services/FacilityManagement';
import ProjectManagement from './pages/services/ProjectManagement';
import IndustrialConstruction from './pages/services/IndustrialConstruction';
import ProjectsPage from './pages/projects';

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path='/about'  element={<AboutPage />} />
          <Route path='/projects'  element={<ProjectsPage />} />
          <Route path='/services/architectural-design' element={<ArchitecturalDesign />} />
          <Route path='/services/facility-management' element={<FacilityManagement />} />
          <Route path='/services/project-management' element={<ProjectManagement />} />
          <Route path='/services/industrial-construction' element={<IndustrialConstruction />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/contact'  element={<ContactPage />} />
          <Route path='/home'  element={<Homepage />} />
          <Route path='*'  element={<Navigate to="/home" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
