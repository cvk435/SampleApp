/* Importing the node modules, child components, services and controllers used 
   inside FivestarHeader component */
   import React from 'react';
   import {Link} from 'react-router-dom';
   /* FivestarHeader Component initialization */
   class Header extends React.Component {
     /* Initializing objects of its FivestarHeader class */
       constructor(props) {
           super(props)
           /* FivestarHeader Component State variables Initialization */
           this.state = {
              activeIndex: 0
           }
   
       }
       componentDidMount() {
       }
       render() {
           return (
               <div>
                  <nav className="navbar navbar-default navbar-fixed-top">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="#myPage">Logo</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#pricing">PRICING</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  </div>
</nav>
               </div>
           );
       }
   }
   export default Header;