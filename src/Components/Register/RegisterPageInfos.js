import React, { Component } from 'react'
import Fileuploader from '../Utilities/FileUploader';
import Button from "@material-ui/core/Button";

export default class RegisterPageInfos extends Component {

    state = {

        defaultImg: '',
        imageName: ''
    }
    render() {
        return (
            <div className="Register_infos">
                <h2>Inscription</h2>
                <form>
                    <div className="form_grid">
                        <div className="profileimage_label">Ajoutez une image à votre profil</div>
                        <div className="profileimage_uploader">
                            <Fileuploader
                                dir="players"
                                tag={""}
                                defaultImg={this.state.defaultImg}
                                defaultImgName={this.state.imageName}
                                resetImage={() => this.resetImage()}
                                filename={(filename) => this.storeFilename(filename)}
                            />
                        </div>
                        <div className="pseudo_label">Choisir un Pseudo</div>
                        <input type="text" className="pseudo_input" />
                        <div className="email_label">Votre adresse mail</div>
                        <input type="email" className="email_input" />
                        <div className="password_label">Mot de passe</div>
                        <input type="password" className="password_input" />
                        <div className="confpassword_label">Confirmation du mot de passe</div>
                        <input type="password" className="confpassword_input" />
                        <div className="sexe_label">Sexe</div>
                        <div className="sexe_select">
                            <select>
                                <option value="">        </option>
                                <option value="Homme">Homme</option>
                                <option value="Femme">Femme</option>
                            </select>
                        </div>
                        <div className="situation_label">Situation</div>
                        <div className="situation_select">
                            <select>
                                <option value="">        </option>
                                <option value="Homme">Célibataire, sans enfant</option>
                                <option value="Femme">Célibataire, avec enfant(s)</option>
                                <option value="Femme">En couple, sans enfant</option>
                                <option value="Femme">En couple, avec enfant(s)</option>
                            </select>
                        </div>
                        <div className="citation_label">Votre citation préférée</div>
                        <textarea className="citation_area"></textarea>
                        <div className="description_label">Parlez nous un peu de vous</div>
                        <textarea className="description_area" ></textarea>
                        <Button
                            className="submit_button"
                            style={{
                                backgroundColor: "#FFB650",
                                marginRight: "15px",
                                color: "#ffffff"
                            }}
                            variant="contained"
                            to="/"
                        >
                            S'enregistrer
                        </Button>
                    </div>
                </form>

            </div>
        )
    }
}
