import React, { Component } from "react";
import EventListItem from "./EventListItem";
import Filter from "../Utilities/Filter";

export default class EventList extends Component {
  show = events => {
    return events.map((event, i) => (
      <div className="eventlist_item" key={i} >
        <EventListItem event={event} />
      </div>
    ));
  };

  onFilterClick = () => {
    alert("hello")
  }

  render() {
    const { events } = this.props;

    return (
      <div className="eventslist">
        <h1 className="maindashboard_evet_title">
          Liste des sorties d'aujourd'hui
        </h1>
        <Filter />

        {this.show(events)}
      </div>
    );
  }
}
