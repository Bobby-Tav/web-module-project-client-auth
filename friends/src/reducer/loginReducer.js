import { LOGGING_IN } from "../action/loginAction";
export const initialState = {
    credentials:{
        userName:'',
        password:'',
    },
    isLoading:false
}

const loginReducer = (state=initialState, action) =>{
    switch(action.type){
        case LOGGING_IN:
            return{
                ...state,
                credentials: action.payload,
                isLoading:true
            }
        default:
            return state;
    }
}
export default loginReducer;