import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ReadableText } from "./styled-components/ReadableText";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { Card } from 'reactstrap';
import { CardBody } from 'reactstrap';
import { CardTitle } from 'reactstrap';
import { CardSubtitle } from 'reactstrap';
import { CardText } from 'reactstrap';
import { Button } from 'reactstrap';
import { Navbar } from 'reactstrap';
import { NavbarBrand } from 'reactstrap';
import { NavbarToggler } from 'reactstrap';
import { Collapse } from 'reactstrap';
import { Nav } from 'reactstrap';
import { NavItem } from 'reactstrap';
import { NavLink } from 'reactstrap';
import { NavbarText } from 'reactstrap';

export default class Objects extends Component {
  render() {
    if (!this.props.data) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="card">
        {/* Title */}
        <h1>{this.props.data[0].title}</h1>
        {/* Youtube Video */}
        {this.props.data[0].url.includes("image") ? (
          <Tooltip title="Click on image to view the image in HD">
            <img
              src={this.props.data[0].url}
              alt="Space Img"
              onClick={() => window.open(this.props.data[0].hdurl, "_blank")}
            />
          </Tooltip>
        ) : (
          // Embeded Youtube Video
          <iframe
            title="video"
            src={this.props.data[0].url}
            width="560"
            height="315"
            frameBorder="0"
            allowFullScreen
            align="middle"
          />
        )}

        {/* Description */}
        <ReadableText>{this.props.data[0].explanation}</ReadableText>
        {/* <Placeholder dates={this.state.startDate} /> */}
        <div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      Starboy
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="https://chriskelley.io">
            My Website
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/Chriskelley55">
            My GitHub
          </NavLink>
        </NavItem>
        </Nav>
      <NavbarText>
      “Somewhere, something incredible is waiting to be known.”
― Carl Sagan
      </NavbarText>
    </Collapse>
  </Navbar>
</div>

<div>
  <Card
  >
    <CardBody>
      <CardTitle tag="h5">
        Galaxy
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Black Matter
      </CardSubtitle>
      <CardText>
      Are you an astronaut, because you’re out of this world.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
</div>
      </div>
    );
  }
}
