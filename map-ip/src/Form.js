import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import map from "../public/map.jpg";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import MyIp from "./MyIp";
import { useHistory } from "react-router-dom";
//import { map } from "jquery";



/*if (navigator.geolocation) {

  //navigator.geolocation.getCurrentPosition(console.log);
  navigator.geolocation.getCurrentPosition(

  function(position) {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
  })


} else {
  alert("permission not granted or geolocation not available");
}*/



export default function App() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [login, setLogin] = useState();
  const [status, setStatus] = useState(false);
  const [logtry, setLogtry] = useState(0);
  const [newPath, setNewPath] = useState("/");
  const history = useHistory();

  

  useEffect(() => {
    fetch(
      //"https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/luishackernews-fmzgq/service/luis-hacker-news/incoming_webhook/get?secret=luish"
      "https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/ip_form-awowb/service/get/incoming_webhook/get?secret=luish"
    )
      .then((res) => res.json())
      .then((res) => setLogin(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(status);
  }, [status]);

  const checking = (e) => {
    e.preventDefault();
    console.log(logtry);

    //console.log(email);
    //console.log(pass);
    //console.log(login);
    //console.log(login[0].email);
    //console.log(login[0].pass);
    //console.log(email);
    //console.log(pass);

    const valid = email === login[0].email && pass === login[0].pass;
    if (valid) {
      setLogtry(0);
      //history.pushState("MyIp");
      history.push("/MyIp");
    } else {
      setLogtry(logtry + 1);
      history.push("/");
    }
    setStatus(valid);
  };
  return (
    <>
      <div>
        {status ? (
          <div>
            <h1>Welcome ... </h1>

            <MyIp />
          </div>
        ) : (
          <>
            {logtry > 0 ? <h1>Log In details don't match ! Try again</h1> : ""}

            <main className="form-signin">
              <form>
                <img
                  className="d-flex justify-content-center"
                  //className="mb-4"
                  src={'./map.jpg'}
                  alt=""
                  width="72"
                  height="57"
                />

                <h1 className="h3 mb-3 fw-normal">
                  Please sign in to use the app
                </h1>

                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>

                <button
                  className="w-100 btn btn-lg btn-primary"
                  type="submit"
                  onClick={checking}
                >
                  {" "}
                  Sign in
                </button>
              </form>
            </main>
          </>
        )}
      </div>
    </>
  );
}

//<head></head>
//<body className="text-center"></body>

//<Link className="link" selected="active" to="/MyIp"></Link>

/*<Route exact path="/">
<Redirect to="/MyIp" /> : <MyIp />
</Route>*/

/*<button
                  className="w-100 btn btn-lg btn-primary"
                  type="submit"
                  onClick={checking}
                >
                  {" "}
                  Sign in
                </button>*/

/*<Link
                  //className="link"
                  className="w-100 btn btn-lg btn-primary"
                  selected="active"
                  onClick={checking}
                  to={newPath}
                >
                  {" "}
                  Sign in
                </Link>*/
