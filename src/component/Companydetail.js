// import { Fragment } from "react";
import axios from "axios";

import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class Companydetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CIN: "",
            Company: "",
            RoC: "",
            Status: "",

        };
    }

    handleSubmit = (e) => {
        const {
            CIN, Company, RoC, Status
        } = this.state;

        console.log(CIN, Company, RoC, Status);
        if (CIN === "" || CIN == null) {
            alert("Please enter yourCIN");
        } else if (Company === "" || Company == null) {
            alert("Please enter your last name");
        } else if (RoC === "" || RoC == null) {
            alert("Please enter your mobile Number");
        }
        else if (Status === "" || Status == null) {
            alert("Please enter your password");
        } else {
            axios({
                method: "POST",
                url: "http://localhost:3001/register",
                data: {
                    CIN: CIN,
                    Company: Company,
                    RoC: RoC,
                    Status: Status,

                }
            }).then((res) => {
                console.log('response data submited', res.data)
                alert('data submit thanku')
                // if (res.data.status === "true") {
                //     this.setState({
                //         // valid: true,
                //         // userId: res.data.userId
                //     })
                //     // console.log('data res', res.data.userId)
                //     console.log("local data", RoC, Status, CIN)
                //     sessionStorage.setItem('RoC', RoC);
                //     sessionStorage.setItem('Status', Status);
                //     // sessionStorage.setItem('userId', res.data.userId);
                //     sessionStorage.setItem('CIN', CIN);
                //     // console.log("all data   fbc  cghhgh h hh hh", CIN);
                //     alert("Your information is created");
                // } else {
                //     // alert("Your information is not created");
                // }
            });
        }
        console.log("asdddnd d f f ");
    };
    render() {
        const {
            CIN, Company, RoC, Status


        } = this.state;

        return (

            <div
                className="container-fluid textss" >

                <div
                    className="row"
                    style={{ justifyContent: "center", marginBottom: "0rem" }}
                >
                    <div
                        className="col-md-10 col-sm-10"
                        style={{
                            background: "#ffffff",
                            paddingTop: "1px",
                            paddingBottom: "10px",
                            marginBottom: "10px",
                        }}
                    >

                        <h2> Please enter all details </h2>
                        <form>
                            <div class="form-outline mb-4">
                                <label class="form-label required" for="form1Example1">
                                    <text
                                        style={{
                                            fontWeight: "normal",
                                            fontSize: "15px",
                                            marginBottom: "20",

                                        }}
                                    >
                                        CIN
                                    </text>
                                </label>
                                <input
                                    type="email"
                                    id="fname"
                                    name="fname"
                                    placeholder="Enter yourCIN"
                                    class="form-control"
                                    value={CIN}
                                    onChange={(e) => {
                                        this.setState({ CIN: e.target.value });
                                    }}
                                />
                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label " for="loginName" className="ml-3 required">
                                    <text
                                        style={{
                                            fontWeight: "normal",
                                            fontSize: "15px",
                                            marginBottom: "20",
                                        }}
                                    >
                                        Company
                                    </text>
                                </label>
                                <input
                                    type="email"
                                    id="Company"
                                    name="Company"
                                    placeholder="Enter your last name"
                                    class="form-control"
                                    value={Company}
                                    onChange={(e) => {
                                        this.setState({ Company: e.target.value });
                                    }}
                                />
                            </div>
                            <div class="form-outline mb-4">
                                <label class="form-label " for="loginName" className="ml-3 required">
                                    <text
                                        style={{
                                            fontWeight: "normal",
                                            fontSize: "15px",
                                            marginBottom: "20",
                                        }}
                                    >
                                        RoC
                                    </text>
                                </label>
                                <input
                                    type="email"
                                    id="Company"
                                    name="Company"
                                    placeholder="Enter your RoC no"
                                    class="form-control"
                                    value={RoC}
                                    onChange={(e) => {
                                        this.setState({ RoC: e.target.value });
                                    }}
                                />
                            </div>

                            <div class="form-outline mb-4 ">
                                <label class="form-label " for="form1Example2" className="ml-3 required">
                                    <text
                                        style={{
                                            fontWeight: "normal",
                                            fontSize: "15px",
                                            marginBottom: "20",
                                        }}
                                    >
                                        Status
                                    </text>
                                </label>
                                <input
                                    type="text"
                                    id="Status"
                                    name="password"
                                    placeholder="Enter your password"
                                    class="form-control"
                                    value={Status}
                                    onChange={(e) => {
                                        this.setState({ Status: e.target.value });
                                    }}
                                />
                            </div>
                        </form>
                    </div>




                    <div
                        className="col-md-10 col-sm-10"
                        style={{
                            background: "#ffffff",
                            paddingTop: "1px",
                            paddingBottom: "3px",
                            marginBottom: "10px",
                        }}
                    >
                        <button type="button" class="btn btn-success" onClick={this.handleSubmit}>Add company details</button>

                        {/* <button class="btn btn-primary btn-lg" onClick={this.handleSubmit}>

                            <text style={{ color: "white", textAlign: "center" }}>
                                {<Navigate to="/" />}Continue


                            </text>
                        </button> */}
                    </div>
                </div>
            </div>

        );
    }
}
export default Companydetail;

