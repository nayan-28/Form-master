import Friend from "../Friend/Friend";

const Cousin = ({ name, asset, newGift, money }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      <p>{newGift}</p>
      <p>Money:{money}</p>
      {/* <section>{asset && <Friend asset={asset}></Friend>}</section> */}
    </div>
  );
};

export default Cousin;
