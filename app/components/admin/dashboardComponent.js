/* Importing the node modules, child components, services and controllers used 
   inside FivestarHeader component */
   import React from 'react';
   import {Link} from 'react-router-dom';
   import NavBar from '../../common/navBar';
   import Settings from '../../common/settings';
   import Search from '../../common/search';
   import Header from '../../common/header';
   import Footer from '../../common/footer';
   import Dashboard from './dashboard';
   import $ from "jquery";
   /* FivestarHeader Component initialization */
   class DashboardComponent extends React.Component {
     /* Initializing objects of its FivestarHeader class */
       constructor(props) {
           super(props)
           /* FivestarHeader Component State variables Initialization */
           this.state = {
              activeIndex: 0
           }
   
       }
       componentWillMount() {
        $("#yen").addClass("no-skin");
        $("#yen").removeClass("login-layout light-login");
       }
       render() {
           return (
               <div>
            <Header/>
		<div className="main-container ace-save-state" id="main-container">
			<script type="text/javascript">
				try{ace.settings.loadState('main-container')}catch(e){}
			</script>
			<NavBar/>
			<div className="main-content">
				<div className="main-content-inner">
		
				<Search/>
					<div className="page-content">
				<Settings/>
            {/* <!-- /.ace-settings-container --> */}

				<Dashboard/>
            {/* <!-- /.row --> */}
					</div>
          {/* <!-- /.page-content --> */}
				</div>
			</div>
      {/* <!-- /.main-content --> */}

		
		</div>
    
        <Footer/>
               </div>
           );
       }
   }
   export default DashboardComponent;