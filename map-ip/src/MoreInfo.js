import React from "react";
import MyIp from "./MyIp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardSubtitle } from 'reactstrap';
import { DateTime } from "luxon";
import Result from "./Result";
import Location from "./Location";




export default function MoreInfo(props) {

    const imgFlag = props.searchResult
    const myIpData = props.searchResult2
    const myLocation1 = props.searchResult3

    const dt = DateTime.now();
    const showdate = dt.toLocaleString(DateTime.DATETIME_MED)
    
    console.log("my location.....here..."+props.searchResult3)
    console.log("my location.....here2..."+imgFlag)
    console.log("my location.....here3..."+myIpData)



    return (
        <>
            <h1>more info here...</h1>
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

                    <Link className="link" selected="active" to="/MyIp">
                        <Button variant="primary">Go Back</Button>
                    </Link>
                </Card.Body>
            </Card>

            <div className="result-container">
            <div className="box1">
              <Result heading={"IP Address"} searchResult={myIpData?.ip} />
            </div>
            <div className="box2">
              <Location
                heading={"Location"}
                searchResult={myIpData?.ip}
                
              />
            </div>
            <div className="box3">
              <Result
                heading={"Timezone"}
                searchResult={"UTC" + myIpData?.location?.timezone}
              />
            </div>

          </div>

            <Switch>
                <Route exact path="/MyIp">
                    <MyIp />
                </Route>
            </Switch>
        </>
    )
}

/*searchResult2={myIpData.location.region}
                searchResult3={myIpData.location.city}
                searchResult4={myCountryData.capital}*/