import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutUser } from '../redux/actions/UserActions';

function UserLibrary({user, logOutUser}) {
    const history = useHistory();

    useEffect(() => {
        console.log(user)
    }, [user])
    return (
        <div>
            { user.loggedIn && (
                <div>
                    <p>Welcome, {user.username}!</p>
                    <p>Let's Build Your Library</p>
                    <button onClick={() => {
                        logOutUser();
                        history.push('/');
                    }}>Log Out</button>
                </div>
            )
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.signup
    }
}

const mapDispatchToProps = {logOutUser}
export default connect(mapStateToProps, mapDispatchToProps)(UserLibrary);
