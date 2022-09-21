import { useEffect, useState } from "react";
import AddVehicle from "./AddVehicle.component";
import { getBrowserData, setBrowserData } from "../../utils/browserDB";
import { VEHICLE_ENTRY } from "../../Constants";
import { Validator } from "../../utils/validator";
import { AddVehicleState, VehicleNames } from "../../utils/InitialStates";

const AddVehicleContainer = (props) => {
  const [vehicleEntry, setVehicleEntry] = useState(AddVehicleState);
  const [isButtonEnable, setButtonEnable] = useState(false);
  const [dbVehicleEntry, setDbVehicleEntry] = useState();

  useEffect(() => {
    setButtonEnable(!Validator(vehicleEntry));
    setDbVehicleEntry(getBrowserData(VEHICLE_ENTRY));
  }, [vehicleEntry]);

  useEffect(() => {
    calCulatTariff();
  });

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
      date: getDateTime().date,
      time: getDateTime().time,
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
    let date = new Date();

    return {
      date: `${String(date.getDate()).padStart(2, "0")}/${String(
        date.getMonth() + 1
      ).padStart(2, "0")}/${date.getFullYear()}`,
      time: date.toLocaleTimeString(),
    };
  };

  const calCulatTariff = () => {
    const { tollNamesList } = props;

    tollNamesList?.map((res) => {
      if (res.tollName.toLowerCase() === vehicleEntry.tollName.toLowerCase()) {
        if (res.tollType_one === vehicleEntry.vehicleType) {
          setTariffAmount(res.singleJourney_one, res.returnJourney_one);
        } else if (res.tollType_two === vehicleEntry.vehicleType) {
          setTariffAmount(res.singleJourney_two, res.returnJourney_two);
        } else if (res.tollType_three === vehicleEntry.vehicleType) {
          setTariffAmount(res.singleJourney_three, res.returnJourney_three);
        } else if (res.tollType_four === vehicleEntry.vehicleType) {
          setTariffAmount(res.singleJourney_four, res.returnJourney_four);
        }
      }
    });
  };

  const setTariffAmount = (singleJourney, returnJourney) => {
    let tariffValue = returnTariffBoolen();

    vehicleEntry.tariff =
      tariffValue?.length > 0 ? returnJourney : singleJourney;
    setVehicleEntry(vehicleEntry);
  };

  const returnTariffBoolen = () => {
    const boolean = dbVehicleEntry?.filter((res) => {
      let date = res?.date.split("/");
      let time = res?.time.split(":");
      let dateTime = new Date(
        date[2],
        date[1],
        date[0],
        time[0],
        time[1],
        time[2]
      );

      if (
        new Date().getHours() - dateTime?.getHours() <= 1 &&
        res.vehicleNumber.toLowerCase() ===
          vehicleEntry.vehicleNumber.toLowerCase() &&
        res.vehicleType === vehicleEntry.vehicleType
      ) {
        return res;
      }
    });
    return boolean;
  };

  const containerStates = {
    vehicleNames: VehicleNames,
    isButtonEnable: isButtonEnable,
    vehicleEntry: vehicleEntry,
  };

  const containerFunctions = {
    handleOnChange: (event) => handleOnChange(event),
    handleSubmit: (event) => handleSubmit(event),
  };

  return <AddVehicle {...containerStates} {...containerFunctions} {...props} />;
};

export default AddVehicleContainer;
