export const ADD_BOOK = 'ADD_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';
export const EDIT_BOOK = 'EDIT_BOOK';
export const SAVE_LIBRARY = 'SAVE_LIBRARY';
export const GET_LIBRARY = 'GET_LIBRARY';

export const addBook = (book) => {
    return {
        type: ADD_BOOK,
        payload: book
    }
}

export const deleteBook = (id) => {
    return {
        type: DELETE_BOOK,
        payload: id
    }
}

export const saveLibrary = (library) => {
    console.log('saving library')
    return {
        type: SAVE_LIBRARY,
        payload: library
    }
}

export const getLibrary = (id) => {
    console.log('creating GET_LIBRARY action')
    return {
        type: GET_LIBRARY,
        payload: id
    }
}

