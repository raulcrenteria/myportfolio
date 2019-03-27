// import React, { Component } from 'react';
// import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


// class Projects extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { activeTab: 0 };
//   }

//   toggleCategories() {

//     if(this.state.activeTab === 0){
//       return(
//         <div className="projects-grid">
//           {/* Project 1 */}
//           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
//             <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
//             <CardText>
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
//             </CardText>
//             <CardActions border>
//               <Button colored>GitHub</Button>
//               <Button colored>CodePen</Button>
//               <Button colored>Live Demo</Button>
//             </CardActions>
//             <CardMenu style={{color: '#fff'}}>
//               <IconButton name="share" />
//             </CardMenu>
//           </Card>
//           {/* Project 2 */}
//           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
//             <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
//             <CardText>
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
//             </CardText>
//             <CardActions border>
//               <Button colored>GitHub</Button>
//               <Button colored>CodePen</Button>
//               <Button colored>Live Demo</Button>
//             </CardActions>
//             <CardMenu style={{color: '#fff'}}>
//               <IconButton name="share" />
//             </CardMenu>
//           </Card>
//           {/* Project 3 */}
//           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
//             <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
//             <CardText>
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
//             </CardText>
//             <CardActions border>
//               <Button colored>GitHub</Button>
//               <Button colored>CodePen</Button>
//               <Button colored>Live Demo</Button>
//             </CardActions>
//             <CardMenu style={{color: '#fff'}}>
//               <IconButton name="share" />
//             </CardMenu>
//           </Card>
//         </div>
//       )
//     } else if(this.state.activeTab === 1) {
//       return (
//         <div><h1>This is Angular</h1></div>
//       )
//     } else if(this.state.activeTab === 2) {
//       return (
//         <div><h1>This is VueJS</h1></div>
//       )
//     } else if(this.state.activeTab === 3) {
//       return (
//         <div><h1>This is MongoDB</h1></div>
//       )
//     }
//   }
//   render() {
//     return(
//       <div>
//         <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
//           <Tab>React</Tab>
//           <Tab>Angular</Tab>
//           <Tab>VueJS</Tab>
//           <Tab>MongoDB</Tab>
//         </Tabs>
//           <Grid>
//             <Cell col={12}>
//               <div className="content">{this.toggleCategories()}</div>
//             </Cell>
//           </Grid>
//       </div>
//     )
//   }
// }
// export default Projects;


import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor (props){
        super(props);
        this.state ={ activeTab: 0 };
    }
    toggleCategories() {

        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    {/* PROJECT 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background:'url(https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png) center / cover'}}> React Project 1</CardTitle>
                    <CardText>
                        
                        LOREM IPSUM DUMMY TEXT

                    </CardText>
                    <CardActions border>
                        <Button colored> Github</Button>
                        <Button colored> CodePen</Button>
                        <Button colored> Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff' }}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>

                {/* PROJECT 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background:'url(https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png) center / cover'}}> React Project 2</CardTitle>
                    <CardText>
                        
                        LOREM IPSUM DUMMY TEXT

                    </CardText>
                    <CardActions border>
                        <Button colored> Github</Button>
                        <Button colored> CodePen</Button>
                        <Button colored> Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff' }}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>

                {/* PROJECT 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background:'url(https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png) center / cover'}}> React Project 3</CardTitle>
                    <CardText>
                        
                        LOREM IPSUM DUMMY TEXT

                    </CardText>
                    <CardActions border>
                        <Button colored> Github</Button>
                        <Button colored> CodePen</Button>
                        <Button colored> Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff' }}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
                </div>
                
            )
        } else if (this.state.activeTab === 1){
            return(
                <div><h1>This is Node</h1></div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div><h1>This is MongoDB</h1></div>
            )

        } else if (this.state.activeTab === 3){
            return(
                <div><h1>This is Vue JS</h1></div>
            )
        }

    }

   

    render() {
        return( 
                <div>
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                        <Tab>React.js | RR</Tab>
                        <Tab>Node.js | RR</Tab>
                        <Tab>MongoDB | RR</Tab>

                        <Tab>VueJS | RR</Tab>
                        
                    </Tabs>

                    
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                        {/* {this.toggleCategories()} */}
                    
                    
                </div>
        )
    }
}

export default Projects;

