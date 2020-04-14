import React , {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/ContainerReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter , Route, Switch} from 'react-router-dom';
import routes from './config/Routes';

import ContentLoader from 'react-content-loader'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/general.scss'

import 'pace-js';
import 'pace-js/themes/yellow/pace-theme-minimal.css';

const AppLayout =  React.lazy(()=>import('./display/layouts/AppLayout'))
const loading = () => {
    return(
        <div className="lds-ring mt-2"><div></div><div></div><div></div><div></div></div>
    )
}
const MyLoader = () => (
    <div className="row">
        <div className="col-md-2 col-sm-2 py-4">
            <div className="px-3 mb-5">
                <ContentLoader type="facebook">
                    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
                    <rect x="100" y="17" rx="4" ry="4" width="300" height="40" />
                </ContentLoader>
            </div>
            <div className="px-3">
                 <ContentLoader type="facebook"> <rect x="0" y="0" rx="4" ry="4" width="100%" height="70" /></ContentLoader>
                 <ContentLoader type="facebook"> <rect x="0" y="0" rx="4" ry="4" width="100%" height="70" /></ContentLoader>
                 <ContentLoader type="facebook"> <rect x="0" y="0" rx="4" ry="4" width="100%" height="70" /></ContentLoader>
                 <ContentLoader type="facebook"> <rect x="0" y="0" rx="4" ry="4" width="100%" height="70" /></ContentLoader>
                 <ContentLoader type="facebook"> <rect x="0" y="0" rx="4" ry="4" width="100%" height="70" /></ContentLoader>
            </div>
        </div>
        <div className="col-md-10 col-sm-10 py-4" style={{backgroundColor:'#fafbfd',paddingLeft:30,paddingRight:30,height:'100vh'}}>
            <div className="row">
                <div className="col-md-5 col-sm-5">
                    <ContentLoader type="facebook"> <rect x="0" y="3" rx="1" ry="1" width="150" height="25" /></ContentLoader>
                </div>
                <div className="col-md-7 col-sm-7">
                    <div className="row">
                        <div className="col-md-8 col-sm-8">
                            <ContentLoader type="facebook"> <rect x="0" y="1" rx="1" ry="1" width="90%" height="27" /></ContentLoader>
                        </div>
                        <div className="col-md-4 col-sm-4" style={{paddingRight:30}}>
                            <ContentLoader type="facebook"> <rect x="0" y="1" rx="1" ry="1" width="100%" height="65" /></ContentLoader>
                        </div>
                    </div>
                </div>
            </div>
            
           
        </div>
    </div>
    
)

ReactDOM.render(
    <Provider store={configureStore()}>
        <BrowserRouter>
            <Switch>
                <Suspense fallback={loading()}>
                    {routes.map((route, idx) => {
                    return route.component ? (
                        <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props => (
                                (route.mustLogged ? 
                                    <Suspense fallback={MyLoader()}>
                                        <AppLayout 
                                        backButton={route.backButton}
                                        backUrl={route.backUrl}
                                        title={route.title}
                                        path={route.path}
                                        viewLogged={route.component}
                                        disableMenu={route.disableMenu}
                                        {...props} />
                                    </Suspense>
                                    
                                :
                                <route.component {...props} />)
                        )} />
                    ) : (null);
                    })}
                </Suspense>
            </Switch>
        </BrowserRouter>,
     </Provider>,
 document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
