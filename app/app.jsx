var React = require('react')
var ReactDOM = require('react-dom')
var {Route, Router, IndexRoute, hashHistory} = require('react-router')
var Main = require('Main')
var Login = require('Login')
var About = require('About')




// // Load foundation
// require('style!css!foundation-sites/dist/foundation.min.css')
// $(document).foundation()

//App css
require('style!css!applicationStyles')

let rootNode = document.getElementById('app')
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Login}/>
      <Route path="about" component={About} />
    </Route>
  </Router>, rootNode)
