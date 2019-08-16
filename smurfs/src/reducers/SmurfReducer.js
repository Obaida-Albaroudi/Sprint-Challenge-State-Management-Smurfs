import {
    Start,
    Success,
    Push,
    Failed
} from "../actions";

const initialState = {
    smurf: [],
    isLoading: false,
    error: ''
};

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case Start:
            return{
                ...state,
                isLoading: true,
                error: ''
            }
        case Success:
            return{
                ...state,
                isLoading: false,
                smurf: action.payload,
                error: ''
            };
        case Failed:
            return{
                ...state,
                isLoading: false,
                error: "There is an error"
            }
        case Push:
            return{
                ...state,
                isLoading: false,
                smurf: [...state.smurf, action.payload],
                error:''
            }
        default:
            return state;
    }
}
