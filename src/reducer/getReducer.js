import _ from "loadsh"
const initialState = {
    data:[],
    datas:[],
    total: 0
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "GET_DATA":
        return { ...state, data:payload }
            
    case "LIST_DATA":
        return { ...state, data:payload }
        
    case "PAGE_DATA":

    return { 
        ...state,
        total:payload.data.result.count,
        datas:payload.data.result.list 
    }   

    default:
        return state
    }
}
