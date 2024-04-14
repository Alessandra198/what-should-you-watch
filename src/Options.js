import React from "react";

export default function Options() {
  return (
    <div className="Options">
      <select id="state">
        <option value="">Choose your State</option>
        <option value="us">United States</option>
        <option value="gb">United Kingdom</option>
        <option value="it">Italy</option>
        <option value="es">Spain</option>
      </select>
      <select id="type">
        <option value="">Choose a type</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="all">All</option>
      </select>
      <select id="language">
        <option value="">Choose a language</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="it">Italian</option>
        <option value="fr">French</option>
      </select>
      <select id="services">
        <option value="">Choose a service</option>
        <option value="netflix">Netflix</option>
        <option value="prime.subscription">Amazon Prime Video</option>
        <option value="hulu">Hulu</option>
        <option value="hbo">HBO</option>
        <option value="disney">Disney</option>
      </select>
      <select id="genres">
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
  );
}
