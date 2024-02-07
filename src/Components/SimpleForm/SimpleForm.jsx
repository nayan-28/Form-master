const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log("Submitted");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name"></input>
        <br />
        <input type="text" name="email"></input>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default SimpleForm;
