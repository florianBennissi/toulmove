import React, { Component } from "react";
import { Segment, Icon, Item, List } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default class EventListItem extends Component {
  render() {
    const { event } = this.props;

    return (
      <Segment.Group style={{
        border: 'none'
      }} >
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{event.title}</Item.Header>
                <Item.Description>
                  Organisé par <a href="www.google.com">{event.hostedBy}</a>
                </Item.Description>
                <Item.Description>
                  Catégorie(s): {event.category}
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {event.date} |
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary className="listitem_attendees">
          <span>Vont y participer:</span>
          <List horizontal>
            {" "}
            {event.attendees.map((attendee, i) => (
              <EventListAttendee key={i} attendee={attendee} />
            ))}
          </List>
        </Segment>
        <Segment clearing>
          <span className="listitem_description">{event.description}</span>
          <div>
            <Link to="/event">
              <Button
                style={{
                  backgroundColor: "#FFB650",
                  marginRight: "15px",
                  color: "#ffffff",
                  float: "right",
                  boxShadow: 'none'
                }}
                variant="contained"
                to="/"
              >
                Voir
              </Button>
            </Link>
          </div>
        </Segment>
      </Segment.Group>
    );
  }
}
