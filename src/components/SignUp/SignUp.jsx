import React from "react";
import Input from "../Generic/Input/Input";

const SignUP = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <Input
        type="outlined"
        pl="Enter your username"
        clearIcon="true"
        size="small"
      />
    </div>
  );
};

export default SignUP;
