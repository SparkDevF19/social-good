/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useState, useEffect} from "react";
import _ from 'lodash'
import data from 'C:/Users/peter/Desktop/Social-Good-Frontend-master/Social-Good-Frontend-master/src/MegaDade.json';

// react components used to create a google map
import {
  Polygon,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const centroid = data.features.centroid;

const MapStyles = [
  {elementType: 'geometry', stylers: [{color: '#f2f2f2'}]},
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#bfbfbf'}]
  },

];

const CustomMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
    options={{
      styles: MapStyles,
    }}
      defaultZoom={10}
      defaultCenter={{ lat: 25.599356, lng: -80.537258 }}
      defaultOptions={{
        scrollwheel: true,
        zoomControl: true
      }}      
    >
      <Marker position={{ lat: 26.579711, lng: -80.567601 }} />
    </GoogleMap>
  ))
);

const data_sorted = _.sortBy(data, [i=> -1 *i.zindex]);
const places = Object.keys(data_sorted);

const MapWithAMarker = withGoogleMap(({ setArea }) =>{
  return (
    <GoogleMap defaultZoom={10} defaultCenter={centroid}>
     
      {places.map((place, i) => {
       
        const { points, zindex: zIndex, name } = data_sorted[place];
        return (
          <Polygon
            key={i}
            options={{
              fillColor: "#22EEEE",
              strokeWeight: 1
            }}
            path={points}
            onClick={() => {
              setArea(name);
            }}
            zIndex={zIndex}
          />
        );
      })}
    </GoogleMap>
  );
});

function AreaClickSpace({ text }){
  return <div className = "AppArea" >{text} </div>
}


function Maps() {
  const [area, setArea] = useState("CLcik");

  return (
    <div className="Maps">
    <MapWithAMarker
      containerElement={<div style={{ height: `700px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      setArea={setArea}
    />
    <AreaClickSpace text={area} />
  </div>
    /* <CustomMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBcWBzl3X6tK3xHCBWkIceYQdUnHfmDWCY"
      loadingElement={<div style={{ height: `90%` }} />}
      containerElement={<div style={{ height: `90vh` }} />}
      mapElement={<div style={{ height: `90%` }} />}
    /> */ 
  );
}

export default Maps;
