import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import  configureStore  from 'redux/store';
import App from 'components/App';
import Story from 'components/Story';
import Comment from 'components/Comment';

ReactDOM.render(
   <Provider store={configureStore()}>
        <Router>
            <App>
                <Route path="/" exact component={Story} />
                <Route path="/comment/:id" component={Comment} />
            </App>
        </Router>
   </Provider>,
    document.getElementById('root')
);