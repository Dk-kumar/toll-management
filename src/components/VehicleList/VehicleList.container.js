/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import VehicleList from "./VehicleList.component";
import { getBrowserData } from "../../utils/browserDB";
import { VEHICLE_ENTRY } from "../../Constants";
import { useNavigate } from "react-router-dom";
import { PopupHandle } from "../../utils/InitialStates";
import { TOLLENTRY } from "../../Constants";

const VehicleListContainer = (props) => {
  const [isPopupOpen, setPopupOpen] = useState(PopupHandle);
  const [isToolTipOpen, setToolTip] = useState(false);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [tollNamesList, setTollNames] = useState([]);
  const [vehicleLists, setVehicleList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setVehicleList(getBrowserData(VEHICLE_ENTRY));
  }, [isPopupOpen]);

  useEffect(() => {
    setTollNames(getBrowserData(TOLLENTRY));
  }, [isToolTipOpen]);

  useEffect(() => {}, [search]);

  useEffect(() => {
    if (filter) {
      let filteredBy = vehicleLists.filter((res) => {
        return res.tollName === filter;
      });

      setVehicleList(filteredBy);
    }
  }, [filter]);

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

  const filteredBy = (FilteredValue) => {
    setFilter(FilteredValue);
    setToolTip(!isToolTipOpen);
  };

  const containerFunctions = {
    onHandelPopup: (key) => onHandelPopup(key),
    handleSearch: (event) => handleSearch(event),
    filteredBy: (FilteredValue) => filteredBy(FilteredValue),
    handleNavigation: () => handleNavigation(),
    setToolTip: (value) => setToolTip(value),
  };

  const containerStates = {
    isPopupOpen: isPopupOpen,
    search: search,
    tollNamesList: tollNamesList,
    isToolTipOpen: isToolTipOpen,
    filter: filter,
    vehicleLists: vehicleLists,
  };

  return (
    <VehicleList {...containerStates} {...containerFunctions} {...props} />
  );
};

export default VehicleListContainer;
