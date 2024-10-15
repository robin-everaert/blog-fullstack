import React, { useState } from 'react';
import NewPost from './components/NewPost';
import Thread from './components/Thread';

const App = () => {
    const [userId, setUserId] = useState('');

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
                <NewPost userId={ userId } />
            </div>
        </div>

        <div className="row">
            <div className="col-12">
                <Thread userId={ userId } />
            </div>
        </div>
    </div>
  );
};

export default App;