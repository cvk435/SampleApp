/* Importing the node modules, child components, services and controllers used 
   inside FivestarHeader component */
   import React from 'react';
   import {Link} from 'react-router-dom';

   /* FivestarHeader Component initialization */
   class Search extends React.Component {
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
            <div className="breadcrumbs ace-save-state" id="breadcrumbs">
            <ul className="breadcrumb">
                <li>
                    <i className="ace-icon fa fa-home home-icon"></i>
                    <a href="#">Home</a>
                </li>

                <li>
                    <a href="quiz-dashboard.html">Quiz</a>
                </li>
                <li className="active">Add Questions</li>
            </ul>
{/* <!-- /.breadcrumb --> */}

            <div className="nav-search" id="nav-search">
                <form className="form-search">
                    <span className="input-icon">
                        <input type="text" placeholder="Search ..." className="nav-search-input" id="nav-search-input" autoComplete="off" />
                        <i className="ace-icon fa fa-search nav-search-icon"></i>
                    </span>
                </form>
            </div>
{/* <!-- /.nav-search --> */}
        </div>
           );
       }
   }
   export default Search;