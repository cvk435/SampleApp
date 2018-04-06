/* Importing the node modules, child components, services and controllers used 
   inside FivestarHeader component */
   import React from 'react';
   import {Link} from 'react-router-dom';
   /* FivestarHeader Component initialization */
   class Footer extends React.Component {
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
                  	<div className="footer">
				<div className="footer-inner">
					<div className="footer-content">
						<span className="bigger-120">
							<span className="blue bolder">Mactosoft</span>
							&copy; 2013-2014
						</span>

						&nbsp; &nbsp;
						<span className="action-buttons">
							<a href="#">
								<i className="ace-icon fa fa-twitter-square light-blue bigger-150"></i>
							</a>

							<a href="#">
								<i className="ace-icon fa fa-facebook-square text-primary bigger-150"></i>
							</a>

							<a href="#">
								<i className="ace-icon fa fa-rss-square orange bigger-150"></i>
							</a>
						</span>
					</div>
				</div>
			</div>

			<a href="#" id="btn-scroll-up" className="btn-scroll-up btn btn-sm btn-inverse">
				<i className="ace-icon fa fa-angle-double-up icon-only bigger-110"></i>
			</a>
               </div>
           );
       }
   }
   export default Footer;