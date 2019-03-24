import React, { Component } from 'react'
import { Link } from "react-router-dom";
import filter from "./../../Resources/images/Filter-Transparent-Background.png"
import { Radio } from 'semantic-ui-react'
import Button from "@material-ui/core/Button";
import close from './../../Resources/images/close.png';

export default class Filter extends Component {


    openFilter = () => {

        const filter_wrapper = this.refs.filter_wrapper;
        filter_wrapper.classList.add('open_filter');

        const filter_icon_div = this.refs.filter_icon_div;
        filter_icon_div.classList.add('close_div');
    }
    closeFilter = () => {

        const filter_wrapper = this.refs.filter_wrapper;
        filter_wrapper.classList.remove('open_filter');

        const filter_icon_div = this.refs.filter_icon_div;
        filter_icon_div.classList.remove('close_div');
    }

    render() {
        return (
            <div>
                <div className="filter_container">
                    <div className="filter_icon_wrapper" ref="filter_icon_div" onClick={() => this.openFilter()}>
                        <Link to="/create_event">
                            <Button
                                style={{
                                    backgroundColor: "#FFB650",
                                    marginRight: "15px",
                                    color: "#ffffff",
                                    boxShadow: 'none'
                                }}
                                variant="contained"
                                to="/"
                            >
                                Créer une sortie
                        </Button>
                        </Link>
                        <div className="filter_icon_div" >
                            <span>Filtrer les sorties</span>
                            <img src={filter} alt="" />
                        </div>
                    </div>
                    <div className="filter_wrapper" ref="filter_wrapper">
                        <img src={close} alt="close_cross" className="filter_close_cross" onClick={() => this.closeFilter()} />
                        <span className="category_label">Catégories</span>
                        <select className="category_select">
                            <option value="">        </option>
                            <option value="Homme">Boire un verre</option>
                            <option value="Femme">Manger, restaurant</option>
                            <option value="Femme">Danser</option>
                            <option value="Femme">Sport</option>
                            <option value="Homme">Musique</option>
                            <option value="Femme">Spectacle</option>
                            <option value="Femme">Film</option>
                            <option value="Femme">Bien-être</option>
                        </select>
                        <span className="myfriends_label">Mes amis</span>
                        <select className="myfriends_select">
                            <option value="">        </option>
                            <option value="Homme">organisent la sortie</option>
                            <option value="Femme">participent à la sortie</option>
                        </select>
                        <Radio label='Sorties gratuites' className="free_radio" />
                        <Radio label='Sorties avec enfants' className="withkids_radio" />
                        <Button
                            className="filter_button"
                            style={{
                                backgroundColor: "#FFB650",
                                color: "#ffffff",
                                width: '100%'
                            }}
                            variant="contained"
                            to="/"
                        >
                            filtrer
                            </Button>
                    </div>
                </div>
            </div>
        )
    }
}
