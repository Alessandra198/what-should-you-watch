import React from "react";

export default function Search(props) {
  //let apiKey = "faa32c0445mshb75b1a2bf6e83fdp199e68jsnc1c9d39bc37c";

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
