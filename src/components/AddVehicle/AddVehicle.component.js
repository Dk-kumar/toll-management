import "./AddVehicle.style.scss";

const AddVehicle = (props) => {
  const Heading = () => {
    return (
      <div className="Headding">
        <h3>Add new entry</h3>
      </div>
    );
  };

  const renderFields = () => {
    const {
      vehicleNames,
      vehicleEntry,
      tollNamesList,
      handleOnChange,
      handleSubmit,
      isButtonEnable,
    } = props;
    return (
      <>
        {Heading()}
        <form
          name="AddVehicleForm"
          className="Field-Container"
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className="Field-DropDown">
            <label className="Label">Select vehicle type</label>
            <select
              className="DropDown-List"
              name="vehicleType"
              onChange={handleOnChange}
            >
              <option>Select vehicle type</option>
              {vehicleNames.map((vehicleName) => {
                return <option>{vehicleName.name}</option>;
              })}
            </select>
          </div>
          <div className="Field-Input">
            <label className="Label">Vehicle Number</label>
            <input
              type={"text"}
              name="vehicleNumber"
              placeholder="Ender your login id"
              autocomplete="off"
              onChange={handleOnChange}
            />
          </div>
          <div className="Field-DropDown">
            <label className="Label">Select toll name</label>
            <select
              className="DropDown-List"
              name="tollName"
              onChange={handleOnChange}
            >
              <option>Select toll name</option>
              {tollNamesList?.map(({ tollName }) => {
                return <option>{tollName}</option>;
              })}
            </select>
          </div>
          <div className="Field-Input">
            <label className="Label">Tariff</label>
            <input
              type={"text"}
              name="tariff"
              placeholder="Tariff amount"
              autocomplete="off"
              value={vehicleEntry.tariff ? vehicleEntry.tariff : ""}
              onChange={handleOnChange}
              disabled={true}
            />
          </div>
          <div className={isButtonEnable ? "Submit-Button" : "Disabled"}>
            <input
              className="Submit"
              disabled={!isButtonEnable}
              type={"submit"}
              value={"Add Entry"}
            />
          </div>
        </form>
      </>
    );
  };

  return <div className="AddVehicle-Container">{renderFields()}</div>;
};

export default AddVehicle;
