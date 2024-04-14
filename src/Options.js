import React, { useState } from "react";
import Search from "./Search";
import "./Options.css";

export default function Options() {
  let [state, setState] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLoaded(true);
  }

  function handleState(event) {
    event.preventDefault();
    setState(event.target.value);
  }
  return (
    <div className="Options">
      <div className="container">
        <div className="row">
          <select id="state" className="col" onChange={handleState}>
            <option value="">Choose your State</option>
            <option value="us">United States</option>
            <option value="gb">United Kingdom</option>
            <option value="it">Italy</option>
            <option value="es">Spain</option>
          </select>
          <select id="type" className="col">
            <option value="">Choose a type</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="all">All</option>
          </select>
        </div>
        <div className="row">
          <select id="language" className="col">
            <option value="">Choose a language</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="it">Italian</option>
            <option value="fr">French</option>
          </select>
          <select id="services" className="col">
            <option value="">Choose a service</option>
            <option value="netflix">Netflix</option>
            <option value="prime.subscription">Amazon Prime Video</option>
            <option value="hulu">Hulu</option>
            <option value="hbo">HBO</option>
            <option value="disney">Disney+</option>
          </select>
        </div>
        <div className="row">
          <select id="genres" className="col text-center">
            <option value="">Choose a genre</option>
            <option value="12">Adventure</option>
            <option value="14">Fantasy</option>
            <option value="16">Animation</option>
            <option value="18">Drama</option>
            <option value="27">Horror</option>
            <option value="28">Action</option>
            <option value="35">Comedy</option>
            <option value="36">History</option>
            <option value="37">Western</option>
            <option value="53">Thriller</option>
            <option value="80">Crime</option>
            <option value="99">Documentary</option>
            <option value="878">Science Fiction</option>
            <option value="9648">Mystery</option>
            <option value="10402">Music</option>
            <option value="10749">Romance</option>
            <option value="10751">Family</option>
            <option value="10752">War</option>
            <option value="10764">Reality</option>
            <option value="10767">Talk Show</option>
          </select>
        </div>
        <form>
          <input type="submit" value="Search" onClick={handleSubmit} />
        </form>
      </div>
      <Search loaded={loaded} state={state} />
    </div>
  );
}
