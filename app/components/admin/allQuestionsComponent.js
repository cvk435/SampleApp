/* Importing the node modules, child components, services and controllers used 
   inside FivestarHeader component */
   import React from 'react';
   import {Link} from 'react-router-dom';
   import NavBar from '../../common/navBar';
   import Settings from '../../common/settings';
   import Search from '../../common/search';
   import Header from '../../common/header';
   import Footer from '../../common/footer';
   import AllQuestions from './allQuestions';
   /* FivestarHeader Component initialization */
   class AllQuestionsComponent extends React.Component {
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

				<AllQuestions/>
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
   export default AllQuestionsComponent;