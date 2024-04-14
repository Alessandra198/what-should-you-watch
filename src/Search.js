import React, { useEffect } from "react";
import axios from "axios";

export default function Search(props) {
  let apiKey = "bcf7495ca2mshc1792e93c27a4b1p17bdfcjsncf694e92cf93";

  useEffect(() => {
    if (
      props.loaded &&
      props.search &&
      props.search.services &&
      props.search.state &&
      props.search.genres &&
      props.search.type &&
      props.search.language
    ) {
      axios
        .get("https://streaming-availability.p.rapidapi.com/search/filters", {
          params: {
            services: props.search.services,
            country: props.search.state,
            output_language: props.search.language,
            show_type: props.search.type,
            genres: props.search.genres,
          },
          headers: {
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
          },
        })
        .then((response) => console.log(response.data));
    }
  }, [props.loaded, props.search]);

  if (props.loaded) {
    return (
      <div>
        <h2>Hello</h2>
      </div>
    );
  } else {
    return null;
  }
}
