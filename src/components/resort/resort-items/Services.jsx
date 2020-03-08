import React from "react";
import "./Services.css";
import $ from "jquery";
import Food from "./Food";
import { Route, Link, Switch } from "react-router-dom";
import Rooms from "./Rooms";
import Transport from "./Transport";

function Services() {
 
  return (
      <div className="Services">
        <Link to="/transport" className="title">transport</Link>
       
         
        <div className="cards-wrapper1">
          <div className="card-wrapper">
            <div className="card-1 card-object card-object-hf">
              <div className="face front">
                <div className="title-wrapper">
                  <Link to="/rooms" className="title">Rooms</Link>
                  <div className="subtitle">Comfort</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card-2 card-object card-object-hf">
              <a className="face front">
                <div className="title-wrapper">
                  <Link to="/food" className="title">Food</Link>
                  <div className="subtitle">Delicious </div>
                </div>
              </a>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card-3 card-object card-object-hf">
              <a className="face front">
                <div className="title-wrapper">
                  <Link to="/transport" className="title">Travel</Link>
                  <div className="subtitle">Easy</div>
                </div>
              </a>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card-4 card-object card-object-hf">
              <a className="face front">
                <div className="title-wrapper">
                  <Link to="/events" className="title">Events</Link>
                  <div className="subtitle">Celebrations</div>
                </div>
              </a>
            </div>
          </div>
          <div className="backg">
		<div className="ghost">
			<div className="hat">
                <div className="hat1">
                    <div className="s1"></div>
                </div>
            </div>
            <div className="face">
            	<div className="eye-l">
            		<div className="dot1"></div>
            		<div className="dot2"></div>
            	</div>
            	<div className="eye-r">
            		<div className="dot1"></div>
            		<div className="dot2"></div>
            	</div>
            	<div className="blsh-l"></div>
            	<div className="blsh-r"></div>
            	<div className="mouth"></div>
            </div>
            <div className="hand-l"></div>
             <div className="hand-r"></div>
            <div className="pumpkin">
            	<div className="handle"></div>
            	<div className="p1"></div>
            	<div className="p2"></div>
            	<div className="p3"></div>
            	<div className="p4"></div>
            	<div className="e-l"></div>
            	<div className="e-r"></div>
            	<div className="nose"></div>
            	<div className="m">
            		<div className="t1"></div>
            		<div className="t2"></div>
            		<div className="t3"></div>
            		<div className="t4"></div>
            	</div>
            </div>
		</div>
	</div>
          
        </div>

        {/* <Switch>
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/food" component={Food} />
          <Route exact path="/transport" component={Transport} />
        </Switch> */}
      </div>
  );
}

export default Services;
