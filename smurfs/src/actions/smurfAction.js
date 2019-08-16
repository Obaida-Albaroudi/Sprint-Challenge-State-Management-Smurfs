
import axios from "axios";

export const Start= "Start";
export const Success="Success";
export const Push="Push";
export const Failed="Failed"

export const pushData= (props) =>{
    return dispatch =>{
        dispatch ({type: Start });
        axios.post("http://localhost:3333/smurfs", props)
        .then(res =>{
            console.log("push", res)
            dispatch({type: Push, payload:res.data});
        })
        .catch(err => {
            dispatch({type: Failed, payload: err.response})
        })
    }

}

export const grabData = () =>{
    return dispatch =>{
        dispatch ({type: Start });
        axios.get("http://localhost:3333/smurfs")
        .then(res =>{
            console.log("pull",res.data)
            dispatch({type: Success, payload:res.data});
        })
        .catch(err => {
            dispatch({type: Failed, payload: err.response})
        })
    }
}

