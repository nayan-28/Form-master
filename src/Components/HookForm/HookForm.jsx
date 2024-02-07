import useInputState from "../../hooks/useInputState";

const HookForm = () => {
  const [name, handleNameChange] = useInputState(null);
  const handleSubmit = (e) => {
    console.log(name);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} type="text" name="name"></input>
        <br />
        <input type="text" name="email"></input>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default HookForm;
