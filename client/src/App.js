import React from 'react';
import {Typography, AppBar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';
import './App.css';

const useStyles = makeStyles((theme)=>{

});

function App() {
  return (
    <div>
      <AppBar position="static" color="blue">
        <Typography variant="h2" align="center"> Video Chat App</Typography>
      </AppBar>
      <VideoPlayer/>
      <Options>
        <Notifications/>
      </Options>
    </div>
  );
}

export default App;
