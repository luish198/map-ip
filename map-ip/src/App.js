import "./styles.css";
import React from "react";
import { useState, useEffect } from "react";
//import Result from "./Result";
//import Location from "./Location";
import Form from "./Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyIp from "./MyIp";

export default function App() {
  //const [myIpData, setMyIpData] = useState();

  //const APP_KEY = "at_PcpjPN0AusyD21M6FDFuDEpaBZnfs";

  /*useEffect(() => {
    fetch(`https://geo.ipify.org/api/v1?apiKey=${APP_KEY}`)
      .then((response) => response.json())
      .then((response) => setMyIpData(response));
  }, []);*/

  //console.log(myIpData.location.country);
  /*if (myIpData) {
    console.log(myIpData);
    console.log(myIpData.location.country);
    console.log(myIpData.location.country);
    console.log(myIpData.location.timezone);
  }*/

  return (
    <>
      <Switch>
        <Route exact path="/MyIp">
          <MyIp />
        </Route>
        <Route exact path="/">
          <Form />
        </Route>
      </Switch>
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
