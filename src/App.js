import React, {Component} from 'react';
import './App.css';

import Contact from './components/contact/Contact';
import Skills from './contents/skills/Skills';
import Home from './contents/Home';
import Projects from './contents/projects/Projects';
import About from './contents/About';
import Education from './contents/educations/Education';
import resumeDate from './resumeData';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {
  render(){
return (
     <div className="App container">    <React.Fragment>
<Header/>
<Home resumeDate={resumeDate} photo={resumeDate.MyPhoto}/>

    <About aboutMe={resumeDate.aboutme} photo={resumeDate.MyPhoto}></About>
  <Education educations={resumeDate.education} />
<Skills skills={resumeDate.skills.languages}/>
  <Projects projects={resumeDate.portfolio}/>
<Contact contact={resumeDate.socialLinks} />

<Footer/>
        </React.Fragment> </div>


  );
  }
  
}

export default App;
