import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './sass/style.scss';
import './i18n';

ReactDOM.render(
  <Suspense fallback={(<div>Loading</div>)}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.querySelector('.app')
);
