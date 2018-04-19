/* Importing the node modules, child components, services and controllers used 
   inside FivestarHeader component */
   import React from 'react';
   import {Link} from 'react-router-dom';
   import Loadjs from 'loadjs';
   /* FivestarHeader Component initialization */
   class Settings extends React.Component {
     /* Initializing objects of its FivestarHeader class */
       constructor(props) {
           super(props)
           /* FivestarHeader Component State variables Initialization */
           this.state = {
              activeIndex: 0
           }
   
       }
       async componentWillMount() {

       }
       render() {
           return (
			<div className="ace-settings-container" id="ace-settings-container">
							<div className="btn btn-app btn-xs btn-warning ace-settings-btn" id="ace-settings-btn">
								<i className="ace-icon fa fa-cog bigger-130"></i>
							</div>

							<div className="ace-settings-box clearfix" id="ace-settings-box">
								<div className="pull-left width-50">
									<div className="ace-settings-item">
										<div className="pull-left">
											<select id="skin-colorpicker" className="hide">
												<option data-skin="no-skin" value="#438EB9">#438EB9</option>
												<option data-skin="skin-1" value="#222A2D">#222A2D</option>
												<option data-skin="skin-2" value="#C6487E">#C6487E</option>
												<option data-skin="skin-3" value="#D0D0D0">#D0D0D0</option>
											</select>
										</div>
										<span>&nbsp; Choose Skin</span>
									</div>

									<div className="ace-settings-item">
										<input type="checkbox" className="ace ace-checkbox-2 ace-save-state" id="ace-settings-navbar" autoComplete="off" />
										<label className="lbl" htmlFor="ace-settings-navbar"> Fixed Navbar</label>
									</div>

									<div className="ace-settings-item">
										<input type="checkbox" className="ace ace-checkbox-2 ace-save-state" id="ace-settings-sidebar" autoComplete="off" />
										<label className="lbl" htmlFor="ace-settings-sidebar"> Fixed Sidebar</label>
									</div>

									<div className="ace-settings-item">
										<input type="checkbox" className="ace ace-checkbox-2 ace-save-state" id="ace-settings-breadcrumbs" autoComplete="off" />
										<label className="lbl" htmlFor="ace-settings-breadcrumbs"> Fixed Breadcrumbs</label>
									</div>

									<div className="ace-settings-item">
										<input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-rtl" autoComplete="off" />
										<label className="lbl" htmlFor="ace-settings-rtl"> Right To Left (rtl)</label>
									</div>

									<div className="ace-settings-item">
										<input type="checkbox" className="ace ace-checkbox-2 ace-save-state" id="ace-settings-add-container" autoComplete="off" />
										<label className="lbl" htmlFor="ace-settings-add-container">
											Inside
											<b>.container</b>
										</label>
									</div>
								</div>
                {/* <!-- /.pull-left --> */}

								<div className="pull-left width-50">
									<div className="ace-settings-item">
										<input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-hover" autoComplete="off" />
										<label className="lbl" htmlFor="ace-settings-hover"> Submenu on Hover</label>
									</div>

									<div className="ace-settings-item">
										<input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-compact" autoComplete="off" />
										<label className="lbl" htmlFor="ace-settings-compact"> Compact Sidebar</label>
									</div>

									<div className="ace-settings-item">
										<input type="checkbox" className="ace ace-checkbox-2" id="ace-settings-highlight" autoComplete="off" />
										<label className="lbl" htmlFor="ace-settings-highlight"> Alt. Active Item</label>
									</div>
								</div>
                {/* <!-- /.pull-left --> */}
							</div>
              {/* <!-- /.ace-settings-box --> */}
						</div>
           );
       }
   }
   export default Settings;