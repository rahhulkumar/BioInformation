const initialState = {      //user variable storing user Bio Information
    user: {}
}

const reducer = (state = initialState, action)=> {      //reducer function 
    switch(action.type){
        case 'setData':
            return {user: action.payload}
        
        default :
            return state
    }
}

export default reducer