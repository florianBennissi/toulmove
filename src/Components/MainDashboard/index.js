import React, { Component } from "react";

import EventList from "./EventList";
import SideBar from "./../Utilities/SideBar";

export default class MainDashboard extends Component {
  state = {
    events: [
      {
        id: "5",
        title: "Footing léger",
        date: "2019-05-27T11:00:00+00:00",
        category: "Sport",
        description: `Je propose un petit footing très léger de 45 minutes envirion, au bord de la garonne au niveau de l'ile du ramier.
        Débutants bienvenus.

        Départ à 17h30 depuis le parc des expositions.`,
        city: "London, UK",
        venue: "40 rue des lois Toulouse 31000",
        hostedBy: "Bob",
        hostPhotoURL: "https://randomuser.me/api/portraits/men/46.jpg",
        attendees: [
          {
            id: "a",
            name: "Bob",
            photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
          },
          {
            id: "b",
            name: "Tom",
            photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
          }
        ]
      },
      {
        id: "1",
        title: "30 min de détente tlse centre",
        date: "2019-05-27T11:00:00+00:00",
        category: "Détente",
        description: `Bonjour les amis ovesiens 😁
          Je lance cette sortie surtout pour les personnes qui travail dans le centre de Toulouse, qui n'ont pas le temps de rentrer chez eux, qui travail assis ou debout toute la journée et qui ont envie de se détendre durant 30min ...
          Ainsi pour ceux qui reprennent à 13h pas de retard et ceux qui veulent rester pas de soucis ...
          Alors au programme, respiration et relaxation ....
          Je vous attend pour la première ce jeudi pour un moment bien être....
          A bientôt  JMarc`,
        city: "London, UK",
        venue: "40 rue des lois Toulouse 31000",
        hostedBy: "Bob",
        hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
        attendees: [
          {
            id: "a",
            name: "Bob",
            photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
          },
          {
            id: "b",
            name: "Tom",
            photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
          }
        ]
      },
      {
        id: "2",
        title: "Black lion",
        date: "2019-05-28T14:00:00+00:00",
        category: "Boire un verre",
        description:
          "Je vous propose de se retrouver pour partager une biere au black lion.",
        city: "London, UK",
        venue: `The Black Lion 4 allée paul feuga Toulouse 31000`,
        hostedBy: "JessTheBeast31",
        hostPhotoURL: "https://randomuser.me/api/portraits/women/22.jpg",
        attendees: [
          {
            id: "b",
            name: "Tom",
            photoURL: "https://randomuser.me/api/portraits/men/25.jpg"
          },
          {
            id: "a",
            name: "Bob",
            photoURL: "https://randomuser.me/api/portraits/men/32.jpg"
          },
          {
            id: "a",
            name: "Bob",
            photoURL: "https://randomuser.me/api/portraits/men/33.jpg"
          }
        ]
      },
      {
        id: "3",
        title: "Sport danse gratuit",
        date: "2019-03-28T14:00:00+00:00",
        category: "Sport",
        description: `Le fit danse c’est se dépenser sur des musiques entrainantes variées avec des chorégraphies faciles à retenir, sollicitant tout le corps 💪
          Pas besoin d’avoir fait de la danse, il suffit de se laisser entrainer par le groupe … 💃🕺

          Ouvert à tout le monde, tout niveau, gratuit ; venez seuls ou accompagnés, le but est de s'ambiancer !!! 💥`,
        city: "London, UK",
        venue: "22 allée de Barcelone, compans caffarelli Toulouse 31000",
        hostedBy: "Jennifercourt",
        hostPhotoURL: "https://randomuser.me/api/portraits/women/2.jpg",
        attendees: [
          {
            id: "b",
            name: "Tom",
            photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
          },
          {
            id: "a",
            name: "Bob",
            photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
          },
          {
            id: "c",
            name: "Bob",
            photoURL: "https://randomuser.me/api/portraits/women/5.jpg"
          }
        ]
      },
      {
        id: "4",
        title: "Les z'omni au grand-rond",
        date: "2019-05-28T14:00:00+00:00",
        category: "Musique",
        description: `Vous désirez commencer la soirée par un petit concert ? Venez découvrir, au théatre du Grand-Rond, le spectacle du groupe`,
        city: "London, UK",
        venue: "Théâtre du Grand Rond 23 rue des Potiers Toulouse 31000",
        hostedBy: "Phil_bzh",
        hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
        attendees: [
          {
            id: "b",
            name: "Tom",
            photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
          },
          {
            id: "a",
            name: "Bob",
            photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
          }
        ]
      }
    ]
  };
  render() {
    return (
      <div className="maindashboard_container">
        <div className="left">
          <EventList events={this.state.events} />
        </div>
        <div className="right">
          <SideBar />
        </div>
      </div>
    );
  }
}
