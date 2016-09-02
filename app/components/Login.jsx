var React = require('react')
var cofoundersApi = require('cofoundersApi')
var serialize = require('form-serialize')


class Login extends React.Component {

  onLogIn (e) {
    e.preventDefault()
    var logInform = document.querySelector('#logInForm')
    var loginData = serialize(logInForm)
    console.log(loginData)
    cofoundersApi.signin(loginData)
  }
  render () {
    return (
      <div>
        <p><br/></p>
<div className="mui-container">
    <div className="mui-panel">
<form id="logInForm" onSubmit={this.onLogIn.bind(this)}>
<legend>Login</legend>
<div className="mui-textfield">
  <input id="user-email" type="text" name="email" required/>
  <label>Email</label>
</div>
<div className="mui-textfield">
  <input type="password" name="password" required/>
  <label>Password</label>
</div>
<button type="submit" className="mui-btn mui-btn--raised mui-btn--primary">Login</button>
</form>
</div>
  </div>
</div>

    )
  }
}

module.exports = Login
