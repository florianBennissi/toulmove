import React, { Component } from "react";
import InLineUsersItem from "./InLineUsersItem";

export default class InLineUsers extends Component {
  state = {
    onlineUsers: [
      {
        id: "1",
        pseudo: "Thierry31",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
        sex: "M",
        situationFamiliale: "célibataire",
        description: "Je suis sympa",
        dateDeNaissance: "10/06/1982"
      },
      {
        id: "2",
        pseudo: "Sophie01",
        photoURL: "https://randomuser.me/api/portraits/women/22.jpg",
        sex: "W",
        situationFamiliale: "célibataire",
        description: "Je suis sympa",
        dateDeNaissance: "10/06/1982"
      },
      {
        id: "3",
        pseudo: "MoundirChouffy",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
        sex: "M",
        situationFamiliale: "célibataire",
        description: "Je suis sympa",
        dateDeNaissance: "10/06/1982"
      },
      {
        id: "4",
        pseudo: "PetitesFleurs",
        photoURL: "https://randomuser.me/api/portraits/men/19.jpg",
        sex: "M",
        situationFamiliale: "célibataire",
        description: "Je suis sympa",
        dateDeNaissance: "10/06/1982"
      },
      {
        id: "5",
        pseudo: "Epsilon31",
        photoURL: "https://randomuser.me/api/portraits/men/15.jpg",
        sex: "M",
        situationFamiliale: "célibataire",
        description: "Je suis sympa",
        dateDeNaissance: "10/06/1982"
      },
      {
        id: "6",
        pseudo: "Flicka",
        photoURL: "https://randomuser.me/api/portraits/women/20.jpg",
        sex: "W",
        situationFamiliale: "célibataire",
        description: "Je suis sympa",
        dateDeNaissance: "10/06/1982"
      },
      {
        id: "7",
        pseudo: "Kaleesi",
        photoURL: "https://randomuser.me/api/portraits/women/15.jpg",
        sex: "W",
        situationFamiliale: "célibataire",
        description: "Je suis sympa",
        dateDeNaissance: "10/06/1982"
      },
      {
        id: "8",
        pseudo: "Nono36Boulons",
        photoURL: "https://randomuser.me/api/portraits/men/12.jpg",
        sex: "M",
        situationFamiliale: "célibataire",
        description: "Je suis sympa",
        dateDeNaissance: "10/06/1982"
      }
    ]
  };

  render() {
    return (
      <div className="inlineusers_container">
        {this.state.onlineUsers.map((onlineUser, i) => (
          <InLineUsersItem key={i} onLineUser={onlineUser} />
        ))}
      </div>
    );
  }
}
