import { createContext, useState } from "react";
import Aunt from "../Aunt/Aunt";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";
export const AssetContext = createContext("gold");

export const MoneyContext = createContext(1000);
const Grandpa = () => {
  const [money, setMoney] = useState(1000);
  const asset = "Diamond Ring";
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunt></Aunt>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
