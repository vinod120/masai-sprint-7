import React from 'react';

import styles from './App.module.css'
import Routes from './Routes/Routes';

function App() {
  return (
    <div className={styles.App} style={{marginTop:40}}>
      <div>
        <Routes />
      </div>
    </div>
  );
}

export default App;
