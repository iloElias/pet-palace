import Logo from "./Logo";
import CloseIcon from "../svgs/closeWindowIcon.svg";
import PopupLogo from "../images/popupLogo.png";
// import { LoginInputs, SingInInputs } from "./AcountInputs";
import "./PopupTemplate.css";

function PopupTemplate({ onClose, dialogImg, title, component, message }) {
    return (
        <span className="popup-modal">
            <div className="popup-window">
                <div className="popup-header">
                    <div className="popup-logo"><Logo img={PopupLogo} noName /></div>
                    <div className="popup-title">
                        {dialogImg ? (<img className="popup-dialog-image" src={dialogImg} alt="Imagem de Dialogo" />) : ""}
                        {title ? title : "Caixa de dialogo"}
                    </div>
                    <div className="close-button-container">
                        <button onClick={onClose}><img src={CloseIcon} alt="Icone de fechamento" /></button>
                    </div>
                </div>
                <div className="popup-body">
                    {component ? component : message ? message : "Nada a ser mostrado"}
                </div>
            </div>
        </span>
    )
}

export default PopupTemplate