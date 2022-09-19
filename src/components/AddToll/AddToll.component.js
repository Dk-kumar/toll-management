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
    const { vehicleNames, handleOnChange, handleSubmit, isButtonEnable } =
      props;

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
                  name="singleJouurney_one"
                  placeholder="Single Journey"
                  autocomplete="off"
                  onChange={handleOnChange}
                />
              </div>
              <div className="Field-Input">
                <input
                  type={"text"}
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
                  name="singleJouurney_two"
                  placeholder="Single Journey"
                  autocomplete="off"
                  onChange={handleOnChange}
                />
              </div>
              <div className="Field-Input">
                <input
                  type={"text"}
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
                  name="singleJourney_three"
                  placeholder="Single Journey"
                  autocomplete="off"
                  onChange={handleOnChange}
                />
              </div>
              <div className="Field-Input">
                <input
                  type={"text"}
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
                  name="singleJourney_four"
                  placeholder="Single Journey"
                  autocomplete="off"
                  onChange={handleOnChange}
                />
              </div>
              <div className="Field-Input">
                <input
                  type={"text"}
                  name="returnJourney_four"
                  placeholder="Return Journey"
                  autocomplete="off"
                  onChange={handleOnChange}
                />
              </div>
            </div>
          </div>
          <div className={isButtonEnable ? "Disabled" : "Submit-Button"}>
            <input
              className="Submit"
              // disabled={!isButtonEnable}
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
