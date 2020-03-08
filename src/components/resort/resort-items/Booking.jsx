import React from "react";
import "./Booking.css";
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
function Booking() {
    const {  RangePicker } = DatePicker;

    function onChange(date, dateString) {
      console.log(date, dateString);
    }
    
  return (
    
    <div className="booking">
   
   
      <div className="foam">
      <h2>Contact Us</h2>
      <div className="row100">
        <div className="col">
          <div className="inputBox">
            <input type="text" name="" required="required" />
            <span className="booking-text">First Name</span>
            <span className="line"></span>

          </div>
        </div>
        <div className="col">
                <div className="inputBox">
                  <input type="text" name="" required="required" />
                  <span className="booking-text">Last Name</span>
                  <span className="line"></span>
      
                </div>
              </div>
      </div>
      <div className="row100">
            <div className="col">
              <div className="inputBox">
                <input type="text" name="" required="required" />
                <span className="booking-text">Email</span>
                <span className="line"></span>
    
              </div>
            </div>
            <div className="col">
                    <div className="inputBox">
                      <input type="text" name="" required="required" />
                      <span className="booking-text">Mobile</span>
                      <span className="line"></span>
          
                    </div>
                  </div>
          </div>
          
    <RangePicker onChange={onChange} />
          
          <div className="row100">
                <div className="col">
                <input type="submit" value="Send"/>
                </div>
                </div>
    </div>
     
      </div>
  
  );

}
export default Booking;
