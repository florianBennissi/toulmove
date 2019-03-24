import React, { Component } from "react";
import UserHeader from "./UserHeader";
import UserInfos from "./UserInfos";

export default class UserPageDescription extends Component {
  render() {
    return (
      <div className="userpagedescription_container">
        <UserHeader />
        <UserInfos />
      </div>
    );
  }
}
