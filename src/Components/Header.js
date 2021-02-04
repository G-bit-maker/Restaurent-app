import React from "react";
import { Row, Col } from "react-bootstrap";
import Cards from "./Cards";
import qs from "qs";
import Axios from "axios";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Action from "../Action/Action";
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap"

class HeaderComponent extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const key = { latitude: 13.0358481, longitude: 80.244455 };
    let data = qs.stringify(key);
    Axios.post(
      "https://eatoo.uberdoo.com/foodapp/public/api/guest/listRestaurant",
      data
    )
      .then((response) => {
        this.props.getDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Col lg={12} md={12} sm={12} xs={12}>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <Cards data={this.props.listRestaurants} />
        </Col>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { getDetails } = state;
  return {
    listRestaurants: state && state.item ? state.item : "",
  };
};

export default connect(mapStateToProps, Action)(HeaderComponent);
