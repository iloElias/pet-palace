import React from "react";
import { useSpring, animated } from "react-spring";
import CloseIcon from "../svgs/closeWindowIcon.svg";
import PopupLogo from "../images/popupLogo.png";
import "./PopupTemplate.css";
import Logo from "./Logo";

function PopupTemplate({ onClose, dialogImg, title, component, message }) {
  const windowAnimationProps = useSpring({
    opacity: 1,
    top: 0,
    from: { opacity: 0, top: 50 },
  });

  const backgroundAnimationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.span style={backgroundAnimationProps} className="popup-modal">
      <animated.div style={windowAnimationProps} className="popup-window">
        <div className="popup-header">
          <div className="popup-logo">
            <Logo img={PopupLogo} noName />
          </div>
          <div className="popup-title">
            {dialogImg ? (
              <img
                className="popup-dialog-image"
                src={dialogImg}
                alt="Imagem de Dialogo"
              />
            ) : (
              ""
            )}
            {title ? title : "Caixa de dialogo"}
          </div>
          <div className="close-button-container">
            <button onClick={onClose}>
              <img src={CloseIcon} alt="Icone de fechamento" />
            </button>
          </div>
        </div>
        <div className="popup-body">
          {component ? component : message ? message : "Nada a ser mostrado"}
        </div>
      </animated.div>
    </animated.span>
  );
}

export default PopupTemplate;
