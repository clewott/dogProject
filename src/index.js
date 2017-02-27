import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

const mountNode = document.getElementById("root");

let router = (
  <Router
    history={browserHistory}
    routes={routes}
  />
);
render(router, mountNode);