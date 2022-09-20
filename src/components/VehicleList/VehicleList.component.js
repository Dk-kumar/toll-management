import { FilterIcon, SearchIcon, CheckIcon } from "../../utils/svg";
import AddTollContainer from "../AddToll/AddToll.container";
import AddVehicleContainer from "../AddVehicle/AddVehicle.container";
import Popup from "../Popup/popup.component";
import "./VehicleList.style.scss";

const VehicleList = (props) => {
  const HeaderList = () => {
    const {
      handleSearch,
      tollNamesList,
      isToolTipOpen,
      setToolTip,
      filter,
      filteredBy,
    } = props;

    return (
      <>
        <div className="HeaderList-Wrapper">
          <div className="HeaderList-Left">
            <p className="Entries-Text">Toll entries/Vehicle entries</p>
            <div className="Filter-Icon Filter-ToolTip">
              <i className="Icon" onClick={() => setToolTip(!isToolTipOpen)}>
                {FilterIcon()}
              </i>
              <ul
                className={
                  isToolTipOpen ? "ToolTip-DropDown" : "Disabled-ToolTip"
                }
              >
                {tollNamesList?.map((tollNameList) => {
                  return (
                    <li
                      className="list"
                      onClick={() => filteredBy(tollNameList.name)}
                    >
                      {tollNameList.name}
                      <i className="Check-Icon">
                        {filter === tollNameList.name && CheckIcon()}
                      </i>
                    </li>
                  );
                })}
              </ul>
              <div className="Filtered-By">
                <span className="Filtered-Value">
                  Filtered By: <sapn className="Value">{filter}</sapn>
                </span>
              </div>
            </div>
            <div className="Search-Field">
              <input
                className="Search-Input"
                placeholder="Search Vehicle"
                onChange={handleSearch}
              />
              <i className="Search-Icon">{SearchIcon()}</i>
            </div>
          </div>
          <div className="HeaderList-Right">{RenderButtons()}</div>
        </div>
      </>
    );
  };

  const RenderButtons = () => {
    const {
      onHandelPopup,
      handleNavigation,
      isPopupOpen: { isVehiclePopup, isTollPopup },
    } = props;

    return (
      <div className="Button-Wrapper">
        <div className="Vehicle-Entry">
          <button onClick={() => onHandelPopup("isVehiclePopup")}>
            Add vehicle entry
          </button>
          {isVehiclePopup && (
            <Popup {...props}>
              <AddVehicleContainer {...props} />
            </Popup>
          )}
        </div>
        <div className="Toll-Entry">
          <button onClick={() => onHandelPopup("isTollPopup")}>
            Add new toll
          </button>
          {isTollPopup && (
            <Popup {...props}>
              <AddTollContainer {...props} />
            </Popup>
          )}
        </div>

        <button onClick={handleNavigation}>View all tolls</button>
      </div>
    );
  };

  const renderTHead = () => {
    return (
      <thead className="T-Header">
        <tr>
          <th className="T-Head">VEHICLE TYPE</th>
          <th className="T-Head">VEHICLE NUMBER</th>
          <th className="T-Head">DATE / TIME</th>
          <th className="T-Head">TOLL NAME</th>
          <th className="T-Head">TARIFF</th>
        </tr>
      </thead>
    );
  };

  const renderTBody = () => {
    const { vehicleLists } = props;

    return (
      <tbody className="Table-Body">
        {vehicleLists?.map(
          (
            { vehicleType, vehicleNumber, tollName, traiff, dateTime },
            index
          ) => {
            return (
              <tr key={index}>
                <td className="T-Body">{vehicleType}</td>
                <td className="T-Body Vehivle-Number">{vehicleNumber}</td>
                <td className="T-Body">{dateTime}</td>
                <td className="T-Body Toll-Name">{tollName}</td>
                <td className="T-Body">{traiff}</td>
              </tr>
            );
          }
        )}
      </tbody>
    );
  };

  const noRecordFound = () => {
    return <p className="No-RecourdFound">No record found</p>;
  };

  const renderVehicleList = () => {
    const { vehicleLists } = props;

    return (
      <>
        {HeaderList()}
        <table className="VehicelList-Wrapper">
          {renderTHead()}
          {renderTBody()}
        </table>
        {!vehicleLists && noRecordFound()}
      </>
    );
  };

  return <div className="VehicelList-Container">{renderVehicleList()}</div>;
};

export default VehicleList;
