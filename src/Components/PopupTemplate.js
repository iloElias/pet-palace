import React from "react";
import { useSpring, animated } from "react-spring";
import CloseIcon from "../svgs/closeWindowIcon.svg";
import PopupLogo from "../images/popupLogo.png";
import "./PopupTemplate.css";
import Logo from "./Logo";

function InnerWindow({ dialogImg, title, onClose, children, message }) {

  return (
    <>
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
            <></>
          )}
          {title ? title : "Caixa de dialogo"}
        </div>
        <div className="close-button-container">
          {onClose ? (
            <button onClick={onClose}>
              <img src={CloseIcon} alt="Icone de fechamento" />
            </button>
          ) : <></>}
        </div>
      </div>
      <div className="popup-body">
        {children ? children : message ? message : "Nada a ser mostrado"}
      </div>
    </>
  )
}

function PopupTemplate({ children, onClose, dialogImg, title, message }) {
  const windowAnimationProps = useSpring({
    from: { opacity: 0, top: 50 },
    to: {opacity: 1, top: 0},
  });

  const backgroundAnimationProps = useSpring({
    from: { opacity: 0 },
    to: {opacity: 1}
  });

  return (
    <>
      {
        onClose ? (
          <animated.span style={backgroundAnimationProps} className="popup-modal">
            <animated.div style={windowAnimationProps} className="popup-window">
              <InnerWindow onClose={onClose} dialogImg={dialogImg} title={title} children={children} message={message} />
            </animated.div>
          </animated.span>
        ) : (
          <span className="generic-window">
            <div className="popup-window">
              <InnerWindow onClose={onClose} dialogImg={dialogImg} title={title} children={children} message={message} />
            </div>
          </span>
        )
      }
    </>
  );
}

export default PopupTemplate;
