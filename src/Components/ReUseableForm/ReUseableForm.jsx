const ReUseableForm = ({
  formTitle,
  handleSubmit,
  submitButtonText = "Submit",
  children,
}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
    };
    handleSubmit(data);
  };
  return (
    <div>
      {children}
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name"></input>
        <br />
        <input type="text" name="email"></input>
        <br />
        <input type="submit" value={submitButtonText}></input>
      </form>
    </div>
  );
};

export default ReUseableForm;
