import React, { useEffect, useState } from 'react';
import NewPost from './components/NewPost';
import Thread from './components/Thread';
import { useDispatch } from 'react-redux';
import { getUser } from './feature/user.slice';

const App = () => {
    const [userId, setUserId] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(userId))
    }, [userId])

   return (
    <div id="app-container" className='container'>
        <div className="row">
            <div className="col-12">
                <div className="login">
                    <h2>Hello</h2>
                    <input type="text" placeholder='Your nickname' 
                    onChange={ e => setUserId(e.target.value) }
                    />
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-12">
                <NewPost />
            </div>
        </div>

        <div className="row">
            <div className="col-12">
                <Thread />
            </div>
        </div>
    </div>
  );
};

export default App;