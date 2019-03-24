import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Logo from "./../../Resources/images/croix-toulouse.png";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <header>
        <div className="header_container">
          <Link to="/">
            <div className="left">
              <img src={Logo} alt="logo" className="brand_logo" />
              <div className="brand_text">
                <div className="brand_name">Toul'Move !</div>
                <div className="subtitle">Le Toulouse qui bouge</div>
              </div>
            </div>
          </Link>
          <div className="right">
            <Link to="/signin">
              <Button
                style={{
                  backgroundColor: "#FFB650",
                  marginRight: "15px",
                  color: "#ffffff",
                  boxShadow: 'none'
                }}
                variant="contained"
              >
                Connexion
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="contained" style={{
                backgroundColor: "#FFB650",
                marginRight: "15px",
                color: "#ffffff",
                boxShadow: 'none'
              }}>Inscription</Button>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}
