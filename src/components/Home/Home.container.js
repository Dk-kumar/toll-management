import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home.component";
import { PopupHandle } from "../../utils/InitialStates";

const HomeContainer = () => {
  const [isPopupOpen, setPopupOpen] = useState(PopupHandle);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const onHandelPopup = (key) => {
    if (!key) {
      setPopupOpen({
        isVehiclePopup: false,
        isTollPopup: false,
      });
    } else {
      setPopupOpen({
        ...isPopupOpen,
        [key]: !isPopupOpen[key],
      });
    }
  };

  const handleSearch = (event) => {
    const { value } = event.target;

    setSearch(value);
  };

  const handleNavigation = () => {
    navigate("/tollList");
  };

  const containerFunctions = {
    onHandelPopup: (key) => onHandelPopup(key),
    handleSearch: (event) => handleSearch(event),
    handleNavigation: () => handleNavigation(),
  };

  const containerStates = {
    isPopupOpen: isPopupOpen,
    search: search,
  };

  return <Home {...containerFunctions} {...containerStates} />;
};

export default HomeContainer;
