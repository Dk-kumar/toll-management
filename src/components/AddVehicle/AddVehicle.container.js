import { useEffect, useState } from "react";
import AddVehicle from "./AddVehicle.component";
import { getBrowserData, setBrowserData } from "../../utils/browserDB";
import { VEHICLE_ENTRY } from "../../Constants";
import { Validator } from "../../utils/validator";
import { AddVehicleState, VehicleNames } from "../../utils/InitialStates";

const AddVehicleContainer = (props) => {
  const [vehicleEntry, setVehicleEntry] = useState(AddVehicleState);
  const [isButtonEnable, setButtonEnable] = useState(false);

  useEffect(() => {
    setButtonEnable(!Validator(vehicleEntry));
  }, [vehicleEntry]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setVehicleEntry({
      ...vehicleEntry,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { onHandelPopup } = props;
    const vehicleEntryData = [];

    const vehicleEntryObj = {
      ...vehicleEntry,
      dateTime: getDateTime(),
    };

    if (getBrowserData(VEHICLE_ENTRY)?.length > 0) {
      const browserData = getBrowserData(VEHICLE_ENTRY);

      browserData.push(vehicleEntryObj);
      setBrowserData(VEHICLE_ENTRY, browserData);
    } else {
      vehicleEntryData.push(vehicleEntryObj);
      setBrowserData(VEHICLE_ENTRY, vehicleEntryData);
    }
    onHandelPopup();
  };

  const getDateTime = () => {
    let dateTime = new Date();

    return `${String(dateTime.getDate()).padStart(2, "0")}/${String(
      dateTime.getMonth() + 1
    ).padStart(
      2,
      "0"
    )}/${dateTime.getFullYear()},${dateTime.toLocaleTimeString()}`;
  };

  const containerStates = {
    vehicleNames: VehicleNames,
    isButtonEnable: isButtonEnable,
  };

  const containerFunctions = {
    handleOnChange: (event) => handleOnChange(event),
    handleSubmit: (event) => handleSubmit(event),
  };

  return <AddVehicle {...containerStates} {...containerFunctions} {...props} />;
};

export default AddVehicleContainer;
