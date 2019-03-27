import React from 'react';
import LandingPage from './Landingpage';
import { Switch, Route } from 'react-router-dom';


import About from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';



//Class based component

const Main = () => (
    <Switch>
        <Route exact path="/"  component={LandingPage} />
        <Route path="/aboutme"  component={About} />
        <Route path="/contact"  component={Contact} />
        <Route path="/projects"  component={Projects} />
        <Route path="/resume"  component={Resume} />
    </Switch>
);

export default Main;