import { FilterIcon, SearchIcon } from "../../utils/svg";
import AddTollContainer from "../AddToll/AddToll.container";
import AddVehicleContainer from "../AddVehicle/AddVehicle.container";
import Popup from "../Popup/popup.component";
import VehicleListContainer from "../VehicleList/VehicleList.container";
import "./Home.style.scss";

const Home = (props) => {
  const Heading = () => {
    return (
      <div className="Heading-Wrapper">
        <h4 className="Heading">Toll Management Application</h4>
      </div>
    );
  };

  const HeaderList = () => {
    const { handleSearch } = props;

    return (
      <>
        {Heading()}
        <div className="HeaderList-Wrapper">
          <div className="HeaderList-Left">
            <p className="Entries-Text">Toll entries/Vehicle entries</p>
            <div className="Filter-Icon">
              <i className="Icon">{FilterIcon()}</i>
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
  return (
    <div className="Home-Container">
      {HeaderList()}
      {<VehicleListContainer {...props} />}
    </div>
  );
};

export default Home;
