import { SearchIcon, DeleteIcon } from "../../utils/svg";
import AddTollContainer from "../AddToll/AddToll.container";
import AddVehicleContainer from "../AddVehicle/AddVehicle.container";
import Popup from "../Popup/popup.component";
import "./TollList.style.scss";

const TollList = (props) => {
  const HeaderList = () => {
    const { handleSearch } = props;

    return (
      <>
        <div className="HeaderList-Wrapper">
          <div className="HeaderList-Left">
            <p className="Entries-Text">Tollgate List</p>
            <div className="Search-Field">
              <input
                className="Search-Input"
                placeholder="Search a toll"
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

        <button onClick={handleNavigation}>Back to vehicle logs</button>
      </div>
    );
  };

  const renderTHead = () => {
    return (
      <thead className="T-Header">
        <tr>
          <th className="T-Head">Toll NAME</th>
          <th className="T-Head">CAR/JEEP/VAN</th>
          <th className="T-Head">LCV</th>
          <th className="T-Head">TRUCK/BUS</th>
          <th className="T-Head">HEAVY VEHICLE</th>
        </tr>
      </thead>
    );
  };

  const renderTBody = () => {
    const { tollLists, deleteList } = props;

    return (
      <tbody className="Table-Body">
        {tollLists?.map(
          (
            {
              id,
              tollName,
              singleJouurney_one,
              singleJouurney_two,
              returnJourney_two,
              singleJourney_three,
              returnJourney_three,
              singleJourney_four,
              returnJourney_four,
            },
            index
          ) => {
            return (
              <tr key={index}>
                <td className="T-Body Toll-Name">{tollName}</td>
                <td className="T-Body">{singleJouurney_one}</td>
                <td className="T-Body">
                  {singleJouurney_two + "/" + returnJourney_two}
                </td>
                <td className="T-Body">
                  {singleJourney_three + "/" + returnJourney_three}
                </td>
                <td className="T-Body Delete-Icon">
                  {singleJourney_four + "/" + returnJourney_four}
                  <i className="Icon" onClick={() => deleteList(id)}>
                    {DeleteIcon()}
                  </i>
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    );
  };

  const noRecordFound = () => {
    return <p className="No-RecourdFound">No records found</p>;
  };

  const renderTollList = () => {
    const { tollLists } = props;

    return (
      <>
        {HeaderList()}
        <table className="TollList-Wrapper">
          {renderTHead()}
          {renderTBody()}
        </table>
        {!tollLists && noRecordFound()}
      </>
    );
  };

  return <div className="TollList-Container">{renderTollList()}</div>;
};

export default TollList;
