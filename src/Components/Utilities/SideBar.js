import React, { Component } from "react";
import InLineUsers from "../MainDashboard/InLineUsers";
import Calendar from 'react-calendar';


export default class SideBar extends Component {
  render() {
    return (
      <div>
        <h1 className="maindashboard_sidebar_title">Quel jour sortir ?</h1>
        <Calendar style={{
          border: 'none'
        }} />
        <h1 className="maindashboard_sidebar_title">Ils sont en ligne</h1>
        <InLineUsers />
      </div>
    );
  }
}
