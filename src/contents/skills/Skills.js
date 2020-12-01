import React, { Component } from 'react';
import SkillItem from './skillItem'
import skill_pic from "../../img/skills.jpg";

class Skills extends Component {
    state = {  }
    render() {
         const languages=this.props.skills;
        return (
            <div className="skills section" id="skills">
                <h2 className="section-title">Skills</h2>

                <div className="skills__container bd-grid">
                    <div>
                        <h2 className="skills__subtitle">Profesional Skills</h2>

                { languages.map(item=>(<SkillItem key={item.id} skill={item}/>))
                }                </div>

                    <div>
                        <img src={skill_pic} alt="" class="skills__img"/>
                    </div>
                </div>
            </div>


         );
    }
}
 
export default Skills;
