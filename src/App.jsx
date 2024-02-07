import "./App.css";
import HookForm from "./Components/HookForm/HookForm";
import ReUseableForm from "./Components/ReUseableForm/ReUseableForm";
import RefForm from "./Components/RefForm/RefForm";
import SimpleForm from "./Components/SimpleForm/SimpleForm";
import StateFulForm from "./Components/StateFulForm/StateFulForm";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("Sign Up data", data);
  };
  const handleUpdateProfile = (data) => {
    console.log("Profile update data", data);
  };
  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}

      {/* <StateFulForm></StateFulForm> */}

      {/* <RefForm></RefForm> */}

      {/* <HookForm></HookForm> */}

      <ReUseableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Sign up with your Name and Email</p>
        </div>
      </ReUseableForm>
      <ReUseableForm
        formTitle={"Profile Update"}
        submitButtonText="Update"
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReUseableForm>
    </>
  );
}

export default App;
