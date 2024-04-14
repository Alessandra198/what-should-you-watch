import React from "react";

export default function Search(props) {
  if (props.loaded) {
    return (
      <div>
        <h2>Hello</h2>
      </div>
    );
  } else {
    return "hELlo";
  }
}
