import React, { Component } from "react";
import axios from "axios";
import Cards from "./components/Cards";
import DatePicker from "react-datepicker";
var moment = require("moment");
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const begin = moment().utcOffset(timezone)._d;
const max = moment().utcOffset(timezone)._d;
const currentTime = moment()
  .utcOffset(timezone)
  .format();

export default class Data extends Component {
  // Holds State
  constructor(props) {
    super(props);
    this.state = {
      max: max,
      begin: begin,
      startDate: currentTime,
      data: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Function Run on Date Change
  handleChange(date) {
    this.setState(
      {
        startDate: date,
        begin: date
      },
      () => {}
    );
    setTimeout(
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=X7831OHO7jNbCUFp6ZquUbFjI2txHRDvsbay1fU4&date=${
            this.state.startDate === "2019-07-17"
              ? this.state.startDate.toISOString().slice(0, -14)
              : date.toISOString().slice(0, -14)
          }`
        )
        .then(response => {
          this.setState({
            data: [response.data]
          });
        }),
      3000
    );
  }

  // Initial Data
  componentDidMount() {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=X7831OHO7jNbCUFp6ZquUbFjI2txHRDvsbay1fU4&date=${this.state.startDate.slice(
          0,
          -15
        )}`
      )
      .then(response => {
        this.setState({
          data: [response.data]
        });
      });
  }

  render() {
    return (
      <>
        <h1>Select Date:</h1>
        {/* Displays Calendar */}
        <DatePicker
          maxDate={this.state.max}
          selected={this.state.begin}
          onChange={this.handleChange}
        />
        <Cards data={this.state.data} />
      </>
    );
  }
}
