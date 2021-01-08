import { ADD_BOOK, DELETE_BOOK, GET_LIBRARY, SAVE_LIBRARY } from '../actions/LibraryActions';


const initialState = {
    books: []
}

export const libraryReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_BOOK: 
        console.log(state.books, action.payload);
        return {
            ...state,
            books: [...state.books, action.payload]
        }
        case DELETE_BOOK:
            const updatedBooks = state.books.filter(book => book.id !== action.payload);
            return {
                ...state,
                books: updatedBooks
            }
        case SAVE_LIBRARY:
            localStorage.setItem('library', JSON.stringify(action.payload));
            return {
                ...state,
                books: []
            }
        case GET_LIBRARY:
            let library = JSON.parse(localStorage.getItem('library'));
            if (library === null){
                library = []
            }
            return {
                ...state,
                books: library
            }
        default: return state
    }
}