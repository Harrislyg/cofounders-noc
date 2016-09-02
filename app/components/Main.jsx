var React = require('react')
var ReactDOM = require('react-dom')
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'


const lightMuiTheme = getMuiTheme(lightBaseTheme)
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
var {Route, Link, IndexLink, Router, IndexRoute, browserHistory, hashHistory} = require('react-router')
var Home = require('Home')
var Login = require('Login')
var Signup = require('Signup')
var About = require('About')
var Nav = require('Nav')
var Biz = require('Biz')
var Dev = require('Dev')
var Engineer = require('Engineer')
var Designer = require('Designer')
var Profile = require('Profile')
var User = require('User')
var Edituser = require('Edituser')


injectTapEventPlugin()

require('style!css!applicationStyles')

function authCheck (nextState, replace) {
  if (!window.localStorage.getItem('auth_token')) {
    replace({
      pathname: '/'
    })
  }
}

class Main extends React.Component {

  render () {
    return (
      <MuiThemeProvider muiTheme={lightMuiTheme}>
      <div>
        <div >
          <Nav />
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    </MuiThemeProvider>

    )
  }
}

// module.exports = Main


let rootNode = document.getElementById('app')
var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="login" component={Login}/>
      <Route path="about" component={About} onEnter={authCheck}/>
      <Route path="signup" component={Signup}/>
      <Route path="Hustler" component={Biz}/>
      <Route path="Developer" component={Dev}/>
      <Route path="Engineer" component={Engineer}/>
      <Route path="Designer" component={Designer}/>
      <Route path="profile" component={Profile}/>
      <Route path="user" component={User} onEnter={authCheck}/>
      <Route path="Edituser" component={Edituser} onEnter={authCheck}/>

    </Route>
  </Router>
)

ReactDOM.render(routes, rootNode)
