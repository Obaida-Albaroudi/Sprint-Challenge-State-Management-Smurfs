import React, {useState} from "react";
import {connect} from "react-redux";
import {pushData} from "../actions"


const Form = (props) =>{
    const [state, setState] = useState({
        name: "",
        age: "",
        height: "",
        id: ""
    })

    let handleChanges = e => {
        setState({...state,
            [e.target.name]: e.target.value
        });
    };

    let addMember = e => {
        e.preventDefault();
        console.log(state)
        props.pushData(state);
        setState({         
        name: "",
        age: "",
        height: "",
        id: ""
      })
    };

    return(
        <form>
            <label>Name</label><input type ="text" name="name"value={state.name} onChange={handleChanges} placeholder="Smurf Name"/>
            <label>Age</label><input type ="text" name="age" value={state.age} onChange={handleChanges} placeholder="Smurf Age"/>
            <label>Height</label><input type ="text" name="height" value={state.height} onChange={handleChanges} placeholder="Smurf Height"/>
            <button onClick={addMember}>Add Smurf</button>
        </form>
    )
}

const mapStateToProps = state =>{
    console.log("state", state)
    return {
        For: state.smurf
    }
}

export default connect(mapStateToProps, {pushData})(Form);