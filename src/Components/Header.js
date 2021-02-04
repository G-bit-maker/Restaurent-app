import React from "react";
import {Row,Col} from "react-bootstrap";
import Cards from "./Cards";
import qs from "qs"
import Axios from "axios";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as Action from "../Action/Action"

class HeaderComponent extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        const key =  { "latitude":13.0358481, "longitude":80.244455 } 
        let data = qs.stringify(key)
        Axios.post("https://eatoo.uberdoo.com/foodapp/public/api/guest/listRestaurant",data)
        .then((response)=>{
            console.log(response)
            console.log(response.data)
            this.props.getDetails(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
       
    }
    render(){
        console.log(this.props.listRestaurants)
        return(
            <div>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <Cards data = {this.props.listRestaurants}/>
                </Col>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    const { getDetails } = state;
    console.log(state.item)
    return{
        listRestaurants : state && state.item ? state.item : ""
    }
}

export default connect(mapStateToProps,Action) (HeaderComponent);