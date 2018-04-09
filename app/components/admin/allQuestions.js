/* Importing the node modules, child components, services and controllers used 
   inside FivestarHeader component */
   import React from 'react';
   import {Link} from 'react-router-dom';

   /* FivestarHeader Component initialization */
   class AllQuestions extends React.Component {
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
            <div className="row">
            <div className="col-xs-12">
            {/* <!-- PAGE CONTENT BEGINS --> */}
            <div className="row">
                <div className="col-xs-12">
                    <h3 className="header smaller lighter blue">All Questions</h3>

                    <div className="clearfix">
                        <div className="pull-right tableTools-container"></div>
                    </div>

                    {/* <!-- div.table-responsive --> */}

                    {/* <!-- div.dataTables_borderWrap --> */}
                    <div>
                        <table id="dynamic-table" className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </th>
                                    <th>Question</th>
                                    <th>Subject</th>
                                    <th className="hidden-480">Date</th>
                                    <th className="hidden-480">Views</th>

                                    <th>
                                        <i className="ace-icon fa fa-clock-o bigger-110 hidden-480"></i>
                                        status
                                    </th>
                                    <th className="hidden-480">Update</th>

                                    
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">app.com</a>
                                    </td>
                                    <td>$45</td>
                                    <td className="hidden-480">3,330</td>
                                    <td>Feb 12</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-warning">Expiring</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">base.com</a>
                                    </td>
                                    <td>$35</td>
                                    <td className="hidden-480">2,595</td>
                                    <td>Feb 18</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-success">Registered</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">max.com</a>
                                    </td>
                                    <td>$60</td>
                                    <td className="hidden-480">4,400</td>
                                    <td>Mar 11</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-warning">Expiring</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">best.com</a>
                                    </td>
                                    <td>$75</td>
                                    <td className="hidden-480">6,500</td>
                                    <td>Apr 03</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-inverse arrowed-in">Flagged</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">pro.com</a>
                                    </td>
                                    <td>$55</td>
                                    <td className="hidden-480">4,250</td>
                                    <td>Jan 21</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-success">Registered</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">team.com</a>
                                    </td>
                                    <td>$40</td>
                                    <td className="hidden-480">3,200</td>
                                    <td>Feb 09</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-inverse arrowed-in">Flagged</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">up.com</a>
                                    </td>
                                    <td>$95</td>
                                    <td className="hidden-480">8,520</td>
                                    <td>Feb 22</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-info arrowed arrowed-righ">Sold</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">view.com</a>
                                    </td>
                                    <td>$45</td>
                                    <td className="hidden-480">4,100</td>
                                    <td>Mar 12</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-success">Registered</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">nice.com</a>
                                    </td>
                                    <td>$38</td>
                                    <td className="hidden-480">3,940</td>
                                    <td>Feb 12</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-info arrowed arrowed-righ">Sold</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">fine.com</a>
                                    </td>
                                    <td>$25</td>
                                    <td className="hidden-480">2,983</td>
                                    <td>Apr 01</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-warning">Expiring</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">good.com</a>
                                    </td>
                                    <td>$50</td>
                                    <td className="hidden-480">6,500</td>
                                    <td>Feb 02</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-inverse arrowed-in">Flagged</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">great.com</a>
                                    </td>
                                    <td>$55</td>
                                    <td className="hidden-480">6,400</td>
                                    <td>Feb 24</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-success">Registered</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">shine.com</a>
                                    </td>
                                    <td>$25</td>
                                    <td className="hidden-480">2,200</td>
                                    <td>Apr 01</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-inverse arrowed-in">Flagged</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">rise.com</a>
                                    </td>
                                    <td>$42</td>
                                    <td className="hidden-480">3,900</td>
                                    <td>Feb 01</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-info arrowed arrowed-righ">Sold</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">above.com</a>
                                    </td>
                                    <td>$35</td>
                                    <td className="hidden-480">3,420</td>
                                    <td>Mar 12</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-warning">Expiring</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">share.com</a>
                                    </td>
                                    <td>$30</td>
                                    <td className="hidden-480">3,200</td>
                                    <td>Feb 11</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-info arrowed arrowed-righ">Sold</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">fair.com</a>
                                    </td>
                                    <td>$35</td>
                                    <td className="hidden-480">3,900</td>
                                    <td>Mar 26</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-inverse arrowed-in">Flagged</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">year.com</a>
                                    </td>
                                    <td>$48</td>
                                    <td className="hidden-480">3,990</td>
                                    <td>Feb 15</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-warning">Expiring</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">day.com</a>
                                    </td>
                                    <td>$55</td>
                                    <td className="hidden-480">5,600</td>
                                    <td>Jan 29</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-info arrowed arrowed-righ">Sold</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">light.com</a>
                                    </td>
                                    <td>$40</td>
                                    <td className="hidden-480">3,100</td>
                                    <td>Feb 17</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-success">Registered</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">sight.com</a>
                                    </td>
                                    <td>$58</td>
                                    <td className="hidden-480">6,100</td>
                                    <td>Feb 19</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-inverse arrowed-in">Flagged</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">right.com</a>
                                    </td>
                                    <td>$50</td>
                                    <td className="hidden-480">4,400</td>
                                    <td>Apr 01</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-warning">Expiring</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="center">
                                        <label className="pos-rel">
                                            <input type="checkbox" className="ace" />
                                            <span className="lbl"></span>
                                        </label>
                                    </td>

                                    <td>
                                        <a href="#">once.com</a>
                                    </td>
                                    <td>$20</td>
                                    <td className="hidden-480">1,400</td>
                                    <td>Apr 04</td>

                                    <td className="hidden-480">
                                        <span className="label label-sm label-info arrowed arrowed-righ">Sold</span>
                                    </td>

                                    <td>
                                        <div className="hidden-sm hidden-xs action-buttons">
                                            <a className="blue" href="#">
                                                <i className="ace-icon fa fa-search-plus bigger-130"></i>
                                            </a>

                                            <a className="green" href="#">
                                                <i className="ace-icon fa fa-pencil bigger-130"></i>
                                            </a>

                                            <a className="red" href="#">
                                                <i className="ace-icon fa fa-trash-o bigger-130"></i>
                                            </a>
                                        </div>

                                        <div className="hidden-md hidden-lg">
                                            <div className="inline pos-rel">
                                                <button className="btn btn-minier btn-yellow dropdown-toggle" data-toggle="dropdown" data-position="auto">
                                                    <i className="ace-icon fa fa-caret-down icon-only bigger-120"></i>
                                                </button>

                                                <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                                                    <li>
                                                        <a href="#" className="tooltip-info" data-rel="tooltip" title="View">
                                                            <span className="blue">
                                                                <i className="ace-icon fa fa-search-plus bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-success" data-rel="tooltip" title="Edit">
                                                            <span className="green">
                                                                <i className="ace-icon fa fa-pencil-square-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#" className="tooltip-error" data-rel="tooltip" title="Delete">
                                                            <span className="red">
                                                                <i className="ace-icon fa fa-trash-o bigger-120"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            </div> 
            
            
            
            {/* <!-- PAGE CONTENT ENDS --> */}
        </div>
           );
       }
   }
   export default AllQuestions;