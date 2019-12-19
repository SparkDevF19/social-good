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
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray } from "variables/Variables.jsx";
import OrganizationsService from '../services/organizationsService';

class TableList extends Component {
  constructor(props){
    super(props)
    this.state = {
      orgs: []
    }
  }

  async componentDidMount(){
    try {
      let orgs = await OrganizationsService.getOrganizations()
      this.setState({orgs: orgs.data[0]})
    }
    catch(e) {
    }
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Current Organizations"
                category="Miami-Dade County"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.orgs.map((org) => {
                        return (
                          <tr key={org.OrgID}>
                            {Object.values(org).map((orgDetail, key) => {
                              return <td key={key}>{orgDetail}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TableList;
