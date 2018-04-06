/* Importing the node modules, child components, services and controllers used 
   inside FivestarHeader component */
   import React from 'react';
   import {Link} from 'react-router-dom';
   /* FivestarHeader Component initialization */
   class Navbar extends React.Component {
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
            <div id="sidebar" className="sidebar responsive ace-save-state">
            <script type="text/javascript">
                try{ace.settings.loadState('sidebar')}catch(e){}
            </script>

            <div className="sidebar-shortcuts" id="sidebar-shortcuts">
                <div className="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
                    <button className="btn btn-success">
                        <i className="ace-icon fa fa-signal"></i>
                    </button>

                    <button className="btn btn-info">
                        <i className="ace-icon fa fa-pencil"></i>
                    </button>

                    <button className="btn btn-warning">
                        <i className="ace-icon fa fa-users"></i>
                    </button>

                    <button className="btn btn-danger">
                        <i className="ace-icon fa fa-cogs"></i>
                    </button>
                </div>

                <div className="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
                    <span className="btn btn-success"></span>

                    <span className="btn btn-info"></span>

                    <span className="btn btn-warning"></span>

                    <span className="btn btn-danger"></span>
                </div>
            </div>
    {/* <!-- /.sidebar-shortcuts --> */}

            <ul className="nav nav-list">
                <li className="Dashboard">
                    <a href="dashboard.html">
                        <i className="menu-icon fa fa-tachometer"></i>
                        <span className="menu-text"> Dashboard </span>
                    </a>

                    <b className="arrow"></b>
                </li>

                <li className="Lottery">
                    <a href="lottery.html" className="dropdown-toggle">
                        <i className="menu-icon fa fa-desktop"></i>
                        <span className="menu-text">
                            Lottery
                        </span>

                        <b className="arrow fa fa-angle-down"></b>
                    </a>

                    <b className="arrow"></b>

                    <ul className="submenu">
                        <li className="">
                            <a href="#" className="dropdown-toggle">
                                <i className="menu-icon fa fa-caret-right"></i>

                                Layouts
                                <b className="arrow fa fa-angle-down"></b>
                            </a>

                            <b className="arrow"></b>

                            <ul className="submenu">
                                <li className="">
                                    <a href="top-menu.html">
                                        <i className="menu-icon fa fa-caret-right"></i>
                                        Top Menu
                                    </a>

                                    <b className="arrow"></b>
                                </li>

                                <li className="">
                                    <a href="two-menu-1.html">
                                        <i className="menu-icon fa fa-caret-right"></i>
                                        Two Menus 1
                                    </a>

                                    <b className="arrow"></b>
                                </li>

                                <li className="">
                                    <a href="two-menu-2.html">
                                        <i className="menu-icon fa fa-caret-right"></i>
                                        Two Menus 2
                                    </a>

                                    <b className="arrow"></b>
                                </li>

                                <li className="">
                                    <a href="mobile-menu-1.html">
                                        <i className="menu-icon fa fa-caret-right"></i>
                                        Default Mobile Menu
                                    </a>

                                    <b className="arrow"></b>
                                </li>

                                <li className="">
                                    <a href="mobile-menu-2.html">
                                        <i className="menu-icon fa fa-caret-right"></i>
                                        Mobile Menu 2
                                    </a>

                                    <b className="arrow"></b>
                                </li>

                                <li className="">
                                    <a href="mobile-menu-3.html">
                                        <i className="menu-icon fa fa-caret-right"></i>
                                        Mobile Menu 3
                                    </a>

                                    <b className="arrow"></b>
                                </li>
                            </ul>
                        </li>

                        <li className="">
                            <a href="typography.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Typography
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="elements.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Elements
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="buttons.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Buttons &amp; Icons
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="content-slider.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Content Sliders
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="treeview.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Treeview
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="jquery-ui.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                jQuery UI
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="nestable-list.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Nestable Lists
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="#" className="dropdown-toggle">
                                <i className="menu-icon fa fa-caret-right"></i>

                                Three Level Menu
                                <b className="arrow fa fa-angle-down"></b>
                            </a>

                            <b className="arrow"></b>

                            <ul className="submenu">
                                <li className="">
                                    <a href="#">
                                        <i className="menu-icon fa fa-leaf green"></i>
                                        Item #1
                                    </a>

                                    <b className="arrow"></b>
                                </li>

                                <li className="">
                                    <a href="#" className="dropdown-toggle">
                                        <i className="menu-icon fa fa-pencil orange"></i>

                                        4th level
                                        <b className="arrow fa fa-angle-down"></b>
                                    </a>

                                    <b className="arrow"></b>

                                    <ul className="submenu">
                                        <li className="">
                                            <a href="#">
                                                <i className="menu-icon fa fa-plus purple"></i>
                                                Add Product
                                            </a>

                                            <b className="arrow"></b>
                                        </li>

                                        <li className="">
                                            <a href="#">
                                                <i className="menu-icon fa fa-eye pink"></i>
                                                View Products
                                            </a>

                                            <b className="arrow"></b>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="Quiz">
                    <a href="#" className="dropdown-toggle">
                        <i className="menu-icon fa fa-list"></i>
                        <span className="menu-text"> Quiz </span>

                        <b className="arrow fa fa-angle-down"></b>
                    </a>

                    <b className="arrow"></b>

                    <ul className="submenu">
                        <li className="">
                            <a href="quiz-dashboard.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                View all
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="add-questions.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Add Questions
                            </a>

                            <b className="arrow"></b>
                        </li>
                        <li className="">
                            <a href="jqgrid.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Subjects
                            </a>

                            <b className="arrow"></b>
                        </li>
                        <li className="Exams">
                            <a href="jqgrid.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Exams
                            </a>

                            <b className="arrow"></b>
                        </li>							
                        <li className="Reports">
                            <a href="jqgrid.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Reports
                            </a>

                            <b className="arrow"></b>
                        </li>							
                    </ul>
                </li>

                <li className="surveys">
                    <a href="surveys.html" className="dropdown-toggle">
                        <i className="menu-icon fa fa-pencil-square-o"></i>
                        <span className="menu-text"> Surveys </span>

                        <b className="arrow fa fa-angle-down"></b>
                    </a>

                    <b className="arrow"></b>

                    <ul className="submenu">
                        <li className="">
                            <a href="form-elements.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                View All
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="form-elements-2.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Add Survey
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="form-wizard.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Reports
                            </a>

                            <b className="arrow"></b>
                        </li>

                        
                    </ul>
                </li>

                <li className="social media">
                    <a href="social.html" className="dropdown-toggle">
                        <i className="menu-icon fa fa-pencil-square-o"></i>
                        <span className="menu-text"> Social Media </span>

                        <b className="arrow fa fa-angle-down"></b>
                    </a>

                    <b className="arrow"></b>

                    <ul className="submenu">
                        <li className="">
                            <a href="form-elements.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Form Elements
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="form-elements-2.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Form Elements 2
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="form-wizard.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Wizard &amp; Validation
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="wysiwyg.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Wysiwyg &amp; Markdown
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="dropzone.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Dropzone File Upload
                            </a>

                            <b className="arrow"></b>
                        </li>
                    </ul>
                </li>


                <li className="Calendar">
                    <a href="calendar.html">
                        <i className="menu-icon fa fa-calendar"></i>

                        <span className="menu-text">
                            Calendar

                            <span className="badge badge-transparent tooltip-error" title="2 Important Events">
                                <i className="ace-icon fa fa-exclamation-triangle red bigger-130"></i>
                            </span>
                        </span>
                    </a>

                    <b className="arrow"></b>
                </li>

                <li className="Users">
                    <a href="user.html" className="dropdown-toggle">
                        <i className="menu-icon fa fa-pencil-square-o"></i>
                        <span className="menu-text"> Users </span>

                        <b className="arrow fa fa-angle-down"></b>
                    </a>

                    <b className="arrow"></b>

                    <ul className="submenu">
                        <li className="">
                            <a href="form-elements.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Form Elements
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="form-elements-2.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Form Elements 2
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="form-wizard.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Wizard &amp; Validation
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="wysiwyg.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Wysiwyg &amp; Markdown
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="dropzone.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Dropzone File Upload
                            </a>

                            <b className="arrow"></b>
                        </li>
                    </ul>
                </li>

                <li className="reports">
                    <a href="reports.html" className="dropdown-toggle">
                        <i className="menu-icon fa fa-tag"></i>
                        <span className="menu-text">Reports</span>

                        <b className="arrow fa fa-angle-down"></b>
                    </a>

                    <b className="arrow"></b>

                    <ul className="submenu">
                        <li className="">
                            <a href="profile.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                User Profile
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="inbox.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Inbox
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="pricing.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Pricing Tables
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="invoice.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Invoice
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="timeline.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Timeline
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="search.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Search Results
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="email.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Email Templates
                            </a>

                            <b className="arrow"></b>
                        </li>

                        <li className="">
                            <a href="login.html">
                                <i className="menu-icon fa fa-caret-right"></i>
                                Login &amp; Register
                            </a>

                            <b className="arrow"></b>
                        </li>
                    </ul>
                </li>


            </ul>
    {/* <!-- /.nav-list --> */}

            <div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
                <i id="sidebar-toggle-icon" className="ace-icon fa fa-angle-double-left ace-save-state" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
            </div>
        </div>
           );
       }
   }
   export default Navbar;