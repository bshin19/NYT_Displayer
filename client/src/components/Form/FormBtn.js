import React from "react";

export const FormBtn = props => (
  <button {...props} className="mx-auto form-group btn btn-primary">
    {props.children}
  </button>
);