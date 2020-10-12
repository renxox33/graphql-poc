import React from 'react';
import './App.css';
import { Route } from 'react-router-dom' 

import Header from './components/header/Header'
import CreatePost from './components/create-post/CreatePost'

function App() {
  return (
    <div>
      <Header />
      <Route exact path='/create' component={ CreatePost } />
    </div>
     
  );
}

export default App;
