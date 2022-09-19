import { useEffect, useState } from "react";
import VehicleList from "./VehicleList.component";
import { getBrowserData } from "../../utils/browserDB";
import { VEHICLE_ENTRY } from "../../Constants";

const VehicleListContainer = (props) => {
  const [vehicleLists, setVehicleList] = useState([]);
  const { search, isPopupOpen } = props;

  useEffect(() => {
    setVehicleList(getBrowserData(VEHICLE_ENTRY));
  }, [isPopupOpen]);

  useEffect(() => {}, [search]);

  const containerStates = {
    vehicleLists: vehicleLists,
  };
  return <VehicleList {...containerStates} {...props} />;
};

export default VehicleListContainer;
