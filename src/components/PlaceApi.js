import React, { useState, useEffect } from "react";
import $ from "jquery";

// React hook 'useState' to manage the component state: places, city, and select.
function PlaceFinder() {
  const apiKey =
    "client_id=QIH15M2XMPGDK24WK4VQUQOGOTCFXL3QPXV1CHHX0UAEVUPR&client_secret=HIJZJFJHBYPE5IPJ00D4WFSQMHX4RDYUGFU4L3MGHZJAWREP&v=20200101";
  const [places, setPlaces] = useState([]);
  const [city, setCity] = useState("");
  const [select, setSelect] = useState("");

  // Event listener to the button that triggers a search based on the user input when it is clicked.
  function handlePlaceFinder(event) {
    event.preventDefault();
    placeFinder();
  }

  // This function generates the query and calls the API to retrieve data.
  function placeFinder() {
    // limit variable to limit the number of results returned.
    const limit = 5;

    const queryURL =
      "https://api.foursquare.com/v2/venues/search?" +
      apiKey +
      "&near=" +
      city +
      "&intent=browse&query=" +
      select +
      "&categoryId=4bf58dd8d48988d175941735" +
      `&limit=${limit}`;

    // Using jQuery to send an AJAX request to a URL specified in the queryURL variable using the GET method
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      setPlaces(response.response.venues);
    });
  }

  // useEffect hook to update the document title when the places state changes
  useEffect(() => {
    document.title = `Places in ${city}`;
  }, [places, city]);

  // Rendering the component to HTML format
  return (
    <div className="flex justify-center ">
      <div className="place-form w-2/3 border rounded-sm shadow-sm p-4 flex items-center justify-between">
        <div>
          <form onSubmit={handlePlaceFinder}>
            <label htmlFor="city">City:</label>
            <input
              className="block w-56 border border-gray-300 rounded-sm py-2 px-3 mt-1"
              type="text"
              id="city"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
            <label htmlFor="select">Fitness Type:</label>
            <select
              className=" block w-56 border border-gray-300 rounded-sm py-2 px-3 mt-1"
              id="select"
              value={select}
              onChange={(event) => setSelect(event.target.value)}>
              <option value="">Options:</option>
              <option value="yoga">Yoga</option>
              <option value="gym">Gym</option>
              <option value="running">Running</option>
            </select>
            <button
              className="bg-teal-600 hover:bg-pink-600 text-white font-bold mt-4"
              type="submit">
              Submit
            </button>
          </form>
        </div>
        {places.length > 0 && (
          <div className="relative">
            <ul>
              {places.map((place) => (
                <li key={place.id}>
                  {place.name}, Address: {place.location.address}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default PlaceFinder;
