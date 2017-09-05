import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Switch } from 'react-router';
import createHashHistory from 'history/createHashHistory';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ResponsiveProvider from './ResponsiveProvider';
import Layout from './Layout';
import routes from  './routes';


import { TalmudBook, TalmudContent, TalmudDaf } from './p/Talmud/';

import { MishnaDetail } from'./p/Mishna/';
import { ShulchanAruchDetail } from'./p/ShulchanAruch/';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const history = createHashHistory();

ReactDOM.render(
  <Router history={history}>

    <MuiThemeProvider>
      <ResponsiveProvider>
        <Layout>
          <Switch>
            {
              routes.map(({ path, component }) => (
                <Route key={path} path={path} exact component={component}/>
              ))
            }

            <Route path="/mishna/:detail" exact component={MishnaDetail}/>
            <Route path="/shulchanAruch/:detail" exact component={ShulchanAruchDetail}/>
            
            <Route path="/talmud/:book" exact component={TalmudBook}/>
            <Route path="/talmud/:book/:content" exact component={TalmudContent}/>
            <Route path="/talmud/:book/:content/:daf" exact component={TalmudDaf}/>
            
          </Switch>
        </Layout>
      </ResponsiveProvider>
    </MuiThemeProvider>

  </Router>, document.getElementById('root'));
  registerServiceWorker();
