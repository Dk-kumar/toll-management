import "./TollList.style.scss";

const TollList = (props) => {
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
    const { tollLists } = props;

    return (
      <tbody className="Table-Body">
        {tollLists?.map(
          (
            {
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
                <td className="T-Body">{tollName}</td>
                <td className="T-Body">{singleJouurney_one}</td>
                <td className="T-Body">
                  {singleJouurney_two + "/" + returnJourney_two}
                </td>
                <td className="T-Body">
                  {singleJourney_three + "/" + returnJourney_three}
                </td>
                <td className="T-Body">
                  {singleJourney_four + "/" + returnJourney_four}
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
