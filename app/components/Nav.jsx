var React = require('react')
var {Link, IndexLink} = require('react-router')
var {browserHistory} = require('react-router')
import RaisedButton from 'material-ui/RaisedButton'
import {Tabs, Tab} from 'material-ui/Tabs'
import Slider from 'material-ui/Slider'


class Nav extends React.Component {
  constructor () {
    super()
    this.state = {
      login: 'LOGIN',
      signup: 'SIGNUP',
      display: 'none'

    }
  }

  componentWillMount () {
    if(window.localStorage.getItem('auth_token')) {
      this.setState({
        login: '',
        signup: '',
        display: 'block'
      })
    }
  }
  componentWillReceiveProps () {
    if(window.localStorage.getItem('auth_token')) {
      this.setState({
        login: '',
        signup: '',
        display: 'block'
      })
    }
  }
  onLogout (e) {
    e.preventDefault()
    window.localStorage.removeItem('email')
    window.localStorage.removeItem('auth_token')
    window.localStorage.removeItem('name')
    window.localStorage.removeItem('username')

    this.setState({
      login: 'LOGIN',
      signup: 'SIGNUP',
      display: 'none'
    })
    browserHistory.push('/')

  }
  render () {

    return (
      <nav id="navBar" className="navbar navbar-default navbar-custom">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand navbar-font" id="logo" href="/">T E A M O</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

      <ul className="nav navbar-nav navbar-right">
        <li><Link className="navbar-font nav-element" to="/login">{this.state.login}</Link></li>
        <li><Link className="navbar-font nav-element" to="/signup">{this.state.signup}</Link></li>
        <li style={{display: this.state.display}}><Link id="nav-profile" to="/user"><img className="img-responsive" src={window.localStorage.profileImg} height="30" width="30" /></Link></li>
        <li style={{display: this.state.display}}><Link className="navbar-font nav-element" to="/user">{window.localStorage.name}</Link></li>
        <li onClick={this.onLogout.bind(this)} style={{display: this.state.display}}><Link className="navbar-font nav-element" to="#">LOGOUT</Link></li>
      </ul>
    </div>
  </div>
</nav>
    )
  }
}

module.exports = Nav
