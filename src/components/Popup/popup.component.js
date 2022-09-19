import ReactDOM from "react-dom";
import { CloseIcon } from "../../utils/svg";
import "./popup.style.scss";

const Popup = (props) => {
  const { onHandelPopup, isPopupOpen, children } = props;

  const RenderPopup = () => {
    // if (!isPopupOpen) return null;
    return ReactDOM.createPortal(
      <div className="Popup-Container">
        <div className="Popup-Wrapper">
          <button className="Close-Button" onClick={() => onHandelPopup('')}>
            {CloseIcon()}
          </button>
          <div className="Popup-Content">{children}</div>
        </div>
      </div>,
      document.getElementById("popup")
    );
  };
  return <div className="Popup  ">{RenderPopup()}</div>;
};

export default Popup;
