import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import moment from 'moment';
import { Holidays } from './utils/Config';

moment.updateLocale('pl', {
  holidays: Holidays.map(o => o.date),
  holidaysFormat: 'DD-MM-YYYY'
});
moment.locale('pl-PL');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
