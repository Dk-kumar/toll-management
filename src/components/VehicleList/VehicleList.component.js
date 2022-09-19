import "./VehicleList.style.scss";

const VehicleList = (props) => {
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
