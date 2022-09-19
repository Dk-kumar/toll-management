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
    const { vehicleNames, handleOnChange, handleSubmit, isButtonEnable } =
      props;

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
          <div className="Field-Input">
            <label className="Label">Toll Name</label>
            <input
              type={"text"}
              name="tollName"
              placeholder="Toll name"
              autocomplete="off"
              onChange={handleOnChange}
            />
          </div>
          <div className="Field-Input">
            <label className="Label">Traiff</label>
            <input
              type={"text"}
              name="traiff"
              placeholder="Traiff amount"
              autocomplete="off"
              onChange={handleOnChange}
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
