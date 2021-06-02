import React, { Fragment, useEffect } from 'react';
import Profile from './components/Profile';
import Projects from './components/Projects';

function App() {
  useEffect(() => {
    window.location.replace('https://github.com/devlima/')
  },[]}
  return (
    <Fragment>
      // <Profile />
      // <Projects />
    </Fragment>
  );
}

export default App;
