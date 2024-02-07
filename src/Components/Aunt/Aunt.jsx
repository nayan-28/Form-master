import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { AssetContext, MoneyContext } from "../Grandpa/Grandpa";

const Aunt = () => {
  const gift = useContext(AssetContext);
  const [money, setMoney] = useContext(MoneyContext);

  console.log(money);
  return (
    <div>
      <h2>Aunt</h2>
      <section className="flex">
        <Cousin name={"Mamshad"} money={money}></Cousin>
        <Cousin name={"Rubaiya"} newGift={gift}></Cousin>
      </section>
      <button onClick={() => setMoney(money + 1000)}>Add Money</button>
    </div>
  );
};

export default Aunt;
