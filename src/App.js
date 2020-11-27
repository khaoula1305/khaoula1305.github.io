import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/contact/Contact';
import Skills from './contents/Skills';
import Home from './contents/Home';
import Projects from './contents/projects/Projects'
import
{
BrowserRouter as Router,
Route,
} from "react-router-dom";
import About from './contents/About';
import Education from './contents/Education';
import resumeDate from './resumeData';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar social={resumeDate.socialLinks} />
      <Route exact path="/"><Home resumeDate={resumeDate} /></Route>
      <Route path="/about">
        <About aboutMe={resumeDate.aboutme} ></About>
</Route>
<Route path="/education">
  <Education educations={resumeDate.education} />
  </Route>
  <Route path="/skills">
<Skills skills={resumeDate.skills}/>
</Route>
<Route path="/contact">
<Contact contact={resumeDate.socialLinks} />
</Route>
<Route path="/projects">
  <Projects/>
</Route>

    </div>
    </Router>
  );
}

export default App;
