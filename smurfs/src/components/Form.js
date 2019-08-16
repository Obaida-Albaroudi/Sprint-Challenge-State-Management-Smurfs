import React, {useState} from "react";
import {connect} from "react-redux";
import {pushData} from "../actions"


const Form = (props) =>{
    const [state, setState] = useState({
        newName: "",
        newAge: "",
        newHeight: "",
        newId: ""
    })

    let handleChanges = e => {
        setState({ 
            newName: e.target.value,
            newAge: e.target.value,
            newHeight: e.target.value,
            newId: Date.now()
        });
    };

    let addMember = e => {
        e.preventDefault();
        props.pushData(state);
        setState({         
        newName: "",
        newAge: "",
        newHeight: "",
        newId: ""});
      };

    return(
        <Form>
            <label>Name</label><input type ="text" value={state.newName} onChange={handleChanges} placeholder="Smurf Name"/>
            <label>Age</label><input type ="text" value={state.newAge} onChange={handleChanges} placeholder="Smurf Name"/>
            <label>Height</label><input type ="text" value={state.newHeight} onChange={handleChanges} placeholder="Smurf Name"/>
            <button onClick={addMember}>Add Smurf</button>
        </Form>
    )
}

const mapStateToProps = state =>{
    return {
        Form: state
    }
}

export default connect(mapStateToProps, {pushData})(Form);