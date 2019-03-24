import React, { Component } from 'react'
import UserPageDescription from '../UserPage/UserPageDescription';
import SideBar from '../Utilities/SideBar';
import EventPageMain from './EventPageMain';

export default class EventPage extends Component {
    render() {
        return (
            <div>
                <div className="userpage_container">
                    <div className="left">
                        <EventPageMain />
                    </div>
                    <div className="right">
                        <SideBar />
                    </div>
                </div>
            </div>
        )
    }
}
