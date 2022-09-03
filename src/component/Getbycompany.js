import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Company from "../Company";
export default class GetbyCompanyname extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: "",
      data: [],
    };
  }
  componentDidMount() {
    const { allData, data } = this.state;
    axios({
      method: "GET",
      url: "http://localhost:3001/getbyCompanyname?Company=ravi",

    // url: "http://localhost:3001/getbyCompanyname?" "+" ${Company}
    //    + "?" + Company=ravi +"="+ ravi,
    }).then((res) => {
      console.log("all ", res.data);
      this.setState({
        allData: res.data.data,
      });
    });
    console.log("images", allData);
    console.log("data", data);
  }

  render() {
    const { allData } = this.state;
    console.log("render bala", allData);
    return (
      <div>
        <table
          id="table"
          class="table table-striped col-md-12 col-sm-12 col-xs-12"
        >
          <thead>
            <tr>
              <th class="tab-tc-1">
                {" "}
                <h5>
                  <b>CIN</b>
                </h5>
              </th>
              <th class="tab-tc-2">
                {" "}
                <h5>
                  <b>Company</b>
                </h5>
              </th>
              <th class="tab-tc-2">
                {" "}
                <h5>
                  <b>RoC</b>
                </h5>
              </th>
              <th class="tab-tc-2">
                {" "}
                <h5>
                  <b>Status</b>
                </h5>
              </th>
            </tr>
          </thead>
          <tbody>
            {allData
              ? allData.map((item, index) => (
                  <tr>
                    <td>{item.CIN}</td>
                    <td>{item.Company}</td>
                    <td>{item.RoC}</td>
                    <td>{item.Status}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}
