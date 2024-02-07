import Friend from "../Friend/Friend";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      <section>
        <h4>My New Friend</h4>
        {asset && <Friend asset={asset}></Friend>}
      </section>
    </div>
  );
};

export default Cousin;
