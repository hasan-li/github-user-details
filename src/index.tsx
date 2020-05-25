import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store/store';

import Application from './containers/Application';

import * as styles from './styles';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className={styles.App}>
        <Application />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

if (module.hot !== undefined) {
  module.hot.accept();
}
