import Logo from "./Logo";
import CloseIcon from "../svgs/closeWindowIcon.svg";
import PopupLogo from "../images/popupLogo.png";
import { LoginInputs } from "./AcountInputs";
import "./PopupTemplate.css";

function PopupTemplate(props) {
    return (
        <span className="popup-modal">
            <div className="popup-window">
                <div className="popup-header">
                    <div className="popup-logo"><Logo img={PopupLogo} noName /></div>
                    <div className="popup-title">
                        {props.dialogImg ? (<img className="popup-dialog-image" src={props.dialogImg} alt="Imagem de Dialogo" />) : ""}
                        {props.title ? props.title : "Caixa de dialogo"}
                    </div>
                    <div className="close-button-container">
                        <button onClick={props.closeWindowAction}><img src={CloseIcon} alt="Icone de fechamento" /></button>
                    </div>
                </div>
                <div className="popup-body">
                    {/* {props.Component ? props.Component : props.message ? props.message : "Nada a ser mostrado"} */}
                    <LoginInputs />
                </div>
            </div>
        </span>
    )
}

export default PopupTemplate