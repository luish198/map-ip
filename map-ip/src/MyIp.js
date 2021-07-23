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
import Flag from './Flag'
import { Container, Row, Col } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import MoreInfo from "./MoreInfo"


//https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png

export default function MyIp() {
  const [myIpData, setMyIpData] = useState();
  const [myCountryData, setMyCountryData] = useState();

  const [newPath, setNewPath] = useState("/MyIp");
  const [lati, setLati] = useState(48.0);
  const [lngi, setLngi] = useState(9.0);
  const [country, setCountry] = useState("DE");
  const [city, setCity] = useState("");



  const [lat2, setLat2] = useState(null);
  const [lng2, setLng2] = useState(null);
  const [status2, setStatus2] = useState(null);

  /*useEffect(() => {
      if (!navigator.geolocation) {
        setStatus2('Geolocation is not supported by your browser');
      } else {
        setStatus2('Locating...');
        
        navigator.geolocation.getCurrentPosition((position) => {
          setStatus2(null);
          setLat2(position.coords.latitude);
          setLng2(position.coords.longitude);
          console.log("latitude from GEO...." + lat2)
          console.log("Longitud from GEO...." + lng2)
          
  
        }, () => {
          setStatus2('Unable to retrieve your location');
        });
      }
    }

  , []);*/

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus2('Geolocation is not supported by your browser');
    } else {
      setStatus2('Locating...');

      navigator.geolocation.getCurrentPosition((position) => {
        setStatus2(null);
        setLat2(position.coords.latitude);
        setLng2(position.coords.longitude);
        console.log("latitude from GEO...." + lat2)
        console.log("Longitud from GEO...." + lng2)


      }, () => {
        setStatus2('Unable to retrieve your location');
      });
    }
  }




  //const APP_KEY = "at_PcpjPN0AusyD21M6FDFuDEpaBZnfs";
  const API_KEY = "at_wVezeLIbx0YPQdAeswzAKGKWKE6md"
  //const API_KEY = process.env.REACT_APP_GEO_API_KEY;


  console.log("this is my env...." + API_KEY)



  useEffect(() => {
    fetch(`https://geo.ipify.org/api/v1?apiKey=${API_KEY}`)
      .then((response) => response.json())
      .then((response) => setMyIpData(response));

    getLocation()

  }, []);

  useEffect(() => {
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat2}&longitude=${lng2}&localityLanguage=en`)
      .then((response) => response.json())
      .then((response) => setCity(response));

    console.log("city...." + city.locality)
    console.log("city...." + city.principalSubdivision)
    console.log("city...." + city.countryName)



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
    fetch(`https://restcountries.eu/rest/v2/alpha/${country}`)
      .then((response) => response.json())
      .then((response) => setMyCountryData(response));
  }, []);

  if (myCountryData) {
    console.log(myCountryData);
    console.log(myCountryData.capital);
    console.log(myCountryData.flag);
    //console.log(myCountryData.location.timezone);
    //console.log(myCountryData.location.lat);
    //console.log(myCountryData.location.lng);

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

  return myIpData && lat2 && lng2 ? (
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


      <Container fluid="md">
        <Row>
          <Col >...</Col>
        </Row>
        <Row>
          <Col >
            <div classname="mapDesign">
              <MapContainer center={[lat2, lng2]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                  position={[lat2, lng2]}
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
          </Col>
          <Col >
            <Flag
              heading={"flag"}
              searchResult={myCountryData.flag}
              searchResult2={myIpData?.ip}
              searchResult3={city?.locality}
              searchResult4={city?.principalSubdivision}
              searchResult5={city?.countryName}
              searchResult6={city}
              searchResult7={myCountryData}
              searchResult8={myIpData}


            />
          </Col>
        </Row>
      </Container>




      <div>
        <div className="container">
          <div className="input-section">
            <h1 className="header"> ...</h1>
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

/*<div className="">
              <Flag
                heading={"flag"}
                searchResult={myCountryData.flag}
              />
            </div>*/
