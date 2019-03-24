import React, { Component } from 'react';
import SideBar from "../Utilities/SideBar";
import RegisterPageInfos from './RegisterPageInfos';

export default class Register extends Component {
    render() {
        return (
            <div className="registerpage_container">
                <div className="left">
                    <RegisterPageInfos />
                </div>
                <div className="right">
                    <SideBar />
                </div>
            </div>
        );
    }
}
