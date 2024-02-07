import Aunt from "../Aunt/Aunt";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";
const Grandpa = () => {
  const asset = "Diamond Ring";
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <section className="flex">
        <Dad asset={asset}></Dad>
        <Uncle asset={asset}></Uncle>
        <Aunt></Aunt>
      </section>
    </div>
  );
};

export default Grandpa;
