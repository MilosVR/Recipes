import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer/rootReducer'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import ReduxToastr from 'react-redux-toastr'
import thunk from 'redux-thunk'


const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
<div>
<ReduxToastr transitionIn="fadeIn" transitionOut="fadeOut" position='bottom-right'/>
<App />
</div>
</Provider>    
, document.getElementById('root'));

serviceWorker.register();
