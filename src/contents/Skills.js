import React, { Component } from 'react';
import skill_pic from '../img/skills.jpg';
class Skills extends Component {
constructor(props)
{
super(props);
this.state={
'myskills':['HTML','CSS','JS','PHP','REACT JS','FIREBASE','MIT APP']
};
}
render() {
return (
       <div className="skills section" id="skills">
                <h2 className="section-title">Skills</h2>

                <div className="skills__container bd-grid"> 
                    <div>
                        <h2 className="skills__subtitle">Profesional Skills</h2>
                        <p className="skills__text"></p>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-html5 skills__icon'></i>
                                <span className="skills__name">HTML5</span>
                            </div>
                            <div className="skills__bar skills__html">

                            </div>
                            <div>
                                <span className="skills__percentage">95%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-css3 skills__icon'></i>
                                <span className="skills__name">CSS3</span>
                            </div>
                            <div className="skills__bar skills__css">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">85%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-javascript skills__icon' ></i>
                                <span className="skills__name">JAVASCRIPT</span>
                            </div>
                            <div className="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">65%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxs-paint skills__icon'></i>
                                <span className="skills__name">UX/UI</span>
                            </div>
                            <div className="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">85%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <img src={skill_pic} alt="" class="skills__img"/>
                    </div>
                </div>
            </div>
);
}
}
export default Skills;