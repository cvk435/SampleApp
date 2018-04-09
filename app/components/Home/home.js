/* Importing the node modules, child components, services and controllers used 
   inside FivestarHeader component */
   import React from 'react';
   import {Link} from 'react-router-dom';

   /* FivestarHeader Component initialization */
   class Home extends React.Component {
     /* Initializing objects of its FivestarHeader class */
       constructor(props) {
           super(props)
           /* FivestarHeader Component State variables Initialization */
           this.state = {
     
         }
   
       }

omponentDidMount() {
       }
       render() {
           return (
            <div>
<h1 style={{color:'orange'}}>Yencash.in</h1>
          </div>
           );
       }
   }
   export default Home;