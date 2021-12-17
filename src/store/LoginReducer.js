import CONSTANTS from "./constants";

const initialState = {
    userType: null,
    user:null,
} 

const setUserType = (state,action) => {
    return {
        ...state,
        userType : action.payload.userType
    }
}

const setUser = (state,action) => {
    return {
        ...state,
        user : action.payload.user
    }
}

const reducer = ( state = initialState , action ) => {
    switch(action.type) {
        case CONSTANTS.SET_USER_TYPE: return setUserType(state,action);
        case CONSTANTS.SET_USER: return setUser(state,action);
        default : return state;
    }
}

export default reducer;