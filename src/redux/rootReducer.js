const initialState = {
    user: '',
    books: [],
    wishlist: []
}

export const rootReducer = (state=initialState, action) => {
    switch(action.type){
        default: return state
    }
}