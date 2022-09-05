import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS } from "./action.type"

const initialstate= {
    data:[],
    isLoading:false,
    isError:false
}

export const reducer=(state=initialstate,{type,payload})=>{

    switch(type){

        case DATA_REQUEST:{
            return {...state,isLoading:true,isError:false }
        }
        case DATA_SUCCESS:{
            return {...state,isLoading:false,isError:false,data:payload }
        }
        case DATA_FAILURE:{
            return {...state,isLoading:false,isError:true }
        }
        default:
            return state
    }
}