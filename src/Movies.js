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
                  <h6>{value.originalTitle}</h6>
                  <div>
                    <small>
                      <em>Plot:</em> {value.overview}
                    </small>
                  </div>
                  <em className="cast">Cast:</em>
                  {value.cast.map(function (member, index) {
                    return (
                      <small>
                        <p key={index}>{member}</p>
                      </small>
                    );
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
