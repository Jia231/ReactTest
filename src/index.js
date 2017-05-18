import ReactDom from 'react-dom';
import React from 'react';
import {Router,IndexRoute,hashHistory,Route} from 'react-router';
import Layout from './pages/Layout';
import Movies from './pages/Movies';
import Actors from './pages/Actors';

class App extends React.Component {
   
       render(){
            return(
               <Router history={hashHistory}>
                    <Route path="/" component={Layout}>
                        <IndexRoute component={Movies}></IndexRoute>
                        <Route path="actors" component={Actors}></Route>
                    </Route>
              </Router>
            )
        }
}

const root = document.getElementById('root');

ReactDom.render(<App />,root)


/*
const root = document.getElementById('root');

ReactDom.render(
    <h1>Hello!</h1>,
root)*/