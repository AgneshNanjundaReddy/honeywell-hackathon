import React, {Component} from 'react';

import App from './App';
import Admin from './Admin';
import { Route, BrowserRouter } from 'react-router-dom';

class Router extends Component {
    render() {
      return (
          
        <BrowserRouter>
            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/admin" component={Admin} />
            </div>
        </BrowserRouter>
      );
    }
}

export default Router;