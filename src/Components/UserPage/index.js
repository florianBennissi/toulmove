import React, { Component } from "react";

import UserPageDescription from "./UserPageDescription";
import SideBar from "../Utilities/SideBar";

export default class UserPage extends Component {
  render() {
    return (
      <div className="userpage_container">
        <div className="left">
          <UserPageDescription />
        </div>
        <div className="right">
          <SideBar />
        </div>
      </div>
    );
  }
}
