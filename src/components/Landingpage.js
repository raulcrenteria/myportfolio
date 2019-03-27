import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';


class Landing extends Component {
    render(){
        return( 
                <div style={{ width: '100%', margin: 'auto'}}>
                   <Grid className='landing-grid'>
                        <Cell col={12}> 
                            <img src="https://b.kisscc0.com/20180705/cee/kisscc0-suit-2-female-avatar-person-male-avatar-5b3dc00d555c21.8729304615307735173496.png"
                                 alt="avatar"
                                 className="avatar-img"
                            />

                            <div className="banner-text">
                                <h1>Full Stack Web Developer</h1>

                            <hr/>
                            <p> HTML/CSS | JavaScript | React | Economist | Business Mgmt</p>
                            <div className="social-links">

                            {/* Linked In */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                            
                            {/* Facebook */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true"/>
                                </a>


                            </div>
                            
                            </div>
                        </Cell>
                   </Grid> 


                </div>
        )
    }
}

export default Landing;