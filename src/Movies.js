import React from "react";
import "./Movies.css";

export default function Movies(props) {
  if (props.response) {
    console.log(props.response);
    return (
      <div className="Movies">
        <div className="row">
          {props.response.map(function (value, index) {
            return (
              <div key={index} className="col-md-4">
                <p>
                  {" "}
                  Title: {value.originalTitle}
                  <br />
                  Cast:
                  {value.cast.map(function (member, index) {
                    return <p>{member}</p>;
                  })}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
