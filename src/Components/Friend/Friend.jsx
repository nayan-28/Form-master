import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Friend = ({ asset }) => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h4>Friend</h4>
      <h4>Peyechi:{asset}</h4>
      <h4>Also Peyechi:{gift}</h4>
    </div>
  );
};

export default Friend;
