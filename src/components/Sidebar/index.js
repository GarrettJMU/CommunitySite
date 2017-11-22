import React, { Component } from 'react';
import classNames from 'classnames';
import history from '../../core/history';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
    };
  }

  render() {
    return (
      <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/'); }} >
                <i className="fa fa-home fa-fw" /> &nbsp;Home
              </a>
            </li>

            <li className={classNames({ active: !this.state.chartsElementsCollapsed })}>
              <a
                href="/diamond"
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ chartsElementsCollapsed: !this.state.chartsElementsCollapsed });
                  return false;
                }}
              >
                <i className="fa fa-shield fa-fw" /> &nbsp;Diamond SuperPro
              </a>
            </li>


            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/gold'); }} >
                <i className="fa fa-shield fa-fw" /> &nbsp;Gold SuperPro
              </a>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/forms'); }} >
                <i className="fa fa-shield fa-fw" /> &nbsp;Silver SuperPro
              </a>
            </li>

            <li className={classNames({ active: !this.state.uiElementsCollapsed })}>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  this.setState({ uiElementsCollapsed: !this.state.uiElementsCollapsed,
                }); return false;
                }}
              >
                <i className="fa fa-shield fa-fw" /> SuperPro
              </a>
            </li>
            <li>
              <a href="https://goo.gl/forms/Dvok9yNdlhFlFnf33">  <i className="fa fa-edit fa-fw" />Apply</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;
