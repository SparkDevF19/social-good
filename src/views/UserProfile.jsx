/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import  Checkbox  from "components/Checkbox/Checkbox.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-0.jpg";

const AUDIENCE = ["College Students", "Farm Workers", "Immigrants",
                 "Non-English Speakers", "Homeless", "Children Under 5",
                 "Elderly", "Other"];

const METHODS = ["Electronic Communications", "Door to Door Canvas", "Phone Canvasing",
                 "Computer Access", "Radio Notices", "Printed Communication", "Events", "Other Methods"]

class UserProfile extends Component {

  state = {
    checkboxes: AUDIENCE.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };

  state2 = {
    checkboxes: METHODS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckbox2 = option => (
    <Checkbox
      label={option}
      isSelected={this.state2.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => AUDIENCE.map(this.createCheckbox);

  createCheckboxes2 = () => METHODS.map(this.createCheckbox);

  render() {
    return (

      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-5"]}
                      properties={[
                        {
                          label: "Organization Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Organization X",                          
                        },
                        {
                          label: "Username",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Username123",                    
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-5", "col-md-5"]}
                      properties={[
                        {
                          label: "Email address",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "johndoe123@email.com"
                        },
                        {
                          label: "Telephone Number",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "123-456-7890",                          
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Organization Address",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Street Address",                          
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "City",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "City",
                        },
                        {
                          label: "Country",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Country",
                        },
                        {
                          label: "Zip Code",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "ZIP Code",
                        }
                      ]}
                    />         
                    

                    <FormInputs
                    ncols={["col-md-4", "col-md-4", "col-md-4"]}
                    properties={[
                      {
                        label: "Facebook Page URL",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "https://www.facebook.com/floridainternational/"
                      },
                      {
                        label: "Instagram Page URL",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "https://www.instagram.com/fiuinstagram/?hl=en"
                      },
                      {
                        label: "Website URL",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "https://miamicensus.org/"
                      }
                    ]}

                    />

                    <Row> 
                      <Col md={6}>

                      <form onSubmit={this.handleFormSubmit}>
                      <label>
                        Targeted Audience
                      </label>
                      {this.createCheckboxes()}

                        <div className="form-group mt-2">
                          <button
                          type="button"
                          className="btn btn-outline-primary mr-2"
                          onClick={this.selectAll}
                          >
                          Select All
                          </button>
                          <button
                          type="button"
                          className="btn btn-outline-primary mr-2"
                          onClick={this.deselectAll}
                          >
                          Deselect All
                          </button>
                      </div>
                    </form>

                    </Col>

                    <Col md={4}>

                    <form onSubmit={this.handleFormSubmit}>
                      <label>
                        Outreach Methods
                      </label>
                      {this.createCheckboxes2()}

                        <div className="form-group mt-2">
                          <button
                          type="button"
                          className="btn btn-outline-primary mr-2"
                          onClick={this.selectAll}
                          >
                          Select All
                          </button>
                          <button
                          type="button"
                          className="btn btn-outline-primary mr-2"
                          onClick={this.deselectAll}
                          >
                          Deselect All
                          </button>
                      </div>
                    </form>

                      </Col>
                    </Row>

                    

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>About Us</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be the description of your organization"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit">
                      Update Profile
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name="Organization Name"
                userName="Username"
                description={
                  <span>Organization Bio</span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" 
                      onClick= "window.location.href= https://www.facebook.com/"/>
                    </Button>
                    <Button simple>
                      <i className="fa fa-instagram" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-globe" />
                    </Button>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>      

    );
  }



}

export default UserProfile;
