import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutUser } from '../redux/actions/UserActions';

import './UserLibrary.css';

function UserLibrary({userId, logOutUser}) {
    const history = useHistory();

    useEffect(() => {
        console.log(userId)
    }, [userId])
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
                        logOutUser();
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
                                />
                            </div>
                            <div className='formfield'>
                                <label htmlFor='author'>Author</label><br />
                                <input id='author'
                                    name='author'
                                    type='text'
                                    placeholder='author'
                                    required
                                />
                            </div>
                            <div className='formfield'>
                                <label htmlFor='description'>Description</label><br />
                                <textarea id='description'
                                    name='description'
                                    placeholder='include an optional description'
                                    required
                                />
                            </div>
                            <div className='formfield'>
                                <label htmlFor='gradelevel'>Grade Level</label><br />
                                <select id='gradelevel'
                                    name='gradelevel'
                                    required>
                                    <option name='gradelevel' value='prek-2'>Pre-K - 2</option>
                                    <option name='gradelevel' value='3-5'>3 - 5</option>
                                    <option name='gradelevel' value='6-8'>6 - 8</option>
                                    <option name='gradelevel' value='9-12'>9 - 12</option>
                                </select>
                            </div>
                            <button type='submit'>Add</button>
                        </form>
                    </div>
                </>
            )
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        userId: state.login.id
    }
}

const mapDispatchToProps = {logOutUser}
export default connect(mapStateToProps, mapDispatchToProps)(UserLibrary);
