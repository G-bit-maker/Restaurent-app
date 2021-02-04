import React from "react";
import { Row, Col } from "react-bootstrap";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../Styles/Card.css";
class ExpandCollapse extends React.Component {
  constructor() {
    super();
    this.state = {
      expandcollapse: false,
      restaurantId: "",
      outlet: [],
    };
  }
  render() {
    return (
      <div className="container">
        <Row>
          <h1>header</h1>
        </Row>
      </div>
    );
  }
}
export default ExpandCollapse;
