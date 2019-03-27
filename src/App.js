import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      
      <div className="demo-big-content">
      <Layout>
                              {/* las comillas es el error */}                                                                  {/* el "/"slash es el error */}
          {/* <Header className='header-color' title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll/> */}
              <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects Page</Link>
              <Link to="/contact">Contact Page</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
          <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects Page</Link>
              <Link to="/contact">Contact Page</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content"/>
            <Main/>
          </Content>
      </Layout>

      </div>

    );
  }
}

export default App;
