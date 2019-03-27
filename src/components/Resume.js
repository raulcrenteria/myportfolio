import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

 
class Resume extends Component {
    render(){
        return( 
                <div className="">
                    <Grid>
                        <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                            alt='avatar'
                            style={{height: '200px', }}
                            />            
                        </div>
                            <h2 style={{paddingTop: '2em'}}>Raul Rentería</h2>
                            <h4 style={{color: 'grey'}}>Web Developer</h4>
                            <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}/>
                            <h5>Adress</h5>
                            <p> Blvd. Adolfo López Mateos 1760, Apt 205</p>
                            <p>Benito Juárez</p>
                            <p>CDMX, 03930</p>
                            <h5>Phone</h5>
                            <p>834 115 8144</p>
                            <p>55 2243 7926</p>
                            <h5>E-mail</h5>
                            <p>raul.renteria@iest.edu.mx</p>
                            <h5>LinkedIn</h5>
                            <p>https://www.linkedin.com/in/raúl-rentería-061164121</p>
                            

                        
                        </Cell>
                        <Cell className="resume-right-col"col={8}>
                        
                        <h2>Education</h2>
                        {/* INYECTAS COMPONENTE education.js*/}
                        <Education
                            startYear={2013}
                            endYear={2017}
                            schoolName="Universidad Anáhuac"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

                        /> 

                        <Education
                            startYear={2013}
                            endYear={2017}
                            schoolName="Universidad Anáhuac"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2018}
                            endYear={2018}
                            jobName="Ficrea Financial Services"
                            jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />
                        <Experience
                            startYear={2014}
                            endYear={2014}
                            jobName="Ficrea Financial Services"
                            jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        {/* metes datos vía props en el componente Skills (skills.js)*/}
                        <Skills
                            skill="HTML5/CSS3"
                            progress={78}
                        />
                        <Skills
                            skill="JS"
                            progress={80}
                        />
                        <Skills
                            skill="Node.js"
                            progress={75}
                        />
                        <Skills
                            skill="React.js"
                            progress={80}
                        />
                        <Skills
                            skill="MongoDB"
                            progress={85}
                        />


                        </Cell>
                    </Grid>
                </div>
        )
    }
}

export default Resume;