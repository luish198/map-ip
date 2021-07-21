import "./styles.css";
import React from "react";
import { useState, useEffect, Component } from "react";
import Result from "./Result";
import Location from "./Location";
import Form from "./Form";
//import ReactDOM from "react-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import "./MyIp.css";
import { useHistory } from "react-router-dom";

//https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png

export default function MyIp() {
  const [myIpData, setMyIpData] = useState();
  const [newPath, setNewPath] = useState("/MyIp");
  const [lati, setLati] = useState(48.0);
  const [lngi, setLngi] = useState(9.0);

  const APP_KEY = "at_PcpjPN0AusyD21M6FDFuDEpaBZnfs";

  useEffect(() => {
    fetch(`https://geo.ipify.org/api/v1?apiKey=${APP_KEY}`)
      .then((response) => response.json())
      .then((response) => setMyIpData(response));
  }, []);

  //console.log(myIpData.location.country);
  if (myIpData) {
    console.log(myIpData);
    console.log(myIpData.location.country);
    console.log(myIpData.location.timezone);
    console.log(myIpData.location.lat);
    console.log(myIpData.location.lng);
  }

  useEffect(() => {
    if (myIpData) {
      setLati(myIpData.location.lat);
      setLngi(myIpData.location.lng);
    }
  }, []);

  const history = useHistory();

  const logOut = () => {
    history.push("/");
  };

  return myIpData ? (
    <>
      <h1 className="IpHeader">Enis + Luis IP finder</h1>

      <button
        className="w-100 btn btn-lg btn-primary"
        type="submit"
        onClick={logOut}
      >
        {" "}
        Sign Out
      </button>
      <div classname="mapDesign">
        <MapContainer center={[lati, lngi]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker
            position={[lati, lngi]}
            icon={
              new Icon({
                iconUrl:
                  "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41]
              })
            }
          >
            <Popup>
              Your current location... <br /> here.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div>
        <div className="container">
          <div className="input-section">
            <h1 className="header"> IP Address Tracker</h1>
          </div>

          <div className="result-container">
            <div className="box1">
              <Result heading={"IP Address"} searchResult={myIpData?.ip} />
            </div>
            <div className="box2">
              <Location
                heading={"Location"}
                searchResult={myIpData.location.country}
                searchResult2={myIpData.location.region}
                searchResult3={myIpData.location.city}
              />
            </div>
            <div className="box3">
              <Result
                heading={"Timezone"}
                searchResult={"UTC" + myIpData?.location?.timezone}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="modal-body p-0 h-100">
        <div className="h-100 w-100 position-absolute">
          {/*modal map is defined here- custom styles and zoom are passed in*/}
        </div>
      </div>
    </>
  ) : (
    <>
      <p>Loading...</p>
    </>
  );
}

/*<form className="search-form">
              <input
                className="search-input"
                type="text"
                placeholder="Search for any IP address or domain"
              />
              <button className="search-button" type="submit">
                {" "}
                Go!{" "}
              </button>
            </form>*/

/*
 <Result
              heading={"ISP"}
              //searchResult={myIpData?.isp}
            />
             */

/*<Map
                  apiKey={googleMapsApiKey}
                  center={[42.302, -71.033]}
                  styles={modalMapStyles}
                  zoom={13}
                />
                */

/*<Switch>
        <Route exact path="/MyIp">
          <MyIp />
        </Route>
        <Route exact path="/">
          <Form />
        </Route>
      </Switch>*/

/*<Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>*/

/*<Link
        //className="link"
        className="w-100 btn btn-lg btn-primary"
        selected="active"
        onClick={logOut}
        to={newPath}
      >
        {" "}
        Sign Out
      </Link>*/
