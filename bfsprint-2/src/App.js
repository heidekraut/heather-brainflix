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
      </Switch>
{/* 
          <div className="App">
            <Main/>
            <UploadVideo />
          </div> */}

    </BrowserRouter>
  );
}

export default App;
