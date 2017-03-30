// index prepares for state and everything; let routing in Router
import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router';

// Routings
import routes from 'routes';

// Custom CSS
import 'styles/styles.sass';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
