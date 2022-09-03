import React, { Component } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Abc from "./styles/Abc.css";
import Company from "./Company";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Company: "",
      valid: false,
    };
  }

  handleSubmit = (e) => {
    // alert('upload company details')
    e.preventDefault();
    console.log(this.state);
    const { Company } = this.state;


    axios({
      method: "GET",
      url: "http://localhost:3001/getbyCompanyname ",
      Company,
    }).then((res) => {
      console.log("all ", res.data);
     
    });
    
  };

  render() {
    const { valid, Company } = this.state;
    return (
      <div class="container">
        {/* <!-- For demo purpose --> */}
        <div class="row py-5">
          <div class="col-lg-9 mx-auto text-white text-center">
            <h1 class="display-4">Zauba corp search bar</h1>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto">
            <h5 class="font-weight-light mb-4 font-italic text-white">
              Browse Companies by Activity, Age and Location
            </h5>

            <div class="bg-white p-5 rounded shadow">
              <form action="" onSubmit={() => this.handleSubmit()}>
                <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                  <div class="input-group">
                    <input
                      type="search"
                      placeholder="Enter Company name or CIN"
                      aria-describedby="button-addon1"
                      class="form-control border-0 bg-light"
                      value={Company}
                      onChange={(e) => {
                        this.setState({ Company: e.target.value });
                      }}
                    />

                    <Link to="/Company1">
                      <button
                        type="submit"
                        className="btn btn-success"
                        style={{ justifyContent: "center" }}
                      >
                        submit
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
              <Link to="/Company"> Browse Companies by Activit!</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
