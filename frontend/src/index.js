/*External or react libraries*/
import React from 'react';
import ReactDOM from 'react-dom';

/* Pages */
import Survey from "./pages/Survey";

/*Others*/
import './assets/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Survey/>
  </React.StrictMode>,
  document.getElementById('root')
);