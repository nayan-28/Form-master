import Friend from "../Friend/Friend";

const MySelf = ({ asset }) => {
  return (
    <div>
      <h2>Myself</h2>
      <section className="flex">
        <Friend asset={asset}></Friend>
      </section>
    </div>
  );
};

export default MySelf;
