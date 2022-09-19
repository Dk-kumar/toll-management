import { useState } from "react";
import { TOLLENTRY } from "../../Constants";
import { getBrowserData, setBrowserData } from "../../utils/browserDB";
import { VehicleNames } from "../../utils/InitialStates";
import AddToll from "./AddToll.component";

const AddTollContainer = (props) => {
  const [tollEntry, setTollEntry] = useState({});

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setTollEntry({
      ...tollEntry,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { onHandelPopup } = props;
    const tollEntryData = [];
    
    if (getBrowserData(TOLLENTRY)?.length > 0) {
      const browserData = getBrowserData(TOLLENTRY);

      browserData.push(tollEntry);
      setBrowserData(TOLLENTRY, browserData);
    } else {
      tollEntryData.push(tollEntry);
      setBrowserData(TOLLENTRY, tollEntryData);
    }
    onHandelPopup();
  };

  const containerStates = {
    vehicleNames: VehicleNames,
  };

  const containerFunctions = {
    handleOnChange: (event) => handleOnChange(event),
    handleSubmit: (event) => handleSubmit(event),
  };

  return <AddToll {...containerStates} {...containerFunctions} {...props} />;
};

export default AddTollContainer;
