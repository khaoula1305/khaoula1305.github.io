import React, { Component } from 'react';
import skill_pic from '../img/skills.jpg';
class Skills extends Component {
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
                                <i className='bx bxl-java skills__icon'></i>
                                <span className="skills__name">JAVA</span>
                            </div>
                            <div className="skills__bar skills__html">
                            </div>
                            <div>
                                <span className="skills__percentage">95%</span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx  skills__icon' ></i>
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
                                <i className='bx  skills__icon'></i>
                                <span className="skills__name">React</span>
                            </div>
                            <div className="skills__bar skills__css">

                            </div>
                            <div>
                                <span className="skills__percentage">85%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx skills__icon'></i>
                                <span className="skills__name">Spring Boot</span>
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
