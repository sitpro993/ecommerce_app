import React from "react";

import { Dropdown } from "react-bootstrap";

export default function AdminTopNav() {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here..."></input>
        <i className="fas fa-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-custom-components"
              className="topnav__right-user__name"
            >
              Nguyễn Văn Hồng
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="topnav__right-item">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="topnav__right-item">{/* <ThemeMenu /> */}</div>
      </div>
    </div>
  );
}
