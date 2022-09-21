import "./AddToll.style.scss";

const AddToll = (props) => {
  const Heading = () => {
    return (
      <div className="Headding">
        <h3>Add new toll</h3>
      </div>
    );
  };

  const renderFields = () => {
    const {
      vehicleNames,
      handleOnChange,
      handleSubmit,
      isButtonEnable,
      tollEntry,
    } = props;

    return (
      <>
        {Heading()}
        <form
          name="AddTollForm"
          className="Field-Container"
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className="Field-Input">
            <label className="Label">Toll Name</label>
            <input
              type={"text"}
              value={tollEntry.tollName}
              name="tollName"
              placeholder="Enter toll name"
              autocomplete="off"
              onChange={handleOnChange}
            />
          </div>
          <div className="Vehicle-Fare">
            <p className="Label">Vehicle fare details</p>
            <div className="Field-Wrapper">
              <div className="Field-DropDown">
                <select
                  className="DropDown-List"
                  name="tollType_one"
                  onChange={handleOnChange}
                >
                  <option>Select vehicle type</option>
                  {vehicleNames.map((vehicleName) => {
                    return <option>{vehicleName.name}</option>;
                  })}
                </select>
              </div>
              <div className="Field-Input">
                <input
                  type={"text"}
                  value={tollEntry.singleJourney_one}
                  name="singleJourney_one"
                  placeholder="Single Journey"
                  autocomplete="off"
                  onChange={handleOnChange}
                />
              </div>
              <div className="Field-Input">
                <input
                  type={"text"}
                  value={tollEntry.returnJourney_one}
                  name="returnJourney_one"
                  placeholder="Return Journey"
                  autocomplete="off"
                  onChange={handleOnChange}
                />
              </div>
              <div className="Field-DropDown">
                <select
                  className="DropDown-List"
                  name="tollType_two"
                  onChange={handleOnChange}
                >
                  <option>Select vehicle type</option>
                  {vehicleNames.map((vehicleName) => {
                    return <option>{vehicleName.name}</option>;
                  })}
                </select>
              </div>
              <div className="Field-Input">
                <input
                  type={"text"}
                  value={tollEntry.singleJourney_two}
                  name="singleJourney_two"
                  placeholder="Single Journey"
                  autocomplete="off"
                  onChange={handleOnChange}
                />
              </div>
              <div className="Field-Input">
                <input
                  type={"text"}
                  value={tollEntry.returnJourney_two}
                  name="returnJourney_two"
                  placeholder="Return Journey"
                  autocomplete="off"
                  onChange={handleOnChange}
                />
              </div>
              <div className="Field-DropDown">
                <select
                  className="DropDown-List"
                  name="tollType_three"
                  onChange={handleOnChange}
                >
                  <option>Select vehicle type</option>
                  {vehicleNames.map((vehicleName) => {
                    return <option>{vehicleName.name}</option>;
                  })}
                </select>
              </div>
              <div className="Field-Input">
                <input
                  type={"text"}
                  value={tollEntry.singleJourney_three}
                  name="singleJourney_three"
                  placeholder="Single Journey"
                  autocomplete="off"
                  onChange={handleOnChange}
                />
              </div>
              <div className="Field-Input">
                <input
                  type={"text"}
                  value={tollEntry.returnJourney_three}
                  name="returnJourney_three"
                  placeholder="Return Journey"
                  autocomplete="off"
                  onChange={handleOnChange}
                />
              </div>
              <div className="Field-DropDown">
                <select
                  className="DropDown-List"
                  name="tollType_four"
                  onChange={handleOnChange}
                >
                  <option>Select vehicle type</option>
                  {vehicleNames.map((vehicleName) => {
                    return <option>{vehicleName.name}</option>;
                  })}
                </select>
              </div>
              <div className="Field-Input">
                <input
                  type={"text"}
                  value={tollEntry.singleJourney_four}
                  name="singleJourney_four"
                  placeholder="Single Journey"
                  autocomplete="off"
                  onChange={handleOnChange}
                />
              </div>
              <div className="Field-Input">
                <input
                  type={"text"}
                  value={tollEntry.returnJourney_four}
                  name="returnJourney_four"
                  placeholder="Return Journey"
                  autocomplete="off"
                  onChange={handleOnChange}
                />
              </div>
            </div>
          </div>
          <div className={isButtonEnable ? "Submit-Button" : "Disabled"}>
            <input
              className="Submit"
              disabled={!isButtonEnable}
              type={"submit"}
              value={"Add details"}
            />
          </div>
        </form>
      </>
    );
  };

  return <div className="AddToll-Container">{renderFields()}</div>;
};

export default AddToll;
