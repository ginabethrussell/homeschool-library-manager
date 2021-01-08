import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutUser } from '../redux/actions/UserActions';
import { saveLibrary, getLibrary, addBook, deleteBook } from '../redux/actions/LibraryActions';

import { useForm } from '../hooks/useForm';

import './UserLibrary.css';

const initialValues = {
    title: '',
    author: '',
    description: '',
    level: '',
    id: ''
}

function UserLibrary({userId, bookList, logOutUser, addBook,  deleteBook, saveLibrary, getLibrary }) {
    const history = useHistory();
    const [ formValues, handleChange, clearForm ] = useForm(initialValues);

    useEffect(() => {
        if (userId != ''){
            getLibrary(userId);
        }
        console.log(bookList);
    }, [userId])

    const submitForm = (e) => {
        e.preventDefault();
        const newBook = formValues;
        newBook.id = Date.now()
        addBook(newBook);
        clearForm();
    }

    const handleLogOut = () => {
        saveLibrary(bookList);
        logOutUser();
    }

    return (
        <div className='library-wrapper'>
            { userId && (
                <>
                    <div className='library-header'>
                    <h2>User #{userId} Library</h2>
                    <div className='search-field'>
                        <label htmlFor='searchTerm'>Search</label>
                        <input id='searchTerm'
                            name='searchTerm'
                            type='text'
                            placeholder='search your books'
                            />
                    </div>
                    <button onClick={() => {
                        handleLogOut();
                        history.push('/');
                    }}>Log Out</button>
                    </div>
                    <div className='addbook-form-wrapper'> 
                        <form className='addbook-form'>
                            <h3>Add a Book to Your Library</h3>
                            <div className='formfield'>
                                <label htmlFor='title'>Title</label><br />
                                <input id='title'
                                    name='title'
                                    type='text'
                                    placeholder='title'
                                    required
                                    value={formValues.title}
                                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className='formfield'>
                                <label htmlFor='author'>Author</label><br />
                                <input id='author'
                                    name='author'
                                    type='text'
                                    placeholder='author'
                                    required
                                    value={formValues.author}
                                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className='formfield'>
                                <label htmlFor='description'>Description</label><br />
                                <textarea id='description'
                                    name='description'
                                    placeholder='include an optional description'
                                    required
                                    value={formValues.description}
                                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                                />
                            </div>
                            <div className='formfield'>
                                <label htmlFor='level'>Level</label><br />
                                <select id='level'
                                    name='level'
                                    required
                                    value={formValues.level}
                                    onChange={(e) => handleChange(e.target.name, e.target.value)}>
                                    <option name='level' value=''>-- select a level --</option>
                                    <option name='level' value='infant-toddler'>Infant - Toddler</option>
                                    <option name='level' value='prek-2'>Pre-K - 2nd</option>
                                    <option name='level' value='3-5'>3rd - 5th</option>
                                    <option name='level' value='6-8'>6th - 8th</option>
                                    <option name='level' value='9-12'>9th - 12th</option>
                                    <option name='level' value='adult'>Adult</option>
                                </select>
                            </div>
                            <button onClick={submitForm} type='submit'>Add</button>
                        </form>
                    </div>
                    <div className='bookList'>
                        <div className='booklist-header'>
                            { bookList.length > 0? <h3>Book List</h3>: null }
                        </div>
                        { bookList.length > 0  && bookList.map( book => (
                            <div className='book' key={book.id}>
                                <p>{book.title}</p>
                                <p>{book.author}</p>
                                <p>{book.description}</p>
                                <p>{book.level}</p>
                                <button onClick={() => {
                                    console.log('deleting book', book.id)
                                    deleteBook(book.id);
                                }}className='delete'>Delete</button>
                                {/* <button>Edit</button> */}
                            </div>
                            )
                        )}
                    </div>
                </>
                )
            }
        </div>   
    )
}
const mapStateToProps = (state) => {
    return {
        userId: state.login.id,
        bookList: state.library.books
    }
}

const mapDispatchToProps = {logOutUser, getLibrary, saveLibrary, addBook, deleteBook}
export default connect(mapStateToProps, mapDispatchToProps)(UserLibrary);
