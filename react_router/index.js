import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
// import routes and pass them into <Router/>
import routes from './modules/routes'

render(
    <Router routes={routes} history={browserHistory}/>,
    document.getElementById('app')
)
/*
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory,IndexRoute } from 'react-router'
import App from './modules/App'
import Repos from './modules/Repos'
import About from './modules/About'
import Home from './modules/Home'
import Repo from './modules/Repo'

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/repos" component={Repos}>
                {/!* add the new route *!/}
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            <Route path="/about" component={About}/>
        </Route>
    </Router>
), document.getElementById('app'))*/
