import { useEffect, useState } from "react";
import { TOLLENTRY } from "../../Constants";
import { getBrowserData } from "../../utils/browserDB";
import TollList from "./TollList.component";

const TollListContainer = () => {
  const [tollLists, setTollLists] = useState([]);

  useEffect(() => {
    setTollLists(getBrowserData(TOLLENTRY));
  }, []);

  const containerStates = {
    tollLists: tollLists,
  };

  return <TollList {...containerStates} />;
};

export default TollListContainer;
