import { useEffect, useState } from "react";
import { TOLLENTRY } from "../../Constants";
import { getBrowserData } from "../../utils/browserDB";
import { useNavigate } from "react-router-dom";
import { PopupHandle } from "../../utils/InitialStates";
import TollList from "./TollList.component";

const TollListContainer = () => {
  const [tollLists, setTollLists] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(PopupHandle);
  const [isToolTipOpen, setToolTip] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setTollLists(getBrowserData(TOLLENTRY));
  }, []);

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
    navigate("/");
  };

  const containerFunctions = {
    onHandelPopup: (key) => onHandelPopup(key),
    handleSearch: (event) => handleSearch(event),
    handleNavigation: () => handleNavigation(),
    setToolTip: (value) => setToolTip(value),
  };

  const containerStates = {
    isPopupOpen: isPopupOpen,
    search: search,
    isToolTipOpen: isToolTipOpen,
    tollLists: tollLists,
  };

  return <TollList {...containerStates} {...containerFunctions} />;
};

export default TollListContainer;
