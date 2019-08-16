import React from "react";
import {connect} from "react-redux";

import {grabData} from "../actions"

import Smurf from "./smurf.js";

const SmurfList = (props) =>{
    return (
        <>
        <h1>Smurfs</h1>
        {props.list.smurf && props.list.smurf.map(info => <Smurf smurf={info} key={info.id}/>)}
        <button onClick={props.grabData}>
        Show us the Smurfs
        </button>
        </>
    )
}

const mapStateToProps = state =>{
    return {
        list: state
    }
}

export default connect(mapStateToProps, {grabData})(SmurfList);