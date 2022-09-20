import { useEffect, useState } from "react";
import { TOLLENTRY } from "../../Constants";
import { getBrowserData, setBrowserData } from "../../utils/browserDB";
import { VehicleNames, AddTollState } from "../../utils/InitialStates";
import { Validator, TypeChecker } from "../../utils/validator";
import AddToll from "./AddToll.component";

const AddTollContainer = (props) => {
  const [tollEntry, setTollEntry] = useState(AddTollState);
  const [isButtonEnable, setButtonEnable] = useState(false);

  useEffect(() => {
    setButtonEnable(!Validator(tollEntry));
  }, [tollEntry]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    if (!TypeChecker(name, value)) {
      setTollEntry({
        ...tollEntry,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { onHandelPopup } = props;
    const tollEntryData = [];

    tollEntry["id"] = getBrowserData(TOLLENTRY)?.length || 0;
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
    isButtonEnable: isButtonEnable,
    tollEntry: tollEntry,
  };

  const containerFunctions = {
    handleOnChange: (event) => handleOnChange(event),
    handleSubmit: (event) => handleSubmit(event),
  };

  return <AddToll {...containerStates} {...containerFunctions} {...props} />;
};

export default AddTollContainer;
