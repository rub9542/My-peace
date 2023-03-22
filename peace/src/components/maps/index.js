import React from "react";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  const containerStyle = {
    width: "100%",
    height: "508.76px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };
  const position = {
    lat: 37.772,
    lng: -122.214,
  };
  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };
  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.GATSBY_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Add your map markers or other components here */}
          <Marker onLoad={onLoad} position={position} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
