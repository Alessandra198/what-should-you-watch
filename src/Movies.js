import React from "react";
import "./Movies.css";

export default function Movies(props) {
  if (props.response) {
    return (
      <div className="Movies">
        <div className="row">
          {props.response.map(function (value, index) {
            return (
              <div key={index} className="col-md-4">
                <div className="paragraph">
                  <h5>{value.originalTitle}</h5>
                    <small>
                        <em>Plot:</em> {value.overview}
                    </small>
                    <br />
                  <em className="cast">Cast:</em>
                  {value.cast.map(function (member, index) {
                    return (
                      <small key={index}>
                        <h6>{member}</h6>
                      </small>
                    );
                  })}
                </div>
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
