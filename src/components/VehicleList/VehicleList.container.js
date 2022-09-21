/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import VehicleList from "./VehicleList.component";
import { getBrowserData } from "../../utils/browserDB";
import { VEHICLE_ENTRY, TOLLENTRY } from "../../Constants";
import { useNavigate } from "react-router-dom";
import { PopupHandle } from "../../utils/InitialStates";

const VehicleListContainer = (props) => {
  const [isPopupOpen, setPopupOpen] = useState(PopupHandle);
  const [isToolTipOpen, setToolTip] = useState(false);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [tollNamesList, setTollNames] = useState();
  let [vehicleLists, setVehicleList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setVehicleList(getBrowserData(VEHICLE_ENTRY));
  }, [isPopupOpen]);

  useEffect(() => {
    setTollNames(getBrowserData(TOLLENTRY));
  }, [isToolTipOpen]);

  useEffect(() => {
    if (search) {
      setVehicleList(
        getBrowserData(VEHICLE_ENTRY).filter((res) => {
          return res.vehicleNumber.toLowerCase().includes(search.toLowerCase());
        })
      );
    } else {
      setVehicleList(getBrowserData(VEHICLE_ENTRY));
    }
  }, [search]);

  useEffect(() => {
    if (filter) {
      setVehicleList(
        vehicleLists.filter((res) => {
          return res.tollName.toLowerCase().includes(filter.toLowerCase());
        })
      );
    } else {
      setVehicleList(getBrowserData(VEHICLE_ENTRY));
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

  const handleNavigation = () => {
    navigate("/tollList");
  };

  const filteredBy = (FilteredValue) => {
    setFilter(FilteredValue);
    setToolTip(!isToolTipOpen);
  };

  const containerFunctions = {
    onHandelPopup: (key) => onHandelPopup(key),
    filteredBy: (FilteredValue) => filteredBy(FilteredValue),
    setSearch: (searchValue) => setSearch(searchValue),
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
