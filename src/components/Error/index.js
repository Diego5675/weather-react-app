import React from "react";

const Error = ({ message = "An error occurred" }) => (
  <div role="alert">{message}</div>
);

export default Error;
