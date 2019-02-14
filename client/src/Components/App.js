import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from "./Header";
import history from '../history';
// client ID 1076269577495-4o46jr59av652eq1dh6j3s8nppl6gpb4.apps.googleusercontent.com

// client secret EuYRg6ZWzXBSizxKNWwAgx8A
const App = () => {
    return (
        <div className='ui container'>
            <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                    <Route path='/' exact component={StreamList}/>
                    <Route path='/streams/new' exact component={StreamCreate}/>
                    <Route path='/streams/edit/:id' exact component={StreamEdit}/>
                    <Route path='/streams/delete/:id' exact component={StreamDelete}/>
                    <Route path='/streams/:id' exact component={StreamShow}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;