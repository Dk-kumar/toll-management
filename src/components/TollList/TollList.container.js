import { useEffect, useState } from "react";
import { TOLLENTRY } from "../../Constants";
import { getBrowserData, setBrowserData } from "../../utils/browserDB";
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
  }, [isPopupOpen]);

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

  const deleteList = (id) => {
    const filteredList = getBrowserData(TOLLENTRY).filter((res) => {
      return res.id !== id;
    });

    setBrowserData(TOLLENTRY, filteredList);
    setTollLists(filteredList);
  };

  const containerFunctions = {
    onHandelPopup: (key) => onHandelPopup(key),
    handleSearch: (event) => handleSearch(event),
    setToolTip: (value) => setToolTip(value),
    deleteList: (id) => deleteList(id),
    handleNavigation: () => handleNavigation(),
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
