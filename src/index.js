import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './sass/style.scss';
import './i18n';
import Loaded from './components/Projects/Details/Loaded';

ReactDOM.render(
  <Suspense fallback={(<Loaded/>)}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.querySelector('.app')
);
