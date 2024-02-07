import { useEffect } from "react";
import { useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          defaultValue={"Nayan"}
          ref={nameRef}
          type="text"
          name="name"
        ></input>
        <br />
        <input ref={emailRef} type="text" name="email"></input>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default RefForm;
