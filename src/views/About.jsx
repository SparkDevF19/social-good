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
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";


class About extends Component {
  // createLegend(json) {
  //   var legend = [];
  //   for (var i = 0; i < json["names"].length; i++) {
  //     var type = "fa fa-circle text-" + json["types"][i];
  //     legend.push(<i className={type} key={i} />);
  //     legend.push(" ");
  //     legend.push(json["names"][i]);
  //   }
  //   return legend;
  // }
  render() {
    return (
      <div className="content">
        <Grid fluid>
        <div class="jumbotron jumbotron-fluid" >
  <div class="container">
    <h1 class="display-4">Purpose of the Outreach Map</h1>
    <p class="lead">In support of the Miami-Dade Counts 2020 collaborative campaign, this website has been created to provide local organizations and nonprofits with information on the progress of outreach efforts across Miami-Dade and for specific hard to count communities.
    </p>
      <footer class="blockquote-footer">Social Good Team, <cite title="Source Title">SparkDev 2019</cite></footer>
  </div>
</div>
        </Grid>
      </div>
    );
  }
}

export default About;
