import React from "react";
import "../../App.css";

const Home = (props) => {
  let myURL;
  let mylonglat;
  let x = document.getElementById("demo");

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    mylonglat = position.coords.latitude + "%2C" + position.coords.longitude;
    //  alert(mylonglat);

    myURL =
      "https://api.opencagedata.com/geocode/v1/json?q=" +
      mylonglat +
      "&key=5cc64198535147daba6f46839415510b&language=en&pretty=1";

    fetch(myURL)
      .then((res) => res.json())
      .then((json) => {
        alert(json.results[0].formatted);
        //alert(json.results[0].annotations.OSM.url);
        var doSee = window.confirm(
          "do you want to see a map your current location"
        );
        if (doSee == true)
          window.top.location = json.results[0].annotations.OSM.url;
      });
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="http://www.derinjoseph.com">
          <i class="fas fa-map-marked-alt">derinjoseph.com</i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-item nav-link active"
              href="http://www.derinjoseph.com"
            >
              Portfolio <span class="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="https://github.com/derin23">
              Github
            </a>
            <a
              className="nav-item nav-link"
              href="https://www.linkedin.com/in/derin-k-joseph/"
            >
              Linkedin
            </a>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <div className="card">
              <img
                className="card-img-bottom"
                src="https://images.pexels.com/photos/2305765/pexels-photo-2305765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <div className="card-body">
                <h3 className="card-title text-center">Where Am I At?</h3>
                <p className="text-center">
                  Click the button to get your current address.
                </p>

                <button
                  id="content1"
                  className="btn btn-primary col text-center"
                  onClick={() => getLocation()}
                >
                  Get My Address
                </button>
                {/* <a><button id="content" className="btn btn-primary">Code</button></a> */}

                {/* <p id="demo"></p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
