import React from 'react';
import './App.css';
import Main from './Components/Main/main';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import UploadVideo from './Components/UploadVideo/UploadVideo';

function App() {
  return (
    <BrowserRouter>

      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/uploadvideo" component={UploadVideo} />
        <Route path="/videos/:id" component={Main} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
