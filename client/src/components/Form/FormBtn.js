import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "right", marginBottom: 10 }} className="mx-auto form-group btn btn-success">
    {props.children}
  </button>
);