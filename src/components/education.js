import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component{
    render(){
        return(
            // <div><h1>{this.props.startYear}</h1></div>
            <Grid>
                <Cell col={4}>
                <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>Right Side
                    <h4 style={{marginTop: '0px', }}>{this.props.schoolName}</h4>
                    <p>{this.props.schoolDescription}</p>
                </Cell>
            </Grid>
            
        )
    }
}
export default Education;