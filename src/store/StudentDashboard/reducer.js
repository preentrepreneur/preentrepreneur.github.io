const initialState = {
    isLoading : true,
    
}


const reducer = ( state = initialState , action ) => {
    switch(action.type) {
        case CONSTANTS.SET_USER_TYPE: return setUserType(state,action);
        case CONSTANTS.SET_USER: return setUser(state,action);
        default : return state;
    }
}

export default reducer;