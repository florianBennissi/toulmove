import React, { Component } from "react";

export default class UserInfos extends Component {
  render() {
    return (
      <div className="userinfos_container">
        <div className="infos">MES INFOS</div>
        <div className="infos_grid">
          {/* <div className="inscription_label">Date d'inscription</div>
          <div className="inscription_field">16 Mars 2013</div>
          <div className="connexion_label">Dernière connexion</div>
          <div className="connexion_field">12 Mars 2019 - 23h03</div> */}
          <div className="sexe"><strong>Sexe: </strong><span>Femme</span></div>
          <div className="situation"><strong>Situation: </strong><span>Célibataire</span></div>
          <div className="profession"><strong>Profession: </strong><span>Assistant commerciale</span></div>
          <div className="birthday"><strong>Date de naissance: </strong><span>12 Nov 1979</span></div>
          <div className="langages"><strong>Langues: </strong><span>Français, anglais</span></div>
          <div className="hobbies"><strong>Hobbies: </strong><span>Karaté, couture, magie noire</span></div>
        </div>
        <div className="infos">QUI JE SUIS EN QUELQUES MOTS</div>
        <div className="userdescription_wrapper">
          <div>
            <p>Forte et indépendante, je vis le rêve de toutes les filles...Forte et indépendante, je vis le rêve de toutes les filles...Forte et indépendante, je vis le rêve de toutes les filles...Forte et indépendante, je vis le rêve de toutes les filles...Forte et indépendante, je vis le rêve de toutes les filles...Forte et indépendante, je vis le rêve de toutes les filles...Forte et indépendante, je vis le rêve de toutes les filles...Forte et indépendante, je vis le rêve de toutes les filles...</p>
          </div>
        </div>
        <div className="infos">MES DERNIERES SORTIES</div>
        <div className="userdescription_wrapper">
          <div>
            <p>Forte et indépendante, je vis le rêve de toutes les filles...Forte et indépendante, je vis le rêve de toutes les filles...Forte et indépendante, je vis le rêve de toutes les filles...Forte et indépendante, je vis le rêve de toutes les filles...Forte et indépendante, je vis le rêve de toutes les filles...Forte et indépendante, je vis le rêve de toutes les filles...Forte et indépendante, je vis le rêve de toutes les filles...Forte et indépendante, je vis le rêve de toutes les filles...</p>
          </div>
        </div>
      </div>
    );
  }
}
