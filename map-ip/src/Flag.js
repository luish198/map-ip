import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardSubtitle } from 'reactstrap';
import { DateTime } from "luxon";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyIp from './MyIp'

import "./flag.css";
import MoreInfo from "./MoreInfo";



export default function Flag(props) {
  const imgFlag = props.searchResult
  const dt=DateTime.now();
  const showdate = dt.toLocaleString(DateTime.DATETIME_MED)
  const city=props.searchResult6
  const myCountryData=props.searchResult7
  const myIpData=props.searchResult8
  const myLocation1=props.searchResult3
  const myLocation2=props.searchResult4
  


  /*console.log(showdate)
  console.log(dt.zoneName)
  console.log(dt.toLocaleString(DateTime.TIME_SIMPLE))
  console.log(dt.toLocaleString(DateTime.DATE_FULL))*/
  console.log("my location....."+myLocation1)

  
  
  return (
    <>



      <Card bg="light" style={{ width: '50vh' }}>
        <Card.Header>
          <Card.Title>Your IP Address is: {props.searchResult2}</Card.Title>
        </Card.Header>
        <Card.Img variant="top"
          src={imgFlag}
        />

        <Card.Body>
          <Card.Title>{props.searchResult5}</Card.Title>
          <CardSubtitle tag="h6" className="mb-2 text-muted">you are exactly in:</CardSubtitle>
          <Card.Text>
            {props.searchResult3} , {props.searchResult4}
          </Card.Text>
          <Card.Text>
            Your Time Zone: {dt.zoneName}
          </Card.Text>
          <Card.Text>
            Your Local Time: {dt.toLocaleString(DateTime.TIME_SIMPLE)}
          </Card.Text>
          <Card.Text>
            Today is: {dt.toLocaleString(DateTime.DATE_FULL)}
          </Card.Text>
          
          <Link className="link" selected="active" to="/MoreInfo">
          <Button variant="primary">More Information</Button>
            </Link>
        </Card.Body>
      </Card>

      <Switch>
        <Route exact path="/MoreInfo">
          <MoreInfo
          searchResult={myCountryData.flag}
          searchResult2={myIpData}
          searchResult3="Test Location"
          searchResult4={myLocation2}
          searchResult5={city?.countryName}  />
        </Route>
      </Switch>

    </>
  );
}

  //<h1>{props.heading}</h1>
  //<h2>Details....</h2>
  //<p>your Flag...{props.searchResult}</p>
/*<img
      className="d-flex justify-content-center"
      //className="mb-4"
      src={props.searchResult}
      alt=""
      width="72"
      height="57"
    />*/

    /*searchResult2={myIpData?.ip}*/
